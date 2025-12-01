import { z } from 'zod';

/**
 * Contact Form Validation Schema using Zod
 *
 * This schema validates all contact form fields with specific rules:
 * - Name: 2-100 characters
 * - Email: valid email format
 * - Phone: optional, but must match Senegalese format if provided (+221 XX XXX XX XX)
 * - Subject: 3-200 characters
 * - Message: 10-1000 characters
 */

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes'),

  email: z
    .string()
    .min(1, 'L\'email est requis')
    .email('Veuillez entrer une adresse email valide')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères'),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val || val.trim() === '') return true; // Optional field
        // Senegalese phone format: +221 XX XXX XX XX or variations
        const phoneRegex = /^(\+221|221)?\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$/;
        return phoneRegex.test(val.trim());
      },
      {
        message: 'Format de téléphone invalide (ex: +221 77 123 45 67)',
      }
    ),

  subject: z
    .string()
    .min(3, 'Le sujet doit contenir au moins 3 caractères')
    .max(200, 'Le sujet ne peut pas dépasser 200 caractères'),

  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
});

// Export the type inferred from the schema
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Individual field validators for real-time validation
export const validateField = (fieldName: keyof ContactFormData, value: string) => {
  try {
    // Create a partial schema for a single field
    const fieldSchema = contactFormSchema.shape[fieldName];
    fieldSchema.parse(value);
    return { isValid: true, error: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        error: error.errors[0]?.message || 'Erreur de validation',
      };
    }
    return { isValid: false, error: 'Erreur de validation' };
  }
};

/**
 * Phone number formatting utility
 * Formats phone numbers to Senegalese format: +221 XX XXX XX XX
 */
export const formatPhoneNumber = (value: string): string => {
  // Remove all non-digit characters except +
  const cleaned = value.replace(/[^\d+]/g, '');

  // If it starts with +221, format it
  if (cleaned.startsWith('+221')) {
    const digits = cleaned.slice(4); // Remove +221
    const formatted = digits.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    return `+221 ${formatted}`.trim();
  }

  // If it starts with 221 (without +), add the +
  if (cleaned.startsWith('221')) {
    const digits = cleaned.slice(3);
    const formatted = digits.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    return `+221 ${formatted}`.trim();
  }

  // If it's just digits, assume it's a Senegalese number
  if (/^\d+$/.test(cleaned)) {
    const formatted = cleaned.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    return `+221 ${formatted}`.trim();
  }

  // Return as-is if it doesn't match expected patterns
  return value;
};

/**
 * Phone number unformatting utility
 * Removes formatting to get clean digits
 */
export const unformatPhoneNumber = (value: string): string => {
  return value.replace(/\s/g, '');
};

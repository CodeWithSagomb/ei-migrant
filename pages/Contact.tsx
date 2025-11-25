import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Loader2, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { IMAGES } from '../imageConstants';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Check if EmailJS is configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey ||
        serviceId === 'your_service_id' ||
        templateId === 'your_template_id' ||
        publicKey === 'your_public_key') {
      setError('Le formulaire de contact n\'est pas encore configuré. Veuillez contacter l\'administrateur ou utiliser les coordonnées ci-dessus.');
      setLoading(false);
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement par email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-gray-300">
            Une question ? Envie de devenir partenaire ou bénévole ? Écrivez-nous.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-8">Nos Coordonnées</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-4 rounded-full text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Téléphone</h3>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-4 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Email</h3>
                  <p className="text-gray-600">{CONTACT_INFO.email1}</p>
                  <p className="text-gray-600">{CONTACT_INFO.email2}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-4 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Adresse</h3>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner">
               <img
                 src={IMAGES.contact.mapPlaceholder}
                 alt="Carte de Dakar"
                 className="w-full h-full object-cover opacity-60"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                   <MapPin size={16} className="text-red-500" />
                   <span className="font-bold text-sm text-dark">Dakar, Sénégal</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">Envoyez-nous un message</h2>
            
{submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 text-green-800 p-6 rounded-xl text-center"
              >
                <h3 className="font-bold text-xl mb-2">Message Envoyé !</h3>
                <p>Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-green-700 underline font-semibold"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-100 text-red-800 p-4 rounded-lg flex items-start gap-3 mb-6"
                  >
                    <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{error}</p>
                  </motion.div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={loading}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={loading}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Téléphone <span className="text-gray-400 font-normal">(optionnel)</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      disabled={loading}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="+221 XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Sujet</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      disabled={loading}
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Objet de votre message"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={loading}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
                      placeholder="Votre message ici..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-md hover:bg-dark transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Envoyer
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};
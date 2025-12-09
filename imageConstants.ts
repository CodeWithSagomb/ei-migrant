/**
 * Image URLs for the EI-MIGRANT website
 *
 * 🎉 ALL LOCAL IMAGES MODE: 100% original photos!
 * ========================================================================
 * ✅ Local: logo.png
 *           hero/* (hero-background.jpeg)
 *           team/* (founder_portrait.jpeg, team-member-1.jpeg)
 *           missions/* (health, education, gender, employment, plaidoyer)
 *           community/* (community-1.jpeg, community-2.jpeg)
 * 🌐 External: None - All images are now local!
 *
 * RECOMMENDED IMAGE SIZES:
 * - logo: 512x512px (square, transparent background)
 * - hero: 1920x1080px (landscape)
 * - community: 400x500px (portrait)
 * - integration: 800x800px (square)
 * - founder: 400x400px (square)
 * - missions: 800x600px (landscape)
 *
 * OPTIMIZATION TIPS:
 * - Use WebP format for smaller file sizes
 * - Compress images with TinyPNG or Squoosh before uploading
 * - Keep filenames descriptive (e.g., "health-program-dakar.jpg")
 */

// All images are now LOCAL - 100% original photos from EI-MIGRANT
export const IMAGES = {
  // Logo (LOCAL - your organization logo)
  logo: '/images/logo.png',

  // Home page images (LOCAL - using your original photos)
  home: {
    hero: '/images/hero/hero-background.jpeg', // Image de fond hero - Page d'accueil
    community1: '/images/community/community-1.jpeg', // Photo "Soutien" - Section "Agir au plus près"
    community2: '/images/community/community-2.jpeg', // Photo "Communauté" - Section "Agir au plus près"
  },

  // About page images (LOCAL - using your original photos)
  about: {
    integration: '/images/team/team-member-1.jpeg', // Photo pour section "Notre histoire"
    founder: '/images/team/founder_portrait.jpeg', // Photo de la fondatrice
  },

  // Mission page images (LOCAL - using your original photos)
  missions: {
    health: '/images/missions/employment.jpeg', // Photo pour "Protection & accompagnement"
    education: '/images/missions/education.jpeg',
    gender: '/images/missions/gender.jpeg',
    employment: '/images/missions/health.jpeg', // Photo pour "Réintégration socio-économique"
    plaidoyer: '/images/missions/plaidoyer.jpeg', // Photo pour "Plaidoyer & renforcement communautaire"
  },

  // Community images (EXTERNAL - Unsplash placeholder - not used anymore, kept for compatibility)
  community: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=500&fit=crop&q=80',

  // Contact page images (EXTERNAL)
  contact: {
    mapPlaceholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dakar_location_map.svg/800px-Dakar_location_map.svg.png',
  },
};

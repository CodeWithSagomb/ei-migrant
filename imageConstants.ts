/**
 * Image URLs for the EI-MIGRANT website
 * Using Unsplash for high-quality, free-to-use images
 *
 * Note: These are curated images from Unsplash.
 * For production, consider:
 * 1. Downloading and hosting images locally in /public folder
 * 2. Using your own organization's photos
 * 3. Optimizing images for web (WebP format, responsive sizes)
 */

export const IMAGES = {
  // Home Page Images
  home: {
    // Hero section - Community solidarity and support
    hero: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop&q=80',
    // People images - Community and togetherness
    community1: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=500&fit=crop&q=80',
    community2: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=500&fit=crop&q=80',
  },

  // About Page Images
  about: {
    // Integration and inclusion theme
    integration: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=800&fit=crop&q=80',
    // Founder/leader portrait placeholder
    founder: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80&crop=faces',
  },

  // Mission Images
  missions: {
    // Health and well-being - Medical care, healthcare
    health: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
    // Education and youth - Learning, education
    education: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop&q=80',
    // Gender and equity - Women empowerment, equality
    gender: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&q=80',
    // Employment and empowerment - Work, professional development
    employment: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80',
  },

  // Contact Page Images
  contact: {
    // Map of Dakar, Senegal area
    // Using OpenStreetMap static map via Wikimedia
    mapPlaceholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dakar_location_map.svg/800px-Dakar_location_map.svg.png',
  },
};

// Alternative: Local images (if you want to download and host images locally)
// Place images in /public/images/ folder and reference them like this:
// export const IMAGES = {
//   home: {
//     hero: '/images/hero-solidarity.jpg',
//     community1: '/images/community-1.jpg',
//     community2: '/images/community-2.jpg',
//   },
//   ...
// };

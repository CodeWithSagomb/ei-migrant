/**
 * Image URLs for the EI-MIGRANT website
 *
 * HYBRID MODE: Using local images where available, Unsplash for the rest
 * ========================================================================
 * ✅ Local: logo.png, founder-portrait.png
 * 🌐 External: All other images (hero, community, missions, etc.)
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

// Hybrid configuration: Local images where available, external otherwise
export const IMAGES = {
  // Logo (LOCAL - using your uploaded logo)
  logo: '/images/logo.png',

  // Home page images (EXTERNAL - Unsplash placeholders)
  home: {
    hero: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop&q=80',
    community1: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=500&fit=crop&q=80',
    community2: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=500&fit=crop&q=80',
  },

  // About page images (HYBRID)
  about: {
    integration: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=800&fit=crop&q=80',
    founder: '/images/team/founder-portrait.png', // LOCAL - using your uploaded photo
  },

  // Mission page images (EXTERNAL - Unsplash placeholders)
  missions: {
    health: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
    education: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop&q=80',
    gender: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&q=80',
    employment: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80',
  },

  // Community images (EXTERNAL - Unsplash placeholders)
  community: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=500&fit=crop&q=80',

  // Contact page images (EXTERNAL)
  contact: {
    mapPlaceholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dakar_location_map.svg/800px-Dakar_location_map.svg.png',
  },
};

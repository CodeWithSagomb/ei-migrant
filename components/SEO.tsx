import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  structuredData?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = '',
  ogImage = '/images/logo.svg',
  ogType = 'website',
  canonical,
  structuredData,
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, content: string, attribute: string = 'content') => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const attrName = selector.includes('property=') ? 'property' : 'name';
        const attrValue = selector.match(/["']([^"']+)["']/)?.[1];
        if (attrValue) {
          element.setAttribute(attrName, attrValue);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, content);
    };

    // Update basic meta tags
    updateMetaTag('meta[name="description"]', description);
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', keywords);
    }

    // Open Graph meta tags for social media
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:type"]', ogType);
    updateMetaTag('meta[property="og:image"]', window.location.origin + ogImage);
    updateMetaTag('meta[property="og:url"]', window.location.href);
    updateMetaTag('meta[property="og:site_name"]', 'EI-MIGRANT');
    updateMetaTag('meta[property="og:locale"]', 'fr_FR');

    // Twitter Card meta tags
    updateMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', window.location.origin + ogImage);

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical || window.location.href;

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Optionally remove added tags on unmount
      // For SPA, we typically keep them and just update
    };
  }, [title, description, keywords, ogImage, ogType, canonical, structuredData]);

  return null; // This component doesn't render anything
};

// Pre-defined SEO configurations for each page
export const SEO_CONFIG = {
  home: {
    title: 'EI-MIGRANT - Équité et Inclusion pour les Migrants au Sénégal',
    description: 'Organisation à but non lucratif soutenant l\'intégration des migrants vulnérables au Sénégal. Santé, éducation, genre et emploi.',
    keywords: 'migrants, Sénégal, ONG, intégration, équité, inclusion, santé, éducation, emploi, Dakar',
    ogImage: '/images/hero/solidarity-community.jpg',
  },
  about: {
    title: 'À Propos - Notre Histoire | EI-MIGRANT',
    description: 'Découvrez l\'histoire d\'EI-MIGRANT, une organisation fondée pour soutenir les migrants vulnérables au Sénégal à travers des actions concrètes.',
    keywords: 'à propos, histoire, fondateur, mission, valeurs, EI-MIGRANT, migrants Sénégal',
    ogImage: '/images/team/founder-portrait.jpg',
  },
  missions: {
    title: 'Nos Missions - 4 Piliers d\'Action | EI-MIGRANT',
    description: 'Nos 4 piliers d\'intervention : Santé & Bien-être, Éducation & Jeunesse, Genre & Équité, Emploi & Autonomisation pour les migrants au Sénégal.',
    keywords: 'missions, programmes, santé, éducation, genre, emploi, migrants, actions, projets',
    ogImage: '/images/missions/health-wellness-program.jpg',
  },
  news: {
    title: 'Nos Actualités - Événements et Témoignages | EI-MIGRANT',
    description: 'Suivez nos dernières nouvelles, événements et histoires inspirantes de notre communauté. Programmes, partenariats, témoignages et annonces.',
    keywords: 'actualités, nouvelles, événements, témoignages, blog, programmes, partenariats, annonces',
    ogImage: '/images/logo.svg',
  },
  contact: {
    title: 'Contactez-Nous - EI-MIGRANT',
    description: 'Contactez EI-MIGRANT pour devenir partenaire, bénévole ou pour toute question. Email, téléphone et localisation à Dakar, Sénégal.',
    keywords: 'contact, email, téléphone, adresse, Dakar, partenariat, bénévolat, aide',
    ogImage: '/images/logo.svg',
  },
  donation: {
    title: 'Faire un Don - Soutenez Notre Action | EI-MIGRANT',
    description: 'Soutenez les migrants vulnérables au Sénégal. Faites un don ponctuel ou mensuel. Paiement sécurisé par carte, mobile money ou virement.',
    keywords: 'don, donation, soutenir, aide financière, paiement sécurisé, mobile money, carte bancaire',
    ogImage: '/images/logo.svg',
    ogType: 'website',
  },
};

// Organization structured data (use on homepage)
export const ORGANIZATION_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EI-MIGRANT',
  alternateName: 'Équité et Inclusion Migrant',
  url: 'https://www.ei-migrant.org', // Update with your real domain
  logo: 'https://www.ei-migrant.org/images/logo.svg', // Update with your real domain
  description: 'Organisation à but non lucratif soutenant l\'intégration des migrants vulnérables au Sénégal',
  email: 'alangsene@ei-migrant.org',
  telephone: '+221 77 180 72 11',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SN',
    addressRegion: 'Dakar',
    addressLocality: 'Dakar',
  },
  sameAs: [
    // Add your actual social media URLs
    // 'https://www.facebook.com/ei-migrant',
    // 'https://twitter.com/ei_migrant',
    // 'https://www.instagram.com/ei_migrant',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Sénégal',
  },
  foundingDate: '2024', // Update with actual founding year
  nonprofitStatus: 'NonprofitANBI', // Update based on actual legal status
};

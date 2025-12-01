import { MissionData } from './types';
import { IMAGES } from './imageConstants';

export const CONTACT_INFO = {
  email1: "alangsene@ei-migrant.org",
  email2: "alangfmsene@gmail.com",
  phone: "+221 77 180 72 11",
  address: "Sénégal",
};

// Social Media Links
// TODO: Replace with real social media URLs
export const SOCIAL_LINKS = {
  facebook: "", // Example: "https://facebook.com/ei-migrant"
  twitter: "",  // Example: "https://twitter.com/ei_migrant"
  instagram: "", // Example: "https://instagram.com/ei_migrant"
};

export const MISSIONS: MissionData[] = [
  {
    id: "protection",
    title: "Protection & accompagnement des migrants vulnérables",
    description: "Accompagner, informer et protéger les migrants face aux défis de la migration.",
    details: [
      "Sensibilisation sur les dangers de la migration irrégulière",
      "Information sur les alternatives légales",
      "Appui psychosocial aux migrants de retour ou en détresse",
      "Assistance sociale et orientation vers les services",
      "Accompagnement juridique de base (orientation, plaidoyer)"
    ],
    iconName: "shield",
    image: IMAGES.missions.health
  },
  {
    id: "reintegration",
    title: "Réintégration socio-économique des migrants de retour",
    description: "Faciliter la réinsertion durable des migrants de retour dans leur communauté.",
    details: [
      "Formations professionnelles certifiantes",
      "Coaching entrepreneurial",
      "Appui à l'insertion économique",
      "Programmes de micro-entreprises",
      "Renforcement des compétences numériques",
      "Orientation et mentorat"
    ],
    iconName: "refresh",
    image: IMAGES.missions.employment
  },
  {
    id: "jeunesse",
    title: "Autonomisation des jeunes et prévention des migrations irrégulières",
    description: "Offrir aux jeunes des alternatives à la migration irrégulière par le développement personnel et professionnel.",
    details: [
      "Clubs de leadership et développement personnel",
      "Activités sportives + sensibilisation",
      "Mentorat pour jeunes NEET (non scolarisés, non employés)",
      "Ateliers de prise de parole, confiance en soi",
      "Incubation de mini projets pour jeunes",
      "Campagnes communautaires dans les zones à risque"
    ],
    iconName: "sparkles",
    image: IMAGES.missions.education
  },
  {
    id: "genre",
    title: "Genre & migration",
    description: "Protéger et autonomiser les femmes migrantes face aux défis spécifiques liés au genre.",
    details: [
      "Protection des femmes migrantes",
      "Renforcement économique des jeunes femmes",
      "Lutte contre les violences basées sur le genre (VBG) liées à la migration",
      "Appui aux femmes cheffes de ménages migrantes"
    ],
    iconName: "users",
    image: IMAGES.missions.gender
  },
  {
    id: "plaidoyer",
    title: "Plaidoyer & renforcement communautaire",
    description: "Mobiliser les communautés et sensibiliser sur les enjeux de la migration régulière.",
    details: [
      "Sensibilisation communautaire",
      "Renforcement des leaders communautaires",
      "Dialogue avec les autorités locales",
      "Campagnes digitales",
      "Événements publics sur la migration régulière"
    ],
    iconName: "megaphone",
    image: IMAGES.community
  }
];

export const FOUNDER_STORY = `Fondée par une jeune femme qui a elle-même migré du Cameroun vers le Sénégal, EI-MIGRANT est née de son désir de venir en aide à ceux qui, comme elle, ont connu des difficultés lors de leur parcours migratoire. L'organisation se distingue par sa proximité terrain et sa réactivité, souvent là où les grandes organisations internationales peuvent paraître éloignées des réalités quotidiennes.`;

export const NAME_MEANING = {
  E: "L'acte d'émigrer, symbolisant le départ de son pays d'origine vers une nouvelle terre d'accueil.",
  I: "L'acte d'immigrer, représentant l'arrivée dans un nouveau pays et le processus d'intégration."
};
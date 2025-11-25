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
    id: "sante",
    title: "Santé & Bien-être",
    description: "Améliorer l'accès aux soins et la prévention pour les populations vulnérables.",
    details: [
      "Dépistage des maladies (cancer du col de l'utérus, cancer du sein, VIH).",
      "Accent particulier sur la Santé de la Reproduction des Ado-Jeunes (SRAJ).",
      "Lutte pour l'abandon des Mutilations Génitales Féminines (MGF).",
      "Garantie d'un suivi médical adéquat via des partenariats."
    ],
    iconName: "heart",
    image: IMAGES.missions.health
  },
  {
    id: "education",
    title: "Éducation & Jeunesse",
    description: "Informer et sensibiliser pour construire un avenir meilleur.",
    details: [
      "Prévention des grossesses précoces.",
      "Sensibilisation aux risques associés pour les ado-jeunes migrants.",
      "Information sur la contraception et les droits sexuels et reproductifs.",
      "Autonomisation par la prise de décision éclairée."
    ],
    iconName: "book",
    image: IMAGES.missions.education
  },
  {
    id: "genre",
    title: "Genre & Équité",
    description: "Promouvoir l'égalité et lutter contre les violences.",
    details: [
      "Promotion de l'équité et l'égalité entre les genres.",
      "Élimination des Violences Basées sur le Genre (VBG).",
      "Reconnaissance des droits et besoins spécifiques des hommes et des femmes.",
      "Soutien à l'autonomisation des femmes migrantes."
    ],
    iconName: "users",
    image: IMAGES.missions.gender
  },
  {
    id: "emploi",
    title: "Emploi & Autonomisation",
    description: "Faciliter l'intégration économique et sociale.",
    details: [
      "Programmes de formation professionnelle.",
      "Accompagnement à l'entrepreneuriat.",
      "Aide à la recherche d'emploi.",
      "Acquisition de compétences pour l'intégration sur le marché du travail sénégalais."
    ],
    iconName: "briefcase",
    image: IMAGES.missions.employment
  }
];

export const FOUNDER_STORY = `Fondée par une jeune femme qui a elle-même migré du Cameroun vers le Sénégal, EI-MIGRANT est née de son désir de venir en aide à ceux qui, comme elle, ont connu des difficultés lors de leur parcours migratoire. L'organisation se distingue par sa proximité terrain et sa réactivité, souvent là où les grandes organisations internationales peuvent paraître éloignées des réalités quotidiennes.`;

export const NAME_MEANING = {
  E: "L'acte d'émigrer, symbolisant le départ de son pays d'origine vers une nouvelle terre d'accueil.",
  I: "L'acte d'immigrer, représentant l'arrivée dans un nouveau pays et le processus d'intégration."
};
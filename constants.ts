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
    image: IMAGES.missions.plaidoyer
  }
];

// Histoire du père - Les origines de la vision
export const FATHER_STORY = {
  introduction: "EI-Migrant est né d'une histoire intime, profonde et transmise de génération en génération. Bien avant que l'organisation ne voie officiellement le jour en juin 2023, il y avait déjà un chemin.",
  journey: "Celui d'un homme : le père de notre fondatrice, un voyageur inlassable, un homme debout, qui avait traversé la sous-région — du Sénégal au Mali, du Nigeria au Bénin, en passant par le Cameroun, la Mauritanie etc. — à la recherche d'opportunités, de dignité et d'un avenir meilleur.",
  stories: "À chaque retour, il rapportait plus que des souvenirs : il rapportait des récits. Des récits d'espoir, d'entraide, de fatigue, de risques, de rencontres, de solidarité, de dangers, de renouveau. Ce sont ses mots, son courage et les difficultés rencontrées sur les routes migratoires qui ont déposé la première pierre de ce qui deviendrait EI-Migrant.",
  vision: "que personne ne marche seul."
};

// Parcours de la fondatrice
export const FOUNDER_PERSONAL_JOURNEY = {
  transmission: "Cette vision, notre fondatrice l'a héritée. Et elle l'a portée, transformée, concrétisée.",
  experience: "Elle-même a connu les réalités de la migration, ses impacts émotionnels, ses combats silencieux et les défis qui brisent ou forgent un destin. Elle a vu la vulnérabilité, mais aussi la résilience. Elle a compris la nécessité urgente d'un espace où la dignité, l'équité et l'inclusion ne sont pas des slogans, mais des engagements.",
  legacy: "EI-Migrant est né de cette double mémoire : celle d'un père qui a marché, et celle d'une fille qui a vu."
};

// Biographie complète de la fondatrice
export const FOUNDER_BIO = {
  name: "Alang Fatou Mata Sene",
  introduction: "Alang Fatou Mata Sene est une jeune femme sénégalo-camerounaise engagée pour la justice sociale et la dignité humaine. Fondatrice de EI-Migrant (Équité & Inclusion pour les Migrants), elle œuvre pour accompagner et protéger les migrants vulnérables au Sénégal et dans la sous-région.",
  education: "Diplômée en sciences politiques et juridiques, elle a consacré son mémoire à la protection des droits des migrants au Sénégal, un sujet qui fait écho à son histoire personnelle. Inspirée par les récits de son père, voyageur ayant traversé plusieurs pays d'Afrique de l'Ouest, et par ses propres expériences liées à la migration, Alang a choisi de transformer les défis en mission.",
  vision: "Aujourd'hui, elle incarne une voix montante du développement social en Afrique, déterminée, humaine et visionnaire, engagée à créer un monde où personne ne marche seul."
};

// La signification d'EI (Équité & Inclusion)
export const EI_MEANING = {
  equity: {
    title: "Équité",
    description: "parce que chaque personne mérite les mêmes chances, qu'elle soit au départ, en transit, ou à destination."
  },
  inclusion: {
    title: "Inclusion",
    description: "parce qu'aucune intégration n'est réussie quand certains restent à l'écart."
  },
  migrantMeaning: "Le mot Migrant n'est pas un statut. C'est un parcours. C'est un être humain en mouvement, porteur de rêves, de compétences, d'espoirs et de dignité.",
  bridge: "EI-Migrant symbolise donc un pont : le pont entre les réalités de terrain et les solutions humaines, concrètes et durables."
};

// Signification Émigrer / Immigrer
export const NAME_MEANING = {
  E: "L'acte d'émigrer, symbolisant le départ de son pays d'origine vers une nouvelle terre d'accueil.",
  I: "L'acte d'immigrer, représentant l'arrivée dans un nouveau pays et le processus d'intégration."
};

// L'organisation aujourd'hui
export const ORGANIZATION_TODAY = {
  years: "Deux années se sont écoulées depuis la création d'EI-Migrant.",
  reflection: "Deux années de vision, de courage, de construction patiente. Deux années portées par une histoire qui nous dépasse, une histoire transmise par un père voyageur et portée par sa fille devenue actrice du changement.",
  continuation: "EI-Migrant continue aujourd'hui ce que tant d'hommes et de femmes ont commencé sur les routes : se battre, avancer, espérer, et tendre la main.",
  conclusion: "Nous sommes nés d'une histoire. Nous grandissons grâce à celles des autres."
};
/**
 * NEWS DATA - EI-MIGRANT Actualités
 *
 * COMMENT AJOUTER UNE NOUVELLE ACTUALITÉ:
 * ========================================
 * 1. Copiez un objet d'actualité existant ci-dessous
 * 2. Modifiez l'id (increment the number)
 * 3. Changez le titre, date, catégorie, contenu
 * 4. Sauvegardez le fichier - c'est tout!
 *
 * Les actualités s'afficheront automatiquement par ordre de date (plus récent en premier)
 */

export interface NewsArticle {
  id: string;
  title: string;
  date: string; // Format: "YYYY-MM-DD"
  category: 'Programme' | 'Événement' | 'Témoignage' | 'Partenariat' | 'Annonce';
  excerpt: string; // Résumé court (2-3 lignes)
  content: string; // Contenu complet (peut contenir du HTML basique)
  image: string; // URL de l'image
  author: string;
  featured?: boolean; // Mettre true pour afficher en vedette
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '001',
    title: 'Lancement de notre programme de santé communautaire',
    date: '2025-11-20',
    category: 'Programme',
    excerpt: 'EI-MIGRANT lance un nouveau programme de santé offrant des consultations gratuites aux migrants vulnérables dans la région de Dakar.',
    content: `
      <p>Nous sommes ravis d'annoncer le lancement de notre programme de santé communautaire destiné aux migrants vulnérables de la région de Dakar.</p>

      <p>Ce programme comprend:</p>
      <ul>
        <li>Des consultations médicales gratuites chaque semaine</li>
        <li>Un suivi personnalisé pour les cas chroniques</li>
        <li>Des médicaments essentiels fournis gratuitement</li>
        <li>Des sessions de sensibilisation sur la santé préventive</li>
      </ul>

      <p>Les consultations auront lieu tous les mercredis et samedis de 9h à 17h dans notre centre de Plateau.</p>

      <p>Pour bénéficier de ce service, contactez-nous au +221 77 180 72 11 ou par email à alangsene@ei-migrant.org</p>
    `,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
    author: 'Équipe EI-MIGRANT',
    featured: true,
  },
  {
    id: '002',
    title: 'Formation professionnelle: 25 migrants certifiés en couture',
    date: '2025-11-15',
    category: 'Programme',
    excerpt: '25 femmes migrantes ont terminé avec succès notre programme de formation en couture et ont reçu leurs certificats.',
    content: `
      <p>Une cérémonie de remise de certificats s'est tenue ce samedi pour célébrer la fin de notre programme de formation en couture de 6 mois.</p>

      <p>25 femmes migrantes de différents pays ont suivi cette formation intensive qui comprenait:</p>
      <ul>
        <li>Techniques de couture moderne</li>
        <li>Gestion d'une petite entreprise</li>
        <li>Marketing et relation client</li>
        <li>Un kit complet de couture offert à chaque participante</li>
      </ul>

      <p>Plusieurs participantes ont déjà commencé à générer des revenus grâce à leurs nouvelles compétences.</p>

      <p>"Cette formation m'a permis de devenir autonome financièrement et de subvenir aux besoins de ma famille" - Aissatou, participante guinéenne.</p>
    `,
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&h=600&fit=crop&q=80',
    author: 'Équipe Formation',
    featured: false,
  },
  {
    id: '003',
    title: 'Partenariat avec l\'ONG Santé Pour Tous',
    date: '2025-11-10',
    category: 'Partenariat',
    excerpt: 'EI-MIGRANT signe un partenariat stratégique avec l\'ONG Santé Pour Tous pour renforcer l\'accès aux soins de santé.',
    content: `
      <p>Nous sommes heureux d'annoncer notre nouveau partenariat avec l'ONG Santé Pour Tous, une organisation reconnue pour son expertise dans les soins de santé communautaire.</p>

      <p>Ce partenariat permettra de:</p>
      <ul>
        <li>Augmenter le nombre de consultations médicales gratuites</li>
        <li>Former nos équipes aux meilleures pratiques médicales</li>
        <li>Accéder à un réseau de spécialistes pour les cas complexes</li>
        <li>Organiser des campagnes de vaccination et de dépistage</li>
      </ul>

      <p>Cette collaboration marque une étape importante dans notre mission d'améliorer l'accès aux soins pour les migrants vulnérables au Sénégal.</p>
    `,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop&q=80',
    author: 'Direction EI-MIGRANT',
    featured: false,
  },
  {
    id: '004',
    title: 'Témoignage: De réfugié à entrepreneur',
    date: '2025-11-05',
    category: 'Témoignage',
    excerpt: 'L\'histoire inspirante de Mamadou, réfugié malien qui a lancé sa propre entreprise grâce au soutien d\'EI-MIGRANT.',
    content: `
      <p>Mamadou est arrivé au Sénégal en 2023, fuyant le conflit au Mali. Avec le soutien d'EI-MIGRANT, il a participé à notre programme d'emploi et d'autonomisation.</p>

      <p>Aujourd'hui, Mamadou possède sa propre petite entreprise de réparation de téléphones mobiles dans le quartier de Parcelles Assainies à Dakar.</p>

      <blockquote>
        "EI-MIGRANT m'a non seulement formé techniquement, mais m'a aussi aidé à comprendre comment gérer une entreprise, comment trouver des clients, et comment économiser pour investir. Aujourd'hui, j'emploie 2 autres jeunes migrants et j'aide ma famille restée au Mali."
      </blockquote>

      <p>L'histoire de Mamadou illustre parfaitement l'impact de nos programmes sur la vie des migrants.</p>

      <p>Si vous souhaitez soutenir plus d'histoires comme celle-ci, vous pouvez faire un don sur notre site.</p>
    `,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80',
    author: 'Sarah Diop',
    featured: true,
  },
  {
    id: '005',
    title: 'Journée portes ouvertes le 15 décembre 2025',
    date: '2025-10-30',
    category: 'Événement',
    excerpt: 'Venez découvrir nos programmes et rencontrer notre équipe lors de notre journée portes ouvertes annuelle.',
    content: `
      <p>EI-MIGRANT organise sa journée portes ouvertes annuelle le <strong>15 décembre 2025 de 10h à 18h</strong>.</p>

      <p>Au programme:</p>
      <ul>
        <li>Visite de nos locaux et découverte de nos programmes</li>
        <li>Témoignages de bénéficiaires</li>
        <li>Ateliers interactifs (santé, éducation, emploi)</li>
        <li>Rencontre avec notre équipe et nos partenaires</li>
        <li>Opportunités de bénévolat et de partenariat</li>
        <li>Buffet et animations culturelles</li>
      </ul>

      <p><strong>Lieu:</strong> Nos bureaux à Plateau, Dakar (adresse complète envoyée sur confirmation)</p>

      <p><strong>Inscription gratuite mais obligatoire:</strong> Contactez-nous au +221 77 180 72 11 ou par email à alangsene@ei-migrant.org avant le 10 décembre.</p>

      <p>Nous avons hâte de vous accueillir!</p>
    `,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80',
    author: 'Équipe Communication',
    featured: false,
  },
];

// Fonction utilitaire pour obtenir les actualités triées par date (plus récent en premier)
export const getNewsArticles = () => {
  return [...NEWS_ARTICLES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Fonction pour obtenir les actualités en vedette
export const getFeaturedNews = () => {
  return getNewsArticles().filter(article => article.featured);
};

// Fonction pour obtenir les actualités par catégorie
export const getNewsByCategory = (category: NewsArticle['category']) => {
  return getNewsArticles().filter(article => article.category === category);
};

// Fonction pour obtenir une actualité par son ID
export const getNewsById = (id: string) => {
  return NEWS_ARTICLES.find(article => article.id === id);
};

// Fonction pour formater la date en français
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return date.toLocaleDateString('fr-FR', options);
};

// Couleurs par catégorie
export const CATEGORY_COLORS: Record<NewsArticle['category'], string> = {
  'Programme': 'bg-blue-100 text-blue-800',
  'Événement': 'bg-purple-100 text-purple-800',
  'Témoignage': 'bg-green-100 text-green-800',
  'Partenariat': 'bg-orange-100 text-orange-800',
  'Annonce': 'bg-red-100 text-red-800',
};

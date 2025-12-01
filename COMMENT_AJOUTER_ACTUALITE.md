# Comment Ajouter une Nouvelle Actualité

> **Guide Complet** - Mettre à jour la page Actualités d'EI-MIGRANT

---

## 📝 Vue d'Ensemble

La page Actualités vous permet de partager facilement les nouvelles, événements, témoignages et annonces de votre organisation. Ce guide vous montre comment ajouter une nouvelle actualité en **3 étapes simples**.

---

## ✅ Étapes Rapides

### 1️⃣ Ouvrir le Fichier de Données

Ouvrez le fichier: **`/data/newsData.ts`**

### 2️⃣ Copier un Article Existant

Copiez l'un des objets d'article existants dans le tableau `NEWS_ARTICLES`.

### 3️⃣ Modifier et Sauvegarder

Modifiez les informations de votre nouvelle actualité et sauvegardez. C'est tout! ✨

---

## 📖 Guide Détaillé

### Structure d'un Article

Chaque article contient les champs suivants:

```typescript
{
  id: '001',                    // Numéro unique (incrémentez: 001, 002, 003...)
  title: 'Titre de l\'article', // Titre principal (50-100 caractères recommandé)
  date: '2025-11-26',           // Format: AAAA-MM-JJ
  category: 'Programme',        // Catégories disponibles (voir ci-dessous)
  excerpt: 'Résumé court...',   // Description courte (2-3 lignes, max 200 caractères)
  content: `<p>...</p>`,        // Contenu complet (peut contenir du HTML)
  image: 'https://...',         // URL de l'image principale
  author: 'Nom Auteur',         // Nom de l'auteur ou équipe
  featured: false,              // true = affiché en vedette (maximum 2)
}
```

---

### 🏷️ Catégories Disponibles

Utilisez **exactement** l'une de ces catégories:

| Catégorie | Utilisation | Couleur |
|-----------|-------------|---------|
| **Programme** | Lancement de nouveaux programmes, initiatives | 🔵 Bleu |
| **Événement** | Événements, cérémonies, journées portes ouvertes | 🟣 Violet |
| **Témoignage** | Histoires inspirantes, témoignages de bénéficiaires | 🟢 Vert |
| **Partenariat** | Nouveaux partenariats, collaborations | 🟠 Orange |
| **Annonce** | Annonces importantes, communiqués | 🔴 Rouge |

---

### 📸 Images

**Option 1: Images Unsplash (Temporaire)**
```typescript
image: 'https://images.unsplash.com/photo-1234567890?w=800&h=600&fit=crop&q=80'
```

**Option 2: Images Locales (Recommandé)**
1. Placez votre image dans `/public/images/news/`
2. Référencez-la:
```typescript
image: '/images/news/mon-evenement-2025.jpg'
```

**Recommandations:**
- Format: JPG ou WebP
- Dimensions: 800x600px minimum
- Taille: < 500KB (optimisez avec TinyPNG)
- Nom descriptif: `formation-couture-novembre-2025.jpg`

---

### ✍️ Contenu HTML

Le champ `content` accepte du HTML pour un formatage riche:

**Exemple de Contenu:**
```typescript
content: `
  <p>Nous sommes ravis d'annoncer le lancement de notre nouveau programme...</p>

  <p>Ce programme comprend:</p>
  <ul>
    <li>Des consultations médicales gratuites</li>
    <li>Un suivi personnalisé</li>
    <li>Des médicaments essentiels</li>
  </ul>

  <p>Les consultations auront lieu tous les mercredis de 9h à 17h.</p>

  <blockquote>
    "Ce programme a changé ma vie" - Aissatou, bénéficiaire
  </blockquote>

  <p>Pour plus d'informations, contactez-nous au +221 77 180 72 11.</p>
`,
```

**Balises HTML Autorisées:**
- `<p>` - Paragraphes
- `<ul>` / `<ol>` / `<li>` - Listes
- `<strong>` / `<em>` - Texte en gras/italique
- `<blockquote>` - Citations
- `<a href="">` - Liens

---

## 🎯 Exemple Complet

Voici comment ajouter une nouvelle actualité:

### Avant (dans `/data/newsData.ts`):

```typescript
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '001',
    title: 'Lancement de notre programme de santé',
    // ... article existant
  },
  // Ajoutez votre nouvelle actualité ici ⬇️
];
```

### Après:

```typescript
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '006', // ⬅️ Incrémentez l'ID
    title: 'Nouvelle formation en informatique pour 30 migrants',
    date: '2025-12-01', // ⬅️ Date de publication
    category: 'Programme',
    excerpt: 'Lancement d\'un programme de formation en informatique de 3 mois pour 30 migrants avec certification à la clé.',
    content: `
      <p>Nous sommes heureux d'annoncer le lancement de notre nouveau programme de formation en informatique!</p>

      <p>30 migrants vont bénéficier d'une formation intensive de 3 mois comprenant:</p>
      <ul>
        <li>Initiation à la bureautique (Word, Excel, PowerPoint)</li>
        <li>Création de sites web (HTML, CSS, JavaScript)</li>
        <li>Bases de données et gestion de projets</li>
        <li>Stage pratique en entreprise (1 mois)</li>
      </ul>

      <p>À la fin de la formation, chaque participant recevra une certification reconnue et un ordinateur portable.</p>

      <p><strong>Inscriptions ouvertes jusqu'au 15 décembre 2025.</strong></p>

      <p>Pour vous inscrire, appelez le +221 77 180 72 11 ou envoyez un email à alangsene@ei-migrant.org</p>
    `,
    image: '/images/news/formation-informatique-2025.jpg', // ⬅️ Votre image
    author: 'Équipe Formation EI-MIGRANT',
    featured: true, // ⬅️ Afficher en vedette
  },
  {
    id: '001',
    title: 'Lancement de notre programme de santé',
    // ... autres articles existants
  },
];
```

---

## ⭐ Articles en Vedette

Pour mettre un article en vedette (affiché en grand sur la page):

```typescript
featured: true
```

**⚠️ Limite:** Maximum **2 articles en vedette** à la fois.

**Recommandation:**
- Mettez en vedette vos actualités les plus importantes
- Changez régulièrement (mensuel)
- Histoires avec bel impact visuel

---

## 🔄 Ordre d'Affichage

Les articles sont **automatiquement triés par date** (plus récent en premier).

Pas besoin de réorganiser manuellement - mettez simplement la bonne date!

---

## ✅ Checklist Avant Publication

Avant de sauvegarder votre nouvelle actualité:

- [ ] **ID unique** (pas de doublon)
- [ ] **Date au format AAAA-MM-JJ**
- [ ] **Catégorie exacte** (parmi les 5 disponibles)
- [ ] **Titre clair** (50-100 caractères)
- [ ] **Excerpt court** (2-3 lignes, max 200 car.)
- [ ] **Contenu complet** avec HTML valide
- [ ] **Image optimisée** (< 500KB)
- [ ] **Auteur renseigné**
- [ ] **Featured = true/false** (max 2 à la fois)

---

## 🧪 Tester Votre Actualité

Après avoir ajouté votre actualité:

1. **Sauvegardez** le fichier `/data/newsData.ts`
2. **Rafraîchissez** le navigateur (le serveur se recharge automatiquement)
3. **Allez sur** http://localhost:5173/news
4. **Vérifiez:**
   - ✅ L'article apparaît dans la liste
   - ✅ L'image s'affiche correctement
   - ✅ Le contenu est bien formaté
   - ✅ La catégorie et la date sont correctes

---

## 🐛 Résolution de Problèmes

### L'article n'apparaît pas
- Vérifiez que le fichier est bien sauvegardé
- Vérifiez la syntaxe (virgules, guillemets, accolades)
- Consultez la console du navigateur (F12) pour les erreurs

### L'image ne s'affiche pas
- Vérifiez l'URL de l'image
- Pour images locales: vérifiez que le fichier existe dans `/public/images/news/`
- Vérifiez l'extension du fichier (.jpg, .png, .webp)

### Erreur TypeScript
- Vérifiez que la catégorie est exactement l'une des 5 disponibles
- Vérifiez le format de date: `'2025-11-26'` (avec guillemets, format AAAA-MM-JJ)
- Vérifiez que `featured` est soit `true` soit `false` (sans guillemets)

### Le contenu HTML ne s'affiche pas bien
- Vérifiez que toutes les balises sont fermées: `<p>...</p>`
- Utilisez des backticks pour le content: `` content: `<p>...</p>` ``
- Évitez les guillemets simples dans le texte ou échappez-les: `l\'article`

---

## 📚 Exemples d'Actualités

### Exemple 1: Programme

```typescript
{
  id: '007',
  title: 'Programme d\'alphabétisation pour femmes migrantes',
  date: '2025-12-05',
  category: 'Programme',
  excerpt: '40 femmes migrantes vont bénéficier de cours d\'alphabétisation gratuits pendant 6 mois.',
  content: `
    <p>Nous lançons un programme d'alphabétisation spécialement conçu pour les femmes migrantes.</p>
    <p>Les cours auront lieu 3 fois par semaine et incluront également des notions de français pratique pour faciliter l'intégration.</p>
  `,
  image: '/images/news/alphabetisation-femmes.jpg',
  author: 'Équipe Éducation',
  featured: false,
}
```

### Exemple 2: Événement

```typescript
{
  id: '008',
  title: 'Journée Culturelle Inter-Communautés - 20 Décembre',
  date: '2025-11-28',
  category: 'Événement',
  excerpt: 'Grande journée culturelle réunissant migrants et communauté locale. Musique, danse, gastronomie et échanges.',
  content: `
    <p>Rejoignez-nous pour une journée exceptionnelle de partage et de découverte culturelle!</p>
    <p><strong>Quand:</strong> 20 décembre 2025, de 10h à 18h</p>
    <p><strong>Où:</strong> Place de l'Indépendance, Dakar</p>
    <ul>
      <li>Spectacles de danses traditionnelles</li>
      <li>Stands de gastronomie internationale</li>
      <li>Ateliers pour enfants</li>
      <li>Exposition photo sur l'intégration</li>
    </ul>
    <p>Entrée gratuite. Tout le monde est bienvenu!</p>
  `,
  image: '/images/news/journee-culturelle.jpg',
  author: 'Équipe Communication',
  featured: true,
}
```

### Exemple 3: Témoignage

```typescript
{
  id: '009',
  title: 'De la rue à l\'entrepreneuriat: l\'histoire de Mamadou',
  date: '2025-11-25',
  category: 'Témoignage',
  excerpt: 'Mamadou, arrivé au Sénégal sans rien, possède aujourd\'hui sa propre entreprise de mécanique auto.',
  content: `
    <p>Mamadou est arrivé à Dakar il y a 2 ans, fuyant les conflits au Mali.</p>

    <blockquote>
      "Quand je suis arrivé, je ne connaissais personne et je n'avais nulle part où dormir. EI-MIGRANT m'a accueilli, formé et soutenu jusqu'à ce que je puisse voler de mes propres ailes."
    </blockquote>

    <p>Aujourd'hui, Mamadou possède son propre garage de mécanique et emploie 3 jeunes migrants.</p>

    <p>Son histoire est un exemple inspirant de résilience et de la puissance du soutien communautaire.</p>
  `,
  image: '/images/news/temoignage-mamadou.jpg',
  author: 'Sarah Diop, Journaliste',
  featured: true,
}
```

---

## 📞 Besoin d'Aide?

Si vous rencontrez des difficultés:

1. **Consultez les exemples** ci-dessus
2. **Vérifiez la syntaxe** dans `/data/newsData.ts`
3. **Regardez la console** du navigateur (F12) pour les erreurs
4. **Contactez** le développeur ou l'équipe technique

---

## 🎉 C'est Tout!

Vous savez maintenant comment ajouter des actualités à votre site EI-MIGRANT.

**N'oubliez pas:**
- Ajoutez régulièrement des actualités (au moins 1 par mois)
- Variez les catégories (programmes, événements, témoignages...)
- Utilisez des images de qualité
- Racontez des histoires inspirantes
- Mettez à jour le champ `featured` pour mettre en avant vos meilleures actualités

**Bonne publication! 📰✨**

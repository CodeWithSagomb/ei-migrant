# EI-MIGRANT - Équité & Inclusion

![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.2.0-purple)
![License](https://img.shields.io/badge/License-MIT-green)

Site web officiel de **EI-MIGRANT**, une organisation non gouvernementale dédiée à l'assistance aux migrants vulnérables au Sénégal.

## 📋 À propos

EI-MIGRANT (Équité & Inclusion - MIGRANT) est une ONG engagée en faveur des migrants vulnérables au Sénégal, notamment ceux qui ont migré d'autres pays africains. Notre mission est de promouvoir l'équité, l'inclusion et la dignité de chaque individu, quelle que soit son origine.

### Nos 4 piliers d'intervention

1. **Santé & Bien-être** - Amélioration de l'accès aux soins et prévention
2. **Éducation & Jeunesse** - Sensibilisation et information
3. **Genre & Équité** - Promotion de l'égalité et lutte contre les violences
4. **Emploi & Autonomisation** - Intégration économique et sociale

## 🚀 Fonctionnalités

- ✅ **Navigation moderne** avec React Router (URLs partageables)
- ✅ **Formulaire de contact** fonctionnel avec EmailJS
- ✅ **Images professionnelles** thématiques
- ✅ **Design responsive** (mobile, tablette, desktop)
- ✅ **Animations fluides** avec Framer Motion
- ✅ **TypeScript** pour la sécurité du code
- ✅ **Build optimisé** pour la production

## 🛠️ Technologies utilisées

### Frontend
- **React 19.2.0** - Framework JavaScript moderne
- **TypeScript 5.8.2** - Typage statique
- **React Router DOM** - Navigation côté client
- **Framer Motion** - Animations
- **Lucide React** - Bibliothèque d'icônes
- **TailwindCSS** - Framework CSS utilitaire

### Build & Dev Tools
- **Vite 6.2.0** - Build tool ultra-rapide
- **EmailJS** - Service d'envoi d'emails sans backend

## 📦 Installation

### Prérequis

- **Node.js** 18.x ou supérieur
- **npm** 9.x ou supérieur

### Étapes d'installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-username/ei-migrant.git
   cd ei-migrant
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env.local
   ```

   Puis modifiez `.env.local` avec vos vraies valeurs EmailJS (voir [Configuration EmailJS](#configuration-emailjs))

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

   Le site sera accessible sur `http://localhost:3000`

## ⚙️ Configuration EmailJS

Pour activer le formulaire de contact, suivez le guide détaillé dans [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

**Résumé rapide** :
1. Créez un compte gratuit sur [EmailJS](https://www.emailjs.com/)
2. Ajoutez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email avec les variables : `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`
4. Copiez vos identifiants dans `.env.local` :
   ```env
   VITE_EMAILJS_SERVICE_ID=votre_service_id
   VITE_EMAILJS_TEMPLATE_ID=votre_template_id
   VITE_EMAILJS_PUBLIC_KEY=votre_public_key
   ```

## 🖼️ Personnalisation des images

Les images actuelles proviennent d'Unsplash. Pour utiliser vos propres images :

1. **Option 1 : Images locales (recommandé)**
   - Placez vos images dans `/public/images/`
   - Modifiez `imageConstants.ts` pour pointer vers les chemins locaux

2. **Option 2 : Rester avec Unsplash**
   - Remplacez les URLs dans `imageConstants.ts` par vos images Unsplash préférées

Voir les commentaires dans [imageConstants.ts](./imageConstants.ts) pour plus de détails.

## 🔗 Ajouter les liens réseaux sociaux

Modifiez `constants.ts` et remplissez l'objet `SOCIAL_LINKS` :

```typescript
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/votre-page",
  twitter: "https://twitter.com/votre-compte",
  instagram: "https://instagram.com/votre-compte",
};
```

Les icônes apparaîtront automatiquement dans le header si les URLs sont renseignées.

## 📜 Scripts disponibles

```bash
# Développement (avec hot reload)
npm run dev

# Build de production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 📁 Structure du projet

```
ei-migrant/
├── components/          # Composants réutilisables
│   └── Layout.tsx      # Header, Footer et navigation
├── pages/              # Pages de l'application
│   ├── Home.tsx        # Page d'accueil
│   ├── About.tsx       # À propos de l'organisation
│   ├── Missions.tsx    # Détail des 4 piliers
│   └── Contact.tsx     # Formulaire de contact
├── constants.ts        # Données statiques (missions, contact, etc.)
├── imageConstants.ts   # URLs des images
├── types.ts            # Types TypeScript
├── App.tsx             # Composant racine avec routing
├── index.tsx           # Point d'entrée React
├── index.html          # Template HTML
├── vite.config.ts      # Configuration Vite
└── tsconfig.json       # Configuration TypeScript
```

## 🌐 Déploiement

Le projet peut être déployé sur n'importe quelle plateforme supportant les sites statiques :

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Puis déployez le dossier `dist/`
```

### GitHub Pages
1. Ajoutez dans `vite.config.ts` :
   ```typescript
   base: '/ei-migrant/'  // Nom de votre repo
   ```
2. Build et déployez avec GitHub Actions

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📞 Contact

**EI-MIGRANT**
- Email : [alangsene@ei-migrant.org](mailto:alangsene@ei-migrant.org)
- Email secondaire : [alangfmsene@gmail.com](mailto:alangfmsene@gmail.com)
- Téléphone : +221 77 180 72 11
- Localisation : Sénégal

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.

## 🙏 Remerciements

- Images par [Unsplash](https://unsplash.com/)
- Icônes par [Lucide](https://lucide.dev/)
- Hébergement et déploiement facilités par [Vercel](https://vercel.com/)

---

Développé avec ❤️ pour les migrants vulnérables au Sénégal

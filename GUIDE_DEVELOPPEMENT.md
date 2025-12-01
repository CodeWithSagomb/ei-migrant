# Guide de Développement - EI-MIGRANT

## 🚀 Démarrage Rapide

### Méthode 1: Double-clic (Plus Facile)
1. Double-cliquez sur le fichier `START_DEV_SERVER.bat`
2. Une fenêtre de terminal s'ouvrira
3. Attendez quelques secondes que le serveur démarre
4. Ouvrez votre navigateur à `http://localhost:3000`

### Méthode 2: Ligne de Commande
```bash
# Dans le dossier ei-migrant
npm run dev
```

---

## 🌐 Accès au Site

Une fois le serveur démarré, le site est accessible à:

| Appareil | URL |
|----------|-----|
| **Votre ordinateur** | http://localhost:3000 |
| **Autres appareils** (même WiFi) | http://[VOTRE_IP]:3000 |

**Astuce:** L'adresse IP locale est affichée dans le terminal au démarrage du serveur.

---

## 🛑 Arrêter le Serveur

- Appuyez sur `Ctrl + C` dans le terminal
- Ou fermez simplement la fenêtre du terminal

---

## 📂 Structure du Projet

```
ei-migrant/
├── components/          # Composants réutilisables (Layout, Header, Footer)
├── pages/              # Pages du site (Home, About, Missions, Contact)
├── public/             # Fichiers statiques (images, favicon, robots.txt)
├── validation/         # Schémas de validation Zod
├── App.tsx             # Configuration des routes
├── index.tsx           # Point d'entrée React
├── constants.ts        # Données constantes (contact, missions)
├── imageConstants.ts   # URLs des images
└── types.ts            # Types TypeScript
```

---

## ✏️ Modifier le Site

### 1. Modifier le Contenu

**Coordonnées de contact:**
- Ouvrez `constants.ts`
- Modifiez `CONTACT_INFO` (email, téléphone, adresse)
- Modifiez `SOCIAL_LINKS` (Facebook, Twitter, Instagram)

**Textes des missions:**
- Ouvrez `constants.ts`
- Modifiez le tableau `MISSIONS`

**Histoire du fondateur:**
- Ouvrez `constants.ts`
- Modifiez `FOUNDER_STORY`

### 2. Modifier les Images

**Utiliser vos propres images:**
1. Placez vos images dans `/public/images/` (organisées par dossier)
2. Ouvrez `imageConstants.ts`
3. Changez `USE_LOCAL_IMAGES = false` en `USE_LOCAL_IMAGES = true`
4. Les images se chargeront automatiquement depuis `/public/images/`

**Formats recommandés:**
- Hero: 1920x1080px (JPG ou WebP)
- Photos d'équipe: 400x400px (JPG ou WebP)
- Missions: 800x600px (JPG ou WebP)
- Logo: SVG (préféré) ou PNG transparent

### 3. Modifier les Couleurs

Ouvrez `index.html` et modifiez dans la section `tailwind.config`:

```javascript
colors: {
  primary: '#007EA7',    // Couleur principale (bleu canard)
  secondary: '#00A8E8',  // Couleur secondaire
  accent: '#F9F9F9',     // Couleur d'accentuation
  dark: '#003459',       // Couleur foncée
}
```

### 4. Modifier les Pages

Chaque page est dans le dossier `/pages/`:
- `Home.tsx` - Page d'accueil
- `About.tsx` - À propos
- `Missions.tsx` - Nos missions
- `Contact.tsx` - Formulaire de contact

Modifiez le fichier correspondant et sauvegardez. Le site se recharge automatiquement!

---

## 🧪 Tester Avant de Déployer

### 1. Tester le Formulaire de Contact

**Configuration EmailJS requise:**
1. Créez un compte sur https://www.emailjs.com/
2. Suivez les instructions dans `EMAILJS_SETUP.md`
3. Copiez vos identifiants dans `.env.local`

**Tests à effectuer:**
- ✅ Envoyer avec tous les champs remplis
- ✅ Envoyer avec des champs vides (doit afficher erreurs)
- ✅ Email invalide (doit afficher erreur)
- ✅ Téléphone mal formaté (doit afficher erreur)
- ✅ Message trop court (< 10 caractères)
- ✅ Vérifier le formatage automatique du téléphone

### 2. Tester sur Différents Navigateurs

- Chrome
- Firefox
- Safari (Mac/iPhone)
- Edge
- Mobile (Chrome Mobile, Safari iOS)

### 3. Tester le Responsive Design

**Dans Chrome DevTools:**
1. Appuyez sur `F12`
2. Cliquez sur l'icône de mobile (ou `Ctrl + Shift + M`)
3. Testez différentes résolutions:
   - Mobile: 375px (iPhone SE)
   - Tablette: 768px (iPad)
   - Desktop: 1920px

### 4. Construire pour la Production

```bash
npm run build
```

Cette commande:
- Compile TypeScript
- Optimise le code
- Minifie les fichiers
- Crée le dossier `/dist` avec les fichiers de production

**Prévisualiser la version de production:**
```bash
npm run preview
```

Le site sera accessible à `http://localhost:4173`

---

## 🐛 Résolution de Problèmes

### Le serveur ne démarre pas

**Erreur: Port 3000 déjà utilisé**
```bash
# Solution 1: Arrêter l'autre processus sur le port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID [ID_DU_PROCESSUS] /F

# Solution 2: Changer le port dans vite.config.ts
# Modifier la ligne: port: 3000 → port: 3001
```

**Erreur: Module not found**
```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
```

### Les changements ne s'affichent pas

1. **Vérifiez que le serveur tourne** (terminal ouvert)
2. **Rafraîchissez le navigateur** (`Ctrl + F5` pour vider le cache)
3. **Vérifiez la console** (F12) pour les erreurs

### Erreurs TypeScript

Si vous voyez des erreurs TypeScript:
```bash
# Vérifier les erreurs
npx tsc --noEmit

# Les erreurs TypeScript n'empêchent pas le site de tourner
# mais il faut les corriger pour la production
```

---

## 📦 Déploiement

### Plateformes Recommandées

**1. Vercel (Recommandé)**
- Gratuit pour les projets personnels
- Déploiement automatique depuis GitHub
- HTTPS automatique
- URL: https://ei-migrant.vercel.app

**2. Netlify**
- Similaire à Vercel
- Gratuit avec bon support
- URL: https://ei-migrant.netlify.app

**3. GitHub Pages**
- Gratuit si le repo est public
- Configuration plus technique
- URL: https://[username].github.io/ei-migrant

### Étapes de Déploiement (Vercel)

1. Créez un compte sur https://vercel.com
2. Connectez votre repo GitHub
3. Configurez le projet:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Ajoutez les variables d'environnement (EmailJS)
5. Cliquez sur "Deploy"

---

## 🔧 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement (port 3000) |
| `npm run build` | Construit pour la production (→ `/dist`) |
| `npm run preview` | Prévisualise la version de production |
| `npx tsc --noEmit` | Vérifie les erreurs TypeScript |

---

## 📚 Ressources Utiles

- **Vite Documentation:** https://vitejs.dev/
- **React Documentation:** https://react.dev/
- **TailwindCSS:** https://tailwindcss.com/docs
- **EmailJS Setup:** Voir `EMAILJS_SETUP.md`
- **Roadmap:** Voir `ROADMAP.md`
- **Changelog:** Voir `CHANGELOG.md`

---

## 🆘 Besoin d'Aide?

Si vous rencontrez des problèmes:

1. Vérifiez les fichiers de documentation:
   - `README.md` - Guide général
   - `EMAILJS_SETUP.md` - Configuration email
   - `ROADMAP.md` - Fonctionnalités futures
   - `public/README.md` - Gestion des images

2. Vérifiez la console du navigateur (F12)

3. Vérifiez le terminal pour les erreurs

4. Contactez un développeur si le problème persiste

---

**Bon développement! 🚀**

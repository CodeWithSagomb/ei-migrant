# Guide de Déploiement - EI-MIGRANT

## 🚀 Méthode 1 : Déploiement Automatique avec Vercel (RECOMMANDÉ)

Cette méthode est la plus simple et déploie automatiquement à chaque push GitHub.

### Étape 1 : Créer un compte Vercel

1. Allez sur : **https://vercel.com**
2. Cliquez sur **"Sign Up"** (S'inscrire)
3. Choisissez **"Continue with GitHub"** (Continuer avec GitHub)
4. Autorisez Vercel à accéder à vos repos GitHub

### Étape 2 : Importer le projet

1. Une fois connecté, cliquez sur **"Add New..."** → **"Project"**
2. Dans la liste, trouvez **"ei-migrant"**
3. Cliquez sur **"Import"**

### Étape 3 : Configuration du projet

Vercel détectera automatiquement que c'est un projet Vite :

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

✅ **Ne modifiez rien**, Vercel configure tout automatiquement !

### Étape 4 : Variables d'environnement (IMPORTANT)

Avant de déployer, ajoutez vos clés EmailJS :

1. Cliquez sur **"Environment Variables"** (Variables d'environnement)
2. Ajoutez ces 3 variables :

```
Name: VITE_EMAILJS_SERVICE_ID
Value: votre_service_id_emailjs

Name: VITE_EMAILJS_TEMPLATE_ID
Value: votre_template_id_emailjs

Name: VITE_EMAILJS_PUBLIC_KEY
Value: votre_public_key_emailjs
```

💡 **Si vous n'avez pas encore configuré EmailJS**, vous pouvez déployer sans et les ajouter plus tard.

### Étape 5 : Déployer

1. Cliquez sur **"Deploy"** (Déployer)
2. Attendez 2-3 minutes pendant la compilation
3. ✅ **C'est fait !** Votre site est en ligne !

### Étape 6 : Obtenir votre URL

Après le déploiement, vous obtiendrez une URL comme :
```
https://ei-migrant.vercel.app
```

ou

```
https://ei-migrant-xyz123.vercel.app
```

---

## 🌐 Méthode 2 : Déploiement via CLI Vercel

Si vous préférez déployer depuis votre terminal :

### Installation

```bash
# Installer Vercel CLI
npm install -g vercel
```

### Déploiement

```bash
# Dans le dossier du projet
cd C:\Users\pc\Documents\ei-migrant

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

Suivez les instructions à l'écran :
- Set up and deploy? **Y**
- Which scope? **Votre compte**
- Link to existing project? **N**
- What's your project's name? **ei-migrant**
- In which directory is your code located? **./**
- Want to modify settings? **N**

---

## 🎨 Méthode 3 : Netlify (Alternative)

### Option A : Interface Web (Simple)

1. Allez sur : **https://app.netlify.com**
2. Cliquez sur **"Add new site"** → **"Import an existing project"**
3. Choisissez **"GitHub"**
4. Sélectionnez le repo **"ei-migrant"**
5. Configuration :
   ```
   Build command: npm run build
   Publish directory: dist
   ```
6. Ajoutez les variables d'environnement (comme Vercel)
7. Cliquez sur **"Deploy site"**

### Option B : Via CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

---

## 🔧 Configuration Post-Déploiement

### 1. Domaine personnalisé (Optionnel)

**Sur Vercel :**
1. Allez dans **Settings** → **Domains**
2. Ajoutez votre domaine (ex: www.ei-migrant.org)
3. Suivez les instructions DNS

**Sur Netlify :**
1. Allez dans **Domain settings**
2. Cliquez sur **"Add custom domain"**
3. Configurez les DNS

### 2. Variables d'environnement EmailJS

Pour configurer le formulaire de contact :

1. Créez un compte sur **https://www.emailjs.com**
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template avec ces variables :
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{subject}}`
   - `{{message}}`
4. Copiez vos clés et ajoutez-les sur Vercel/Netlify

### 3. Activer HTTPS

✅ **Automatique** sur Vercel et Netlify !

Les deux plateformes activent HTTPS automatiquement avec Let's Encrypt.

---

## 📊 Déploiement Continu (CI/CD)

Une fois configuré, chaque fois que vous faites un `git push` :

1. ✅ Vercel/Netlify détecte le changement
2. ✅ Lance le build automatiquement
3. ✅ Déploie la nouvelle version
4. ✅ Votre site est mis à jour en 2-3 minutes !

---

## 🐛 Résolution de problèmes

### Erreur : "Build failed"

**Vérifiez :**
- La commande de build est bien `npm run build`
- Le dossier de sortie est bien `dist`
- Toutes les dépendances sont dans `package.json`

**Solution :**
```bash
# Tester le build localement
npm run build

# Si ça marche localement, ça marchera en ligne
```

### Erreur : "Module not found"

**Solution :**
```bash
# Vérifier que toutes les dépendances sont installées
npm install

# Rebuild
npm run build
```

### Le formulaire de contact ne fonctionne pas

**Vérifiez :**
- Les variables d'environnement EmailJS sont bien configurées
- Les noms des variables commencent par `VITE_`
- Vous avez redéployé après avoir ajouté les variables

---

## 📱 Tester le déploiement

Après le déploiement, testez :

✅ **Navigation** : Toutes les pages se chargent
✅ **Responsive** : Testez sur mobile/tablette
✅ **Formulaire** : Testez l'envoi d'un message
✅ **Images** : Le logo et les photos s'affichent
✅ **Performance** : Le site est rapide

---

## 🎯 URLs importantes

**Repository GitHub :**
https://github.com/CodeWithSagomb/ei-migrant

**Vercel (après déploiement) :**
https://vercel.com/dashboard

**Netlify (si utilisé) :**
https://app.netlify.com

---

## 💡 Conseils

1. **Préférez Vercel** - Gratuit, simple, rapide
2. **Activez les analytics** - Suivez les visites
3. **Configurez un domaine** - Plus professionnel
4. **Testez régulièrement** - Après chaque mise à jour
5. **Gardez une copie locale** - Toujours avoir un backup

---

## 🆘 Besoin d'aide ?

- **Vercel Docs** : https://vercel.com/docs
- **Netlify Docs** : https://docs.netlify.com
- **Vite Docs** : https://vitejs.dev/guide

---

**Bon déploiement ! 🚀**

# Configuration du Formulaire de Contact avec EmailJS

Ce guide vous explique comment configurer EmailJS pour rendre le formulaire de contact fonctionnel.

## Étape 1 : Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur **"Sign Up"** pour créer un compte gratuit
3. Confirmez votre email

## Étape 2 : Ajouter un service email

1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email :
   - **Gmail** (recommandé pour commencer)
   - Outlook
   - Yahoo
   - Ou un autre service SMTP personnalisé
4. Connectez votre compte email
5. Notez le **Service ID** affiché (ex: `service_abc1234`)

## Étape 3 : Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez le template avec ces paramètres :

### Configuration du template :

**Subject (Sujet)** :
```
Nouveau message de contact : {{subject}}
```

**Content (Contenu)** :
```
Vous avez reçu un nouveau message depuis le formulaire de contact EI-MIGRANT.

Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}

Sujet : {{subject}}

Message :
{{message}}

---
Ce message a été envoyé via le formulaire de contact du site EI-MIGRANT.
```

4. Configurez l'email de destination (votre email où vous recevrez les messages)
5. Testez le template avec le bouton **"Test it"**
6. Notez le **Template ID** (ex: `template_xyz5678`)

## Étape 4 : Obtenir votre Public Key

1. Allez dans **"Account"** → **"General"**
2. Trouvez votre **Public Key** (anciennement appelé User ID)
3. Copiez cette clé (ex: `abcdefghijklmnop`)

## Étape 5 : Configurer les variables d'environnement

1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez les valeurs par défaut par vos vraies valeurs :

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

⚠️ **Important** : Ne committez JAMAIS le fichier `.env.local` dans Git !

## Étape 6 : Tester le formulaire

1. Redémarrez le serveur de développement :
```bash
npm run dev
```

2. Allez sur la page Contact : `http://localhost:3000/contact`
3. Remplissez et soumettez le formulaire
4. Vérifiez que vous recevez l'email dans votre boîte de réception

## Limites du plan gratuit EmailJS

- **200 emails par mois**
- Parfait pour un site vitrine d'ONG
- Si vous dépassez cette limite, considérez un plan payant (~$10/mois pour 1000 emails)

## Dépannage

### Erreur "Le formulaire n'est pas configuré"
- Vérifiez que les variables dans `.env.local` sont correctes
- Assurez-vous qu'elles ne contiennent pas les valeurs par défaut (`your_service_id`, etc.)
- Redémarrez le serveur après avoir modifié `.env.local`

### Erreur lors de l'envoi
- Vérifiez que votre compte EmailJS est vérifié
- Vérifiez que le service email est bien connecté
- Vérifiez que le template existe et contient les bonnes variables

### L'email n'arrive pas
- Vérifiez vos spams
- Vérifiez l'adresse email de destination dans le template EmailJS
- Testez le template directement depuis le dashboard EmailJS

## Alternative sans EmailJS

Si vous préférez une autre solution, vous pouvez utiliser :
- **Formspree** : https://formspree.io/ (plus simple, moins de contrôle)
- **Netlify Forms** : Si vous déployez sur Netlify
- **Votre propre backend** : API Node.js/Express avec Nodemailer

## Support

Pour toute question sur EmailJS, consultez :
- Documentation : https://www.emailjs.com/docs/
- FAQ : https://www.emailjs.com/docs/faq/

# 🚀 Guide de Déploiement - Port Sec du Tchad

## 📋 Options de Déploiement

### Option 1 : Netlify (Recommandé) ✅

**Avantages :**
- ✅ Gratuit pour projets illimités
- ✅ Formulaire de contact fonctionnel inclus
- ✅ SSL automatique (HTTPS)
- ✅ Déploiement continu depuis Git
- ✅ CDN mondial
- ✅ Notifications email pour chaque message reçu

#### Étapes de déploiement :

1. **Créer un compte Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - S'inscrire gratuitement

2. **Connecter le repository**
   - Cliquer "Add new site" → "Import an existing project"
   - Connecter votre compte GitHub/GitLab/Bitbucket
   - Sélectionner le repository `port-sec`

3. **Configuration automatique**
   - Netlify détecte automatiquement le `netlify.toml`
   - Build command : `npm run build`
   - Publish directory : `dist`

4. **Activer Netlify Forms**
   - Aller dans "Site settings" → "Forms"
   - Activer "Form notifications"
   - Ajouter votre email pour recevoir les messages

5. **Configuration du domaine (optionnel)**
   - "Domain settings" → "Add custom domain"
   - Pointer votre domaine `portsectchad.com` vers Netlify
   - SSL activé automatiquement

#### Recevoir les messages du formulaire :

Une fois déployé, vous recevrez un email à chaque soumission du formulaire avec :
- Nom du contact
- Email du contact
- Message complet

Vous pouvez aussi consulter tous les messages dans le dashboard Netlify :
`Site settings → Forms → Submissions`

---

### Option 2 : Vercel

1. **Installer Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Déployer**
   ```bash
   cd port-sec
   vercel
   ```

⚠️ **Note :** Vercel ne supporte pas Netlify Forms. Il faudra configurer un service tiers comme :
- Formspree (gratuit jusqu'à 50 soumissions/mois)
- EmailJS (gratuit jusqu'à 200 emails/mois)

---

### Option 3 : GitHub Pages

1. **Installer gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Ajouter dans package.json**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Déployer**
   ```bash
   npm run deploy
   ```

⚠️ **Note :** GitHub Pages ne supporte pas les formulaires. Il faudra un service externe.

---

## 🔧 Configuration Pré-Déploiement

### Vérifications avant déploiement :

```bash
# 1. Installer les dépendances
npm install

# 2. Tester localement
npm run dev

# 3. Tester le build
npm run build

# 4. Prévisualiser le build
npm run preview
```

### Variables d'environnement (optionnel)

Si vous configurez une API custom plus tard, créer `.env` :

```env
VITE_API_URL=https://votre-api.com
VITE_CONTACT_EMAIL=contact@portsectchad.com
```

---

## 📧 Alternatives pour le Formulaire de Contact

Si vous n'utilisez pas Netlify, voici des alternatives :

### 1. Formspree (Facile)

```bash
npm install @formspree/react
```

Modifier `src/services/contactService.js` :
```javascript
export const submitContactForm = async (formData) => {
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  return response.json()
}
```

### 2. EmailJS (Gratuit)

1. Créer un compte sur [emailjs.com](https://emailjs.com)
2. Installer : `npm install @emailjs/browser`
3. Configurer dans Contact.vue

### 3. API Backend Custom

Créer votre propre API avec :
- Node.js + Express + Nodemailer
- Supabase Functions
- AWS Lambda
- Google Cloud Functions

---

## 🔒 Sécurité

Le fichier `netlify.toml` inclut déjà des headers de sécurité :

```toml
[headers]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

Pour Vercel, créer `vercel.json` avec des headers similaires.

---

## 📊 Monitoring Post-Déploiement

### 1. Vérifier le formulaire
- Tester l'envoi d'un message de test
- Vérifier la réception de l'email

### 2. Vérifier le SEO
```bash
# Lighthouse audit
npx lighthouse https://votre-site.com --view
```

### 3. Tester la performance
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

## 🆘 Dépannage

### Le formulaire ne s'envoie pas sur Netlify

1. Vérifier que le formulaire caché est présent dans `dist/index.html` après build
2. Vérifier les logs Netlify : `Site settings → Functions → Logs`
3. Vérifier que le formulaire est détecté : `Site settings → Forms`

### CORS errors

Si vous utilisez une API externe, ajouter dans `netlify.toml` :
```toml
[[headers]]
  for = "/api/*"
  [headers.values]
    Access-Control-Allow-Origin = "*"
```

### Build échoue

```bash
# Nettoyer et rebuilder
rm -rf node_modules dist
npm install
npm run build
```

---

## 📞 Contact

Pour toute question sur le déploiement :
- Email : contact@portsectchad.com
- Documentation Netlify : https://docs.netlify.com/forms/setup/

---

**Dernière mise à jour :** 27 octobre 2025
**Version :** 1.0.0

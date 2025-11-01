# 🚢 Port Sec du Tchad - Site Web Officiel

Application web moderne pour présenter l'opportunité d'investissement du Port Sec de Douala, hub logistique stratégique pour le Tchad et la région CEMAC.

## 📊 Aperçu du Projet

**Type :** Application Vue 3 Single Page Application (SPA)
**Objectif :** Plateforme d'investissement et marketing pour le Port Sec
**Tech Stack :** Vue 3, Vite, Tailwind CSS, Pinia, Vue Router, i18n

### Métriques Clés du Projet

- **CAPEX :** 58 Mds XAF (~96M USD)
- **Fonds Propres :** 20 Mds XAF (~33M USD)
- **Dette :** 38 Mds XAF (~63M USD)
- **APD :** 75%
- **Capacité :** 2,400 EVP/an
- **Impact :** Réduction des délais de 30 → 5 jours

---

## 🎯 Fonctionnalités

### ✅ Implémentées

- ✅ Navigation multilingue (FR/EN) avec persistance localStorage
- ✅ Pages : Accueil, Investir, DataRoom, Contact, Impact
- ✅ Formulaire de contact avec validation complète (Yup)
- ✅ Intégration Netlify Forms pour réception emails
- ✅ Affichage KPIs financiers dynamiques (Pinia store)
- ✅ Comparaisons Avant/Après interactives
- ✅ Design responsive (mobile-first)
- ✅ SEO optimisé (JSON-LD, Open Graph, Meta tags)
- ✅ Dark mode par défaut
- ✅ Accessibilité (ARIA, navigation clavier)

### 🚧 À Venir

- 🔜 Authentification pour DataRoom (Auth0/Firebase)
- 🔜 SEO dynamique par route
- 🔜 Analytics (Google Analytics 4)
- 🔜 Tests unitaires (Vitest)
- 🔜 Monitoring erreurs (Sentry)
- 🔜 Performance optimisations

---

## 🚀 Installation & Développement

### Prérequis

- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-org/port-sec.git
cd port-sec

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev      # Serveur de développement avec hot-reload
npm run build    # Build de production dans dist/
npm run preview  # Prévisualiser le build de production
```

---

## 📁 Structure du Projet

```
port-sec/
├── src/
│   ├── main.js              # Point d'entrée
│   ├── App.vue              # Layout principal
│   ├── assets/              # Styles globaux
│   │   └── main.css         # CSS principal + Tailwind
│   ├── components/          # Composants réutilisables (13)
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   ├── HeroSection.vue
│   │   ├── BeforeAfterTable.vue
│   │   ├── KpiStrip.vue
│   │   ├── InvestorCTA.vue
│   │   └── ...
│   ├── views/               # Pages/routes (6)
│   │   ├── Home.vue
│   │   ├── Invest.vue
│   │   ├── DataRoom.vue
│   │   ├── Contact.vue
│   │   ├── Impact.vue
│   │   └── NotFound.vue
│   ├── router/
│   │   └── index.js         # Configuration Vue Router
│   ├── store/
│   │   └── useProjectStore.js  # État global Pinia
│   ├── i18n/
│   │   └── index.js         # Configuration vue-i18n
│   ├── locales/
│   │   ├── fr.json          # Traductions françaises
│   │   └── en.json          # Traductions anglaises
│   └── services/
│       └── contactService.js  # Service formulaire contact
├── public/                  # Assets statiques
├── dist/                    # Build de production
├── index.html               # HTML entry point
├── vite.config.js           # Configuration Vite
├── tailwind.config.js       # Configuration Tailwind
├── netlify.toml             # Configuration Netlify
├── package.json
├── README.md                # Ce fichier
└── DEPLOIEMENT.md           # Guide de déploiement
```

---

## 🎨 Technologies

### Core Framework

| Technologie | Version | Usage |
|------------|---------|-------|
| **Vue.js** | 3.5.18 | Framework UI réactif |
| **Vite** | 5.4.19 | Build tool & dev server |
| **Tailwind CSS** | 3.4.13 | Styling utility-first |

### State & Routing

| Technologie | Version | Usage |
|------------|---------|-------|
| **Pinia** | 3.0.3 | State management |
| **Vue Router** | 4.5.1 | Client-side routing |
| **Vue-i18n** | 11.1.11 | Internationalization |

### Validation & Backend

| Technologie | Version | Usage |
|------------|---------|-------|
| **Yup** | 1.x | Validation de formulaire |
| **Axios** | 1.11.0 | HTTP client (prêt pour API) |
| **Netlify Forms** | - | Réception formulaire contact |

---

## 🌍 Internationalisation (i18n)

Le site supporte 2 langues :

- **Français (FR)** - Langue par défaut
- **English (EN)** - Disponible via sélecteur dans Navbar

### Ajouter une traduction

1. Ouvrir `src/locales/fr.json` ou `en.json`
2. Ajouter la clé de traduction :

```json
{
  "new": {
    "key": "Nouvelle traduction"
  }
}
```

3. Utiliser dans un composant :

```vue
<template>
  <p>{{ t('new.key') }}</p>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
```

---

## 📧 Configuration Formulaire de Contact

### Avec Netlify (Recommandé)

Aucune configuration supplémentaire nécessaire ! Le formulaire est déjà configuré :

1. Déployer sur Netlify (voir `DEPLOIEMENT.md`)
2. Activer les notifications email dans les settings Netlify
3. Les messages arrivent directement par email

### Avec une API Custom

Modifier `src/services/contactService.js` :

```javascript
export const submitContactForm = async (formData) => {
  const response = await axios.post('https://votre-api.com/contact', formData)
  return response.data
}
```

---

## 🔐 Sécurité

### Headers HTTP

Le fichier `netlify.toml` configure automatiquement :

- `X-Frame-Options: DENY` (protection clickjacking)
- `X-Content-Type-Options: nosniff` (protection MIME)
- `Referrer-Policy: strict-origin-when-cross-origin`
- SSL/HTTPS automatique sur Netlify

### Validation

- Validation côté client avec Yup
- Protection anti-spam via honeypot (Netlify Forms)
- Sanitization des entrées utilisateur

---

## 📊 Performance

### Optimisations actuelles

- ✅ Lazy-loading des routes (code splitting)
- ✅ Chunks Vite optimisés
- ✅ CSS minifié et purgé (Tailwind)
- ✅ Assets hashés pour cache busting

### Scores Lighthouse (cibles)

| Métrique | Cible |
|----------|-------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 95+ |

---

## 🧪 Tests (À Implémenter)

### Installer Vitest

```bash
npm install -D vitest @vue/test-utils happy-dom
```

### Exemple de test

```javascript
// src/components/__tests__/Navbar.spec.js
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'

describe('Navbar', () => {
  it('renders navigation links', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.find('nav').exists()).toBe(true)
  })
})
```

---

## 🐛 Dépannage

### Le serveur de dev ne démarre pas

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreur de build

```bash
# Nettoyer le cache Vite
rm -rf dist node_modules/.vite
npm run build
```

### Traductions manquantes

Vérifier que la clé existe dans `src/locales/fr.json` et `en.json`.

---

## 📞 Contact & Support

- **Email :** contact@portsectchad.com
- **Website :** https://www.portsectchad.com
- **Issues :** [GitHub Issues](https://github.com/votre-org/port-sec/issues)

---

## 📄 Licence

Propriétaire - Tous droits réservés © 2025 Port Sec du Tchad

---

## 🤝 Contribution

Ce projet est actuellement fermé aux contributions externes.

Pour toute suggestion, contactez-nous à contact@portsectchad.com

---

## 📝 Changelog

### Version 1.0.0 (27 Octobre 2025)

#### Ajouts
- ✅ Site web complet avec 6 pages
- ✅ Formulaire de contact avec validation
- ✅ Intégration Netlify Forms
- ✅ Support multilingue FR/EN
- ✅ Design responsive et accessible
- ✅ SEO optimisé

#### Corrections
- ✅ Cohérence données financières (CAPEX 58 Mds)
- ✅ Validation formulaire complète

#### À Venir (v1.1.0)
- 🔜 Authentification DataRoom
- 🔜 SEO dynamique
- 🔜 Analytics
- 🔜 Tests automatisés

---

**Made with ❤️ for Chad's economic development**

/**
 * Composable pour gérer le SEO dynamique par route
 * Met à jour le titre, description et meta tags en fonction de la page
 */

import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

/**
 * Configuration SEO par route
 */
const routeSeoConfig = {
  '/': {
    fr: {
      title: 'Genesis Port Management – Opérateur logistique tchadien | Vision 2030',
      description: 'GPM développe et gère les infrastructures logistiques régionales au service du commerce extérieur du Tchad : ports secs, plateformes multimodales et hubs CEMAC.',
      keywords: 'Genesis Port Management, GPM, logistique Tchad, port sec, N\'Djamena, CEMAC, infrastructure, Vision 2030, commerce extérieur'
    },
    en: {
      title: 'Genesis Port Management – Chadian Logistics Operator | Vision 2030',
      description: 'GPM develops and manages regional logistics infrastructure serving Chad\'s external trade: dry ports, multimodal platforms and CEMAC hubs.',
      keywords: 'Genesis Port Management, GPM, Chad logistics, dry port, N\'Djamena, CEMAC, infrastructure, Vision 2030, external trade'
    }
  },
  '/invest': {
    fr: {
      title: 'Investir – Port Sec du Tchad | Structure financière et opportunités',
      description: 'Découvrez l\'opportunité d\'investissement : CAPEX 58 Mds XAF, 20 Mds fonds propres, 38 Mds dette. ROI attractif, cadre légal solide, APD 75%.',
      keywords: 'investissement, Port sec Tchad, CAPEX, fonds propres, financement, ROI, APD'
    },
    en: {
      title: 'Invest – Chad Dry Port | Financial Structure and Opportunities',
      description: 'Discover the investment opportunity: CAPEX 58 Bn XAF, 20 Bn equity, 38 Bn debt. Attractive ROI, solid legal framework, ODA 75%.',
      keywords: 'investment, Chad dry port, CAPEX, equity, financing, ROI, ODA'
    }
  },
  '/dataroom': {
    fr: {
      title: 'Espace Documentaire – Port Sec du Tchad | Documents investisseurs',
      description: 'Accédez aux documents techniques, financiers et juridiques du projet. Business plan, études de faisabilité, cadre légal et contrats.',
      keywords: 'dataroom, documents, business plan, études, investisseurs, Port sec Tchad'
    },
    en: {
      title: 'Data Room – Chad Dry Port | Investor Documents',
      description: 'Access technical, financial and legal project documents. Business plan, feasibility studies, legal framework and contracts.',
      keywords: 'dataroom, documents, business plan, studies, investors, Chad dry port'
    }
  },
  '/contact': {
    fr: {
      title: 'Contact – Port Sec du Tchad | Nous contacter',
      description: 'Contactez-nous pour plus d\'informations sur le projet, l\'accès à l\'espace documentaire ou pour toute question. Réponse sous 48h.',
      keywords: 'contact, Port sec Tchad, investissement, informations, questions'
    },
    en: {
      title: 'Contact – Chad Dry Port | Get in Touch',
      description: 'Contact us for more information about the project, data room access or any questions. Response within 48h.',
      keywords: 'contact, Chad dry port, investment, information, questions'
    }
  },
  '/impact': {
    fr: {
      title: 'Impact – Port Sec du Tchad | Bénéfices économiques et sociaux',
      description: 'Impact du Port Sec : réduction des délais de 30 à 5 jours, baisse des coûts 30-40%, création d\'emplois, développement régional CEMAC.',
      keywords: 'impact, bénéfices, emplois, développement, CEMAC, logistique, Tchad'
    },
    en: {
      title: 'Impact – Chad Dry Port | Economic and Social Benefits',
      description: 'Dry Port impact: reduction of delays from 30 to 5 days, cost reduction 30-40%, job creation, CEMAC regional development.',
      keywords: 'impact, benefits, jobs, development, CEMAC, logistics, Chad'
    }
  }
}

/**
 * Met à jour un meta tag
 */
const updateMetaTag = (name, content, attribute = 'name') => {
  if (!content) return

  let element = document.querySelector(`meta[${attribute}="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

/**
 * Met à jour le lien canonical
 */
const updateCanonical = (path) => {
  const baseUrl = 'https://www.portsectchad.com'
  let canonical = document.querySelector('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', `${baseUrl}${path}`)
}

/**
 * Met à jour les meta tags Open Graph
 */
const updateOpenGraph = (title, description, path) => {
  const baseUrl = 'https://www.portsectchad.com'

  updateMetaTag('og:title', title, 'property')
  updateMetaTag('og:description', description, 'property')
  updateMetaTag('og:url', `${baseUrl}${path}`, 'property')
  updateMetaTag('og:type', 'website', 'property')
}

/**
 * Met à jour les meta tags Twitter Card
 */
const updateTwitterCard = (title, description) => {
  updateMetaTag('twitter:title', title)
  updateMetaTag('twitter:description', description)
  updateMetaTag('twitter:card', 'summary_large_image')
}

/**
 * Composable principal
 */
export function useSeo() {
  const route = useRoute()
  const { locale } = useI18n()

  const updateSeo = () => {
    const path = route.path
    const lang = locale.value

    // Récupérer la config SEO pour cette route et langue
    const seoConfig = routeSeoConfig[path]?.[lang] || routeSeoConfig['/'][lang]

    if (!seoConfig) return

    // Mettre à jour le titre
    document.title = seoConfig.title

    // Mettre à jour la description
    updateMetaTag('description', seoConfig.description)

    // Mettre à jour les keywords
    updateMetaTag('keywords', seoConfig.keywords)

    // Mettre à jour le canonical
    updateCanonical(path)

    // Mettre à jour Open Graph
    updateOpenGraph(seoConfig.title, seoConfig.description, path)

    // Mettre à jour Twitter Card
    updateTwitterCard(seoConfig.title, seoConfig.description)

    // Mettre à jour la langue HTML
    document.documentElement.setAttribute('lang', lang)
  }

  // Mettre à jour au montage du composant
  onMounted(() => {
    updateSeo()
  })

  // Mettre à jour quand la route change
  watch(() => route.path, () => {
    updateSeo()
  })

  // Mettre à jour quand la langue change
  watch(() => locale.value, () => {
    updateSeo()
  })

  return {
    updateSeo
  }
}

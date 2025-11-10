import { ref, computed } from 'vue'

// État global du consentement
const consentGiven = ref(null) // null = pas encore répondu, true/false = choix
const consentBannerVisible = ref(false)

// Clé de stockage localStorage
const CONSENT_KEY = 'gpm_user_consent'

export function useConsent() {
  // Charger le consentement depuis localStorage au démarrage
  const loadConsent = () => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored !== null) {
      consentGiven.value = stored === 'true'
      updateGoogleConsent(consentGiven.value)
    } else {
      // Pas de consentement enregistré, afficher le banner
      consentBannerVisible.value = true
    }
  }

  // Sauvegarder le consentement
  const saveConsent = (consent) => {
    consentGiven.value = consent
    localStorage.setItem(CONSENT_KEY, consent.toString())
    consentBannerVisible.value = false
    updateGoogleConsent(consent)
  }

  // Accepter tous les cookies
  const acceptAll = () => {
    saveConsent(true)
    loadGoogleAds()
  }

  // Refuser les cookies (seulement nécessaires)
  const rejectAll = () => {
    saveConsent(false)
  }

  // Mettre à jour le Google Consent Mode
  const updateGoogleConsent = (granted) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': granted ? 'granted' : 'denied',
        'ad_storage': granted ? 'granted' : 'denied',
        'ad_user_data': granted ? 'granted' : 'denied',
        'ad_personalization': granted ? 'granted' : 'denied'
      })
    }
  }

  // Charger Google Ads si consentement donné
  const loadGoogleAds = () => {
    if (typeof window === 'undefined') return

    // Créer le script gtag.js
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17716525068'
    document.head.appendChild(script1)

    // Initialiser gtag
    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', 'AW-17716525068')
  }

  // Initialiser Google Consent Mode (mode par défaut denied)
  const initGoogleConsentMode = () => {
    if (typeof window === 'undefined') return

    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    window.gtag = gtag

    // Consent Mode v2 - Defaults to denied
    gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'wait_for_update': 500
    })
  }

  return {
    consentGiven: computed(() => consentGiven.value),
    consentBannerVisible: computed(() => consentBannerVisible.value),
    loadConsent,
    acceptAll,
    rejectAll,
    initGoogleConsentMode
  }
}

<template>
<section class="relative overflow-hidden min-h-[700px] md:min-h-[800px] w-screen flex items-center justify-center">
    <!-- Carte en arrière-plan full-width avec effet parallax -->
    <div
      ref="mapBackground"
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700"
      :style="{ transform: `translateY(${parallaxOffset}px)` }"
    >
      <div class="map-container absolute inset-0">
        <MapGPMFull mode="background" class="w-full h-full" />
      </div>
    </div>

    <!-- Conteneur de texte flottant directement sur la carte -->
    <div class="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
      <!-- Texte flottant sans fond -->
      <div class="space-y-6 text-center"
           style="text-shadow: 0 2px 20px rgba(0, 0, 0, 0.8), 0 4px 40px rgba(0, 0, 0, 0.6);">
        <!-- Tag / badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/80 text-xs opacity-90"
          role="note"
          aria-label="statut-projet"
        >
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{{ tagText }}</span>
        </div>

        <!-- Title avec parallax -->
        <h1
          ref="heroTitle"
          class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          :style="{ transform: `translateY(${parallaxTitle}px)` }"
        >
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
            {{ titleText }}
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="opacity-95 text-lg md:text-xl leading-relaxed text-white">
          {{ subtitleText }}
        </p>

        <!-- Trust line -->
        <p v-if="trustText" class="text-base opacity-80 text-gray-200">{{ trustText }}</p>

        <!-- Feature badges (optionnels) -->
        <div v-if="featureBadges && featureBadges.length" class="flex flex-wrap gap-2 pt-2" role="list" aria-label="caractéristiques">
          <span
            v-for="(b, i) in featureBadges"
            :key="'feat'+i"
            class="px-2 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs"
            role="listitem"
          >
            {{ b }}
          </span>
        </div>

        <!-- CTA avec parallax -->
        <div
          ref="heroCtas"
          class="flex flex-wrap gap-4 pt-8 justify-center"
          :style="{ transform: `translateY(${parallaxCtas}px)` }"
        >
          <RouterLink
            v-if="investTo"
            :to="investTo"
            ref="ctaPrimaryRef"
            class="cta-primary px-8 py-4 rounded-xl bg-emerald-500 text-neutral-900 font-bold hover:bg-emerald-400 shadow-2xl shadow-black/60 hover:shadow-emerald-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-lg inline-block"
            :aria-label="ctaInvest + ' – investir'"
          >
            {{ ctaInvest }}
          </RouterLink>
          <RouterLink
            v-if="secondaryTo"
            :to="secondaryTo"
            ref="ctaSecondaryRef"
            class="px-8 py-4 rounded-xl border-2 border-emerald-500/60 bg-black/60 backdrop-blur-sm hover:bg-neutral-900/80 hover:border-emerald-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-600 font-semibold text-lg text-white inline-block"
            style="box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);"
            :aria-label="ctaSecondary + ' – contact'"
          >
            {{ ctaSecondary }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * HeroSection.vue - Version 2.0 avec carte en background
 * - Carte Tchad-Cameroun en arrière-plan avec effet parallax
 * - Logo GPM avec texte en coin supérieur droit
 * - Conteneur glassmorphism moderne
 * - Texte vendeur et robuste (i18n avec fallbacks)
 * - Injection JSON-LD SEO dans <head> côté client
 */
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

// Import des composants et composables
import MapGPMFull from './MapGPMFull.vue'
import { useMagneticButton } from '@/composables/useMagneticButton'

const props = defineProps({
  // Overrides de texte (utilisés par Home.vue)
  tagOverride: { type: String, default: '' },
  titleOverride: { type: String, default: '' },
  subtitleOverride: { type: String, default: '' },
  trustOverride: { type: String, default: '' },

  // Labels CTA
  ctaInvestLabel: { type: String, default: '' },
  ctaSecondaryLabel: { type: String, default: '' },

  // Navigation
  investTo: { type: String, default: '' },
  secondaryTo: { type: String, default: '' },

  // Badges/Features
  featureBadges: { type: Array, default: () => [] },

  // Données projet/org pour SEO
  orgName: { type: String, default: 'Port Sec du Tchad' },
  orgUrl: { type: String, default: '' },
  projectName: { type: String, default: '' },
  projectDescription: { type: String, default: '' }
})

const { t } = useI18n()

// Textes avec fallback pour éviter toute régression i18n
const tagText = computed(() =>
  props.tagOverride || t('hero.tag', 'APD 75% • PND 2026–2030')
)
const titleText = computed(() =>
  props.titleOverride || t('hero.title', 'Le Port Sec du Tchad à Douala : le hub logistique de demain')
)
const subtitleText = computed(() =>
  props.subtitleOverride ||
  t('hero.subtitle', 'Plateforme sous douane tchadienne au cœur du Port Autonome de Douala (PAD) : délais accélérés, formalités centralisées, coûts réduits.')
)
const trustText = computed(() =>
  props.trustOverride || t('hero.trust', 'Aligné PND 2026–2030 • Études APD 75 % • Coopération Tchad–Cameroun')
)

const ctaInvest = computed(() =>
  props.ctaInvestLabel || t('hero.ctaInvest', 'Investir')
)
const ctaSecondary = computed(() =>
  props.ctaSecondaryLabel || t('hero.ctaContact', 'Nous contacter')
)

// ===== Effet Parallax multi-couches (carte + titre + CTAs) =====
const parallaxOffset = ref(0)
const parallaxTitle = ref(0)
const parallaxCtas = ref(0)
const mapBackground = ref(null)
const heroTitle = ref(null)
const heroCtas = ref(null)

// ===== Magnetic CTAs =====
const ctaPrimaryRef = ref(null)
const ctaSecondaryRef = ref(null)

// Activer l'effet magnétique sur les boutons
useMagneticButton(ctaPrimaryRef, { strength: 0.3, radius: 80 })
useMagneticButton(ctaSecondaryRef, { strength: 0.25, radius: 70 })

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    const scrollY = window.scrollY
    // Carte : vitesse réduite pour stabilité visuelle
    parallaxOffset.value = scrollY * 0.08
    // Titre : vitesse ultra-subtile
    parallaxTitle.value = scrollY * 0.04
    // CTAs : vitesse minimale pour ancrer l'attention
    parallaxCtas.value = scrollY * 0.02
  }
}

/**
 * JSON-LD SEO
 * - Injection client-only (onMounted), safe SSR.
 * - Pas de dépendance à head manager.
 */
let ldScriptEl = null

const jsonLd = computed(() => {
  const org = {
    '@type': 'Organization',
    name: props.orgName || 'Port Sec du Tchad',
    url: props.orgUrl || undefined
  }

  const offer = {
    '@type': 'Product',
    name: props.projectName || titleText.value,
    description: props.projectDescription || subtitleText.value
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: titleText.value,
    description: subtitleText.value,
    url: typeof window !== 'undefined' ? window.location.origin : undefined,
    publisher: org,
    about: offer
  }
})

onMounted(() => {
  // Activer l'effet parallax
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }

  // Injection JSON-LD SEO
  try {
    const existing = document.querySelector('script[data-ld="herosection"]')
    if (existing?.parentNode) existing.parentNode.removeChild(existing)

    ldScriptEl = document.createElement('script')
    ldScriptEl.type = 'application/ld+json'
    ldScriptEl.setAttribute('data-ld', 'herosection')
    ldScriptEl.text = JSON.stringify(jsonLd.value)
    document.head.appendChild(ldScriptEl)
  } catch (e) {
    // Soft fail: ne casse pas l'app si DOM non dispo
    console.warn('[HeroSection] JSON-LD injection skipped:', e)
  }
})

onUnmounted(() => {
  // Nettoyer l'événement scroll
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }

  // Nettoyer le script JSON-LD
  if (ldScriptEl && ldScriptEl.parentNode) {
    ldScriptEl.parentNode.removeChild(ldScriptEl)
    ldScriptEl = null
  }
})
</script>

<style scoped>
/* Transition smooth pour le parallax - easing amélioré */
[ref="mapBackground"] {
  transition: transform 0.3s cubic-bezier(0.33, 1, 0.68, 1);
}

/* Animation d'apparition pour le texte flottant */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.space-y-6 {
  animation: fadeIn 1s ease-out;
}

/* Animation des boutons */
@keyframes buttonGlow {
  0%, 100% {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(16, 185, 129, 0.3);
  }
  50% {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.5);
  }
}

/* Appliquer l'animation breathing glow au CTA primaire - ralentie pour subtilité */
.cta-primary {
  animation: buttonGlow 8s ease-in-out infinite;
}

/* Mobile par défaut - pleine largeur avec "slice" */
.map-container {
  transform: translateY(-20px);
  transform-origin: center;
}

/* Desktop - remonter la carte pour afficher le Cameroun entièrement */
@media (min-width: 768px) {
  .map-container {
    transform: translateY(-150px);
    transform-origin: center;
    transition: transform 0.6s ease-in-out;
  }
}
</style>

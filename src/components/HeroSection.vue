<template>
  <section class="max-w-6xl mx-auto p-6 space-y-4 relative overflow-hidden">
    <!-- Accent visuel discret (ne gêne pas le texte) -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/15 via-emerald-400/10 to-transparent"
    ></div>

    <!-- Tag / badge -->
    <div
      class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80 relative"
      role="note"
      aria-label="statut-projet"
    >
      <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
      <span>{{ tagText }}</span>
    </div>

    <!-- Title -->
    <h1 class="text-2xl md:text-3xl font-bold relative">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
        {{ titleText }}
      </span>
    </h1>

    <!-- Subtitle -->
    <p class="opacity-80 max-w-3xl relative">
      {{ subtitleText }}
    </p>

    <!-- Trust line -->
    <p v-if="trustText" class="text-xs opacity-70 relative">{{ trustText }}</p>

    <!-- Feature badges (optionnels) -->
    <div v-if="featureBadges && featureBadges.length" class="flex flex-wrap gap-2 pt-2 relative" role="list" aria-label="caractéristiques">
      <span
        v-for="(b, i) in featureBadges"
        :key="'feat'+i"
        class="px-2 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs"
        role="listitem"
      >
        {{ b }}
      </span>
    </div>

    <!-- CTA -->
    <div class="flex flex-wrap gap-3 pt-4 relative">
      <RouterLink
        v-if="investTo"
        :to="investTo"
        class="px-4 py-2 rounded-lg bg-emerald-500 text-neutral-900 font-semibold hover:opacity-90 shadow focus:outline-none focus:ring-2 focus:ring-emerald-600"
        :aria-label="ctaInvest + ' – investir'"
      >
        {{ ctaInvest }}
      </RouterLink>
      <RouterLink
        v-if="secondaryTo"
        :to="secondaryTo"
        class="px-4 py-2 rounded-lg border border-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-600"
        :aria-label="ctaSecondary + ' – contact'"
      >
        {{ ctaSecondary }}
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
/**
 * HeroSection.vue
 * - Texte vendeur et robuste (i18n avec fallbacks pour éviter les warnings).
 * - Overrides via props (utilisés par Home.vue).
 * - Injection JSON-LD SEO dans <head> côté client (onMounted).
 */
import { computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

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
  if (ldScriptEl && ldScriptEl.parentNode) {
    ldScriptEl.parentNode.removeChild(ldScriptEl)
    ldScriptEl = null
  }
})
</script>

<style scoped>
/* Style sombre conservé ; micro-accent déjà dans le template.
   Accessibilité : focus ring sur les CTA, contrastes OK.
   Le gradient est discret (opacity 0.2) pour rester pro / investisseur. */
</style>

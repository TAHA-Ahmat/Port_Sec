<template>
  <section
    class="max-w-6xl mx-auto p-6 space-y-6"
    role="region"
    :aria-label="aria"
  >
    <!-- Header -->
    <header class="flex items-center gap-2 text-sm opacity-80">
      <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
      <h2 class="font-semibold">{{ resolvedTitle }}</h2>
    </header>

    <!-- Grid : Texte à gauche + Badges à droite -->
    <div class="grid gap-8 md:grid-cols-2">
      <!-- Texte d'introduction -->
      <div class="space-y-3">
        <p class="opacity-90">{{ resolvedIntro }}</p>
        <slot name="extra-text" />
      </div>

      <!-- Badges avec icônes -->
      <div class="grid gap-4" :class="badgesGridClass">
        <article
          v-for="(badge, i) in resolvedBadges"
          :key="i + ':' + badge.title"
          class="rounded-xl border border-neutral-800 bg-neutral-900 p-4 hover:border-emerald-700/40 transition-colors focus-within:ring-2 focus-within:ring-emerald-500"
          tabindex="0"
          role="article"
        >
          <div class="flex items-start gap-3">
            <!-- Icône -->
            <span
              v-if="badge.icon"
              class="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-neutral-800 text-2xl"
              aria-hidden="true"
            >
              <component :is="badge.icon" v-if="isComponent(badge.icon)" />
              <span v-else>{{ badge.icon }}</span>
            </span>

            <!-- Texte -->
            <div class="flex-1 space-y-1">
              <h3 class="font-medium text-sm">{{ badge.title }}</h3>
              <p class="text-sm opacity-80">{{ badge.text }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Footer slot -->
    <div>
      <slot name="footer" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  /** Titre de la section */
  title: { type: String, default: '' },

  /** Texte d'introduction */
  intro: { type: String, default: '' },

  /** Badges : tableau d'objets { icon, title, text } */
  badges: { type: Array, default: null },

  /** Nombre de lignes pour les badges (1 ou 2 par colonne) */
  badgesRows: { type: Number, default: 3 },

  /** Accessibilité */
  ariaLabel: { type: String, default: '' }
})

const { t, tm } = useI18n()

// Accessibilité
const aria = computed(() =>
  props.ariaLabel || t('gpm.title', 'À propos de GPM')
)

// Titre
const resolvedTitle = computed(() =>
  props.title || t('gpm.title', 'Un opérateur tchadien de référence dans la logistique régionale')
)

// Intro
const resolvedIntro = computed(() =>
  props.intro || t('gpm.intro', '')
)

// Badges depuis i18n ou props
const resolvedBadges = computed(() => {
  if (Array.isArray(props.badges) && props.badges.length) return props.badges

  const badges = tm('gpm.badges')
  if (Array.isArray(badges) && badges.length) return badges

  // Fallback
  return [
    { icon: '🇹🇩', title: 'Basée à N\'Djamena', text: 'Société tchadienne' },
    { icon: '⚙️', title: 'Ingénierie', text: 'Infrastructures modernes' },
    { icon: '🌍', title: 'CEMAC', text: 'Couverture régionale' }
  ]
})

// Grid pour les badges (1 colonne mobile, 1 ou 2 lignes desktop selon badgesRows)
const badgesGridClass = computed(() => {
  const rows = Math.max(1, Math.min(3, +props.badgesRows || 3))
  return 'grid-cols-1 gap-4'
})

// Utilitaire
const isComponent = (x) => typeof x === 'object' || typeof x === 'function'
</script>

<style scoped>
:focus-visible {
  outline: none;
}
</style>

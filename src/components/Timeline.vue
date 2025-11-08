<template>
  <section
    class="max-w-6xl mx-auto p-6 space-y-6"
    role="region"
    :aria-label="aria"
  >
    <!-- Header -->
    <header class="space-y-2">
      <div class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ resolvedTitle }}</h2>
      </div>
      <p v-if="intro" class="opacity-80">{{ intro }}</p>
    </header>

    <!-- Timeline horizontal -->
    <div class="relative">
      <!-- Ligne de connexion animée (desktop uniquement) -->
      <div
        class="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-red-600/40 via-red-500/60 to-red-600/40 rounded-full timeline-pulse"
        aria-hidden="true"
      ></div>

      <!-- Items -->
      <div
        class="grid gap-6 md:gap-8"
        :class="gridClass"
        role="list"
      >
        <article
          v-for="(item, i) in resolvedItems"
          :key="i + ':' + item.period"
          class="relative group"
          role="listitem"
          tabindex="0"
        >
          <!-- Point sur la timeline (desktop) -->
          <div
            class="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 items-center justify-center z-10"
            :class="statusClass(item.status, item.color)"
            aria-hidden="true"
          >
            <span class="text-xs">{{ item.statusIcon || '•' }}</span>
          </div>

          <!-- Carte -->
          <div
            class="rounded-2xl border relative overflow-hidden min-h-72 md:min-h-80 hover:border-emerald-700/40 transition-colors focus-within:ring-2 focus-within:ring-emerald-500 flex flex-col"
            :class="borderClass(item.status, item.color)"
          >
            <!-- Background image fixe selon l'index -->
            <div
              class="absolute inset-0 z-0"
              :style="getBackgroundImage(i)"
            ></div>

            <!-- Overlay sombre pour lisibilité (réduit pour voir plus l'image) -->
            <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/65 to-black/60 z-0"></div>

            <!-- Contenu avec z-index supérieur -->
            <div class="relative z-10 p-4 md:pt-16 flex-1 flex flex-col">
            <!-- Badge statut (mobile) -->
            <div class="flex items-center justify-between mb-3 md:hidden">
              <span
                class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
                :class="statusBadgeClass(item.status, item.color)"
              >
                <span>{{ item.statusIcon }}</span>
                <span>{{ item.status }}</span>
              </span>
            </div>

            <!-- Période -->
            <p class="text-xs opacity-80 mb-1 text-shadow">{{ item.period }}</p>

            <!-- Titre -->
            <h3 class="font-semibold mb-2 text-shadow">{{ item.title }}</h3>

            <!-- Description -->
            <p class="text-sm opacity-90 text-shadow">{{ item.description }}</p>

            <!-- Badge statut (desktop) -->
            <div class="hidden md:flex mt-3">
              <span
                class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
                :class="statusBadgeClass(item.status, item.color)"
              >
                <span>{{ item.statusIcon }}</span>
                <span>{{ item.status }}</span>
              </span>
            </div>
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
  /** Items : tableau d'objets { period, title, status, statusIcon, description } */
  items: { type: Array, default: null },

  /** Titre de la section */
  title: { type: String, default: '' },

  /** Texte d'introduction */
  intro: { type: String, default: '' },

  /** Accessibilité */
  ariaLabel: { type: String, default: '' }
})

const { t, tm } = useI18n()

// Import des images du Port Sec
const portImages = [
  new URL('../assets/images/image_haut.jpg', import.meta.url).href,
  new URL('../assets/images/image_vue_laterale.jpg', import.meta.url).href,
  new URL('../assets/images/image_vue_laterale_second.jpg', import.meta.url).href,
  new URL('../assets/images/image_vue_laterale_third.jpg', import.meta.url).href
]

// Fonction pour obtenir l'image de fond selon l'index avec taille uniforme
const getBackgroundImage = (index) => {
  return {
    backgroundImage: `url(${portImages[index]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}

// Accessibilité
const aria = computed(() =>
  props.ariaLabel || t('vision.title', 'Notre Vision 2032')
)

// Titre
const resolvedTitle = computed(() =>
  props.title || t('vision.title', 'Notre Vision 2032')
)

// Intro (optionnel)
const intro = computed(() =>
  props.intro || t('vision.intro', '')
)

// Items depuis i18n ou props
const resolvedItems = computed(() => {
  if (Array.isArray(props.items) && props.items.length) return props.items

  const timeline = tm('vision.timeline')
  if (Array.isArray(timeline) && timeline.length) return timeline

  // Fallback
  return [
    {
      period: '2024–2025',
      title: 'Phase 1',
      status: 'En cours',
      statusIcon: '✅',
      description: 'Démarrage du projet'
    }
  ]
})

// Grille responsive
const gridClass = computed(() => {
  const count = resolvedItems.value.length
  if (count === 3) return 'grid-cols-1 md:grid-cols-3'
  if (count === 4) return 'grid-cols-1 md:grid-cols-4'
  if (count === 2) return 'grid-cols-1 md:grid-cols-2'
  return 'grid-cols-1 md:grid-cols-3'
})

// Classes de couleur pour le point sur la ligne
const statusClass = (status, color) => {
  const c = color?.toLowerCase() || ''
  if (c === 'yellow') {
    return 'border-yellow-500 bg-yellow-500/20 text-yellow-300'
  }
  if (c === 'green') {
    return 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
  }
  if (c === 'blue') {
    return 'border-blue-500 bg-blue-500/20 text-blue-300'
  }
  if (c === 'red') {
    return 'border-red-500 bg-red-500/20 text-red-300'
  }
  // Fallback basé sur le statut
  const s = status?.toLowerCase() || ''
  if (s.includes('cours') || s.includes('progress')) {
    return 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
  }
  return 'border-blue-500 bg-blue-500/20 text-blue-300'
}

// Classes pour la bordure de la carte
const borderClass = (status, color) => {
  const c = color?.toLowerCase() || ''
  if (c === 'yellow') {
    return 'border-yellow-800/40'
  }
  if (c === 'green') {
    return 'border-emerald-800/40'
  }
  if (c === 'blue') {
    return 'border-blue-800/40'
  }
  if (c === 'red') {
    return 'border-red-800/40'
  }
  // Fallback
  const s = status?.toLowerCase() || ''
  if (s.includes('cours') || s.includes('progress')) {
    return 'border-emerald-800/40'
  }
  return 'border-blue-800/40'
}

// Classes pour le badge de statut
const statusBadgeClass = (status, color) => {
  const c = color?.toLowerCase() || ''
  if (c === 'yellow') {
    return 'bg-yellow-900/30 text-yellow-300 border border-yellow-700/50'
  }
  if (c === 'green') {
    return 'bg-emerald-900/30 text-emerald-300 border border-emerald-700/50'
  }
  if (c === 'blue') {
    return 'bg-blue-900/30 text-blue-300 border border-blue-700/50'
  }
  if (c === 'red') {
    return 'bg-red-900/30 text-red-300 border border-red-700/50'
  }
  // Fallback
  const s = status?.toLowerCase() || ''
  if (s.includes('cours') || s.includes('progress')) {
    return 'bg-emerald-900/30 text-emerald-300 border border-emerald-700/50'
  }
  return 'bg-blue-900/30 text-blue-300 border border-blue-700/50'
}
</script>

<style scoped>
:focus-visible {
  outline: none;
}

/* Text shadow pour meilleure lisibilité sur images */
.text-shadow {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(0, 0, 0, 0.8);
}

/* Animation hover sur les cartes */
.group:hover .rounded-2xl {
  transform: translateY(-2px);
  transition: transform 0.2s ease-out;
}

/* Animation pulsation ligne rouge */
.timeline-pulse {
  animation: timelinePulse 3s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(220, 38, 38, 0.3);
}

@keyframes timelinePulse {
  0%, 100% {
    opacity: 0.6;
    box-shadow: 0 0 10px rgba(220, 38, 38, 0.3);
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 20px rgba(220, 38, 38, 0.6);
  }
}
</style>

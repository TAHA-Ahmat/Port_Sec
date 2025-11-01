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
      <p v-if="intro" class="opacity-80 text-sm">{{ intro }}</p>
    </header>

    <!-- Carrousel de logos -->
    <div
      v-if="resolvedLogos.length > 0"
      class="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 py-8"
      role="list"
    >
      <div
        ref="carouselRef"
        class="flex gap-8 items-center"
        :class="{ 'animate-scroll': autoScroll && resolvedLogos.length > 4 }"
      >
        <!-- Logos (dupliqués pour effet infini si autoScroll) -->
        <template v-if="autoScroll && resolvedLogos.length > 4">
          <a
            v-for="(logo, i) in [...resolvedLogos, ...resolvedLogos]"
            :key="'logo-' + i"
            :href="logo.url || '#'"
            :target="logo.url ? '_blank' : undefined"
            rel="noopener"
            class="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-4"
            role="listitem"
            :aria-label="logo.alt || 'Partenaire'"
          >
            <img
              v-if="logo.src"
              :src="logo.src"
              :alt="logo.alt || 'Logo partenaire'"
              class="max-w-full max-h-full object-contain"
              loading="lazy"
            />
            <span v-else class="text-2xl opacity-50">{{ logo.alt || '🤝' }}</span>
          </a>
        </template>

        <!-- Logos (affichage normal si peu de logos ou pas d'auto-scroll) -->
        <template v-else>
          <a
            v-for="(logo, i) in resolvedLogos"
            :key="'logo-' + i"
            :href="logo.url || '#'"
            :target="logo.url ? '_blank' : undefined"
            rel="noopener"
            class="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-4 mx-auto"
            role="listitem"
            :aria-label="logo.alt || 'Partenaire'"
          >
            <img
              v-if="logo.src"
              :src="logo.src"
              :alt="logo.alt || 'Logo partenaire'"
              class="max-w-full max-h-full object-contain"
              loading="lazy"
            />
            <span v-else class="text-2xl opacity-50">{{ logo.alt || '🤝' }}</span>
          </a>
        </template>
      </div>
    </div>

    <!-- Message si pas de logos -->
    <div
      v-else
      class="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center opacity-60"
    >
      <p class="text-sm">{{ t('partners.noLogos', 'Logos des partenaires à venir') }}</p>
    </div>

    <!-- Footer slot -->
    <div>
      <slot name="footer" />
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  /** Logos : tableau d'objets { src, alt, url? } */
  logos: { type: Array, default: null },

  /** Titre de la section */
  title: { type: String, default: '' },

  /** Texte d'introduction */
  intro: { type: String, default: '' },

  /** Activer le défilement automatique */
  autoScroll: { type: Boolean, default: true },

  /** Accessibilité */
  ariaLabel: { type: String, default: '' }
})

const { t, tm } = useI18n()

const carouselRef = ref(null)

// Accessibilité
const aria = computed(() =>
  props.ariaLabel || t('partners.title', 'Nos partenaires')
)

// Titre
const resolvedTitle = computed(() =>
  props.title || t('partners.title', 'Ils nous accompagnent')
)

// Intro
const intro = computed(() =>
  props.intro || t('partners.intro', '')
)

// Logos depuis i18n ou props
const resolvedLogos = computed(() => {
  if (Array.isArray(props.logos) && props.logos.length) return props.logos

  const logos = tm('partners.logos')
  if (Array.isArray(logos) && logos.length) return logos

  // Fallback vide (on affiche un message)
  return []
})
</script>

<style scoped>
/* Animation de défilement infini */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
  will-change: transform;
}

/* Pause au hover */
.animate-scroll:hover {
  animation-play-state: paused;
}

:focus-visible {
  outline: none;
}
</style>

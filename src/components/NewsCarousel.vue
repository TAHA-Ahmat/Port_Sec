<template>
  <section
    class="max-w-6xl mx-auto p-6 space-y-6"
    role="region"
    :aria-label="aria"
  >
    <!-- Header -->
    <header class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ resolvedTitle }}</h2>
      </div>

      <!-- Navigation (desktop uniquement) -->
      <div v-if="resolvedNews.length > 1" class="hidden md:flex items-center gap-2">
        <button
          @click="prev"
          class="p-2 rounded-lg border border-neutral-800 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          :disabled="currentIndex === 0 && !autoplay"
          aria-label="Actualité précédente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button
          @click="next"
          class="p-2 rounded-lg border border-neutral-800 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          :disabled="currentIndex === resolvedNews.length - 1 && !autoplay"
          aria-label="Actualité suivante"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Carousel -->
    <div class="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
      <div
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        role="list"
      >
        <article
          v-for="(item, i) in resolvedNews"
          :key="i + ':' + item.title"
          class="w-full flex-shrink-0 p-6 md:p-8"
          role="listitem"
        >
          <div class="max-w-3xl mx-auto space-y-3">
            <!-- Date -->
            <p class="text-xs opacity-60">{{ item.date }}</p>

            <!-- Titre -->
            <h3 class="text-lg md:text-xl font-semibold">{{ item.title }}</h3>

            <!-- Texte -->
            <p class="opacity-80">{{ item.text }}</p>

            <!-- Lien optionnel -->
            <div v-if="item.link" class="pt-2">
              <a
                :href="item.link"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
              >
                <span>{{ t('news.readMore', 'En savoir plus') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Dots de navigation -->
    <div
      v-if="resolvedNews.length > 1"
      class="flex items-center justify-center gap-2"
      role="tablist"
      aria-label="Navigation actualités"
    >
      <button
        v-for="(_, i) in resolvedNews"
        :key="'dot-' + i"
        @click="goTo(i)"
        class="w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
        :class="currentIndex === i ? 'bg-emerald-500 w-6' : 'bg-neutral-700 hover:bg-neutral-600'"
        :aria-label="`Actualité ${i + 1}`"
        :aria-selected="currentIndex === i"
        role="tab"
      ></button>
    </div>

    <!-- Footer slot -->
    <div>
      <slot name="footer" />
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  /** News : tableau d'objets { date, title, text, link? } */
  news: { type: Array, default: null },

  /** Titre de la section */
  title: { type: String, default: '' },

  /** Activer l'autoplay */
  autoplay: { type: Boolean, default: true },

  /** Délai autoplay (ms) */
  autoplayDelay: { type: Number, default: 5000 },

  /** Accessibilité */
  ariaLabel: { type: String, default: '' }
})

const { t, tm } = useI18n()

const currentIndex = ref(0)
let autoplayInterval = null

// Accessibilité
const aria = computed(() =>
  props.ariaLabel || t('news.title', 'Actualités')
)

// Titre
const resolvedTitle = computed(() =>
  props.title || t('news.title', 'Avancées du projet')
)

// News depuis i18n ou props
const resolvedNews = computed(() => {
  if (Array.isArray(props.news) && props.news.length) return props.news

  const items = tm('news.items')
  if (Array.isArray(items) && items.length) return items

  // Fallback
  return []
})

// Navigation
const next = () => {
  if (currentIndex.value < resolvedNews.value.length - 1) {
    currentIndex.value++
  } else if (props.autoplay) {
    currentIndex.value = 0
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else if (props.autoplay) {
    currentIndex.value = resolvedNews.value.length - 1
  }
}

const goTo = (index) => {
  currentIndex.value = index
  resetAutoplay()
}

// Autoplay
const startAutoplay = () => {
  if (!props.autoplay || resolvedNews.value.length <= 1) return
  autoplayInterval = setInterval(() => {
    next()
  }, props.autoplayDelay)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
:focus-visible {
  outline: none;
}

/* Animation douce des slides */
.transition-transform {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

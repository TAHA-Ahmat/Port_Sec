<template>
  <section
    class="max-w-6xl mx-auto p-6 space-y-6"
    role="region"
    :aria-label="aria"
  >
    <!-- Header -->
    <header class="flex items-center gap-2 text-sm opacity-80">
      <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
      <h2 class="font-semibold">{{ title }}</h2>
    </header>

    <!-- Intro (optionnelle) -->
    <p v-if="intro" class="opacity-80">
      {{ intro }}
    </p>

    <!-- Liste -->
    <ul class="grid gap-3" :class="gridClass" role="list">
      <li
        v-for="(item, idx) in items"
        :key="idx + ':' + itemKey(item)"
        class="flex items-start gap-3"
        role="listitem"
        tabindex="0"
      >
        <span
          v-if="bulletIcon"
          class="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-neutral-800 text-[10px] opacity-80"
          aria-hidden="true"
        >
          <component :is="bulletIcon" v-if="isComponent(bulletIcon)" />
          <span v-else>{{ bulletIcon }}</span>
        </span>
        <span v-else class="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-600" aria-hidden="true"></span>

        <div class="flex-1">
          <span class="opacity-90" :class="dense ? 'text-sm' : ''">
            {{ itemText(item) }}
          </span>
          <p v-if="itemNote(item)" class="text-xs opacity-60 mt-1">
            {{ itemNote(item) }}
          </p>
        </div>
      </li>
    </ul>

    <!-- Footer slot (optionnel) -->
    <div>
      <slot name="footer" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  // Compat existante
  titleOverride: { type: String, default: '' },
  bullets: { type: Array, default: null },

  // Options ajoutées, non bloquantes
  introOverride: { type: String, default: '' },
  showIntro: { type: Boolean, default: true },
  columns: { type: Number, default: 2 },      // 1..3
  dense: { type: Boolean, default: false },
  bulletIcon: { type: [String, Object, Function], default: '' },
  ariaLabel: { type: String, default: '' }
})

const { t, tm } = useI18n()

// Titre
const title = computed(() =>
  props.titleOverride ||
  t('home.problem.title', 'Contexte & problématique')
)

// ARIA
const aria = computed(() =>
  props.ariaLabel || title.value || t('home.problem.title', 'Contexte & problématique')
)

// Intro (props → home.problem.intro → impact.subtitle)
const intro = computed(() => {
  if (!props.showIntro) return ''
  if (props.introOverride) return props.introOverride
  const i18nIntro = t('home.problem.intro', '')
  if (i18nIntro) return i18nIntro
  const fallback = t('impact.subtitle', '')
  return fallback || ''
})

// Items (props → home.problem.bullets → impact.benefits)
const items = computed(() => {
  if (Array.isArray(props.bullets) && props.bullets.length) return props.bullets
  const fromNew = tm('home.problem.bullets')
  if (Array.isArray(fromNew) && fromNew.length) return fromNew
  const fromOld = tm('impact.benefits')
  if (Array.isArray(fromOld) && fromOld.length) return fromOld
  return []
})

// Grille
const gridClass = computed(() => {
  const c = Math.min(3, Math.max(1, +props.columns || 2))
  return {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3'
  }[c]
})

// Helpers
const isComponent = (x) => typeof x === 'object' || typeof x === 'function'
const itemKey = (it) => (typeof it === 'object' ? (it.text || it.note || '') : String(it))
const itemText = (it) => (typeof it === 'object' ? (it.text || '') : it)
const itemNote = (it) => (typeof it === 'object' ? (it.note || '') : '')
</script>

<style scoped>
:focus-visible { outline: none; }
</style>

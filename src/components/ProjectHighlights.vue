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
        <h2 class="font-semibold">
          {{ resolvedTitle }}
        </h2>
      </div>
      <!-- Slot pour actions / filtres optionnels -->
      <div class="shrink-0">
        <slot name="header-extra" />
      </div>
    </header>

    <!-- Grille Highlights -->
    <div class="grid gap-4" :class="gridClass" role="list">
      <article
        v-for="(h, i) in resolvedItems"
        :key="i + ':' + (h.title || h)"
        class="rounded-2xl border border-neutral-800 bg-neutral-900 p-4 focus-within:ring-2 focus-within:ring-emerald-500 hover:border-emerald-700/40 hover:bg-neutral-900/80 transition-colors"
        role="listitem"
        tabindex="0"
      >
        <div class="flex items-start gap-3">
          <span
            v-if="icon"
            class="inline-flex items-center justify-center h-6 w-6 rounded-md bg-neutral-800 text-xs opacity-80"
            aria-hidden="true"
          >
            <component :is="icon" v-if="isComponent(icon)" />
            <span v-else>★</span>
          </span>

          <div class="flex-1 space-y-1">
            <h3 v-if="typeof h === 'object' && h.title" class="font-medium">
              <span v-if="numbered" class="opacity-60">{{ i + 1 }}. </span>{{ h.title }}
            </h3>
            <p class="opacity-90" :class="dense ? 'text-sm' : ''">
              {{ typeof h === 'object' ? (h.text || h.title) : h }}
            </p>
            <p v-if="typeof h === 'object' && h.note" class="text-xs opacity-60">
              {{ h.note }}
            </p>
          </div>
        </div>
      </article>
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
  items: { type: Array, default: null },         // string[] | {title,text?,note?}[]
  title: { type: String, default: '' },          // titre custom sinon i18n
  columns: { type: Number, default: 2 },         // 2..4
  dense: { type: Boolean, default: false },      // texte compact
  icon: { type: [String, Object, Function], default: '' },
  numbered: { type: Boolean, default: false },   // 1., 2., 3.
  ariaLabel: { type: String, default: '' }
})

const { t, tm } = useI18n()

const aria = computed(() =>
  props.ariaLabel || t('highlights.title', 'Points forts')
)

const resolvedTitle = computed(() =>
  props.title || t('highlights.title', 'Points forts')
)

const resolvedItems = computed(() => {
  // 1) props.items prime sur i18n
  if (Array.isArray(props.items) && props.items.length) return props.items

  // 2) i18n (tableau)
  const arr = tm('highlights.items')
  if (Array.isArray(arr) && arr.length) return arr

  // 3) fallback optionnel depuis home.solution.features
  const features = tm('home.solution.features')
  if (Array.isArray(features) && features.length) return features.slice(0, 3)

  // 4) fallback neutre (pas de clé i18n pour éviter clé brute)
  return [
    { title: 'Réduction de coûts logistiques', text: 'Jusqu’à −30 % à −40 % grâce au guichet unique et à la baisse des manutentions.' },
    { title: 'Traçabilité & sécurité',        text: 'Digitalisation douanière, suivi GPS et contrôles intégrés pour des flux fiables.' },
    { title: 'Hub CEMAC compétitif',           text: 'Positionnement stratégique à Douala au service des opérateurs tchadiens.' }
  ]
})

const gridClass = computed(() => {
  const c = Math.min(4, Math.max(2, +props.columns || 2))
  const map = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }
  return map[c]
})

const isComponent = (x) => typeof x === 'object' || typeof x === 'function'
</script>

<style scoped>
:focus-visible { outline: none; }
</style>

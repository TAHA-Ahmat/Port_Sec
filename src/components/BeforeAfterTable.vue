<template>
  <section
    class="max-w-6xl mx-auto p-6 space-y-6"
    role="region"
    :aria-label="aria"
  >
    <!-- Header -->
    <header v-if="rowsList.length" class="flex items-center gap-2 text-sm opacity-80">
      <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
      <h2 class="font-semibold">{{ sectionTitle }}</h2>
    </header>

    <!-- Lead (optionnel) -->
    <p v-if="showLead && leadText" class="opacity-80">
      {{ leadText }}
    </p>

    <!-- Tableau -->
    <div v-if="rowsList.length" class="overflow-hidden rounded-2xl border border-neutral-800">
      <table class="w-full text-sm">
        <caption class="sr-only">{{ sectionTitle }}</caption>
        <thead class="bg-neutral-900/60">
          <tr class="text-left">
            <th class="px-4 py-3 w-1/3">{{ metricLabel }}</th>
            <th class="px-4 py-3">{{ labelsResolved.before }}</th>
            <th class="px-4 py-3">{{ labelsResolved.after }}</th>
            <th v-if="showDelta && hasAnyDelta" class="px-4 py-3 w-[9rem]">{{ deltaHeader }}</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(raw, i) in orderedRows"
            :key="i + ':' + (raw.metric || raw)"
            class="border-t border-neutral-800"
            :class="zebra && i % 2 === 1 ? 'bg-neutral-950/40' : ''"
          >
            <!-- Col 1: Indicateur + badge TOP éventuel -->
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                <span class="opacity-90">{{ normalizeRow(raw).metric }}</span>
                <span
                  v-if="showTopBadges && isTopMetric(normalizeRow(raw).metric)"
                  class="text-[10px] px-1.5 py-0.5 rounded-full border border-emerald-600/50 text-emerald-300/90 bg-emerald-900/10"
                  aria-label="Point clé investisseur"
                >TOP</span>
              </div>
            </td>

            <!-- Col 2: Avant -->
            <td class="px-4 py-3 opacity-80">
              {{ normalizeRow(raw).before }}
            </td>

            <!-- Col 3: Après -->
            <td class="px-4 py-3 font-medium text-emerald-300/90">
              {{ normalizeRow(raw).after }}
            </td>

            <!-- Col 4: Δ (optionnel) -->
            <td v-if="showDelta && hasAnyDelta" class="px-4 py-3">
              <span
                v-if="deltaFor(normalizeRow(raw)).text"
                class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs"
                :class="deltaFor(normalizeRow(raw)).class"
              >
                <svg v-if="deltaFor(normalizeRow(raw)).icon==='down'" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z"/></svg>
                <svg v-else-if="deltaFor(normalizeRow(raw)).icon==='up'" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8l6 6H6l6-6z"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2"/></svg>
                <span>{{ deltaFor(normalizeRow(raw)).text }}</span>
              </span>
              <span v-else class="opacity-50 text-xs">—</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Carte Impact direct (optionnelle, alimentée depuis les lignes i18n) -->
    <div v-if="showImpactCard && (impact.savingPerUnit || impact.bfrDays)" class="grid gap-3 md:grid-cols-2">
      <div v-if="impact.savingPerUnit" class="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
        <p class="text-xs opacity-70 mb-1">{{ t('home.beforeAfter.impact.savingLabel', 'Économie moyenne par EVP') }}</p>
        <p class="text-lg font-semibold text-emerald-300/90">{{ impact.savingPerUnit }}</p>
      </div>
      <div v-if="impact.bfrDays" class="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
        <p class="text-xs opacity-70 mb-1">{{ t('home.beforeAfter.impact.wcLabel', 'Jours de BFR libérés') }}</p>
        <p class="text-lg font-semibold text-emerald-300/90">{{ impact.bfrDays }}</p>
      </div>
    </div>

    <!-- Notes -->
    <div v-if="notesList.length" class="space-y-1">
      <p v-for="(n, i) in notesList" :key="'n'+i" class="text-xs opacity-60">{{ n }}</p>
    </div>

    <!-- CTA dataroom (facultatif) -->
    <div v-if="showCta && dataroomCta" class="pt-1">
      <RouterLink
        to="/dataroom"
        class="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-900"
        aria-label="Ouvrir l'espace documentaire"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-4 3v-3H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>
        <span>{{ dataroomCta }}</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
/**
 * BeforeAfterTable.vue — version investisseur (vendeur, sans régression)
 * - Consomme i18n: home.beforeAfter.{title,metric,labels,rows[],notes[]}
 * - Options: showDelta, showLead, showTopBadges, showImpactCard, showCta, zebra, dense, sortMode
 * - Δ auto pour jours / heures / minutes / % / XAF / k (parsing tolérant FR/EN)
 * - Props historiques (title, rows, labels, notes) PRIMENT si passées
 */
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  /* Props existantes */
  title:  { type: String, default: '' },
  rows:   { type: Array,  default: null },
  labels: { type: Object, default: null },
  notes:  { type: Array,  default: null },

  /* Options non-bloquantes */
  ariaLabel:     { type: String,  default: '' },
  dense:         { type: Boolean, default: false },
  zebra:         { type: Boolean, default: false },
  showDelta:     { type: Boolean, default: true },
  showLead:      { type: Boolean, default: true },
  showTopBadges: { type: Boolean, default: true },
  showImpactCard:{ type: Boolean, default: true },
  showCta:       { type: Boolean, default: true },
  /** Tri: 'none' (ordre i18n) | 'investor' (remonte délais/coûts/manutentions/éco/BFR) */
  sortMode:      { type: String,  default: 'investor' }
})

const { t, tm } = useI18n()

/* Titre / ARIA / labels */
const sectionTitle = computed(() =>
  props.title || t('home.beforeAfter.title', t('impact.title', 'Avant / Après'))
)
const aria = computed(() => props.ariaLabel || sectionTitle.value)

const metricLabel = computed(() => t('home.beforeAfter.metric', 'Indicateur'))

const defaultLabels = computed(() => ({
  before: t('home.beforeAfter.labels.before', 'Avant'),
  after:  t('home.beforeAfter.labels.after',  'Après')
}))
const labelsResolved = computed(() => Object.assign({}, defaultLabels.value, props.labels || {}))

/* Lead (optionnel) */
const leadText = computed(() => t('home.beforeAfter.lead', 'Des gains opérationnels qui se traduisent immédiatement en cash-flow.'))

/* Rows / Notes (priorité: props → i18n) */
const rowsList = computed(() => {
  if (Array.isArray(props.rows) && props.rows.length) return props.rows
  const fromI18n = tm('home.beforeAfter.rows')
  return Array.isArray(fromI18n) ? fromI18n : []
})

const notesList = computed(() => {
  if (Array.isArray(props.notes) && props.notes.length) return props.notes
  const fromI18n = tm('home.beforeAfter.notes')
  return Array.isArray(fromI18n) ? fromI18n : []
})

/* CTA */
const dataroomCta = computed(() => t('dataroom.cta', 'Demander l’accès'))

/* Normalisation d’une ligne */
function normalizeRow(r) {
  if (typeof r === 'string') return { metric: r, before: '', after: '' }
  return { metric: r?.metric ?? '', before: r?.before ?? '', after: r?.after ?? '' }
}

/* Heuristique “Top” (FR/EN) */
function isTopMetric(metric = '') {
  const m = (metric || '').toLowerCase()
  return (
    m.includes('délai') || m.includes('lead time') ||
    m.includes('coût') || m.includes('cost') ||
    m.includes('manutention') || m.includes('handlings') ||
    m.includes('économie') || m.includes('saving') ||
    m.includes('bfr') || m.includes('working-capital')
  )
}

/* Tri investisseur: fait remonter les métriques clés, sinon ordre i18n */
const orderedRows = computed(() => {
  const list = rowsList.value.slice()
  if (props.sortMode !== 'investor') return list
  const score = (m) => (isTopMetric(m) ? 0 : 1) // TOP d’abord
  return list.sort((a, b) => score(normalizeRow(a).metric) - score(normalizeRow(b).metric))
})

/* Δ — header + présence */
const deltaHeader = computed(() => t('home.beforeAfter.delta', 'Δ'))
const hasAnyDelta = computed(() => orderedRows.value.some(r => !!deltaFor(normalizeRow(r)).text))

/* Parsing tolérant (FR/EN) -> { unit, value, valueAvg } */
function parseValue(str = '') {
  if (!str || typeof str !== 'string') return null
  const s = str.toLowerCase().replace(/\s+/g, ' ').trim()

  const isPercent = /%/.test(s)
  const isDay     = /(j|jour|jours|day|days)\b/.test(s)
  const isHour    = /\b(h|heure|heures|hour|hours)\b/.test(s)
  const isMin     = /\b(min|minute|minutes)\b/.test(s)
  const isXaf     = /xaf|\bfcfa\b|\bfrcfa\b/.test(s)

  const nums = (s.match(/[-−]?\d+(?:[.,]\d+)?/g) || []).map(v => parseFloat(v.replace('−','-').replace(',', '.')))
  if (!nums.length) return null

  const positiveNums = nums.map(n => Math.abs(n))
  const range = positiveNums.length >= 2
  const avg = range ? (positiveNums[0] + positiveNums[positiveNums.length - 1]) / 2 : positiveNums[0]

  if (isPercent) {
    return { unit: '%', value: positiveNums[0], valueAvg: avg }
  }
  if (isXaf) {
    const hasK = /\bk\b/.test(s)
    const base = range ? avg : positiveNums[0]
    const value = hasK ? base * 1000 : base
    return { unit: hasK ? 'kxaf' : 'xaf', value, valueAvg: value }
  }
  if (isDay)  return { unit: 'j',   value: positiveNums[0], valueAvg: avg }
  if (isHour) return { unit: 'h',   value: positiveNums[0], valueAvg: avg }
  if (isMin)  return { unit: 'min', value: positiveNums[0], valueAvg: avg }

  return { unit: 'u', value: positiveNums[0], valueAvg: avg }
}

/* Δ calcul + déco (texte/classe/icone) */
function deltaFor(row) {
  const before = parseValue(row.before)
  const after  = parseValue(row.after)

  if (!before || !after || before.unit !== after.unit) {
    // si “après” est un pourcentage de réduction sans base comparable
    if (after && after.unit === '%') {
      const v = after.valueAvg ?? after.value
      if (isFinite(v)) return decorateDelta(-Math.abs(v), '%')
    }
    return { text: '', class: '', icon: 'dot' }
  }

  const dv = (after.valueAvg ?? after.value) - (before.valueAvg ?? before.value)
  return decorateDelta(dv, before.unit)
}

function decorateDelta(delta, unit) {
  const lowerIsBetter = ['j','h','min','xaf','kxaf','%','u'].includes((unit || '').toLowerCase())
  const good = lowerIsBetter ? delta < 0 : delta > 0

  const abs = Math.abs(delta)
  const fmt = (u) => {
    if (u === 'xaf' || u === 'kxaf') {
      const val = abs
      return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(val) + (u === 'kxaf' ? '' : '')
    }
    if (u === '%')  return (abs % 1 ? abs.toFixed(1) : Math.round(abs)) + ' %'
    if (u === 'h')  return (abs % 1 ? abs.toFixed(1) : Math.round(abs)) + ' h'
    if (u === 'min')return (abs % 1 ? abs.toFixed(0) : Math.round(abs)) + ' min'
    if (u === 'j')  return (abs % 1 ? abs.toFixed(1) : Math.round(abs)) + ' j'
    return (abs % 1 ? abs.toFixed(1) : Math.round(abs))
  }

  const text  = delta === 0 ? '0' : (good ? '− ' : '+ ') + fmt(unit)
  const klass = good
    ? 'bg-emerald-500/10 text-emerald-300/90 border border-emerald-700/40'
    : 'bg-amber-500/10 text-amber-300/90 border border-amber-700/40'
  const icon  = good ? 'down' : 'up'
  return { text, class: klass, icon }
}

/* Carte impact (lit les lignes déjà présentes dans i18n) */
const impact = computed(() => {
  const map = { savingPerUnit: '', bfrDays: '' }
  for (const r of rowsList.value) {
    const row = normalizeRow(r)
    const m = (row.metric || '').toLowerCase()
    if (!map.savingPerUnit && (m.includes('économie') || m.includes('saving'))) {
      map.savingPerUnit = row.after || row.before
    }
    if (!map.bfrDays && (m.includes('bfr') || m.includes('working-capital'))) {
      map.bfrDays = row.after || row.before
    }
  }
  return map
})
</script>

<style scoped>
/* Densité optionnelle (lisibilité mobile) */
:deep(table) {
  font-size: v-bind(dense ? '0.875rem' : '0.9375rem'); /* 14px / 15px */
}
/* Accessibilité focus */
:focus-visible { outline: none; }
/* Douce transition sur les puces Δ */
td .inline-flex { transition: background-color .2s ease, color .2s ease, border-color .2s ease; }
</style>

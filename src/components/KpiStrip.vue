<template>
  <section
    class="max-w-6xl mx-auto p-6"
    :aria-label="aria"
    role="region"
  >
    <!-- En-tête (facultatif, piloté par props) -->
    <header v-if="showTitle" class="mb-3 flex items-center gap-2 text-sm opacity-80">
      <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
      <h2 class="font-semibold">
        {{ resolvedTitle }}
      </h2>
    </header>

    <!-- Liste KPI (finance uniquement) -->
    <div
      class="grid gap-4"
      :class="gridClass"
      role="list"
    >
      <article
        v-for="(kpi, i) in resolvedItems"
        :key="i + (kpi.label || '')"
        role="listitem"
        class="group rounded-2xl border border-neutral-800 bg-neutral-900 p-4 focus-within:ring-2 focus-within:ring-emerald-500"
        :title="kpi.tooltip || ''"
        tabindex="0"
      >
        <p class="text-xs opacity-60 flex items-center gap-2">
          <span v-if="kpi.icon" class="inline-flex items-center justify-center h-4 w-4 opacity-70" aria-hidden="true">
            <component :is="kpi.icon" v-if="isComponent(kpi.icon)"/>
            <span v-else>{{ kpi.icon }}</span>
          </span>
          <span>{{ kpi.label }}</span>
          <span v-if="kpi.unit" class="opacity-50">({{ kpi.unit }})</span>
        </p>

        <p
          class="mt-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300"
          :class="dense ? 'text-lg' : 'text-xl'"
          :aria-label="kpi.aria || kpi.label"
        >
          {{ kpi.value }}
        </p>

        <p v-if="kpi.note" class="mt-1 text-xs opacity-60">
          {{ kpi.note }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
// =========================================
// KpiStrip.vue — FINANCE ONLY (contrat verrouillé)
// - N'affiche QUE : CAPEX / Fonds propres / Dette / APD
// - Consomme : kpi.* + kpiValues.*
// - AUCUNE référence à home.kpiOps.*
// - La légende financeBreakdown.* se gère dans la VUE, pas ici.
// =========================================
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  /**
   * items : liste d'objets { label, value, unit?, note?, tooltip?, aria?, icon? }
   * Si fourni, PRIME sur i18n (utile pour tests ou overrides ponctuels).
   */
  items: { type: Array, default: null },

  /** Titre explicite (facultatif). Par défaut, aucun titre pour éviter le doublon. */
  title: { type: String, default: '' },

  /** Afficher le titre oui/non (par défaut: non pour limiter les doublons visuels). */
  showTitle: { type: Boolean, default: false },

  /** Typo plus compacte */
  dense: { type: Boolean, default: false },

  /** Colonnes responsives (2..5) */
  columns: { type: Number, default: 4 },

  /** aria-label personnalisé pour la section */
  ariaLabel: { type: String, default: '' }
})

const { t } = useI18n()

// -----------------------------
// Accessibilité
// -----------------------------
const aria = computed(() =>
  props.ariaLabel || 'Indicateurs financiers'
)

// -----------------------------
// Titre (pas d’i18n ici pour éviter d’introduire une clé non prévue)
// -----------------------------
const resolvedTitle = computed(() => props.title)

// -----------------------------
// Items FINANCE depuis i18n (contrat strict)
// -----------------------------
// Clés autorisées :
// - Labels : kpi.capex, kpi.equity, kpi.debt, kpi.apd
// - Valeurs : kpiValues.capexXaf, kpiValues.equityXaf, kpiValues.debtXaf, kpiValues.apdPct (ou apd)
const financeItemsFromI18n = computed(() => {
  const list = []

  const capex = t('kpiValues.capexXaf', '')
  if (capex) list.push({ label: t('kpi.capex', 'CAPEX'), value: capex, unit: 'XAF' })

  const eq = t('kpiValues.equityXaf', '')
  if (eq) list.push({ label: t('kpi.equity', 'Fonds propres'), value: eq, unit: 'XAF' })

  const debt = t('kpiValues.debtXaf', '')
  if (debt) list.push({ label: t('kpi.debt', 'Dette'), value: debt, unit: 'XAF' })

  const apd = t('kpiValues.apdPct', t('kpiValues.apd', ''))
  if (apd) list.push({ label: t('kpi.apd', 'APD'), value: apd })

  return list
})

// -----------------------------
// Résolution finale des items
// -----------------------------
const resolvedItems = computed(() => {
  if (Array.isArray(props.items) && props.items.length) return props.items
  return financeItemsFromI18n.value
})

// -----------------------------
// Grille responsive
// -----------------------------
const gridClass = computed(() => {
  const c = Math.min(5, Math.max(2, +props.columns || 4))
  const map = {
    2: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
  }
  return map[c] || map[4]
})

// -----------------------------
// Utilitaire : détecter un composant pour l'icône
// -----------------------------
const isComponent = (maybe) => typeof maybe === 'object' || typeof maybe === 'function'
</script>

<style scoped>
/* Focus clavier visible, sans halo natif intrusif */
:focus-visible {
  outline: none;
}
</style>

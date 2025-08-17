<template>
  <section class="w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- Capex total -->
      <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
        <div class="text-xs uppercase tracking-wide opacity-60">{{ t('kpi.capex') || '—' }}</div>
        <div class="text-lg md:text-xl font-semibold mt-1">
          <span v-if="n(capexXaf) !== null">{{ n(capexXaf) }}</span>
          <span v-else>—</span>
          <span class="text-xs opacity-60 ml-1">XAF</span>
        </div>
      </div>

      <!-- Fonds propres -->
      <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
        <div class="text-xs uppercase tracking-wide opacity-60">{{ t('kpi.equity') || '—' }}</div>
        <div class="text-lg md:text-xl font-semibold mt-1">
          <span v-if="n(equityXaf) !== null">{{ n(equityXaf) }}</span>
          <span v-else>—</span>
          <span class="text-xs opacity-60 ml-1">XAF</span>
        </div>
      </div>

      <!-- Dette -->
      <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
        <div class="text-xs uppercase tracking-wide opacity-60">{{ t('kpi.debt') || '—' }}</div>
        <div class="text-lg md:text-xl font-semibold mt-1">
          <span v-if="n(debtXaf) !== null">{{ n(debtXaf) }}</span>
          <span v-else>—</span>
          <span class="text-xs opacity-60 ml-1">XAF</span>
        </div>
      </div>

      <!-- Avancement APD (%) -->
      <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
        <div class="text-xs uppercase tracking-wide opacity-60">{{ t('kpi.apd') || '—' }}</div>
        <div class="text-lg md:text-xl font-semibold mt-1">
          <span v-if="p(apdPct) !== null">{{ p(apdPct) }}</span>
          <span v-else>—</span>
        </div>
      </div>
    </div>

    <!-- Disclaimer -->
    <p class="text-xs opacity-60 mt-3">
      {{ disclaimerText }}
    </p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Règles respectées :
 * - Nombres via props.kpi (prioritaire).
 * - Pas de $t() sur un objet entier ; on lit éventuellement l'objet complet via $tm('kpiValues') en FILET DE SÉCURITÉ,
 *   puis on N’UTILISE QUE SES CHAÎNES (ex: disclaimer). Les nombres restent pilotés par props.
 * - Fallbacks robustes : '—' si manquant.
 */
const props = defineProps({
  kpi: {
    type: Object,
    default: () => ({})
  }
})

const { t, tm, locale } = useI18n()

/* --------- Sources de nombres (props uniquement) --------- */
const capexXaf = computed(() => asNumOrNull(props.kpi?.capexXaf))
const equityXaf = computed(() => asNumOrNull(props.kpi?.equityXaf))
const debtXaf = computed(() => asNumOrNull(props.kpi?.debtXaf))
const apdPct = computed(() => asNumOrNull(props.kpi?.apdPct))

/* --------- Disclaimer (string) ---------
   On peut lire la chaîne dans kpiValues.disclaimer (i18n),
   mais on NE LIT PAS les nombres depuis i18n. */
const disclaimerText = computed(() => {
  const obj = tm('kpiValues') || {}
  return (typeof obj.disclaimer === 'string' && obj.disclaimer) || t('impact.disclaimer') || '—'
})

/* --------- Helpers --------- */
function asNumOrNull(v) {
  return typeof v === 'number' && !Number.isNaN(v) ? v : null
}

const numberFmt = computed(() => new Intl.NumberFormat(locale?.value || 'fr-FR', {
  maximumFractionDigits: 0
}))
const percentFmt = computed(() => new Intl.NumberFormat(locale?.value || 'fr-FR', {
  style: 'percent',
  maximumFractionDigits: 0
}))

const n = (val) => (val === null ? null : numberFmt.value.format(val))
const p = (val) => (val === null ? null : percentFmt.value.format(val / 100))
</script>

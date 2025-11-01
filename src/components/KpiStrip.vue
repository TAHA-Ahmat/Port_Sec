<template>
  <section
    ref="sectionRef"
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
          {{ displayValue(kpi, i) }}
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
// KpiStrip.vue — FINANCE + IMPACT (mode étendu)
// - Mode 'finance' : CAPEX / Fonds propres / Dette / APD
// - Mode 'impact' : Chiffres clés opérationnels avec counter-up animation
// - Consomme : kpi.* + kpiValues.* OU impactKpis.*
// =========================================
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  /**
   * items : liste d'objets { label, value, unit?, note?, tooltip?, aria?, icon? }
   * Si fourni, PRIME sur i18n (utile pour tests ou overrides ponctuels).
   */
  items: { type: Array, default: null },

  /** Mode : 'finance' ou 'impact' */
  mode: { type: String, default: 'finance' },

  /** Titre explicite (facultatif). Par défaut, aucun titre pour éviter le doublon. */
  title: { type: String, default: '' },

  /** Afficher le titre oui/non (par défaut: non pour limiter les doublons visuels). */
  showTitle: { type: Boolean, default: false },

  /** Activer animation counter (mode impact uniquement) */
  animated: { type: Boolean, default: true },

  /** Typo plus compacte */
  dense: { type: Boolean, default: false },

  /** Colonnes responsives (2..5) */
  columns: { type: Number, default: 4 },

  /** aria-label personnalisé pour la section */
  ariaLabel: { type: String, default: '' }
})

const { t, tm } = useI18n()

const sectionRef = ref(null)
const isVisible = ref(false)
const animatedValues = ref({})

// -----------------------------
// Accessibilité
// -----------------------------
const aria = computed(() => {
  if (props.ariaLabel) return props.ariaLabel
  return props.mode === 'impact' ? 'Indicateurs d\'impact' : 'Indicateurs financiers'
})

// -----------------------------
// Titre
// -----------------------------
const resolvedTitle = computed(() => props.title)

// -----------------------------
// Items FINANCE depuis i18n (contrat strict)
// -----------------------------
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
// Items IMPACT depuis i18n
// -----------------------------
const impactItemsFromI18n = computed(() => {
  const items = tm('impactKpis.items')
  if (Array.isArray(items) && items.length) return items
  return []
})

// -----------------------------
// Résolution finale des items selon le mode
// -----------------------------
const resolvedItems = computed(() => {
  if (Array.isArray(props.items) && props.items.length) return props.items

  if (props.mode === 'impact') {
    return impactItemsFromI18n.value
  }

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

// -----------------------------
// Animation counter-up (mode impact uniquement)
// -----------------------------
const extractNumber = (value) => {
  if (typeof value === 'number') return value
  if (typeof value !== 'string') return 0

  // Extraire le nombre (gérer les signes négatifs, espaces, virgules, etc.)
  const cleaned = value.replace(/[^\d.-]/g, '')
  const num = parseFloat(cleaned)
  return isNaN(num) ? 0 : num
}

const animateValue = (index, targetValue, duration = 2000) => {
  const target = extractNumber(targetValue)
  if (target === 0) {
    animatedValues.value[index] = targetValue
    return
  }

  const startTime = performance.now()
  const isNegative = target < 0
  const absTarget = Math.abs(target)

  const step = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(easeOut * absTarget)

    // Formater selon le type de nombre
    const formatted = isNegative ? `−${current}` : current.toLocaleString()
    animatedValues.value[index] = formatted

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      // Valeur finale exacte
      animatedValues.value[index] = targetValue
    }
  }

  requestAnimationFrame(step)
}

const setupIntersectionObserver = () => {
  if (!props.animated || props.mode !== 'impact') return
  if (typeof IntersectionObserver === 'undefined') {
    // Pas de support, afficher les valeurs directement
    resolvedItems.value.forEach((item, i) => {
      animatedValues.value[i] = item.value
    })
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isVisible.value) {
        isVisible.value = true
        // Démarrer les animations
        resolvedItems.value.forEach((item, i) => {
          animateValue(i, item.value)
        })
        observer.disconnect()
      }
    })
  }, { threshold: 0.3 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
}

// Afficher la valeur (animée ou statique)
const displayValue = (item, index) => {
  if (props.mode === 'impact' && props.animated && animatedValues.value[index] !== undefined) {
    return animatedValues.value[index]
  }
  return item.value
}

onMounted(() => {
  setupIntersectionObserver()
})
</script>

<style scoped>
/* Focus clavier visible, sans halo natif intrusif */
:focus-visible {
  outline: none;
}
</style>

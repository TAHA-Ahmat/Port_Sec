<template>
  <section
    class="space-y-4"
    role="region"
    :aria-label="t('projectsPage.beforeAfter.title', 'Résultats attendus — Avant / Après')"
  >
    <!-- Header -->
    <header class="space-y-2">
      <h3 class="text-lg md:text-xl font-semibold">
        {{ t('projectsPage.beforeAfter.title', 'Résultats attendus — Avant / Après') }}
      </h3>
      <p class="text-sm opacity-80">
        {{ t('projectsPage.beforeAfter.intro', 'Les gains opérationnels du Port Sec du Tchad à Douala se traduisent immédiatement en amélioration de la compétitivité nationale et en réduction des coûts pour les opérateurs.') }}
      </p>
    </header>

    <!-- Tableau comparatif -->
    <div ref="scrollContainer" class="table-scroll-container overflow-x-auto relative">
      <!-- Indicateur de scroll mobile (visible seulement si le tableau déborde) -->
      <div v-if="showScrollIndicator" class="scroll-indicator md:hidden">
        <svg class="scroll-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 5l7 7-7 7"/>
        </svg>
        <span class="scroll-text">Faites défiler →</span>
      </div>

      <table ref="tableElement" class="w-full rounded-xl border border-neutral-800 bg-neutral-900">
        <thead>
          <tr class="border-b border-neutral-800">
            <th class="px-4 py-3 text-left text-sm font-semibold opacity-80">
              {{ t('projectsPage.beforeAfter.headers.indicator', 'Indicateur') }}
            </th>
            <th class="px-4 py-3 text-left text-sm font-semibold opacity-80">
              {{ t('projectsPage.beforeAfter.headers.before', 'Avant') }}
            </th>
            <th class="px-4 py-3 text-left text-sm font-semibold opacity-80">
              {{ t('projectsPage.beforeAfter.headers.after', 'Après') }}
            </th>
            <th class="px-4 py-3 text-left text-sm font-semibold bg-emerald-900/20">
              {{ t('projectsPage.beforeAfter.headers.gain', 'Gain') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in rows"
            :key="i"
            class="border-b border-neutral-800 last:border-b-0 hover:bg-neutral-800/30 transition-colors"
          >
            <td class="px-4 py-3 text-sm font-medium">{{ row.indicator }}</td>
            <td class="px-4 py-3 text-sm opacity-70">{{ row.before }}</td>
            <td class="px-4 py-3 text-sm opacity-70">{{ row.after }}</td>
            <td class="px-4 py-3 text-sm font-semibold text-emerald-300 bg-emerald-900/10">
              {{ row.gain }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Note optionnelle -->
    <p v-if="showNote" class="text-xs opacity-60">
      {{ t('projectsPage.beforeAfter.note', 'Cibles indicatives à confirmer en exploitation.') }}
    </p>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  /** Afficher la note explicative */
  showNote: { type: Boolean, default: true }
})

const { t, tm } = useI18n()

// Refs pour le container et le tableau
const scrollContainer = ref(null)
const tableElement = ref(null)
const showScrollIndicator = ref(false)

// Fonction pour vérifier si le tableau déborde
const checkScrollNeed = () => {
  if (!scrollContainer.value || !tableElement.value) return

  const containerWidth = scrollContainer.value.clientWidth
  const tableWidth = tableElement.value.scrollWidth

  // Afficher l'indicateur seulement si le tableau est plus large que le container
  showScrollIndicator.value = tableWidth > containerWidth
}

// Vérifier au montage et au resize
onMounted(() => {
  checkScrollNeed()
  window.addEventListener('resize', checkScrollNeed)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScrollNeed)
})

// Données du tableau depuis i18n ou fallback
const rows = computed(() => {
  const items = tm('projectsPage.beforeAfter.rows')
  if (Array.isArray(items) && items.length) return items

  // Fallback
  return [
    {
      indicator: "Délais moyens Douala–N'Djamena",
      before: '≈ 30 jours',
      after: '≈ 5 jours',
      gain: '− 25 jours'
    },
    {
      indicator: 'Manutentions',
      before: '≥ 4',
      after: '1',
      gain: '− 3 opérations'
    },
    {
      indicator: 'Coûts logistiques',
      before: 'Élevés',
      after: '−30 à −40 %',
      gain: '−35 % (moyenne)'
    },
    {
      indicator: 'Services',
      before: 'Dispersés',
      after: 'Centralisés (guichet unique)',
      gain: '—'
    }
  ]
})
</script>

<style scoped>
/* Container du tableau avec scroll */
.table-scroll-container {
  position: relative;
  -webkit-overflow-scrolling: touch; /* Smooth scroll sur iOS */
  scroll-behavior: smooth;
}

/* Gradient fade sur le bord droit pour indiquer le scroll */
.table-scroll-container::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40px;
  background: linear-gradient(to left, rgba(23, 23, 23, 0.8), transparent);
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.3s;
}

/* Masquer le gradient sur desktop */
@media (min-width: 768px) {
  .table-scroll-container::after {
    opacity: 0;
  }
}

/* Indicateur de scroll "Faites défiler →" */
.scroll-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, rgba(5, 150, 105, 0.1), transparent);
  border-left: 2px solid rgba(5, 150, 105, 0.5);
  border-radius: 0.375rem;
  animation: pulseScroll 2s ease-in-out infinite;
}

.scroll-arrow {
  width: 1rem;
  height: 1rem;
  color: rgb(52, 211, 153);
  animation: bounceRight 1.5s ease-in-out infinite;
}

.scroll-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgb(52, 211, 153);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@keyframes bounceRight {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
}

@keyframes pulseScroll {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

/* Responsive mobile : passage en mode scroll horizontal */
@media (max-width: 640px) {
  table {
    min-width: 600px;
  }
}

/* Desktop : pas besoin de min-width */
@media (min-width: 768px) {
  table {
    min-width: auto;
  }
}

/* Scrollbar custom pour meilleure UX mobile */
.table-scroll-container::-webkit-scrollbar {
  height: 6px;
}

.table-scroll-container::-webkit-scrollbar-track {
  background: rgba(64, 64, 64, 0.3);
  border-radius: 3px;
}

.table-scroll-container::-webkit-scrollbar-thumb {
  background: rgba(5, 150, 105, 0.5);
  border-radius: 3px;
}

.table-scroll-container::-webkit-scrollbar-thumb:hover {
  background: rgba(5, 150, 105, 0.7);
}

/* Focus clavier */
:focus-visible {
  outline: none;
}
</style>

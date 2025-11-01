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
    <div class="overflow-x-auto">
      <table class="w-full rounded-xl border border-neutral-800 bg-neutral-900">
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  /** Afficher la note explicative */
  showNote: { type: Boolean, default: true }
})

const { t, tm } = useI18n()

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
/* Responsive mobile : passage en mode scroll horizontal */
@media (max-width: 640px) {
  table {
    min-width: 600px;
  }
}

/* Focus clavier */
:focus-visible {
  outline: none;
}
</style>

<template>
  <section class="space-y-6">
    <header>
      <h2 class="text-xl md:text-2xl font-semibold">
        {{ t('highlights.title') || '—' }}
      </h2>
    </header>

    <!-- Grille des 4 points forts (100% i18n pour les textes) -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <article
        v-for="(it, idx) in items"
        :key="`hl-${idx}`"
        class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 space-y-1"
      >
        <h3 class="font-semibold">{{ it.title }}</h3>
        <p class="text-sm opacity-80">{{ it.desc }}</p>
        <p class="text-xs opacity-60">{{ it.kpi }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

/**
 * 100% des libellés viennent d'i18n.
 * Aucun nombre n’est lu ici ; si un KPI textuel est fourni dans i18n, il reste une chaîne.
 */
const items = computed(() => {
  const keys = ['speed', 'control', 'cost', 'compliance']
  return keys.map((k) => ({
    title: t(`highlights.${k}.title`) || '—',
    desc: t(`highlights.${k}.desc`) || '—',
    kpi: t(`highlights.${k}.kpi`) || '—'
  }))
})
</script>

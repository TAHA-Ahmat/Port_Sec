<template>
  <section class="max-w-6xl mx-auto p-6 space-y-6">
    <header class="flex items-center gap-2 text-sm opacity-80">
      <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
      <h2 class="font-semibold">{{ sectionTitle }}</h2>
    </header>

    <div class="overflow-hidden rounded-2xl border border-neutral-800">
      <table class="w-full text-sm">
        <thead class="bg-neutral-900/60">
          <tr class="text-left">
            <th class="px-4 py-3 w-1/3">{{ t('home.beforeAfter.metric', 'Indicateur') }}</th>
            <th class="px-4 py-3">{{ labels.before }}</th>
            <th class="px-4 py-3">{{ labels.after }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in rowsList" :key="i" class="border-t border-neutral-800">
            <td class="px-4 py-3 opacity-90">{{ row.metric }}</td>
            <td class="px-4 py-3 opacity-80">{{ row.before }}</td>
            <td class="px-4 py-3 text-emerald-300/90">{{ row.after }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-for="(n, i) in notesList" :key="'n'+i" class="text-xs opacity-60">{{ n }}</p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  title: String,
  rows: Array,
  labels: Object,
  notes: Array
})

const { t } = useI18n()

const sectionTitle = computed(() =>
  props.title || t('home.beforeAfter.title', t('impact.title', 'Avant / Après'))
)

const defaultLabels = computed(() => ({
  before: t('home.beforeAfter.labels.before', 'Avant'),
  after: t('home.beforeAfter.labels.after', 'Après')
}))

const labels = computed(() => Object.assign({}, defaultLabels.value, props.labels || {}))

const rowsList = computed(() => {
  if (Array.isArray(props.rows) && props.rows.length) return props.rows
  const fromNew = t('home.beforeAfter.rows')
  if (Array.isArray(fromNew) && fromNew.length) return fromNew
  // fallback minimal en cas d’absence
  return []
})

const notesList = computed(() => {
  if (Array.isArray(props.notes) && props.notes.length) return props.notes
  const fromNew = t('home.beforeAfter.notes')
  return Array.isArray(fromNew) ? fromNew : []
})
</script>

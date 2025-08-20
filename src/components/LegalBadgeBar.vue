<template>
  <section class="max-w-6xl mx-auto p-6 space-y-4">
    <header class="flex items-center gap-2 text-sm opacity-80">
      <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
      <h2 class="font-semibold">{{ title }}</h2>
    </header>

    <div class="flex flex-wrap gap-3">
      <span v-for="(b, i) in badgesList" :key="i"
            class="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs">
        {{ b }}
      </span>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  titleOverride: String,
  badges: Array
})

const { t } = useI18n()

const title = computed(() =>
  props.titleOverride || t('home.legal.title', 'Cadre légal & institutionnel')
)

const badgesList = computed(() => {
  if (Array.isArray(props.badges) && props.badges.length) return props.badges
  const list = []
  const mou = t('home.legal.mou')
  const ny = t('home.legal.nyConvention')
  const bi = t('home.legal.bilateral')
  ;[mou, ny, bi].forEach(v => { if (typeof v === 'string' && v.trim()) list.push(v) })
  return list
})
</script>

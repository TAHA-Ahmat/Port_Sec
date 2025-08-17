<template>
  <div class="flex flex-col md:flex-row items-center justify-between gap-4 p-5 rounded-lg border border-neutral-800 bg-neutral-900">
    <div>
      <h3 class="text-xl font-semibold">
        {{ title || t('invest.title') || 'Opportunité d’investissement' }}
      </h3>
      <p class="opacity-80">
        {{ subtitle || t('invest.structure') || 'Structure de financement' }}
      </p>
    </div>
    <div class="flex gap-2">
      <RouterLink to="/investir" class="px-4 py-2 rounded bg-white text-black font-medium hover:opacity-90">
        {{ t('hero.ctaInvest') || 'Investir' }}
      </RouterLink>
      <RouterLink to="/dataroom" class="px-4 py-2 rounded border border-neutral-700 hover:bg-neutral-950">
        {{ t('dataroom.open') || 'Ouvrir le dossier' }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps({
  title: String,
  subtitle: String
})
</script>

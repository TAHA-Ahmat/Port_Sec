<template>
  <section class="text-center py-14 md:py-20">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-3xl md:text-5xl font-extrabold leading-tight">
        {{ t('hero.title') || 'Port Sec du Tchad à Douala' }}
      </h1>
      <p class="mt-3 md:mt-4 text-base md:text-lg opacity-80">
        {{ t('hero.subtitle') || 'Un hub logistique dédié pour accélérer, simplifier et tracer les flux Tchad–Cameroun.' }}
      </p>

      <div class="mt-6 flex items-center justify-center gap-3">
        <RouterLink
          to="/investir"
          class="px-5 py-2.5 rounded bg-white text-black font-medium hover:opacity-90 transition"
        >
          {{ t('hero.ctaInvest') || 'Investir' }}
        </RouterLink>
        <RouterLink
          to="/contact"
          class="px-5 py-2.5 rounded border border-neutral-700 font-medium hover:bg-neutral-900 transition"
        >
          {{ t('hero.ctaContact') || 'Contacter' }}
        </RouterLink>
      </div>

      <!-- Mini crédibilité sous le hero (optionnel) -->
      <div class="mt-6 text-xs md:text-sm opacity-60">
        {{ t('hero.trust') || 'APD 75% — Aligné PND 2026–2030 — Dataroom disponible' }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

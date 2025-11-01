<template>
  <section class="max-w-6xl mx-auto p-6 space-y-6">
    <!-- Header -->
    <div class="grid gap-8 md:grid-cols-2">
      <!-- Texte gauche -->
      <div class="space-y-4">
        <div class="flex items-center gap-2 text-sm opacity-80">
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          <span class="font-semibold">{{ t('nav.projects', 'Nos Projets') }}</span>
        </div>

        <h1 class="text-3xl md:text-4xl font-bold">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
            {{ t('projectsPage.hero.title', 'Nos Projets — Construire les infrastructures logistiques du futur') }}
          </span>
        </h1>

        <p class="opacity-80 leading-relaxed">
          {{ t('projectsPage.hero.intro', 'GPM développe un réseau de ports secs...') }}
        </p>

        <!-- CTA -->
        <div class="flex flex-wrap gap-3 pt-2">
          <button
            @click="scrollToProject"
            class="px-4 py-2 rounded-lg bg-emerald-500 text-neutral-900 font-semibold hover:opacity-90 shadow focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            {{ t('projectsPage.hero.ctaPrimary', 'Voir le Port Sec de Douala') }}
          </button>
          <RouterLink
            to="/contact"
            class="px-4 py-2 rounded-lg border border-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-600"
          >
            {{ t('projectsPage.hero.ctaSecondary', 'Nous contacter') }}
          </RouterLink>
        </div>
      </div>

      <!-- Carte interactive SVG droite -->
      <div class="relative">
        <div class="aspect-square rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-850 to-neutral-800 overflow-hidden relative p-4">
          <MapGPM mode="interactive" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import MapGPM from './MapGPM.vue'

const { t } = useI18n()

// Scroll vers les détails du projet Douala
const scrollToProject = () => {
  const el = document.getElementById('douala')
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

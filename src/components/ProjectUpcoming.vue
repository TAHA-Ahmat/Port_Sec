<template>
  <section
    class="max-w-6xl mx-auto p-6 space-y-6"
    role="region"
    :aria-label="t('projectsPage.upcoming.title', 'Projets à venir')"
  >
    <!-- Header -->
    <header class="space-y-2">
      <div class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-yellow-400"></span>
        <h2 class="font-semibold">{{ t('projectsPage.upcoming.title', 'Projets à venir') }}</h2>
      </div>
      <p class="opacity-80">
        {{ t('projectsPage.upcoming.intro', 'GPM prépare le lancement de deux nouveaux projets...') }}
      </p>
    </header>

    <!-- Cards projets futurs -->
    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="project in upcomingProjects"
        :key="project.id"
        class="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 space-y-4 grayscale-[40%] hover:grayscale-0 transition-all"
        role="article"
      >
        <!-- Placeholder image -->
        <div class="aspect-video rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
          <span class="text-5xl opacity-20">{{ project.icon }}</span>
        </div>

        <!-- Contenu -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="font-semibold">{{ project.name }}</h3>
            <span class="px-2 py-1 rounded-full text-xs border border-yellow-600/50 bg-yellow-900/20 text-yellow-300">
              {{ t('projectsPage.upcoming.status', 'En préparation') }}
            </span>
          </div>

          <p class="text-sm opacity-80">{{ project.description }}</p>

          <div class="flex items-center gap-2 text-sm opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>{{ project.phase }}</span>
          </div>

          <div class="flex items-center gap-2 text-sm opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{{ project.location.city }}, {{ project.location.country }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import projectsData from '../data/projects.json'

const { t } = useI18n()

// Filtrer les projets "planned" (Kribi et Ngaoundéré)
const upcomingProjects = computed(() => {
  return projectsData.projects
    .filter(p => p.status === 'planned')
    .map(p => ({
      ...p,
      icon: p.id === 'kribi' ? '⚓' : '🚂'
    }))
})
</script>

<style scoped>
:focus-visible {
  outline: none;
}
</style>

<template>
  <main class="space-y-8">
    <!-- =========================
         1. HERO – Introduction GPM + carte interactive
         ========================= -->
    <HeroProjects data-testid="projects-hero" />

    <!-- =========================
         2. VUE D'ENSEMBLE DU RÉSEAU
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-6">
      <header class="space-y-2">
        <div class="flex items-center gap-2 text-sm opacity-80">
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          <h2 class="font-semibold">{{ t('projectsPage.overview.title', 'Un réseau logistique intégré') }}</h2>
        </div>
        <p class="opacity-80 leading-relaxed">
          {{ t('projectsPage.overview.intro', 'À travers le Port Sec du Tchad à Douala...') }}
        </p>
      </header>

      <!-- Timeline Vision -->
      <Timeline
        data-testid="projects-timeline"
        :title="''"
        :show-title="false"
      />
    </section>

    <!-- =========================
         3. GRILLE DES PROJETS
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('projectsPage.grid.title', 'Portfolio de projets') }}</h2>
      </header>

      <!-- Grid 3 cartes -->
      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="project in allProjects"
          :key="project.id"
          class="group rounded-2xl border overflow-hidden transition-all focus-within:ring-2 focus-within:ring-emerald-500"
          :class="project.status === 'active'
            ? 'border-emerald-800/40 bg-neutral-900 hover:border-emerald-700/60 hover:shadow-xl hover:shadow-emerald-900/20'
            : 'border-neutral-800 bg-neutral-900/50 opacity-80 hover:opacity-100'"
          tabindex="0"
          role="article"
        >
          <!-- Image / Placeholder -->
          <div
            class="aspect-video overflow-hidden"
            :class="project.status === 'active' ? 'bg-neutral-800' : 'bg-gradient-to-br from-neutral-800 to-neutral-900'"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.name"
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <span class="text-5xl opacity-30">{{ getProjectIcon(project.id) }}</span>
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-4 space-y-3">
            <!-- Titre + badge statut -->
            <div class="flex items-start justify-between gap-2">
              <h3 class="font-semibold flex-1">{{ project.name }}</h3>
              <span
                class="shrink-0 px-2 py-1 rounded-full text-xs border"
                :class="project.status === 'active'
                  ? 'bg-emerald-900/30 text-emerald-300 border-emerald-700/50'
                  : 'bg-yellow-900/20 text-yellow-300 border-yellow-600/50'"
              >
                {{ project.status === 'active' ? '✓ En cours' : '○ ' + project.phase }}
              </span>
            </div>

            <!-- Description -->
            <p class="text-sm opacity-80">{{ project.description }}</p>

            <!-- CTA -->
            <div class="pt-2">
              <button
                v-if="project.status === 'active'"
                @click="scrollToDetails"
                class="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
              >
                <span>{{ t('projectsPage.grid.seeDetails', 'Voir détails') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <span
                v-else
                class="inline-block text-xs opacity-50 cursor-not-allowed"
                :title="t('projectsPage.grid.inPreparation', 'En préparation')"
              >
                {{ t('projectsPage.grid.comingSoon', 'Bientôt disponible') }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- =========================
         4. FICHE DÉTAILLÉE DOUALA (avec accordéons)
         ========================= -->
    <ProjectAccordion data-testid="projects-douala-detail" />

    <!-- =========================
         5. PROJETS À VENIR
         ========================= -->
    <ProjectUpcoming data-testid="projects-upcoming" />

    <!-- =========================
         6. CTA FINAL
         ========================= -->
    <InvestorCTA
      data-testid="projects-final-cta"
      :title="t('projectsPage.finalCta.title', 'GPM construit le réseau logistique...')"
      :subtitle="t('projectsPage.finalCta.subtitle', 'Rejoignez nos partenaires institutionnels.')"
      primary-to="/contact"
      :primary-label="t('projectsPage.finalCta.primaryLabel', 'Nous contacter')"
      secondary-to="/dataroom"
      :secondary-label="t('projectsPage.finalCta.secondaryLabel', 'Accès DataRoom')"
      variant="solid"
    />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import projectsData from '../data/projects.json'

import HeroProjects from '../components/HeroProjects.vue'
import Timeline from '../components/Timeline.vue'
import ProjectAccordion from '../components/ProjectAccordion.vue'
import ProjectUpcoming from '../components/ProjectUpcoming.vue'
import InvestorCTA from '../components/InvestorCTA.vue'

const { t } = useI18n()

// Tous les projets
const allProjects = computed(() => projectsData.projects)

// Icônes par projet
const getProjectIcon = (id) => {
  const icons = {
    douala: '🏗️',
    kribi: '⚓',
    ngaoundere: '🚂'
  }
  return icons[id] || '📦'
}

// Scroll vers détails Douala
const scrollToDetails = () => {
  const el = document.getElementById('douala')
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
/* Espacement entre sections */
main {
  padding-bottom: 4rem;
}
</style>

<template>
  <main class="space-y-8">
    <!-- Breadcrumbs -->
    <Breadcrumbs :items="[{ label: t('nav.home'), to: '/' }, { label: t('projectsPage.breadcrumb') }]" />

    <!-- =========================
         1. HERO – Introduction GPM + carte interactive
         ========================= -->
    <HeroProjects data-testid="projects-hero" />

    <!-- =========================
         2. GRILLE DES PROJETS
         ========================= -->
    <section id="grid-projets" class="max-w-6xl mx-auto p-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('projectsPage.grid.title', 'Portfolio de projets') }}</h2>
      </header>

      <!-- Projet phare : Douala (pleine largeur avec image) -->
      <article
        v-if="doualaProject"
        class="group rounded-2xl border border-emerald-800/40 relative overflow-hidden transition-all hover:border-emerald-700/60 hover:shadow-xl hover:shadow-emerald-900/30 focus-within:ring-2 focus-within:ring-emerald-500"
        tabindex="0"
        role="article"
      >
        <!-- Background image -->
        <div
          class="absolute inset-0 z-0 bg-cover bg-left-top md:bg-[center_20%]"
          :style="{
            backgroundImage: `url(${imgLaterale6})`
          }"
        ></div>

        <!-- Overlay sombre pour lisibilité -->
        <div class="absolute inset-0 bg-gradient-to-br from-black/65 via-black/60 to-black/55 z-0"></div>

        <!-- Contenu avec z-index supérieur -->
        <div class="relative z-10 flex flex-col">
          <!-- Espace vide en haut pour laisser voir l'image sur mobile -->
          <div class="h-48 md:hidden"></div>

          <!-- Contenu textuel -->
          <div class="p-10 md:p-16">
            <div class="flex flex-col md:flex-row md:justify-end">
              <!-- Colonne droite : Tout le contenu (Titre + Badge + Description + CTA) -->
              <div class="md:w-1/2 space-y-6">
                <!-- Titre + Badge -->
                <div class="space-y-3">
                  <div class="flex flex-wrap items-center gap-3">
                    <h3 class="font-bold text-xl md:text-2xl text-white text-shadow-strong">{{ doualaProject.name }}</h3>
                    <span
                      class="px-3 py-1 rounded-full text-xs font-medium border bg-emerald-900/40 text-emerald-300 border-emerald-700/50 text-shadow-strong"
                    >
                      {{ getProjectBadge(doualaProject) }}
                    </span>
                  </div>

                  <!-- Description -->
                  <p class="text-sm md:text-base text-neutral-100 leading-relaxed text-shadow-strong">
                    {{ doualaProject.description }}
                  </p>
                </div>

                <!-- CTA -->
                <div>
                  <RouterLink
                    :to="`/projects/${doualaProject.id}`"
                    class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-lg"
                  >
                    <span>{{ t('projectsPage.grid.discoverMain', 'Découvrir le projet phare') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Autres projets : Kribi + Ngaoundéré (grille 2 colonnes) -->
      <div class="grid gap-6 md:grid-cols-2 pt-2">
        <article
          v-for="project in otherProjects"
          :key="project.id"
          class="group rounded-2xl border overflow-hidden transition-all focus-within:ring-2 focus-within:ring-emerald-500 border-neutral-800 bg-neutral-900/50 opacity-80 hover:opacity-100"
          tabindex="0"
          role="article"
        >
          <!-- Image / Placeholder enrichi -->
          <div
            class="aspect-video overflow-hidden relative"
            :class="getProjectCardGradient(project.id)"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.name"
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div v-else class="w-full h-full flex flex-col items-center justify-center relative z-10">
              <span class="text-6xl mb-3 filter drop-shadow-lg">{{ getProjectIcon(project.id) }}</span>
              <div class="text-xs font-semibold uppercase tracking-wider opacity-60">{{ project.location.city }}</div>
            </div>
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
          </div>

          <!-- Contenu -->
          <div class="p-4 space-y-3">
            <!-- Titre + badge statut -->
            <div class="flex items-start justify-between gap-2">
              <h3 class="font-semibold flex-1">{{ project.name }}</h3>
              <span
                class="shrink-0 px-2 py-1 rounded-full text-xs border"
                :class="getProjectBadgeClass(project)"
              >
                {{ getProjectBadge(project) }}
              </span>
            </div>

            <!-- Description -->
            <p class="text-sm opacity-80">{{ project.description }}</p>

            <!-- CTA -->
            <div class="pt-2">
              <RouterLink
                :to="`/projects/${project.id}`"
                class="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
              >
                <span>{{ t('projectsPage.grid.learnMore', 'En savoir plus sur ce projet') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </RouterLink>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- =========================
         3. PORTFOLIO OVERVIEW – Métriques globales
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('projectsPage.portfolio.title') }}</h2>
      </header>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <!-- Total Surface -->
        <div class="p-5 rounded-xl border border-emerald-800/40 bg-gradient-to-br from-emerald-900/20 to-neutral-900">
          <div class="text-3xl mb-2">📐</div>
          <div class="text-2xl font-bold text-emerald-300">70 ha</div>
          <div class="text-xs text-neutral-400 mt-1">{{ t('projectsPage.portfolio.totalArea') }}</div>
        </div>

        <!-- Total Capacity -->
        <div class="p-5 rounded-xl border border-blue-800/40 bg-gradient-to-br from-blue-900/20 to-neutral-900">
          <div class="text-3xl mb-2">📦</div>
          <div class="text-2xl font-bold text-blue-300">{{ locale === 'en' ? '133K TEU' : '133K EVP' }}</div>
          <div class="text-xs text-neutral-400 mt-1">{{ t('projectsPage.portfolio.totalCapacity') }}</div>
        </div>

        <!-- Total Investment -->
        <div class="p-5 rounded-xl border border-amber-800/40 bg-gradient-to-br from-amber-900/20 to-neutral-900">
          <div class="text-3xl mb-2">💰</div>
          <div class="text-2xl font-bold text-amber-300">≈ 100 Mds</div>
          <div class="text-xs text-neutral-400 mt-1">{{ t('projectsPage.portfolio.totalInvestment') }}</div>
        </div>

        <!-- Total Jobs -->
        <div class="p-5 rounded-xl border border-purple-800/40 bg-gradient-to-br from-purple-900/20 to-neutral-900">
          <div class="text-3xl mb-2">👥</div>
          <div class="text-2xl font-bold text-purple-300">760+</div>
          <div class="text-xs text-neutral-400 mt-1">{{ t('projectsPage.portfolio.totalJobs') }}</div>
        </div>
      </div>
    </section>

    <!-- =========================
         4. CTA FINAL
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
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import projectsData from '../data/projects.json'

import Breadcrumbs from '../components/Breadcrumbs.vue'
import HeroProjects from '../components/HeroProjects.vue'
import InvestorCTA from '../components/InvestorCTA.vue'

const { t, tm, locale } = useI18n()

// Import de l'image pour la carte Douala
const imgLaterale6 = new URL('../assets/images/image_vue_laterale_6.jpg', import.meta.url).href

// Tous les projets
const allProjects = computed(() => projectsData.projects)

// Projet phare : Douala
const doualaProject = computed(() => projectsData.projects.find(p => p.id === 'douala'))

// Autres projets : Kribi + Ngaoundéré
const otherProjects = computed(() => projectsData.projects.filter(p => p.id !== 'douala'))

// Icônes par projet
const getProjectIcon = (id) => {
  const icons = {
    douala: '🏗️',
    kribi: '⚓',
    ngaoundere: '🚂'
  }
  return icons[id] || '📦'
}

// Badge avec dates
const getProjectBadge = (project) => {
  if (project.status === 'active') {
    return t('projectsPage.badges.active')
  }

  if (project.id === 'kribi') {
    return t('projectsPage.badges.kribiPrep')
  }

  if (project.id === 'ngaoundere') {
    return t('projectsPage.badges.ngaoundereStudy')
  }

  return `○ ${project.phase}`
}

// Classes CSS pour les badges
const getProjectBadgeClass = (project) => {
  if (project.status === 'active') {
    return 'bg-emerald-900/30 text-emerald-300 border-emerald-700/50'
  }

  if (project.id === 'kribi') {
    return 'bg-yellow-900/20 text-yellow-300 border-yellow-600/50'
  }

  if (project.id === 'ngaoundere') {
    return 'bg-blue-900/20 text-blue-300 border-blue-600/50'
  }

  return 'bg-neutral-800 text-neutral-300 border-neutral-700'
}

// Gradient de fond pour les cartes
const getProjectCardGradient = (id) => {
  const gradients = {
    douala: 'bg-gradient-to-br from-emerald-900/40 via-neutral-800 to-neutral-900',
    kribi: 'bg-gradient-to-br from-blue-900/40 via-neutral-800 to-neutral-900',
    ngaoundere: 'bg-gradient-to-br from-purple-900/40 via-neutral-800 to-neutral-900'
  }
  return gradients[id] || 'bg-gradient-to-br from-neutral-800 to-neutral-900'
}
</script>

<style scoped>
/* Espacement entre sections */
main {
  padding-bottom: 4rem;
}

/* Text shadow renforcé pour lisibilité maximale sur images */
.text-shadow-strong {
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.9),
    0 1px 6px rgba(0, 0, 0, 0.95),
    0 0 20px rgba(0, 0, 0, 0.5);
}
</style>

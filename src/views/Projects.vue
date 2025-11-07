<template>
  <main class="space-y-8">
    <!-- Breadcrumbs -->
    <Breadcrumbs :items="[{ label: 'Accueil', to: '/' }, { label: 'Nos Projets' }]" />

    <!-- =========================
         1. HERO – Introduction GPM + carte interactive
         ========================= -->
    <HeroProjects data-testid="projects-hero" />

    <!-- =========================
         2. PORTFOLIO OVERVIEW – Métriques globales
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">Vue d'ensemble du portfolio</h2>
      </header>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <!-- Total Surface -->
        <div class="p-5 rounded-xl border border-emerald-800/40 bg-gradient-to-br from-emerald-900/20 to-neutral-900">
          <div class="text-3xl mb-2">📐</div>
          <div class="text-2xl font-bold text-emerald-300">70 ha</div>
          <div class="text-xs text-neutral-400 mt-1">Surface totale planifiée</div>
        </div>

        <!-- Total Capacity -->
        <div class="p-5 rounded-xl border border-blue-800/40 bg-gradient-to-br from-blue-900/20 to-neutral-900">
          <div class="text-3xl mb-2">📦</div>
          <div class="text-2xl font-bold text-blue-300">133K EVP</div>
          <div class="text-xs text-neutral-400 mt-1">Capacité annuelle totale</div>
        </div>

        <!-- Total Investment -->
        <div class="p-5 rounded-xl border border-amber-800/40 bg-gradient-to-br from-amber-900/20 to-neutral-900">
          <div class="text-3xl mb-2">💰</div>
          <div class="text-2xl font-bold text-amber-300">95 Mds</div>
          <div class="text-xs text-neutral-400 mt-1">Investissement total (XAF)</div>
        </div>

        <!-- Total Jobs -->
        <div class="p-5 rounded-xl border border-purple-800/40 bg-gradient-to-br from-purple-900/20 to-neutral-900">
          <div class="text-3xl mb-2">👥</div>
          <div class="text-2xl font-bold text-purple-300">760+</div>
          <div class="text-xs text-neutral-400 mt-1">Emplois directs créés</div>
        </div>
      </div>
    </section>

    <!-- =========================
         3. TIMELINE VISUELLE – Déploiement 2024-2030
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">Roadmap de déploiement</h2>
      </header>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>

        <!-- Timeline points -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <!-- Phase 1: Douala -->
          <div class="relative">
            <div class="absolute top-12 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-neutral-950 z-10"></div>
            <div class="pt-20 p-6 rounded-xl border border-emerald-700/50 bg-gradient-to-br from-emerald-900/30 to-neutral-900">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-2xl">🏗️</span>
                <div class="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Phase 1 • 2024-2025</div>
              </div>
              <h3 class="font-bold text-lg mb-2">Douala</h3>
              <p class="text-sm text-neutral-400 mb-3">Mise en service du premier Port Sec</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 rounded-full text-xs bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">En cours</span>
                <span class="px-2 py-1 rounded-full text-xs bg-neutral-800 text-neutral-300">10 ha</span>
                <span class="px-2 py-1 rounded-full text-xs bg-neutral-800 text-neutral-300">3.5K EVP</span>
              </div>
            </div>
          </div>

          <!-- Phase 2: Kribi -->
          <div class="relative">
            <div class="absolute top-12 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-neutral-950 z-10"></div>
            <div class="pt-20 p-6 rounded-xl border border-blue-700/50 bg-gradient-to-br from-blue-900/30 to-neutral-900">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-2xl">⚓</span>
                <div class="text-xs font-semibold text-blue-300 uppercase tracking-wider">Phase 2 • 2026-2028</div>
              </div>
              <h3 class="font-bold text-lg mb-2">Kribi</h3>
              <p class="text-sm text-neutral-400 mb-3">Extension portuaire et export</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 rounded-full text-xs bg-yellow-900/50 text-yellow-300 border border-yellow-700/50">Lancement T2 2026</span>
                <span class="px-2 py-1 rounded-full text-xs bg-neutral-800 text-neutral-300">25 ha</span>
                <span class="px-2 py-1 rounded-full text-xs bg-neutral-800 text-neutral-300">45K EVP</span>
              </div>
            </div>
          </div>

          <!-- Phase 3: Ngaoundéré -->
          <div class="relative">
            <div class="absolute top-12 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-neutral-950 z-10"></div>
            <div class="pt-20 p-6 rounded-xl border border-purple-700/50 bg-gradient-to-br from-purple-900/30 to-neutral-900">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-2xl">🚂</span>
                <div class="text-xs font-semibold text-purple-300 uppercase tracking-wider">Phase 3 • 2028-2030</div>
              </div>
              <h3 class="font-bold text-lg mb-2">Ngaoundéré</h3>
              <p class="text-sm text-neutral-400 mb-3">Hub multimodal ferroviaire</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 rounded-full text-xs bg-blue-900/50 text-blue-300 border border-blue-700/50">Lancement T4 2026</span>
                <span class="px-2 py-1 rounded-full text-xs bg-neutral-800 text-neutral-300">35 ha</span>
                <span class="px-2 py-1 rounded-full text-xs bg-neutral-800 text-neutral-300">60K EVP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
         4. GRILLE DES PROJETS
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
              <RouterLink
                v-else
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
         3. FICHE DÉTAILLÉE DOUALA (avec accordéons)
         ========================= -->
    <ProjectAccordion data-testid="projects-douala-detail" />

    <!-- =========================
         4. PROJETS À VENIR
         ========================= -->
    <ProjectUpcoming data-testid="projects-upcoming" />

    <!-- =========================
         5. TABLEAU COMPARATIF
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">Comparatif des sites</h2>
      </header>

      <!-- Desktop table -->
      <div class="hidden md:block overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-neutral-800">
              <th class="text-left p-4 text-sm font-semibold text-neutral-400">Critère</th>
              <th class="text-center p-4 text-sm font-semibold text-emerald-300">Douala</th>
              <th class="text-center p-4 text-sm font-semibold text-blue-300">Kribi</th>
              <th class="text-center p-4 text-sm font-semibold text-purple-300">Ngaoundéré</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-neutral-800">
            <!-- Surface -->
            <tr class="hover:bg-neutral-900/50 transition">
              <td class="p-4 text-sm text-neutral-300">Surface</td>
              <td class="p-4 text-center text-sm">10 ha</td>
              <td class="p-4 text-center text-sm">25 ha</td>
              <td class="p-4 text-center text-sm">35 ha</td>
            </tr>
            <!-- Capacité -->
            <tr class="hover:bg-neutral-900/50 transition">
              <td class="p-4 text-sm text-neutral-300">Capacité annuelle</td>
              <td class="p-4 text-center text-sm">3 500 EVP</td>
              <td class="p-4 text-center text-sm">45 000 EVP</td>
              <td class="p-4 text-center text-sm">60 000 EVP</td>
            </tr>
            <!-- Investissement -->
            <tr class="hover:bg-neutral-900/50 transition">
              <td class="p-4 text-sm text-neutral-300">Investissement</td>
              <td class="p-4 text-center text-sm">28 Mds XAF</td>
              <td class="p-4 text-center text-sm">45 Mds XAF</td>
              <td class="p-4 text-center text-sm">42 Mds XAF</td>
            </tr>
            <!-- Emplois -->
            <tr class="hover:bg-neutral-900/50 transition">
              <td class="p-4 text-sm text-neutral-300">Emplois directs</td>
              <td class="p-4 text-center text-sm">140</td>
              <td class="p-4 text-center text-sm">250</td>
              <td class="p-4 text-center text-sm">320</td>
            </tr>
            <!-- Phase -->
            <tr class="hover:bg-neutral-900/50 transition">
              <td class="p-4 text-sm text-neutral-300">Phase / Lancement</td>
              <td class="p-4 text-center">
                <span class="inline-flex px-2 py-1 rounded-full text-xs bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">En cours</span>
              </td>
              <td class="p-4 text-center">
                <span class="inline-flex px-2 py-1 rounded-full text-xs bg-yellow-900/50 text-yellow-300 border border-yellow-700/50">T2 2026</span>
              </td>
              <td class="p-4 text-center">
                <span class="inline-flex px-2 py-1 rounded-full text-xs bg-blue-900/50 text-blue-300 border border-blue-700/50">T4 2026</span>
              </td>
            </tr>
            <!-- Avantages clés -->
            <tr class="hover:bg-neutral-900/50 transition">
              <td class="p-4 text-sm text-neutral-300">Avantages clés</td>
              <td class="p-4 text-center text-xs">
                <div class="space-y-1">
                  <div>✓ Proximité PAD</div>
                  <div>✓ Services intégrés</div>
                  <div>✓ 1er opérationnel</div>
                </div>
              </td>
              <td class="p-4 text-center text-xs">
                <div class="space-y-1">
                  <div>✓ Port en eau profonde</div>
                  <div>✓ Vocation export</div>
                  <div>✓ Connexion maritime</div>
                </div>
              </td>
              <td class="p-4 text-center text-xs">
                <div class="space-y-1">
                  <div>✓ Hub ferroviaire</div>
                  <div>✓ Position centrale</div>
                  <div>✓ Multimodal rail+route</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile cards -->
      <div class="md:hidden space-y-4">
        <!-- Douala -->
        <div class="p-4 rounded-xl border border-emerald-800/40 bg-neutral-900">
          <h3 class="font-bold text-emerald-300 mb-3 flex items-center gap-2">
            <span>🏗️</span>
            Douala
          </h3>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between"><span class="text-neutral-400">Surface:</span><span>10 ha</span></div>
            <div class="flex justify-between"><span class="text-neutral-400">Capacité:</span><span>3 500 EVP</span></div>
            <div class="flex justify-between"><span class="text-neutral-400">Investissement:</span><span>28 Mds XAF</span></div>
            <div class="flex justify-between"><span class="text-neutral-400">Emplois:</span><span>140</span></div>
            <div class="flex justify-between items-center">
              <span class="text-neutral-400">Statut:</span>
              <span class="px-2 py-1 rounded-full text-xs bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">En cours</span>
            </div>
          </div>
        </div>

        <!-- Kribi -->
        <div class="p-4 rounded-xl border border-blue-800/40 bg-neutral-900">
          <h3 class="font-bold text-blue-300 mb-3 flex items-center gap-2">
            <span>⚓</span>
            Kribi
          </h3>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between"><span class="text-neutral-400">Surface:</span><span>25 ha</span></div>
            <div class="flex justify-between"><span class="text-neutral-400">Capacité:</span><span>45 000 EVP</span></div>
            <div class="flex justify-between"><span class="text-neutral-400">Investissement:</span><span>45 Mds XAF</span></div>
            <div class="flex justify-between"><span class="text-neutral-400">Emplois:</span><span>250</span></div>
            <div class="flex justify-between items-center">
              <span class="text-neutral-400">Lancement:</span>
              <span class="px-2 py-1 rounded-full text-xs bg-yellow-900/50 text-yellow-300 border border-yellow-700/50">T2 2026</span>
            </div>
          </div>
        </div>

        <!-- Ngaoundéré -->
        <div class="p-4 rounded-xl border border-purple-800/40 bg-neutral-900">
          <h3 class="font-bold text-purple-300 mb-3 flex items-center gap-2">
            <span>🚂</span>
            Ngaoundéré
          </h3>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between"><span class="text-neutral-400">Surface:</span><span>35 ha</span></div>
            <div class="flex justify-between"><span class="text-neutral-400">Capacité:</span><span>60 000 EVP</span></div>
            <div class="flex justify-between"><span class="text-neutral-400">Investissement:</span><span>42 Mds XAF</span></div>
            <div class="flex justify-between"><span class="text-neutral-400">Emplois:</span><span>320</span></div>
            <div class="flex justify-between items-center">
              <span class="text-neutral-400">Lancement:</span>
              <span class="px-2 py-1 rounded-full text-xs bg-blue-900/50 text-blue-300 border border-blue-700/50">T4 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>

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
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import projectsData from '../data/projects.json'

import Breadcrumbs from '../components/Breadcrumbs.vue'
import HeroProjects from '../components/HeroProjects.vue'
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

// Badge avec dates
const getProjectBadge = (project) => {
  if (project.status === 'active') {
    return '✓ En cours'
  }

  if (project.id === 'kribi') {
    return '○ En préparation • Lancement T2 2026'
  }

  if (project.id === 'ngaoundere') {
    return '○ En étude • Lancement T4 2026'
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

<template>
  <section
    id="douala"
    class="max-w-6xl mx-auto p-6 space-y-8"
    role="region"
    :aria-label="t('projectsPage.douala.title', 'Port Sec du Tchad à Douala')"
  >
    <!-- Container LIVE avec border gradient animé -->
    <div class="live-project-container">
      <!-- Badge LIVE Premium -->
      <div class="live-badge-premium">
        <span class="live-dot"></span>
        <span class="live-text">PROJET ACTIF</span>
        <span class="live-separator">•</span>
        <span class="live-status">Opérationnel depuis 2024</span>
      </div>

      <!-- Header Hero -->
      <header class="space-y-6 mb-8">
        <!-- Titre Hero avec gradient animé -->
        <div class="hero-title-wrapper">
          <h2 class="hero-title">
            <span class="hero-title-gradient">
              {{ t('projectsPage.douala.title', 'Port Sec du Tchad à Douala') }}
            </span>
          </h2>
        </div>

        <!-- Métriques clés en grid avec 3D effects -->
        <div class="metrics-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="(metric, key) in metrics"
            :key="key"
            class="metric-card-3d rounded-xl border border-emerald-600/20 bg-gradient-to-br from-emerald-950/30 to-neutral-900 p-4 group"
          >
            <p class="text-xs opacity-60 mb-2 font-medium">{{ t(`projectsPage.douala.sections.metrics.${key}`, metric.label) }}</p>
            <p class="metric-value text-xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors">
              {{ metric.value }}
            </p>
            <div class="metric-shine"></div>
          </div>
        </div>
      </header>

    <!-- Bloc Avant / Après -->
    <BeforeAfter :show-note="true" />

      <!-- Accordions avec effets vivants -->
      <div class="accordions-live space-y-3">
        <!-- Objectif -->
        <div class="accordion-item-live rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden">
          <button
            @click="toggleSection('objective')"
            class="accordion-button-live w-full px-6 py-4 flex items-center justify-between hover:bg-emerald-950/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 group"
            :aria-expanded="openSections.has('objective')"
          >
            <span class="font-semibold text-emerald-100 group-hover:text-emerald-300 transition-colors">{{ t('projectsPage.douala.sections.objective.title', 'Objectif du projet') }}</span>
            <svg
              class="w-5 h-5 transition-transform duration-500 text-emerald-400"
              :class="{ 'rotate-180': openSections.has('objective') }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div
            v-show="openSections.has('objective')"
            class="accordion-content-live px-6 pb-4 opacity-90"
          >
            <p>{{ t('projectsPage.douala.sections.objective.content', projectData.details.objective) }}</p>
          </div>
        </div>

        <!-- Contexte & justification -->
        <div class="accordion-item-live rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden">
          <button
            @click="toggleSection('context')"
            class="accordion-button-live w-full px-6 py-4 flex items-center justify-between hover:bg-emerald-950/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 group"
            :aria-expanded="openSections.has('context')"
          >
            <span class="font-semibold text-emerald-100 group-hover:text-emerald-300 transition-colors">{{ t('projectsPage.douala.sections.context.title', 'Contexte & justification') }}</span>
            <svg
              class="w-5 h-5 transition-transform duration-500 text-emerald-400"
              :class="{ 'rotate-180': openSections.has('context') }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div
            v-show="openSections.has('context')"
            class="accordion-content-live px-6 pb-4 opacity-90"
          >
            <p>{{ t('projectsPage.douala.sections.context.content', projectData.details.context) }}</p>
          </div>
        </div>

        <!-- Cadre légal -->
        <div class="accordion-item-live rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden">
          <button
            @click="toggleSection('legal')"
            class="accordion-button-live w-full px-6 py-4 flex items-center justify-between hover:bg-emerald-950/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 group"
            :aria-expanded="openSections.has('legal')"
          >
            <span class="font-semibold text-emerald-100 group-hover:text-emerald-300 transition-colors">{{ t('projectsPage.douala.sections.legal.title', 'Cadre légal & institutionnel') }}</span>
            <svg
              class="w-5 h-5 transition-transform duration-500 text-emerald-400"
              :class="{ 'rotate-180': openSections.has('legal') }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div
            v-show="openSections.has('legal')"
            class="accordion-content-live px-6 pb-4"
          >
            <ul class="space-y-2" role="list">
              <li
                v-for="(item, i) in legalItems"
                :key="i"
                class="flex items-start gap-2 opacity-90"
                role="listitem"
              >
                <span class="inline-block mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Description technique -->
        <div class="accordion-item-live rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden">
          <button
            @click="toggleSection('technical')"
            class="accordion-button-live w-full px-6 py-4 flex items-center justify-between hover:bg-emerald-950/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 group"
            :aria-expanded="openSections.has('technical')"
          >
            <span class="font-semibold text-emerald-100 group-hover:text-emerald-300 transition-colors">{{ t('projectsPage.douala.sections.technical.title', 'Description technique') }}</span>
            <svg
              class="w-5 h-5 transition-transform duration-500 text-emerald-400"
              :class="{ 'rotate-180': openSections.has('technical') }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div
            v-show="openSections.has('technical')"
            class="accordion-content-live px-6 pb-4 opacity-90"
          >
            <p>{{ t('projectsPage.douala.sections.technical.content', projectData.details.technical) }}</p>
          </div>
        </div>

        <!-- Gouvernance -->
        <div class="accordion-item-live rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden">
          <button
            @click="toggleSection('governance')"
            class="accordion-button-live w-full px-6 py-4 flex items-center justify-between hover:bg-emerald-950/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 group"
            :aria-expanded="openSections.has('governance')"
          >
            <span class="font-semibold text-emerald-100 group-hover:text-emerald-300 transition-colors">{{ t('projectsPage.douala.sections.governance.title', 'Gouvernance & performance') }}</span>
            <svg
              class="w-5 h-5 transition-transform duration-500 text-emerald-400"
              :class="{ 'rotate-180': openSections.has('governance') }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div
            v-show="openSections.has('governance')"
            class="accordion-content-live px-6 pb-4 opacity-90"
          >
            <p>{{ t('projectsPage.douala.sections.governance.content', projectData.details.governance) }}</p>
          </div>
        </div>

        <!-- Stratégie 2024-2030 -->
        <div class="accordion-item-live rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden">
          <button
            @click="toggleSection('strategy')"
            class="accordion-button-live w-full px-6 py-4 flex items-center justify-between hover:bg-emerald-950/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 group"
            :aria-expanded="openSections.has('strategy')"
          >
            <span class="font-semibold text-emerald-100 group-hover:text-emerald-300 transition-colors">{{ t('projectsPage.douala.sections.strategy.title', 'Stratégie de développement 2024–2030') }}</span>
            <svg
              class="w-5 h-5 transition-transform duration-500 text-emerald-400"
              :class="{ 'rotate-180': openSections.has('strategy') }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div
            v-show="openSections.has('strategy')"
            class="accordion-content-live px-6 pb-4"
          >
            <div class="space-y-4">
              <div
                v-for="(phase, i) in projectData.details.strategy"
                :key="i"
                class="flex gap-4"
              >
                <div class="shrink-0 w-24 text-sm opacity-60">{{ phase.period }}</div>
                <div class="flex-1">
                  <p class="font-medium mb-1">{{ phase.title }}</p>
                  <p class="text-sm opacity-80">{{ phase.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Autres projets -->
      <div class="pt-8">
        <OtherProjects current-project="douala" />
      </div>

      <!-- CTA à l'intérieur du container live -->
      <div class="cta-live flex flex-wrap gap-3 pt-8">
      <RouterLink
        to="/contact"
        class="px-4 py-2 rounded-lg bg-emerald-500 text-neutral-900 font-semibold hover:opacity-90 shadow focus:outline-none focus:ring-2 focus:ring-emerald-600"
      >
        {{ t('projectsPage.finalCta.primaryLabel', 'Nous contacter') }}
      </RouterLink>
        <RouterLink
          to="/dataroom"
          class="px-4 py-2 rounded-lg border border-emerald-500/50 hover:bg-emerald-950/30 text-emerald-300 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
        >
          {{ t('projectsPage.finalCta.secondaryLabel', 'Accès DataRoom') }}
        </RouterLink>
      </div>
    </div>
    <!-- Fin du container LIVE -->
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import projectsData from '../data/projects.json'
import BeforeAfter from './BeforeAfter.vue'
import OtherProjects from './OtherProjects.vue'

const { t, tm } = useI18n()

// Données du projet Douala
const projectData = projectsData.projects[0] // Douala

// Sections ouvertes par défaut (objective, context, metrics)
const openSections = ref(new Set(['objective', 'context', 'legal']))

const toggleSection = (section) => {
  if (openSections.value.has(section)) {
    openSections.value.delete(section)
  } else {
    openSections.value.add(section)
  }
  // Force reactivity
  openSections.value = new Set(openSections.value)
}

// Métriques formatées
const metrics = computed(() => ({
  surface: {
    label: 'Superficie',
    value: projectData.metrics.surfaceM2
  },
  capacity: {
    label: 'Capacité',
    value: projectData.metrics.capacity
  },
  costReduction: {
    label: 'Réduction coûts',
    value: projectData.metrics.costReduction
  },
  transitTime: {
    label: 'Délai transit',
    value: projectData.metrics.transitTime
  },
  jobsDirect: {
    label: 'Emplois directs',
    value: projectData.metrics.jobsDirect
  },
  jobsTotal: {
    label: 'Emplois totaux',
    value: projectData.metrics.jobsTotal
  },
  launch: {
    label: 'Mise en service',
    value: projectData.metrics.launchDate
  }
}))

// Items légaux depuis i18n ou JSON
const legalItems = computed(() => {
  const items = tm('projectsPage.douala.sections.legal.items')
  if (Array.isArray(items) && items.length) return items
  return projectData.details.legal
})
</script>

<style scoped>
/* ===== LIVE PROJECT CONTAINER ===== */
.live-project-container {
  position: relative;
  padding: 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.02) 0%, rgba(5, 46, 36, 0.15) 100%);
  border: 1px solid rgba(5, 150, 105, 0.25);
  overflow: hidden;
}

/* Border gradient animé subtil */
.live-project-container::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 1px;
  background: linear-gradient(
    90deg,
    rgba(5, 150, 105, 0.3),
    rgba(20, 184, 166, 0.2),
    rgba(5, 150, 105, 0.3)
  );
  background-size: 200% 100%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: borderFlow 8s linear infinite;
  pointer-events: none;
  opacity: 0.6;
}

/* Shimmer effect léger */
.live-project-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(16, 185, 129, 0.04),
    transparent
  );
  animation: shimmerPass 10s ease-in-out infinite;
  pointer-events: none;
}

@keyframes borderFlow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes shimmerPass {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}

/* Background pattern hexagones subtil */
.live-project-container {
  background-image:
    repeating-linear-gradient(30deg, rgba(16, 185, 129, 0.015) 0px, transparent 10px, transparent 20px),
    repeating-linear-gradient(-30deg, rgba(16, 185, 129, 0.015) 0px, transparent 10px, transparent 20px),
    linear-gradient(135deg, rgba(16, 185, 129, 0.02) 0%, rgba(5, 46, 36, 0.15) 100%);
}

/* ===== BADGE LIVE PREMIUM ===== */
.live-badge-premium {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.12) 0%, rgba(5, 46, 36, 0.4) 100%);
  border: 1px solid rgba(5, 150, 105, 0.35);
  border-radius: 9999px;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.15);
  animation: badgePulse 4s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% {
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.15);
  }
  50% {
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.25);
  }
}

/* Dot clignotant subtil */
.live-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #059669;
  border-radius: 50%;
  animation: dotBlink 3s ease-in-out infinite;
  box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);
}

@keyframes dotBlink {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}

.live-text {
  font-weight: 600;
  font-size: 0.8rem;
  color: #059669;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.live-separator {
  color: rgba(5, 150, 105, 0.4);
  font-weight: 600;
}

.live-status {
  font-size: 0.8rem;
  color: rgba(5, 150, 105, 0.7);
  font-weight: 500;
}

/* ===== HERO TITLE ===== */
.hero-title-wrapper {
  text-align: center;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
}

.hero-title-gradient {
  background: linear-gradient(
    90deg,
    #059669,
    #d1fae5,
    #059669,
    #d1fae5,
    #059669
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientFlow 6s linear infinite;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* ===== METRICS CARDS 3D ===== */
.metrics-grid {
  perspective: 1000px;
}

.metric-card-3d {
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.03) 0%, rgba(23, 23, 23, 0.6) 100%);
  overflow: hidden;
}

.metric-card-3d:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: rgba(5, 150, 105, 0.4);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.15);
}

/* Shine effect on metric cards */
.metric-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(16, 185, 129, 0.05),
    transparent
  );
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.5s;
}

.metric-card-3d:hover .metric-shine {
  opacity: 1;
  animation: shineRotate 1.5s ease-in-out;
}

@keyframes shineRotate {
  0% {
    transform: rotate(45deg) translateY(-100%);
  }
  100% {
    transform: rotate(45deg) translateY(100%);
  }
}

/* ===== ACCORDIONS LIVE ===== */
.accordion-item-live {
  position: relative;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.015) 0%, rgba(23, 23, 23, 0.6) 100%);
}

.accordion-item-live:hover {
  transform: translateX(2px);
  border-color: rgba(5, 150, 105, 0.3);
  box-shadow: 0 2px 12px rgba(16, 185, 129, 0.1);
}

.accordion-button-live {
  position: relative;
  overflow: hidden;
}

.accordion-button-live::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(5, 150, 105, 0.5), transparent);
  transition: width 0.3s ease;
}

.accordion-button-live:hover::after {
  width: 100%;
}

.accordion-content-live {
  animation: accordionExpand 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes accordionExpand {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== CTA LIVE ===== */
.cta-live a {
  transition: all 0.3s ease;
}

.cta-live a:hover {
  transform: translateY(-2px);
}

:focus-visible {
  outline: none;
}
</style>

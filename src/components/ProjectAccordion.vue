<template>
  <section
    id="douala"
    class="max-w-6xl mx-auto p-6 space-y-8"
    role="region"
    :aria-label="t('projectsPage.douala.title', 'Port Sec du Tchad à Douala')"
  >
    <!-- Header -->
    <header class="space-y-4">
      <div class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('projectsPage.douala.title', 'Port Sec du Tchad à Douala') }}</h2>
      </div>

      <!-- Métriques clés en grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="(metric, key) in metrics"
          :key="key"
          class="rounded-xl border border-neutral-800 bg-neutral-900 p-3"
        >
          <p class="text-xs opacity-60 mb-1">{{ t(`projectsPage.douala.sections.metrics.${key}`, metric.label) }}</p>
          <p class="font-semibold text-emerald-300">{{ metric.value }}</p>
        </div>
      </div>
    </header>

    <!-- Bloc Avant / Après -->
    <BeforeAfter :show-note="true" />

    <!-- Accordions -->
    <div class="space-y-3">
      <!-- Objectif -->
      <div class="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden">
        <button
          @click="toggleSection('objective')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          :aria-expanded="openSections.has('objective')"
        >
          <span class="font-semibold">{{ t('projectsPage.douala.sections.objective.title', 'Objectif du projet') }}</span>
          <svg
            class="w-5 h-5 transition-transform"
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
          class="px-6 pb-4 opacity-90"
        >
          <p>{{ t('projectsPage.douala.sections.objective.content', projectData.details.objective) }}</p>
        </div>
      </div>

      <!-- Contexte & justification -->
      <div class="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden">
        <button
          @click="toggleSection('context')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          :aria-expanded="openSections.has('context')"
        >
          <span class="font-semibold">{{ t('projectsPage.douala.sections.context.title', 'Contexte & justification') }}</span>
          <svg
            class="w-5 h-5 transition-transform"
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
          class="px-6 pb-4 opacity-90"
        >
          <p>{{ t('projectsPage.douala.sections.context.content', projectData.details.context) }}</p>
        </div>
      </div>

      <!-- Cadre légal -->
      <div class="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden">
        <button
          @click="toggleSection('legal')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          :aria-expanded="openSections.has('legal')"
        >
          <span class="font-semibold">{{ t('projectsPage.douala.sections.legal.title', 'Cadre légal & institutionnel') }}</span>
          <svg
            class="w-5 h-5 transition-transform"
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
          class="px-6 pb-4"
        >
          <ul class="space-y-2" role="list">
            <li
              v-for="(item, i) in legalItems"
              :key="i"
              class="flex items-start gap-2 opacity-90"
              role="listitem"
            >
              <span class="inline-block mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Description technique -->
      <div class="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden">
        <button
          @click="toggleSection('technical')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          :aria-expanded="openSections.has('technical')"
        >
          <span class="font-semibold">{{ t('projectsPage.douala.sections.technical.title', 'Description technique') }}</span>
          <svg
            class="w-5 h-5 transition-transform"
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
          class="px-6 pb-4 opacity-90"
        >
          <p>{{ t('projectsPage.douala.sections.technical.content', projectData.details.technical) }}</p>
        </div>
      </div>

      <!-- Gouvernance -->
      <div class="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden">
        <button
          @click="toggleSection('governance')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          :aria-expanded="openSections.has('governance')"
        >
          <span class="font-semibold">{{ t('projectsPage.douala.sections.governance.title', 'Gouvernance & performance') }}</span>
          <svg
            class="w-5 h-5 transition-transform"
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
          class="px-6 pb-4 opacity-90"
        >
          <p>{{ t('projectsPage.douala.sections.governance.content', projectData.details.governance) }}</p>
        </div>
      </div>

      <!-- Stratégie 2024-2030 -->
      <div class="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden">
        <button
          @click="toggleSection('strategy')"
          class="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          :aria-expanded="openSections.has('strategy')"
        >
          <span class="font-semibold">{{ t('projectsPage.douala.sections.strategy.title', 'Stratégie de développement 2024–2030') }}</span>
          <svg
            class="w-5 h-5 transition-transform"
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
          class="px-6 pb-4"
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

    <!-- CTA -->
    <div class="flex flex-wrap gap-3 pt-4">
      <RouterLink
        to="/contact"
        class="px-4 py-2 rounded-lg bg-emerald-500 text-neutral-900 font-semibold hover:opacity-90 shadow focus:outline-none focus:ring-2 focus:ring-emerald-600"
      >
        {{ t('projectsPage.finalCta.primaryLabel', 'Nous contacter') }}
      </RouterLink>
      <RouterLink
        to="/dataroom"
        class="px-4 py-2 rounded-lg border border-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-600"
      >
        {{ t('projectsPage.finalCta.secondaryLabel', 'Accès DataRoom') }}
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import projectsData from '../data/projects.json'
import BeforeAfter from './BeforeAfter.vue'

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
:focus-visible {
  outline: none;
}
</style>

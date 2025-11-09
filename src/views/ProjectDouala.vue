<template>
  <main class="space-y-8 pb-16">
    <!-- Breadcrumbs -->
    <Breadcrumbs :items="[
      { label: t('nav.home', 'Accueil'), to: '/' },
      { label: t('nav.projects', 'Nos Projets'), to: '/projects' },
      { label: 'Port Sec de Douala' }
    ]" />

    <!-- CONTENU EXACT DE PROJECTACCORDION.VUE -->
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
          <span class="live-status">En développement • Opérationnel 2028</span>
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

      <!-- Section Vidéo Officielle -->
      <div class="video-section">
        <!-- Header responsive : row desktop, column mobile -->
        <div class="video-header">
          <div class="flex items-center gap-2 flex-1">
            <svg class="video-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            <h3 class="video-title">
              {{ t('projectsPage.douala.video.title', 'Découvrez le Port en vidéo') }}
            </h3>
          </div>
          <span class="video-badge">
            <span class="video-badge-dot"></span>
            <span class="video-badge-text">LIVE</span>
          </span>
        </div>

        <p class="video-description">
          {{ t('projectsPage.douala.video.subtitle', 'Plongez au cœur du Port Sec de Douala : infrastructures modernes, flux logistiques et opérations en temps réel.') }}
        </p>

        <!-- Container vidéo optimisé mobile -->
        <div class="video-container-project">
          <iframe
            src="https://www.youtube.com/embed/pWHDVTSn-5k?modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3&cc_load_policy=0&fs=1&playsinline=1"
            class="video-iframe-project"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
            title="Vidéo officielle du Port de Douala"
          ></iframe>
        </div>
      </div>

        <!-- Accordions avec effets vivants -->
        <div class="accordions-live space-y-3">
          <!-- Objectif -->
          <article class="section-magazine rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden p-6">
            <!-- Titre de section -->
            <h3 class="section-title font-semibold text-emerald-100 mb-4 text-lg">
              {{ t('projectsPage.douala.sections.objective.title', 'Objectif du projet') }}
            </h3>

            <!-- Layout magazine : Texte gauche + Image droite -->
            <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <!-- Texte -->
              <div class="flex-1 opacity-90">
                <p class="leading-relaxed">{{ t('projectsPage.douala.sections.objective.content', projectData.details.objective) }}</p>
              </div>
              <!-- Image -->
              <div class="w-full md:w-2/5 shrink-0">
                <img
                  :src="imgLaterale5"
                  alt="Infrastructure du Port Sec de Douala"
                  class="w-full h-auto rounded-lg shadow-lg object-cover aspect-video"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          <!-- Contexte & justification -->
          <article class="section-magazine rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden p-6">
            <!-- Titre de section -->
            <h3 class="section-title font-semibold text-emerald-100 mb-4 text-lg">
              {{ t('projectsPage.douala.sections.context.title', 'Contexte & justification') }}
            </h3>

            <!-- Layout magazine inversé : Image gauche + Texte droite -->
            <div class="flex flex-col md:flex-row-reverse gap-6 items-start md:items-center">
              <!-- Texte -->
              <div class="flex-1 opacity-90">
                <p class="leading-relaxed">{{ t('projectsPage.douala.sections.context.content', projectData.details.context) }}</p>
              </div>
              <!-- Image -->
              <div class="w-full md:w-2/5 shrink-0">
                <img
                  :src="imgLaterale1"
                  alt="Vue d'ensemble du Port Sec de Douala"
                  class="w-full h-auto rounded-lg shadow-lg object-cover aspect-video"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          <!-- Cadre légal -->
          <article class="section-magazine rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden p-6">
            <!-- Titre de section -->
            <h3 class="section-title font-semibold text-emerald-100 mb-4 text-lg">
              {{ t('projectsPage.douala.sections.legal.title', 'Cadre légal & institutionnel') }}
            </h3>

            <!-- Layout magazine : Texte gauche + Image droite -->
            <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <!-- Texte (liste) -->
              <div class="flex-1">
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
              <!-- Image -->
              <div class="w-full md:w-2/5 shrink-0">
                <img
                  :src="imgHaut"
                  alt="Cadre institutionnel du Port Sec"
                  class="w-full h-auto rounded-lg shadow-lg object-cover aspect-video"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          <!-- Description technique -->
          <article class="section-magazine rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden p-6">
            <!-- Titre de section -->
            <h3 class="section-title font-semibold text-emerald-100 mb-4 text-lg">
              {{ t('projectsPage.douala.sections.technical.title', 'Description technique') }}
            </h3>

            <!-- Layout magazine inversé : Image gauche + Texte droite -->
            <div class="flex flex-col md:flex-row-reverse gap-6 items-start md:items-center">
              <!-- Texte -->
              <div class="flex-1 opacity-90">
                <p class="leading-relaxed">{{ t('projectsPage.douala.sections.technical.content', projectData.details.technical) }}</p>
              </div>
              <!-- Image -->
              <div class="w-full md:w-2/5 shrink-0">
                <img
                  :src="imgLaterale4"
                  alt="Équipements techniques du Port Sec"
                  class="w-full h-auto rounded-lg shadow-lg object-cover aspect-video"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          <!-- Gouvernance -->
          <article class="section-magazine rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden p-6">
            <!-- Titre de section -->
            <h3 class="section-title font-semibold text-emerald-100 mb-4 text-lg">
              {{ t('projectsPage.douala.sections.governance.title', 'Gouvernance & performance') }}
            </h3>

            <!-- Layout magazine : Texte gauche + Image droite -->
            <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <!-- Texte -->
              <div class="flex-1 opacity-90">
                <p class="leading-relaxed">{{ t('projectsPage.douala.sections.governance.content', projectData.details.governance) }}</p>
              </div>
              <!-- Image -->
              <div class="w-full md:w-2/5 shrink-0">
                <img
                  :src="imgLaterale2"
                  alt="Gouvernance du Port Sec de Douala"
                  class="w-full h-auto rounded-lg shadow-lg object-cover aspect-video"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          <!-- Stratégie 2024-2030 -->
          <article class="section-magazine rounded-2xl border border-emerald-600/15 bg-neutral-900 overflow-hidden p-6">
            <!-- Titre de section -->
            <h3 class="section-title font-semibold text-emerald-100 mb-4 text-lg">
              {{ t('projectsPage.douala.sections.strategy.title', 'Stratégie de développement 2024–2030') }}
            </h3>

            <!-- Timeline -->
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
          </article>
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

    <!-- Retour -->
    <section class="max-w-6xl mx-auto px-6">
      <div class="pt-6">
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>{{ t('douala.back', 'Retour à nos projets') }}</span>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import projectsData from '../data/projects.json'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import BeforeAfter from '../components/BeforeAfter.vue'
import OtherProjects from '../components/OtherProjects.vue'

const { t, tm } = useI18n()

// Import des images du Port Sec pour layout magazine
const imgHaut = new URL('../assets/images/image_haut.jpg', import.meta.url).href
const imgLaterale1 = new URL('../assets/images/image_vue_laterale.jpg', import.meta.url).href
const imgLaterale2 = new URL('../assets/images/image_vue_laterale_second.jpg', import.meta.url).href
const imgLaterale3 = new URL('../assets/images/image_vue_laterale_third.jpg', import.meta.url).href
const imgLaterale4 = new URL('../assets/images/image_vue_laterale_4.jpg', import.meta.url).href
const imgLaterale5 = new URL('../assets/images/image_vue_laterale_5.jpg', import.meta.url).href

// Données du projet Douala
const projectData = projectsData.projects[0] // Douala

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

/* ===== SECTIONS MAGAZINE (sans accordions) ===== */
.section-magazine {
  position: relative;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.015) 0%, rgba(23, 23, 23, 0.6) 100%);
}

.section-magazine:hover {
  transform: translateX(2px);
  border-color: rgba(5, 150, 105, 0.3);
  box-shadow: 0 2px 12px rgba(16, 185, 129, 0.1);
}

.section-title {
  position: relative;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(5, 150, 105, 0.15);
}

/* ===== ACCORDIONS LIVE (legacy, conservé pour compatibilité) ===== */
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

/* ===== VIDEO SECTION - DESKTOP FIRST ===== */
.video-section {
  margin: 3rem 0;
  padding: 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.03) 0%, rgba(5, 46, 36, 0.1) 100%);
  border: 1px solid rgba(5, 150, 105, 0.2);
  position: relative;
  overflow: hidden;
}

.video-section::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 1px;
  background: linear-gradient(
    90deg,
    rgba(5, 150, 105, 0.2),
    rgba(20, 184, 166, 0.15),
    rgba(5, 150, 105, 0.2)
  );
  background-size: 200% 100%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: borderFlow 6s linear infinite;
  pointer-events: none;
  opacity: 0.5;
}

/* Header vidéo */
.video-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.video-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: rgb(52, 211, 153);
  flex-shrink: 0;
}

.video-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(209, 250, 229);
  line-height: 1.3;
}

.video-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  background: rgba(127, 29, 29, 0.3);
  color: rgb(252, 165, 165);
  border: 1px solid rgba(185, 28, 28, 0.5);
  flex-shrink: 0;
}

.video-badge-dot {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: rgb(239, 68, 68);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.video-badge-text {
  font-weight: 600;
  letter-spacing: 0.05em;
}

.video-description {
  font-size: 0.875rem;
  opacity: 0.8;
  margin-bottom: 1rem;
  line-height: 1.5;
}

/* Container vidéo */
.video-container-project {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(135deg, rgb(23, 23, 23) 0%, rgb(15, 15, 15) 100%);
  border: 1px solid rgba(5, 150, 105, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(16, 185, 129, 0.1);
  transition: all 0.3s ease-in-out;
}

/* Hover uniquement sur desktop (pointer: fine = souris) */
@media (hover: hover) and (pointer: fine) {
  .video-container-project:hover {
    border-color: rgba(5, 150, 105, 0.5);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.2);
    transform: translateY(-2px);
  }
}

.video-iframe-project {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* ===== RESPONSIVE MOBILE - BREAKPOINTS GRANULAIRES ===== */

/* Tablettes et petits laptops (641px - 1024px) */
@media (max-width: 1024px) {
  .video-section {
    margin: 2.5rem 0;
    padding: 1.75rem;
  }
}

/* Tablettes portrait (641px - 768px) */
@media (max-width: 768px) {
  .video-section {
    margin: 2rem 0;
    padding: 1.25rem;
    border-radius: 1rem;
  }

  .video-section::before {
    border-radius: 1rem;
    opacity: 0.3; /* Réduit animation sur mobile pour performance */
  }

  .video-title {
    font-size: 1.125rem; /* text-lg */
  }

  .video-description {
    font-size: 0.8125rem; /* Légèrement plus petit */
    margin-bottom: 0.875rem;
  }

  .video-container-project {
    border-radius: 0.75rem;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(16, 185, 129, 0.08);
  }
}

/* Téléphones standards (481px - 640px) */
@media (max-width: 640px) {
  .video-section {
    margin: 1.5rem 0;
    padding: 1rem;
    border-radius: 0.875rem;
  }

  .video-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .video-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .video-title {
    font-size: 1rem; /* text-base */
    line-height: 1.4;
  }

  .video-badge {
    padding: 0.25rem 0.625rem;
    font-size: 0.6875rem; /* Légèrement plus petit */
  }

  .video-badge-dot {
    width: 0.375rem;
    height: 0.375rem;
  }

  .video-description {
    font-size: 0.75rem; /* text-xs */
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }

  .video-container-project {
    padding-top: 56.25%; /* Garde 16:9 */
    border-radius: 0.625rem;
    border-width: 1px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4), 0 0 12px rgba(16, 185, 129, 0.06);
  }
}

/* Petits téléphones (361px - 480px) - iPhone SE, Galaxy S8 */
@media (max-width: 480px) {
  .video-section {
    margin: 1.25rem 0;
    padding: 0.875rem;
    border-radius: 0.75rem;
  }

  .video-section::before {
    display: none; /* Retire animation border pour performance */
  }

  .video-header {
    gap: 0.625rem;
    margin-bottom: 0.625rem;
  }

  .video-title {
    font-size: 0.9375rem; /* 15px */
  }

  .video-description {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limite à 2 lignes sur petits écrans */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .video-container-project {
    padding-top: 56.25%; /* Garde 16:9 pour contrôles YouTube */
    border-radius: 0.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  }
}

/* Très petits téléphones (<360px) - iPhone SE 1st gen */
@media (max-width: 360px) {
  .video-section {
    margin: 1rem 0;
    padding: 0.75rem;
    border-radius: 0.625rem;
  }

  .video-header {
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .video-icon {
    width: 1.125rem;
    height: 1.125rem;
  }

  .video-title {
    font-size: 0.875rem; /* text-sm */
    line-height: 1.3;
  }

  .video-badge {
    padding: 0.1875rem 0.5rem;
    font-size: 0.625rem; /* 10px */
  }

  .video-description {
    font-size: 0.6875rem; /* 11px */
    -webkit-line-clamp: 2;
  }

  .video-container-project {
    padding-top: 56.25%;
    border-radius: 0.5rem;
    box-shadow: 0 3px 16px rgba(0, 0, 0, 0.3);
  }
}
</style>

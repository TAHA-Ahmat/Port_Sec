<template>
  <main class="space-y-8">
    <!-- Breadcrumbs -->
    <Breadcrumbs :items="[{ label: 'Accueil' }]" />

    <!-- =========================
         1. HERO SECTION – Identité & Mission GPM (Full-Width)
         ========================= -->
    <HeroSection
      :tag-override="t('gpmHero.tag', 'Opérateur national tchadien')"
      :title-override="t('gpmHero.title', 'Connecter le Tchad au monde par des infrastructures logistiques modernes')"
      :subtitle-override="t('gpmHero.subtitle', 'Genesis Port Management développe et gère les plateformes logistiques régionales au service du commerce extérieur du Tchad.')"
      :trust-override="t('gpmHero.trust', 'Basé à N\'Djamena • Opérateur CEMAC')"
      :cta-invest-label="t('gpmHero.ctaPrimary', 'Découvrir nos projets')"
      :cta-secondary-label="t('gpmHero.ctaSecondary', 'Nous contacter')"
      invest-to="/projects"
      secondary-to="/contact"
      :feature-badges="[]"
      org-name="Genesis Port Management"
      org-url="https://portsectchad.com"
      project-name="Réseau logistique CEMAC"
      :project-description="t('gpmHero.subtitle', '')"
    />

    <!-- =========================
         2. PRÉSENTATION GPM – "Qui sommes-nous ?"
         ========================= -->
    <AboutGPM
      data-testid="home-about-gpm"
      :title="t('gpm.title', 'Un opérateur tchadien de référence')"
      :intro="t('gpm.intro', '')"
    />

    <!-- =========================
         3. VISION 2030 – Frise stratégique
         ========================= -->
    <Timeline
      data-testid="home-vision"
      :title="t('vision.title', 'Notre Vision 2030')"
      :intro="t('vision.intro', '')"
    />

    <!-- =========================
         4. NOS RÉALISATIONS – Appel vers Projects
         ========================= -->
    <section id="projects" class="max-w-6xl mx-auto p-6">
      <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-12 text-center space-y-6">
        <header class="flex items-center justify-center gap-2 text-sm opacity-80">
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          <h2 class="font-semibold">{{ t('projects.title', 'Nos Projets') }}</h2>
        </header>

        <div class="space-y-4">
          <p class="text-3xl md:text-4xl font-bold">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
              3 infrastructures logistiques majeures
            </span>
          </p>
          <p class="text-lg opacity-90 max-w-2xl mx-auto">
            {{ t('home.projectsIntro', 'GPM développe un réseau intégré de ports secs et plateformes logistiques pour connecter le Tchad au commerce mondial.') }}
          </p>
        </div>

        <div class="pt-4">
          <RouterLink
            to="/projects"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-neutral-900 font-bold hover:bg-emerald-400 shadow-2xl shadow-black/60 hover:shadow-emerald-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-lg"
          >
            <span>{{ t('home.discoverProjects', 'Découvrir nos projets') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- =========================
         5. DOMAINES D'EXPERTISE – 6 cartes iconiques
         ========================= -->
    <ProjectHighlights
      data-testid="home-expertise"
      :title="t('expertise.title', 'Nos domaines d\'expertise')"
      :items="expertiseItems"
      :columns="3"
    />

    <!-- =========================
         6. IMPACT & RÉSEAU – KPIs + Partenaires
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-8">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('impactKpis.title','Impact & Réseau') }}</h2>
      </header>

      <!-- KPIs -->
      <div class="space-y-3">
        <h3 class="text-lg font-semibold opacity-90">{{ t('impactKpis.subtitle','Nos résultats concrets') }}</h3>
        <KpiStrip
          mode="impact"
          :columns="5"
          :show-title="false"
          :animated="true"
          data-testid="kpi-impact"
        />
      </div>

      <!-- Partenaires -->
      <div class="space-y-3">
        <h3 class="text-lg font-semibold opacity-90">{{ t('partners.title', 'Ils nous accompagnent') }}</h3>
        <LogoCarousel
          data-testid="home-partners"
          :title="''"
          :show-title="false"
          :intro="t('partners.intro', '')"
          :auto-scroll="true"
        />
      </div>
    </section>

    <!-- =========================
         7. ACTUALITÉS & AVANCEMENT
         ========================= -->
    <NewsCarousel
      data-testid="home-news"
      :title="t('news.title', 'Avancées du projet')"
      :autoplay="true"
      :autoplay-delay="5000"
    />

    <!-- =========================
         8. SECTION FINALE – Appel à action
         ========================= -->
    <InvestorCTA
      data-testid="home-final-cta"
      :title="t('cta.title', 'Rejoignez la dynamique nationale')"
      :subtitle="t('cta.subtitle', 'Ensemble, construisons le réseau logistique du futur.')"
      primary-to="/contact"
      :primary-label="t('cta.primaryLabel', 'Nous contacter')"
      secondary-to="/projects"
      :secondary-label="t('cta.secondaryLabel', 'Voir tous nos projets')"
      variant="solid"
    />
  </main>
</template>

<script setup>
// =========================================
// Home.vue — Nouvelle structure GPM optimisée
// 8 sections : Hero, About, Vision, Projects (CTA), Expertise, Impact & Réseau, News, CTA
// =========================================
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
// import { useScrollReveal } from '@/composables/useScrollReveal' // Désactivé temporairement

import { RouterLink } from 'vue-router'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutGPM from '../components/AboutGPM.vue'
import Timeline from '../components/Timeline.vue'
import ProjectHighlights from '../components/ProjectHighlights.vue'
import KpiStrip from '../components/KpiStrip.vue'
import LogoCarousel from '../components/LogoCarousel.vue'
import NewsCarousel from '../components/NewsCarousel.vue'
import InvestorCTA from '../components/InvestorCTA.vue'

const { t, tm } = useI18n()

// Activer les animations scroll reveal - DÉSACTIVÉ TEMPORAIREMENT
// useScrollReveal()

// Helper pour extraire les arrays i18n
const tArray = (path) => {
  const v = tm(path)
  return Array.isArray(v) ? v : []
}

// Expertise items (fallback si pas dans i18n)
const expertiseItems = computed(() => {
  const items = tArray('expertise.items')
  if (items.length) return items

  // Fallback
  return [
    { icon: '🧱', title: 'Infrastructure', text: 'Développement de zones logistiques' },
    { icon: '⚙️', title: 'Digitalisation', text: 'Solutions tech pour la traçabilité' },
    { icon: '🚛', title: 'Opérations', text: 'Gestion des plateformes' },
    { icon: '🌱', title: 'Durable', text: 'Impact social positif' },
    { icon: '🤝', title: 'PPP', text: 'Partenariats institutionnels' },
    { icon: '📊', title: 'Performance', text: 'KPIs et reporting' }
  ]
})
</script>

<style scoped>
/* Espacement entre sections */
main {
  padding-bottom: 4rem;
}

/* ===== Scroll Reveal Animations - DÉSACTIVÉ TEMPORAIREMENT ===== */
/* Toutes les sections visibles par défaut pour éviter la régression */
/* L'animation au scroll sera réactivée après vérification */
</style>

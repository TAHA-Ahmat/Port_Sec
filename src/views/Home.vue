<template>
  <main class="space-y-8">
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
      invest-to="#projects"
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
         4. NOS PROJETS – Portefeuille GPM
         ========================= -->
    <ProjectCard
      id="projects"
      data-testid="home-projects"
      :title="t('projects.title', 'Nos Projets')"
      :columns="4"
    />

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
         6. IMPACT ET CHIFFRES CLÉS
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-4">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('impactKpis.title','Nos résultats concrets') }}</h2>
      </header>
      <KpiStrip
        mode="impact"
        :columns="5"
        :show-title="false"
        :animated="true"
        data-testid="kpi-impact"
      />
    </section>

    <!-- =========================
         7. PARTENAIRES & COLLABORATIONS
         ========================= -->
    <LogoCarousel
      data-testid="home-partners"
      :title="t('partners.title', 'Ils nous accompagnent')"
      :intro="t('partners.intro', '')"
      :auto-scroll="true"
    />

    <!-- =========================
         8. ACTUALITÉS & AVANCEMENT
         ========================= -->
    <NewsCarousel
      data-testid="home-news"
      :title="t('news.title', 'Avancées du projet')"
      :autoplay="true"
      :autoplay-delay="5000"
    />

    <!-- =========================
         9. SECTION FINALE – Appel à action
         ========================= -->
    <InvestorCTA
      data-testid="home-final-cta"
      :title="t('cta.title', 'Rejoignez la dynamique nationale')"
      :subtitle="t('cta.subtitle', 'Ensemble, construisons le réseau logistique du futur.')"
      primary-to="#projects"
      :primary-label="t('cta.primaryLabel', 'Découvrir nos projets')"
      secondary-to="/invest"
      :secondary-label="t('cta.secondaryLabel', 'Demander un accès investisseur')"
      variant="solid"
    />
  </main>
</template>

<script setup>
// =========================================
// Home.vue — Nouvelle structure GPM
// 9 sections : Hero, About, Vision, Projects, Expertise, Impact, Partners, News, CTA
// =========================================
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
// import { useScrollReveal } from '@/composables/useScrollReveal' // Désactivé temporairement

import HeroSection from '../components/HeroSection.vue'
import AboutGPM from '../components/AboutGPM.vue'
import Timeline from '../components/Timeline.vue'
import ProjectCard from '../components/ProjectCard.vue'
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

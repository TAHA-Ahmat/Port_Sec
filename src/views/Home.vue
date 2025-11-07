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
         6. POURQUOI GPM ? – Avantages compétitifs
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('advantages.title', 'Pourquoi GPM ?') }}</h2>
      </header>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Avantage 1 -->
        <div class="p-6 rounded-xl border border-emerald-800/40 bg-gradient-to-br from-emerald-900/20 to-neutral-900 hover:border-emerald-700/60 transition-all group">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🎯
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-lg mb-2 text-emerald-300">{{ t('advantages.exclusivity.title', 'Exclusivité nationale') }}</h3>
              <p class="text-sm opacity-90 leading-relaxed">
                {{ t('advantages.exclusivity.text', 'Opérateur exclusif mandaté par l\'État tchadien pour la gestion du fret national via le Port Sec de Douala.') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Avantage 2 -->
        <div class="p-6 rounded-xl border border-blue-800/40 bg-gradient-to-br from-blue-900/20 to-neutral-900 hover:border-blue-700/60 transition-all group">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🔗
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-lg mb-2 text-blue-300">{{ t('advantages.network.title', 'Réseau intégré CEMAC') }}</h3>
              <p class="text-sm opacity-90 leading-relaxed">
                {{ t('advantages.network.text', 'Trois plateformes complémentaires (Douala, Kribi, Ngaoundéré) pour un maillage logistique optimal.') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Avantage 3 -->
        <div class="p-6 rounded-xl border border-amber-800/40 bg-gradient-to-br from-amber-900/20 to-neutral-900 hover:border-amber-700/60 transition-all group">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              💰
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-lg mb-2 text-amber-300">{{ t('advantages.cost.title', 'Réduction des coûts') }}</h3>
              <p class="text-sm opacity-90 leading-relaxed">
                {{ t('advantages.cost.text', 'Jusqu\'à -40% sur les coûts logistiques et -50% sur les délais de transit pour les opérateurs économiques.') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Avantage 4 -->
        <div class="p-6 rounded-xl border border-purple-800/40 bg-gradient-to-br from-purple-900/20 to-neutral-900 hover:border-purple-700/60 transition-all group">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              ⚖️
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-lg mb-2 text-purple-300">{{ t('advantages.legal.title', 'Cadre juridique solide') }}</h3>
              <p class="text-sm opacity-90 leading-relaxed">
                {{ t('advantages.legal.text', 'Convention BOT signée, accords bilatéraux Tchad-Cameroun et protection internationale (Convention de New York 1967).') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
         7. IMPACT & RÉSEAU – KPIs + Partenaires
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

      <!-- Réseau visuel -->
      <div class="p-8 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950">
        <h3 class="text-lg font-semibold opacity-90 mb-6 text-center">{{ t('network.title', 'Notre réseau logistique') }}</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Douala -->
          <div class="text-center space-y-3">
            <div class="relative inline-block">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/30">
                🏗️
              </div>
              <div class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-400 border-2 border-neutral-950 flex items-center justify-center text-xs font-bold">1</div>
            </div>
            <div>
              <div class="font-bold text-emerald-300">Douala</div>
              <div class="text-xs text-neutral-400">Port Sec • Opérationnel</div>
              <div class="text-xs text-neutral-500 mt-1">10 ha • 3.5K EVP</div>
            </div>
          </div>

          <!-- Kribi -->
          <div class="text-center space-y-3">
            <div class="relative inline-block">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30">
                ⚓
              </div>
              <div class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-yellow-400 border-2 border-neutral-950 flex items-center justify-center text-xs font-bold">2</div>
            </div>
            <div>
              <div class="font-bold text-blue-300">Kribi</div>
              <div class="text-xs text-neutral-400">Plateforme maritime • T2 2026</div>
              <div class="text-xs text-neutral-500 mt-1">25 ha • 45K EVP</div>
            </div>
          </div>

          <!-- Ngaoundéré -->
          <div class="text-center space-y-3">
            <div class="relative inline-block">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-3xl shadow-lg shadow-purple-500/30">
                🚂
              </div>
              <div class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-400 border-2 border-neutral-950 flex items-center justify-center text-xs font-bold">3</div>
            </div>
            <div>
              <div class="font-bold text-purple-300">Ngaoundéré</div>
              <div class="text-xs text-neutral-400">Hub ferroviaire • T4 2026</div>
              <div class="text-xs text-neutral-500 mt-1">35 ha • 60K EVP</div>
            </div>
          </div>
        </div>
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
         8. TÉMOIGNAGES & CONFIANCE
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('testimonials.title', 'Ils nous font confiance') }}</h2>
      </header>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Témoignage 1 -->
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl">
              💼
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-emerald-300">Opérateurs économiques tchadiens</h3>
              <p class="text-xs text-neutral-400">Secteur Import/Export</p>
            </div>
          </div>
          <p class="text-sm opacity-90 italic leading-relaxed">
            "{{ t('testimonials.operators', 'Le Port Sec de Douala a transformé notre chaîne logistique. Nos délais sont réduits de moitié et nos coûts ont baissé de 35%.') }}"
          </p>
        </div>

        <!-- Témoignage 2 -->
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl">
              🏛️
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-blue-300">Autorités portuaires</h3>
              <p class="text-xs text-neutral-400">Partenaires CEMAC</p>
            </div>
          </div>
          <p class="text-sm opacity-90 italic leading-relaxed">
            "{{ t('testimonials.authorities', 'GPM apporte une solution moderne et professionnelle qui fluidifie le transit régional tout en respectant les normes internationales.') }}"
          </p>
        </div>

        <!-- Témoignage 3 -->
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-2xl">
              🏢
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-amber-300">Investisseurs institutionnels</h3>
              <p class="text-xs text-neutral-400">Partenaires financiers</p>
            </div>
          </div>
          <p class="text-sm opacity-90 italic leading-relaxed">
            "{{ t('testimonials.investors', 'Un projet solide, rentable et stratégique. Le cadre juridique est robuste et la vision à long terme est claire.') }}"
          </p>
        </div>

        <!-- Témoignage 4 -->
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl">
              🌍
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-purple-300">Organisations internationales</h3>
              <p class="text-xs text-neutral-400">Bailleurs et ONG</p>
            </div>
          </div>
          <p class="text-sm opacity-90 italic leading-relaxed">
            "{{ t('testimonials.international', 'GPM démontre qu\'il est possible de développer des infrastructures modernes en Afrique centrale avec impact social positif.') }}"
          </p>
        </div>
      </div>
    </section>

    <!-- =========================
         9. ACTUALITÉS & AVANCEMENT
         ========================= -->
    <NewsCarousel
      data-testid="home-news"
      :title="t('news.title', 'Avancées du projet')"
      :autoplay="true"
      :autoplay-delay="5000"
    />

    <!-- =========================
         10. SECTION FINALE – Appel à action
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
// Home.vue — Structure GPM complète et optimisée
// 10 sections : Hero, About, Vision, Projects (CTA), Expertise, Avantages, Impact & Réseau, Témoignages, News, CTA
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

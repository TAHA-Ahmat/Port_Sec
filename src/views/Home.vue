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
    <div class="w-full bg-gradient-to-b from-neutral-900/60 via-neutral-900/40 to-transparent py-12">
      <AboutGPM
        data-testid="home-about-gpm"
        :title="t('gpm.title', 'Un opérateur tchadien de référence')"
        :intro="t('gpm.intro', '')"
      />
    </div>

    <!-- =========================
         3. VISION 2030 – Frise stratégique
         ========================= -->
    <div class="w-full bg-gradient-to-r from-neutral-900/50 via-neutral-900/70 to-neutral-900/50 border-y border-neutral-800/30 py-12">
      <Timeline
        data-testid="home-vision"
        :title="t('vision.title', 'Notre Vision 2030')"
        :intro="t('vision.intro', '')"
      />
    </div>

    <!-- =========================
         4. DOMAINES D'EXPERTISE – 6 cartes iconiques
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
        <h2 class="font-semibold">{{ t('whyGpm.title', 'Pourquoi GPM ?') }}</h2>
      </header>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Avantage 1 -->
        <div class="p-6 rounded-xl border border-emerald-800/40 bg-gradient-to-br from-emerald-900/20 to-neutral-900 hover:border-emerald-700/60 transition-all group">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              {{ tArray('whyGpm.items')[0]?.icon || '🎯' }}
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-lg mb-2 text-emerald-300">{{ tArray('whyGpm.items')[0]?.title || 'Exclusivité nationale' }}</h3>
              <p class="text-sm opacity-90 leading-relaxed">
                {{ tArray('whyGpm.items')[0]?.text || 'Opérateur exclusif mandaté par l\'État tchadien pour la gestion du fret national via le Port Sec de Douala.' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Avantage 2 -->
        <div class="p-6 rounded-xl border border-amber-800/40 bg-gradient-to-br from-amber-900/20 to-neutral-900 hover:border-amber-700/60 transition-all group">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              {{ tArray('whyGpm.items')[1]?.icon || '💰' }}
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-lg mb-2 text-amber-300">{{ tArray('whyGpm.items')[1]?.title || 'Réduction des coûts' }}</h3>
              <p class="text-sm opacity-90 leading-relaxed">
                {{ tArray('whyGpm.items')[1]?.text || 'Jusqu\'à -40% sur les coûts logistiques et -50% sur les délais de transit pour les opérateurs économiques.' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Avantage 3 -->
        <div class="p-6 rounded-xl border border-purple-800/40 bg-gradient-to-br from-purple-900/20 to-neutral-900 hover:border-purple-700/60 transition-all group">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              {{ tArray('whyGpm.items')[2]?.icon || '⚖️' }}
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-lg mb-2 text-purple-300">{{ tArray('whyGpm.items')[2]?.title || 'Cadre juridique solide' }}</h3>
              <p class="text-sm opacity-90 leading-relaxed">
                {{ tArray('whyGpm.items')[2]?.text || 'Convention BOT signée, accords bilatéraux Tchad-Cameroun et protection internationale (Convention de New York 1967).' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
         7. IMPACT & RÉSEAU – KPIs + Partenaires
         ========================= -->
    <div class="w-full bg-gradient-to-b from-neutral-900/60 via-neutral-900/50 to-neutral-900/40 border-t border-neutral-800/60 py-12">
      <section class="max-w-6xl mx-auto p-6 space-y-8">
      <!-- KPIs -->
      <div class="space-y-3">
        <header class="flex items-center gap-2 text-sm opacity-80 mb-3">
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          <h2 class="font-semibold">{{ t('impactKpis.title','Nos résultats concrets') }}</h2>
        </header>
        <KpiStrip
          mode="impact"
          :columns="4"
          :show-title="false"
          :animated="true"
          data-testid="kpi-impact"
        />
        <!-- Subtitle Vision 2030 -->
        <p class="text-center text-sm opacity-60 pt-2">
          {{ t('impactKpis.subtitle', 'Chiffres prévisionnels à l\'horizon 2030') }}
        </p>
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
              <div class="font-bold text-emerald-300">{{ tArray('network.sites')[0]?.name || 'Douala' }}</div>
              <div class="text-xs text-neutral-400">{{ tArray('network.sites')[0]?.status || 'Port Sec • Opérationnel' }}</div>
              <div class="text-xs text-neutral-500 mt-1">{{ tArray('network.sites')[0]?.capacity || '10 ha • 3.5K EVP' }}</div>
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
              <div class="font-bold text-blue-300">{{ tArray('network.sites')[1]?.name || 'Kribi' }}</div>
              <div class="text-xs text-neutral-400">{{ tArray('network.sites')[1]?.status || 'Plateforme maritime • T2 2026' }}</div>
              <div class="text-xs text-neutral-500 mt-1">{{ tArray('network.sites')[1]?.capacity || '25 ha • 45K EVP' }}</div>
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
              <div class="font-bold text-purple-300">{{ tArray('network.sites')[2]?.name || 'Ngaoundéré' }}</div>
              <div class="text-xs text-neutral-400">{{ tArray('network.sites')[2]?.status || 'Hub ferroviaire • T4 2026' }}</div>
              <div class="text-xs text-neutral-500 mt-1">{{ tArray('network.sites')[2]?.capacity || '35 ha • 60K EVP' }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

    <!-- =========================
         8. AVANCÉES DU PROJET - Roadmap 2025-2032
         ========================= -->
    <div class="w-full bg-gradient-to-br from-red-900/15 via-neutral-900/50 to-neutral-950 border-t border-red-800/20 py-12">
      <section class="max-w-6xl mx-auto p-6 space-y-6" data-testid="home-milestones">
      <!-- Header -->
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('milestones.title', 'Avancées du projet') }}</h2>
      </header>

      <!-- Timeline vertical avec connecteur rouge -->
      <div class="relative">
        <!-- Ligne verticale rouge (desktop) -->
        <div
          class="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600/40 via-red-500/60 to-red-600/40 rounded-full milestone-pulse"
          aria-hidden="true"
        ></div>

        <!-- Milestones -->
        <div class="space-y-6">
          <!-- Milestone 1: Mars 2025 -->
          <article
            class="relative group pl-0 md:pl-16"
            role="article"
            tabindex="0"
          >
            <!-- Point sur la ligne (desktop) -->
            <div
              class="hidden md:flex absolute left-3 top-6 w-6 h-6 rounded-full bg-red-500/20 border-2 border-red-500 items-center justify-center z-10"
              aria-hidden="true"
            >
              <span class="text-xs">📜</span>
            </div>

            <!-- Carte -->
            <div
              class="rounded-2xl border border-red-800/40 bg-gradient-to-br from-red-900/10 to-neutral-900 p-6 hover:border-red-700/60 hover:scale-[1.01] transition-all duration-300 focus-within:ring-2 focus-within:ring-red-500"
            >
              <!-- Date + Icon mobile -->
              <div class="flex items-center justify-between mb-3 md:hidden">
                <span class="text-2xl">📜</span>
                <span class="text-sm font-bold" style="color: #ff3b3b;">Mars 2025</span>
              </div>

              <!-- Date desktop -->
              <p class="hidden md:block text-sm font-bold mb-2" style="color: #ff3b3b;">
                {{ t('milestones.items[0].date', 'Mars 2025') }}
              </p>

              <!-- Titre -->
              <h3 class="font-bold text-lg mb-2 text-red-300">
                {{ t('milestones.items[0].title', 'Signature du protocole Douala–Kribi') }}
              </h3>

              <!-- Description -->
              <p class="text-sm opacity-90 leading-relaxed">
                {{ t('milestones.items[0].description', 'Finalisation des études techniques et lancement du partenariat logistique entre Douala et le port en eau profonde de Kribi.') }}
              </p>
            </div>
          </article>

          <!-- Milestone 2: 2025-2028 -->
          <article
            class="relative group pl-0 md:pl-16"
            role="article"
            tabindex="0"
          >
            <!-- Point sur la ligne (desktop) -->
            <div
              class="hidden md:flex absolute left-3 top-6 w-6 h-6 rounded-full bg-red-500/20 border-2 border-red-500 items-center justify-center z-10"
              aria-hidden="true"
            >
              <span class="text-xs">🏗️</span>
            </div>

            <!-- Carte -->
            <div
              class="rounded-2xl border border-red-800/40 bg-gradient-to-br from-red-900/10 to-neutral-900 p-6 hover:border-red-700/60 hover:scale-[1.01] transition-all duration-300 focus-within:ring-2 focus-within:ring-red-500"
            >
              <!-- Date + Icon mobile -->
              <div class="flex items-center justify-between mb-3 md:hidden">
                <span class="text-2xl">🏗️</span>
                <span class="text-sm font-bold" style="color: #ff3b3b;">2025–2028 (En cours)</span>
              </div>

              <!-- Date desktop + Badge -->
              <div class="hidden md:flex items-center gap-3 mb-2">
                <p class="text-sm font-bold" style="color: #ff3b3b;">
                  {{ t('milestones.items[1].date', '2025–2028') }}
                </p>
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-900/30 text-emerald-300 border border-emerald-700/50">
                  <span class="inline-block h-2 w-2 rounded-full bg-emerald-400 mr-1.5"></span>
                  En cours
                </span>
              </div>

              <!-- Titre -->
              <h3 class="font-bold text-lg mb-2 text-red-300">
                {{ t('milestones.items[1].title', 'Travaux d\'aménagement du Port Sec de Douala') }}
              </h3>

              <!-- Description -->
              <p class="text-sm opacity-90 leading-relaxed">
                {{ t('milestones.items[1].description', 'Phase de construction, installation des équipements et mise en exploitation progressive du site logistique.') }}
              </p>
            </div>
          </article>

          <!-- Milestone 3: 2028 -->
          <article
            class="relative group pl-0 md:pl-16"
            role="article"
            tabindex="0"
          >
            <!-- Point sur la ligne (desktop) -->
            <div
              class="hidden md:flex absolute left-3 top-6 w-6 h-6 rounded-full bg-red-500/20 border-2 border-red-500 items-center justify-center z-10"
              aria-hidden="true"
            >
              <span class="text-xs">🚆</span>
            </div>

            <!-- Carte -->
            <div
              class="rounded-2xl border border-red-800/40 bg-gradient-to-br from-red-900/10 to-neutral-900 p-6 hover:border-red-700/60 hover:scale-[1.01] transition-all duration-300 focus-within:ring-2 focus-within:ring-red-500"
            >
              <!-- Date + Icon mobile -->
              <div class="flex items-center justify-between mb-3 md:hidden">
                <span class="text-2xl">🚆</span>
                <span class="text-sm font-bold" style="color: #ff3b3b;">2028</span>
              </div>

              <!-- Date desktop -->
              <p class="hidden md:block text-sm font-bold mb-2" style="color: #ff3b3b;">
                {{ t('milestones.items[2].date', '2028') }}
              </p>

              <!-- Titre -->
              <h3 class="font-bold text-lg mb-2 text-red-300">
                {{ t('milestones.items[2].title', 'Études et interconnexion Kribi–Ngaoundéré') }}
              </h3>

              <!-- Description -->
              <p class="text-sm opacity-90 leading-relaxed">
                {{ t('milestones.items[2].description', 'Préparation de la connexion ferroviaire et intégration du futur hub multimodal de Ngaoundéré dans le corridor Tchad–Cameroun.') }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
    </div>

    <!-- =========================
         10. SECTION FINALE – Appel à action
         ========================= -->
    <InvestorCTA
      data-testid="home-final-cta"
      :title="t('cta.title', 'Rejoignez la dynamique nationale')"
      :subtitle="t('cta.subtitle', 'Ensemble, construisons le réseau logistique du futur.')"
      primary-to="/projects"
      :primary-label="t('cta.primaryLabel', 'Découvrir nos projets')"
      secondary-to="/contact"
      :secondary-label="t('cta.secondaryLabel', 'Nous contacter')"
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

/* ===== Milestones Timeline - Animation ligne rouge ===== */
.milestone-pulse {
  animation: milestonePulse 3s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(220, 38, 38, 0.3);
}

@keyframes milestonePulse {
  0%, 100% {
    opacity: 0.6;
    box-shadow: 0 0 10px rgba(220, 38, 38, 0.3);
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 20px rgba(220, 38, 38, 0.6);
  }
}

/* ===== Scroll Reveal Animations - DÉSACTIVÉ TEMPORAIREMENT ===== */
/* Toutes les sections visibles par défaut pour éviter la régression */
/* L'animation au scroll sera réactivée après vérification */
</style>

<template>
  <main class="space-y-8">
    <!-- =========================
         HERO (rétro-compatible)
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-3">
      <HeroSection
        :tag-override="t('hero.tag', 'APD 75% • PND 2026–2030')"
        :title-override="t('hero.title', `Port Sec de N'Djamena : le hub logistique de demain`)"
        :subtitle-override="t('hero.subtitle', `Un projet clé po... le commerce et le développement entre le Tchad et la région.`)"
        :trust-override="t('hero.trust', 'Aligné PND 2026–2030')"
        :cta-invest-label="t('hero.ctaInvest', t('nav.invest','Investir'))"
        :cta-secondary-label="t('hero.ctaContact', t('nav.contact','Nous contacter'))"
        invest-to="/invest"
        secondary-to="/contact"
        :feature-badges="heroBadges"
        org-name="Port Sec du Tchad"
        org-url="https://example.com"
        project-name="Port Sec (Douala – Bonabéri)"
        :project-description="t('invest.pitch','')"
      >
        <!-- prefix/suffix/below disponibles si besoin -->
      </HeroSection>
    </section>

    <!-- =========================
         CONTEXTE (nouveau)
         ========================= -->
    <ProblemContext
      data-testid="home-problem"
      :title-override="t('home.problem.title', t('impact.title','Contexte & problématique'))"
      :bullets="tArray('home.problem.bullets')"
    />

    <!-- =========================
         SOLUTION (nouveau)
         ========================= -->


    <!-- =========================
         AVANT / APRÈS (nouveau)
         ========================= -->
    <BeforeAfterTable
      :show-delta="true"
      :show-lead="true"
      :show-top-badges="true"
      :show-impact-card="true"
      :zebra="true"
      sort-mode="investor"
      data-testid="home-before-after"
      :title="t('home.beforeAfter.title','Avant / Après')"
      :rows="rowsBeforeAfter"
      :labels="{
        before: t('home.beforeAfter.labels.before','Avant'),
        after: t('home.beforeAfter.labels.after','Après')
      }"
      :notes="tArray('home.beforeAfter.notes')"
    />

    <!-- =========================
         KPIs (legacy -> ops)
         ========================= -->
    <section class="max-w-6xl mx-auto p-6 space-y-4">
      <header v-if="t('kpi.title')" class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('kpi.title','Indicateurs clés') }}</h2>
      </header>
      <KpiStrip v-if="hasLegacyKpis" mode="finance" :show-title="false" data-testid="kpi-finance" />
      <KpiStrip mode="ops" :show-title="!hasLegacyKpis" :columns="4" data-testid="kpi-ops" />
    </section>

    <!-- =========================
         POINTS FORTS (existant enrichi)
         ========================= -->
    <ProjectHighlights
      data-testid="home-highlights"
      :title="t('highlights.title','Points forts')"
      :items="highlightsList"
      :columns="2"
    />

    <!-- =========================
         CADRE LÉGAL (nouveau)
         ========================= -->
    <LegalBadgeBar
      data-testid="home-legal"
      :title-override="t('home.legal.title','Cadre légal & institutionnel')"
      :badges="legalBadges"
    />

    <!-- =========================
         CTA INVESTISSEUR (existant)
         ========================= -->
    <InvestorCTA
      data-testid="home-cta"
      :title="t('invest.title', `Opportunité d’investissement`)"
      :subtitle="t('invest.pitch','')"
      :primary-to="'/dataroom'"
      :primary-label="t('dataroom.open','Espace documentaire')"
      :secondary-to="'/contact'"
      :secondary-label="t('nav.contact','Contact')"
      variant="solid"
    />

    <!-- =========================
         SLIDER AV/AP (optionnel)
         ========================= -->
    <section v-if="showSlider" class="max-w-6xl mx-auto">
      <BeforeAfterSlider
        data-testid="home-before-after-slider"
        :before-src="slider.beforeSrc"
        :after-src="slider.afterSrc"
        :before-alt="t('home.beforeAfter.labels.before','Avant')"
        :after-alt="t('home.beforeAfter.labels.after','Après')"
        :initial="50"
        :step="5"
        aspect="16/9"
      >
        <template #footer>
          <p v-for="(n,i) in tArray('home.beforeAfter.notes')" :key="'snote'+i" class="px-6">{{ n }}</p>
        </template>
      </BeforeAfterSlider>
    </section>
  </main>
</template>

<script setup>
// =========================================
// Home.vue — améliorée, 0 régression, + lignes
// =========================================
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import HeroSection from '../components/HeroSection.vue'
import ProblemContext from '../components/ProblemContext.vue'
import SolutionOverview from '../components/SolutionOverview.vue'
import BeforeAfterTable from '../components/BeforeAfterTable.vue'
import BeforeAfterSlider from '../components/BeforeAfterSlider.vue'
import KpiStrip from '../components/KpiStrip.vue'
import ProjectHighlights from '../components/ProjectHighlights.vue'
import LegalBadgeBar from '../components/LegalBadgeBar.vue'
import InvestorCTA from '../components/InvestorCTA.vue'

const { t, tm } = useI18n()

const tArray = (path) => {
  const v = tm(path)
  return Array.isArray(v) ? v : []
}

const heroBadges = computed(() => {
  const f = tArray('home.solution.features')
  return f.slice(0, 3)
})

const rowsBeforeAfter = computed(() => {
  const rows = tArray('home.beforeAfter.rows')
  if (rows.length) return rows
  return [
    { metric: t('home.beforeAfter.metric','Indicateur'), before: '≈ 30 jours', after: '≈ 5 jours' },
    { metric: 'Manutentions', before: '≈ 4', after: '1' },
    { metric: 'Services', before: 'Dispersés', after: 'Centralisés (guichet unique)' },
    { metric: 'Coûts', before: 'Élevés', after: '−30 à −40 %' }
  ]
})

const hasLegacyKpis = computed(() => {
  const capex = t('kpiValues.capexXaf')
  const eq = t('kpiValues.equityXaf')
  const debt = t('kpiValues.debtXaf')
  const apd = t('kpiValues.apdPct')
  return [capex, eq, debt, apd].some(v => typeof v === 'string' && v.trim())
})

const highlightsList = computed(() => {
  const old = tArray('highlights.items')
  if (old.length) return old
  const feat = tArray('home.solution.features')
  if (feat.length) return feat.slice(0, 4)
  return [
    'Réduction des coûts logistiques',
    'Traçabilité douane/GPS',
    'Hub compétitif CEMAC',
    'Sécurité des flux'
  ]
})

const legalBadges = computed(() => {
  const list = []
  const mou = t('home.legal.mou')
  const ny = t('home.legal.nyConvention')
  const bi = t('home.legal.bilateral')
  ;[mou, ny, bi].forEach(s => { if (typeof s === 'string' && s.trim()) list.push(s) })
  return list
})

const showSlider = computed(() => !!(slider.beforeSrc && slider.afterSrc))
const slider = { beforeSrc: '', afterSrc: '' }
</script>

<style scoped>
/* Spacings et petits accents — thème sombre intact */
</style>

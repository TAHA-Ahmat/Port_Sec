<template>
  <section class="max-w-6xl mx-auto p-6 space-y-12">
    <!-- En-tête -->
    <header class="space-y-2 text-left">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <span>{{ t('nav.invest') || 'Investir' }}</span>
      </div>

      <h1 class="text-2xl md:text-3xl font-bold leading-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
          {{ t('invest.title') || 'Opportunité d’investissement' }}
        </span>
      </h1>

      <p class="opacity-80 max-w-3xl">
        {{ t('invest.pitch') || 'Un actif logistique stratégique avec un modèle robuste et des perspectives de création de valeur.' }}
      </p>
    </header>

    <!-- Structure de financement / KPIs -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">
        {{ t('invest.structure') || 'Structure de financement' }}
      </h2>
      <!-- Conserve ton composant et les données i18n existantes -->
      <KpiStrip />
    </section>

    <!-- Pourquoi investir (3 cartes concrètes) -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">
        {{ t('invest.benefitsTitle') || 'Pourquoi investir ?' }}
      </h2>

      <!-- On réutilise ton composant existant -->
      <ProjectHighlights />

      <!-- Option : court texte de contexte (non intrusif) -->
      <p class="text-sm opacity-70 max-w-3xl">
        {{ t('invest.benefitsNote') || 'Positionnement, exécution et durabilité : un triptyque d’atouts différenciants.' }}
      </p>
    </section>

    <!-- Processus (4 étapes, langage grand public) -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">
        {{ t('invest.process') || 'Processus d’investissement' }}
      </h2>

      <ol class="grid md:grid-cols-4 gap-4">
        <Step
          n="1"
          :title="t('invest.step1') || 'Prise de contact'"
          :desc="t('invest.step1Desc') || 'Présentation synthétique et échange d’introduction.'"
        />
        <Step
          n="2"
          :title="t('invest.step2') || 'Accès documentaire'"
          :desc="t('invest.step2Desc') || 'Accès aux documents clés après validation.'"
        />
        <Step
          n="3"
          :title="t('invest.step3') || 'Analyses & vérifications'"
          :desc="t('invest.step3Desc') || 'Analyses techniques, juridiques et financières (due diligence) en langage clair.'"
        />
        <Step
          n="4"
          :title="t('invest.step4') || 'Accord & calendrier'"
          :desc="t('invest.step4Desc') || 'Accord de principes, modalités et jalons de déploiement.'"
        />
      </ol>
    </section>

    <!-- Gouvernance & véhicule -->
    <section class="space-y-2">
      <h2 class="text-xl md:text-2xl font-bold">
        {{ t('invest.governanceTitle') || 'Gouvernance & véhicule' }}
      </h2>
      <p class="opacity-80 max-w-3xl">
        {{ t('invest.governanceText') || 'Gouvernance dédiée, suivi conformité et reporting régulier pour sécuriser l’investissement.' }}
      </p>
      <ul class="text-sm opacity-80 grid md:grid-cols-3 gap-2">
        <li>✔ {{ t('invest.gov.item1') || 'Comité d’investissement dédié' }}</li>
        <li>✔ {{ t('invest.gov.item2') || 'Cadre juridique et conformité' }}</li>
        <li>✔ {{ t('invest.gov.item3') || 'Reporting de performance périodique' }}</li>
      </ul>
    </section>

    <!-- CTA final -->
    <section class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div class="text-lg md:text-xl font-semibold">
        {{ t('impact.opportunity.title') || 'Intéressé pour avancer ?' }}
      </div>
      <div class="flex gap-3">
        <RouterLink
          to="/contact"
          class="rounded-xl px-5 py-3 font-semibold bg-emerald-500 text-black hover:scale-[1.02] transition"
        >
          {{ t('hero.ctaContact') || 'Contacter l’équipe' }}
        </RouterLink>

        <RouterLink
          to="/dataroom"
          class="rounded-xl px-5 py-3 font-semibold border border-neutral-700 hover:bg-neutral-800 transition"
        >
          {{ t('dataroom.open') || 'Accéder aux documents' }}
        </RouterLink>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

/**
 * On conserve tes composants existants (zéro régression) :
 * - KpiStrip : affiche Capex / Fonds propres / Emprunt etc. via i18n
 * - ProjectHighlights : tes 3 cartes “Pourquoi investir” déjà stylées
 */
import KpiStrip from '../components/KpiStrip.vue'
import ProjectHighlights from '../components/ProjectHighlights.vue'

const { t } = useI18n()

// Petit composant local (4 étapes) pour éviter d’introduire de nouvelles dépendances.
const Step = {
  props: { n: String, title: String, desc: String },
  template: `
    <li class="p-5 rounded-xl border border-neutral-800 bg-neutral-900">
      <div class="text-2xl">{{ n }}️⃣</div>
      <div class="font-semibold mt-1">{{ title }}</div>
      <p class="text-sm opacity-80 mt-1">{{ desc }}</p>
    </li>
  `
}
</script>

<style scoped>
/* Optionnel : micro-ajustements typographiques si besoin sans casser ton thème sombre */
</style>

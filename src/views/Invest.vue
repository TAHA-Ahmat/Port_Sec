<template>
  <!-- Watermarks institutionnels -->
  <WatermarkSeals />

  <section class="max-w-6xl mx-auto p-6 space-y-12 relative z-10">
    <!-- =========================
         1) En-tête
    ========================== -->
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
        {{ t('invest.pitch') || 'Un actif logistique stratégique au PAD (Douala), au service des flux Tchad–CEMAC.' }}
      </p>
    </header>

    <!-- =========================
         2) Finance (KpiStrip = finance only)
    ========================== -->
    <section aria-label="Structure financière" class="space-y-4">
      <div class="section-head">
        <h2 class="section-title">
          <span class="dot" aria-hidden="true"></span>
          {{ t('financeBreakdown.title', 'Structure du financement') }}
        </h2>
        <div class="section-legend">
          <span>• {{ t('financeBreakdown.equity', 'Fonds propres') }}</span>
          <span>• {{ t('financeBreakdown.debt', 'Dette') }}</span>
          <span>• {{ t('financeBreakdown.grants', 'Subventions/APD') }}</span>
        </div>
      </div>

      <!-- KpiStrip : CAPEX / Fonds propres / Dette / APD -->
      <KpiStrip :show-title="false" :columns="4" />

      <!-- CTA après Finance -->
      <div class="flex flex-wrap gap-3">
        <RouterLink to="/dataroom" class="btn-secondary">
          {{ t('dataroom.open', 'Accéder à la dataroom') }}
        </RouterLink>
        <RouterLink to="/contact" class="btn-primary">
          {{ t('hero.ctaContact', 'Nous contacter') }}
        </RouterLink>
      </div>
    </section>

    <!-- =========================
         3) Capacités & ressources (Opérationnel)
    ========================== -->
    <section aria-label="Capacités et ressources" class="space-y-3">
      <h2 class="section-title">
        <span class="dot" aria-hidden="true"></span>
        {{ t('home.kpiOps.title', 'Capacités & ressources') }}
      </h2>

      <ul role="list" class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[1fr]">
        <li role="listitem" class="card h-full">
          <p class="kpi-label">{{ t('home.kpiOps.areaHa', 'Superficie (ha)') }}</p>
          <p class="kpi-value">
            {{ t('home.kpiOps.values.areaHa', t('home.kpiOps.areaHaValue', '')) }}
          </p>
        </li>

        <li role="listitem" class="card h-full">
          <p class="kpi-label">{{ t('home.kpiOps.capacityEvp', 'Capacité (EVP/an)') }}</p>
          <p class="kpi-value">
            {{ t('home.kpiOps.values.capacityEvp', t('home.kpiOps.capacityEvpValue', '')) }}
          </p>
        </li>

        <li role="listitem" class="card h-full">
          <p class="kpi-label">{{ t('home.kpiOps.railFleet', 'Matériel ferroviaire') }}</p>
          <p class="kpi-value">
            {{ t('home.kpiOps.values.railFleet', t('home.kpiOps.railFleetValue', '')) }}
          </p>
        </li>

        <li role="listitem" class="card h-full">
          <p class="kpi-label">{{ t('home.kpiOps.jobsDirect', 'Emplois directs') }}</p>
          <p class="kpi-value">
            {{ t('home.kpiOps.values.jobsDirect', t('home.kpiOps.jobsDirectValue', '')) }}
          </p>
        </li>
      </ul>

      <!-- CTA après Opérations -->
      <div class="flex flex-wrap gap-3">
        <RouterLink to="/contact" class="btn-primary">
          {{ t('hero.ctaContact', 'Nous contacter') }}
        </RouterLink>
      </div>
    </section>

    <!-- =========================
         4) Points forts
    ========================== -->
    <section aria-label="Points forts" class="space-y-4">
      <h2 class="section-title">
        <span class="dot" aria-hidden="true"></span>
        Points forts du projet
      </h2>

      <ul role="list" class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[1fr]">
        <li role="listitem" class="card h-full flex items-start gap-3">
          <span class="text-emerald-400 text-xl mt-1">🎯</span>
          <span class="leading-relaxed">Position stratégique au cœur du corridor Douala–N'Djamena</span>
        </li>
        <li role="listitem" class="card h-full flex items-start gap-3">
          <span class="text-emerald-400 text-xl mt-1">⚖️</span>
          <span class="leading-relaxed">Cadre légal sécurisé et appui étatique</span>
        </li>
        <li role="listitem" class="card h-full flex items-start gap-3">
          <span class="text-emerald-400 text-xl mt-1">💼</span>
          <span class="leading-relaxed">Rentabilité soutenue par un marché captif</span>
        </li>
        <li role="listitem" class="card h-full flex items-start gap-3">
          <span class="text-emerald-400 text-xl mt-1">📈</span>
          <span class="leading-relaxed">Impact économique et social positif</span>
        </li>
      </ul>
    </section>

    <!-- =========================
         5) Process 3 étapes (sans clés interdites)
    ========================== -->
    <section aria-label="Processus d’investissement" class="space-y-4">
      <h2 class="section-title">
        <span class="dot" aria-hidden="true"></span>
        <!-- Texte direct pour éviter d’introduire une clé non listée -->
        Processus d’investissement (3 étapes)
      </h2>

      <ol class="grid gap-4 grid-cols-1 sm:grid-cols-3 auto-rows-[1fr]">
        <Step n="1" :title="t('invest.step1', 'Prise de contact')" />
        <Step n="2" :title="t('invest.step2', 'Accès dataroom & échanges')" />
        <Step n="3" :title="t('invest.step3', 'Term sheet & closing')" />
      </ol>

      <!-- micro-CTA -->
      <div class="flex flex-wrap gap-3">
        <RouterLink to="/contact" class="btn-primary">
          {{ t('hero.ctaContact', 'Nous contacter') }}
        </RouterLink>
        <RouterLink to="/dataroom" class="btn-secondary">
          {{ t('dataroom.open', 'Accéder à la dataroom') }}
        </RouterLink>
      </div>
    </section>

    <!-- =========================
         6) Cadre légal (version courte)
    ========================== -->
    <section aria-label="Cadre légal" class="space-y-3">
      <h2 class="section-title">
        <span class="dot" aria-hidden="true"></span>
        {{ t('home.legal.title', 'Cadre légal & institutionnel') }}
      </h2>

      <ul role="list" class="grid gap-4 grid-cols-1 sm:grid-cols-3 auto-rows-[1fr]">
        <li v-for="(it, i) in legalList" :key="`legal-${i}`"
            role="listitem"
            class="card h-full flex items-start gap-3">
          <span class="text-emerald-400 mt-1">✔</span>
          <span class="leading-relaxed">{{ it }}</span>
        </li>
      </ul>
    </section>

    <!-- =========================
         7) Opportunité investisseurs
    ========================== -->
    <section aria-label="Opportunité investisseurs" class="space-y-3">
      <h2 class="section-title">
        <span class="dot" aria-hidden="true"></span>
        {{ t('investPlus.opportunity.title', 'Opportunité pour les investisseurs') }}
      </h2>

      <ul role="list" class="grid gap-4 grid-cols-1 sm:grid-cols-3 auto-rows-[1fr]">
        <li v-for="(b, i) in oppoBullets" :key="`oppo-${i}`" role="listitem" class="card h-full">
          <div class="font-medium">{{ b }}</div>
        </li>
      </ul>

      <div class="flex flex-wrap gap-3">
        <RouterLink to="/contact" class="btn-primary">
          {{ t('hero.ctaContact', 'Nous contacter') }}
        </RouterLink>
      </div>
    </section>

    <!-- =========================
         8) CTA finaux
    ========================== -->
    <footer class="flex flex-wrap gap-3 border-t border-neutral-800/60 pt-6">
      <RouterLink to="/dataroom" class="btn-secondary">
        {{ t('dataroom.cta', t('dataroom.open', 'Accéder aux documents')) }}
      </RouterLink>
      <RouterLink to="/contact" class="btn-primary">
        {{ t('hero.ctaContact', 'Nous contacter') }}
      </RouterLink>
    </footer>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

import WatermarkSeals from '../components/WatermarkSeals.vue'
import KpiStrip from '../components/KpiStrip.vue'
import ProjectHighlights from '../components/ProjectHighlights.vue'

const { t, tm } = useI18n()

// Cadre légal (3 clés courtes uniquement)
const legalList = computed(() => {
  const items = [
    t('home.legal.mou', ''),
    t('home.legal.nyConvention', ''),
    t('home.legal.bilateral', '')
  ].filter(Boolean)
  return items
})

// Opportunité investisseurs (3 bullets)
const oppoBullets = computed(() => {
  const arr = tm('investPlus.opportunity.bullets') || []
  return Array.isArray(arr) ? arr.filter(Boolean) : []
})

// Petit composant interne pour les étapes (simple, stylé, accessible)
const Step = {
  props: { n: String, title: String },
  template: `
    <li class="card h-full">
      <div class="text-2xl">{{ n }}️⃣</div>
      <div class="font-semibold mt-1">{{ title }}</div>
    </li>
  `
}
</script>

<style scoped>
/* Entêtes homogènes */
.section-head {
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* 2 */
}
@media (min-width: 768px) {
  .section-head {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  opacity: 0.8;
  font-size: .95rem;
}
.section-legend {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  font-size: .8rem;
  opacity: .6;
}
.dot {
  display: inline-block;
  height: 0.5rem; /* 2 */
  width: 0.5rem;  /* 2 */
  border-radius: 9999px;
  background-color: rgb(52 211 153); /* emerald-400 */
}

/* Cartes & KPI */
.card {
  border-radius: 1rem;         /* rounded-2xl */
  border: 1px solid rgb(38 38 38); /* border-neutral-800 */
  background-color: rgb(23 23 23); /* bg-neutral-900 */
  padding: 1rem;               /* p-4 */
}
.kpi-label {
  font-size: .75rem;           /* text-xs */
  opacity: .6;
}
.kpi-value {
  margin-top: .25rem;
  font-size: 1.25rem;          /* text-xl */
  font-weight: 600;
  background-image: linear-gradient(to right, #6ee7b7, #ffffff, #6ee7b7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Boutons */
.btn-primary {
  padding: .5rem .75rem;       /* px-3 py-2 */
  border-radius: .5rem;        /* rounded-lg */
  background-color: rgb(5 150 105);  /* emerald-600 */
  color: rgb(23 23 23);        /* text-neutral-900 */
  font-weight: 600;
  font-size: .875rem;          /* text-sm */
  transition: background-color .15s ease-in-out;
}
.btn-primary:hover {
  background-color: rgb(16 185 129); /* emerald-500 */
}
.btn-secondary {
  padding: .5rem .75rem;       /* px-3 py-2 */
  border-radius: .5rem;        /* rounded-lg */
  border: 1px solid rgb(38 38 38);   /* border-neutral-800 */
  background-color: rgb(23 23 23);   /* bg-neutral-900 */
  font-size: .875rem;          /* text-sm */
  transition: background-color .15s ease-in-out;
}
.btn-secondary:hover {
  background-color: rgb(38 38 38);   /* bg-neutral-800 */
}

/* Grilles : même hauteur par rang */
.auto-rows-\[1fr\] {
  grid-auto-rows: 1fr;
}

/* Thème sombre conservé (aucune régression visuelle) */
</style>

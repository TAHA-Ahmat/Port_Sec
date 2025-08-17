<template>
  <section class="max-w-6xl mx-auto p-6 space-y-12">
    <!-- En-tête -->
    <header class="space-y-2">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <span>{{ t('nav.project') || 'Projet' }}</span>
      </div>

      <h1 class="text-2xl md:text-3xl font-bold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
          {{ t('nav.project') || 'Projet' }}
        </span>
      </h1>

      <p class="opacity-80 max-w-3xl">
        {{ t('hero.subtitle') || 'Un projet stratégique, moteur du commerce régional et catalyseur de développement.' }}
      </p>
    </header>

    <!-- Résumé Avant/Après (reprend i18n déjà présent) -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">{{ t('highlights.title')}}</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-5 rounded-xl border border-neutral-800 bg-neutral-900">
          <div class="text-xs uppercase tracking-wider opacity-60">{{ t('impact.before') }}</div>
          <ul class="mt-2 space-y-2 list-disc list-inside">
            <li>{{ t('impact.list.before1') }}</li>
            <li>{{ t('impact.list.before2') }}</li>
            <li>{{ t('impact.list.before3') }}</li>
            <li>{{ t('impact.list.before4') }}</li>
          </ul>
        </div>
        <div class="p-5 rounded-xl border border-neutral-800 bg-neutral-900">
          <div class="text-xs uppercase tracking-wider text-emerald-300">{{ t('impact.after') }}</div>
          <ul class="mt-2 space-y-2 list-disc list-inside">
            <li>{{ t('impact.list.after1') }}</li>
            <li>{{ t('impact.list.after2') }}</li>
            <li>{{ t('impact.list.after3') }}</li>
            <li>{{ t('impact.list.after4') }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Structure / KPIs -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">{{ t('invest.structure') || 'Structure d’investissement' }}</h2>
      <div class="grid md:grid-cols-4 gap-3">
        <StatCard :label="t('kpi.capex') || 'Capex'"  value="37 Mds" unit="XAF" />
        <StatCard :label="t('kpi.equity') || 'Equity'" value="7 Mds"  unit="XAF" />
        <StatCard :label="t('kpi.debt') || 'Dette'"   value="30 Mds" unit="XAF" />
        <StatCard :label="t('kpi.apd') || 'APD/FS'"   value="75"     unit="%" />
      </div>
    </section>

    <!-- Processus (réutilise les clés existantes) -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">{{ t('invest.process') || 'Processus d’investissement' }}</h2>
      <ol class="grid md:grid-cols-4 gap-4">
        <li class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 hover:translate-y-[-1px] transition">
          <div class="text-2xl">1️⃣</div>
          <div class="font-semibold mt-1">{{ t('invest.step1') || 'Pitch deck' }}</div>
          <p class="text-sm opacity-80 mt-1">{{ t('impact.process.step1.desc') || 'Présentation synthétique et premiers échanges.' }}</p>
        </li>
        <li class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 hover:translate-y-[-1px] transition">
          <div class="text-2xl">2️⃣</div>
          <div class="font-semibold mt-1">{{ t('invest.step2') || 'Espace documentaire' }}</div>
          <p class="text-sm opacity-80 mt-1">{{ t('impact.process.step2.desc') || t('dataroom.open') }}</p>
        </li>
        <li class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 hover:translate-y-[-1px] transition">
          <div class="text-2xl">3️⃣</div>
          <div class="font-semibold mt-1">{{ t('invest.step3') || 'Due diligence' }}</div>
          <p class="text-sm opacity-80 mt-1">{{ t('impact.process.step3.desc') || 'Analyses techniques/juridiques/financières.' }}</p>
        </li>
        <li class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 hover:translate-y-[-1px] transition">
          <div class="text-2xl">4️⃣</div>
          <div class="font-semibold mt-1">{{ t('invest.step4') || 'Term sheet' }}</div>
          <p class="text-sm opacity-80 mt-1">{{ t('invest.step4desc') || 'Heads of terms & timeline.' }}</p>
        </li>
      </ol>
    </section>

    <!-- Accès documents / CTA -->
    <section class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div class="text-lg md:text-xl font-semibold">{{ t('impact.opportunity.title') || 'Une opportunité d’investissement stratégique' }}</div>
      <div class="flex gap-3">
        <RouterLink
          to="/dataroom"
          class="rounded-xl px-5 py-3 font-semibold border border-neutral-700 hover:bg-neutral-800 transition"
        >
          {{ t('dataroom.open') || 'Accéder aux documents' }}
        </RouterLink>
        <RouterLink
          to="/invest"
          class="rounded-xl px-5 py-3 font-semibold bg-emerald-500 text-black hover:scale-[1.02] transition"
        >
          {{ t('impact.opportunity.cta') || 'Investir' }}
        </RouterLink>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import StatCard from '../components/StatCard.vue'

const { t } = useI18n()
</script>

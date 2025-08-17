<template>
  <section class="max-w-6xl mx-auto p-6 space-y-12">
    <!-- En-tête -->
    <header class="space-y-2">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <span>{{ t('nav.impact') }}</span>
      </div>

      <h1 class="text-2xl md:text-3xl font-bold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
          {{ t('impact.title') || t('nav.impact') || 'Impact' }}
        </span>
      </h1>

      <p class="opacity-80 max-w-3xl">
        {{ t('impact.summary') || 'Des gains rapides grâce à des sorties accélérées, une meilleure coordination et une traçabilité temps réel.' }}
      </p>
    </header>

    <!-- Avant / Après -->
    <section class="space-y-4">
      <h2 class="text-xl md:text-2xl font-bold">{{ t('impact.beforeAfterTitle') || 'Avant / Après' }}</h2>

      <!-- Version slider si visuel dispo -->
      <BeforeAfterSlider v-if="hasSlider" />

      <!-- Version liste (fallback / complément) -->
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

    <!-- KPIs / résultats attendus -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">{{ t('impact.kpiTitle') || 'Résultats attendus' }}</h2>
      <div class="grid md:grid-cols-4 gap-3">
        <StatCard :label="t('kpi.capex')"  value="37 Mds" unit="XAF" />
        <StatCard :label="t('kpi.equity')" value="7 Mds"  unit="XAF" />
        <StatCard :label="t('kpi.debt')"   value="30 Mds" unit="XAF" />
        <StatCard :label="t('kpi.apd')"    value="75"     unit="%" />
      </div>
    </section>

    <!-- Processus d’investissement (3 étapes i18n) -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">{{ t('invest.process') }}</h2>
      <ol class="grid md:grid-cols-3 gap-4">
        <li class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 hover:translate-y-[-1px] transition">
          <div class="text-2xl">1️⃣</div>
          <div class="font-semibold mt-1">{{ t('impact.process.step1.title') }}</div>
          <p class="text-sm opacity-80 mt-1">{{ t('invest.step1') }}</p>
        </li>
        <li class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 hover:translate-y-[-1px] transition">
          <div class="text-2xl">2️⃣</div>
          <div class="font-semibold mt-1">{{ t('impact.process.step2.title') }}</div>
          <p class="text-sm opacity-80 mt-1">{{ t('invest.step2') }}</p>
        </li>
        <li class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 hover:translate-y-[-1px] transition">
          <div class="text-2xl">3️⃣</div>
          <div class="font-semibold mt-1">{{ t('impact.process.step3.title') }}</div>
          <p class="text-sm opacity-80 mt-1">{{ t('invest.step3') }}</p>
        </li>
      </ol>
    </section>

    <!-- Jalons -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">{{ t('impact.milestones.title') }}</h2>
      <div class="grid md:grid-cols-4 gap-4">
        <div class="p-5 rounded-xl border border-neutral-800 bg-neutral-900">
          <div class="font-semibold">{{ t('impact.milestones.t0.title') }}</div>
          <p class="text-sm opacity-80 mt-1">{{ t('impact.milestones.t0.desc') }}</p>
        </div>
        <div class="p-5 rounded-xl border border-neutral-800 bg-neutral-900">
          <div class="font-semibold">{{ t('impact.milestones.t1.title') }}</div>
          <p class="text-sm opacity-80 mt-1">{{ t('impact.milestones.t1.desc') }}</p>
        </div>
        <div class="p-5 rounded-xl border border-neutral-800 bg-neutral-900">
          <div class="font-semibold">{{ t('impact.milestones.t2.title') }}</div>
          <p class="text-sm opacity-80 mt-1">{{ t('impact.milestones.t2.desc') }}</p>
        </div>
        <div class="p-5 rounded-xl border border-neutral-800 bg-neutral-900">
          <div class="font-semibold">{{ t('impact.milestones.t3.title') }}</div>
          <p class="text-sm opacity-80 mt-1">{{ t('impact.milestones.t3.desc') }}</p>
        </div>
      </div>
    </section>

    <!-- Opportunité / Accès documents -->
    <section class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div class="text-lg md:text-xl font-semibold">{{ t('impact.opportunity.title') }}</div>
      <div class="flex gap-3">
        <button class="rounded-xl px-5 py-3 font-semibold bg-emerald-500 text-black hover:scale-[1.02] transition">
          {{ t('impact.opportunity.cta') }}
        </button>
        <button class="rounded-xl px-5 py-3 font-semibold border border-neutral-700 hover:bg-neutral-800 transition">
          {{ t('dataroom.open') }}
        </button>
      </div>
    </section>

    <!-- Disclaimer -->
    <p class="text-xs opacity-60">
      {{ t('impact.disclaimer') || 'Les valeurs présentées sont indicatives et pourront être ajustées après mise en service.' }}
    </p>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import BeforeAfterSlider from '../components/BeforeAfterSlider.vue'
import StatCard from '../components/StatCard.vue'

const { t } = useI18n()

// Active/désactive le slider si visuel présent dans ton projet
const hasSlider = false
</script>

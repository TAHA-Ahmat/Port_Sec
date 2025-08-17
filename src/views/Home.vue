<template>
  <main class="min-h-screen bg-neutral-950 text-neutral-200">
    <!-- HERO -->
    <section class="max-w-6xl mx-auto px-6 pt-14 pb-10 space-y-6">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <span>{{ t('hero.tag') || '—' }}</span>
      </div>

      <h1 class="text-3xl md:text-5xl font-bold leading-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
          {{ t('hero.title') || '—' }}
        </span>
      </h1>

      <p class="opacity-80 max-w-3xl text-sm md:text-base">
        {{ t('hero.subtitle') || '—' }}
      </p>

      <!-- CTA principaux -->
      <div class="flex flex-wrap gap-3">
        <RouterLink
          to="/invest"
          class="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition px-4 py-2 text-sm"
        >
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>{{ t('hero.ctaInvest') || t('invest.title') || '—' }}</span>
        </RouterLink>

        <RouterLink
          to="/dataroom"
          class="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition px-4 py-2 text-sm"
        >
          <span class="i-lucide-file-text h-4 w-4"></span>
          <span>{{ t('hero.secondaryCta') || t('dataroom.open') || '—' }}</span>
        </RouterLink>

        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition px-4 py-2 text-sm"
        >
          <span class="i-lucide-mail h-4 w-4"></span>
          <span>{{ t('hero.ctaContact') || t('footer.contact.title') || '—' }}</span>
        </RouterLink>
      </div>

      <!-- Badges optionnels -->
      <div v-if="badges.length" class="flex flex-wrap gap-2">
        <span
          v-for="(b, i) in badges"
          :key="`badge-${i}`"
          class="px-2 py-1 rounded-md border border-neutral-800 bg-neutral-900/60 text-[11px] opacity-80"
        >
          {{ b }}
        </span>
      </div>

      <p class="text-xs opacity-60">{{ t('hero.corridorNote') || '—' }}</p>
    </section>

    <!-- KPIs -->
    <section v-if="hasAnyKpi" class="max-w-6xl mx-auto px-6 pb-6">
      <div class="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 md:p-6">
        <!-- ✅ nombres via props.kpi, labels dans KpiStrip (i18n) -->
        <KpiStrip :kpi="safeKpi" />
      </div>
    </section>

    <!-- Pourquoi ce projet ? -->
    <section class="max-w-6xl mx-auto px-6 py-10">
      <ProjectHighlights />
    </section>

    <!-- Impact (comparatif Avant/Après) -->
    <section class="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <header class="space-y-2">
        <h2 class="text-xl md:text-2xl font-semibold">{{ t('impact.title') || '—' }}</h2>
        <p class="text-xs opacity-60">{{ t('impact.disclaimer') || '—' }}</p>
      </header>

      <BeforeAfterSlider
        :initial="0.5"
        :label-before="t('impact.before')"
        :label-after="t('impact.after')"
        :items-before="beforeItems"
        :items-after="afterItems"
        :show-handle="true"
        :aria-label="t('impact.title') || 'Comparison'"
      />

      <!-- Deux tips courts (strings i18n) -->
      <div class="grid md:grid-cols-2 gap-4 pt-2">
        <p class="text-sm opacity-80 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
          {{ t('impact.tips.gps') || '—' }}
        </p>
        <p class="text-sm opacity-80 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
          {{ t('impact.tips.oneStop') || '—' }}
        </p>
      </div>
    </section>

    <!-- Opportunité / CTA investisseur -->
    <section class="max-w-6xl mx-auto px-6 pb-14">
      <InvestorCTA />
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import KpiStrip from '../components/KpiStrip.vue'
import BeforeAfterSlider from '../components/BeforeAfterSlider.vue'
import ProjectHighlights from '../components/ProjectHighlights.vue'
import InvestorCTA from '../components/InvestorCTA.vue'

const { t, tm } = useI18n()

/* ---- Props : les chiffres sont fournis par le parent (jamais via i18n) ---- */
const props = defineProps({
  kpi: {
    type: Object,
    default: () => ({})
  }
})

const asNumOrNull = (v) => (typeof v === 'number' && !Number.isNaN(v) ? v : null)

const safeKpi = computed(() => ({
  capexXaf: asNumOrNull(props.kpi.capexXaf),
  equityXaf: asNumOrNull(props.kpi.equityXaf),
  debtXaf: asNumOrNull(props.kpi.debtXaf),
  apdPct: asNumOrNull(props.kpi.apdPct)
}))

const hasAnyKpi = computed(() =>
  Object.values(safeKpi.value).some((v) => v !== null)
)

/* ---- Données textuelles i18n ---- */
const badges = computed(() => {
  const arr = tm('hero.badges')
  return Array.isArray(arr) ? arr.filter(Boolean) : []
})

const beforeItems = computed(() => [
  t('impact.list.before1'),
  t('impact.list.before2'),
  t('impact.list.before3'),
  t('impact.list.before4')
].filter(Boolean))

const afterItems = computed(() => [
  t('impact.list.after1'),
  t('impact.list.after2'),
  t('impact.list.after3'),
  t('impact.list.after4')
].filter(Boolean))
</script>

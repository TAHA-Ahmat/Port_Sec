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

    <!-- Impact environnemental -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">{{ t('impact.environmental.title') || 'Impact environnemental' }}</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 space-y-3">
          <div class="flex items-center gap-3">
            <div class="text-3xl">🌱</div>
            <div class="flex-1">
              <div class="font-semibold text-emerald-300">Réduction CO₂</div>
              <p class="text-sm opacity-80 mt-1">-35% d'émissions vs transport routier classique</p>
            </div>
          </div>
        </div>
        <div class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 space-y-3">
          <div class="flex items-center gap-3">
            <div class="text-3xl">♻️</div>
            <div class="flex-1">
              <div class="font-semibold text-emerald-300">Optimisation</div>
              <p class="text-sm opacity-80 mt-1">Groupage et massification des flux logistiques</p>
            </div>
          </div>
        </div>
        <div class="p-5 rounded-xl border border-neutral-800 bg-neutral-900 space-y-3">
          <div class="flex items-center gap-3">
            <div class="text-3xl">🌍</div>
            <div class="flex-1">
              <div class="font-semibold text-emerald-300">Conformité</div>
              <p class="text-sm opacity-80 mt-1">Normes environnementales CEMAC respectées</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact social détaillé -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">{{ t('impact.social.title') || 'Impact social & emploi' }}</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-4">
          <h3 class="text-lg font-semibold text-emerald-300">Création d'emplois directs</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-neutral-800">
              <span class="text-sm">Personnel opérationnel</span>
              <span class="font-semibold">120+</span>
            </div>
            <div class="flex items-center justify-between pb-2 border-b border-neutral-800">
              <span class="text-sm">Cadres & techniciens</span>
              <span class="font-semibold">45+</span>
            </div>
            <div class="flex items-center justify-between pb-2 border-b border-neutral-800">
              <span class="text-sm">Personnel administratif</span>
              <span class="font-semibold">25+</span>
            </div>
            <div class="flex items-center justify-between pt-2 font-bold text-emerald-400">
              <span>Total emplois directs</span>
              <span class="text-xl">190+</span>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-4">
          <h3 class="text-lg font-semibold text-emerald-300">Formation & développement</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div class="font-medium">Programme de formation continue</div>
                <p class="text-xs opacity-80 mt-1">100+ professionnels formés annuellement</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div class="font-medium">Partenariats académiques</div>
                <p class="text-xs opacity-80 mt-1">Collaboration avec instituts de formation</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div class="font-medium">Transfert de compétences</div>
                <p class="text-xs opacity-80 mt-1">Expertise internationale vers équipes locales</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Bénéfices à long terme -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">{{ t('impact.longTerm.title') || 'Bénéfices à long terme' }}</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="p-6 rounded-xl border border-emerald-800/40 bg-emerald-950/20 space-y-3">
          <div class="text-3xl">📊</div>
          <h3 class="font-semibold text-emerald-300">Économique</h3>
          <ul class="space-y-2 text-sm opacity-90">
            <li>• Baisse coûts logistiques -25%</li>
            <li>• Compétitivité exportations +30%</li>
            <li>• Attractivité IDE renforcée</li>
            <li>• PIB logistique +2-3%</li>
          </ul>
        </div>

        <div class="p-6 rounded-xl border border-blue-800/40 bg-blue-950/20 space-y-3">
          <div class="text-3xl">👥</div>
          <h3 class="font-semibold text-blue-300">Social</h3>
          <ul class="space-y-2 text-sm opacity-90">
            <li>• 500+ emplois indirects créés</li>
            <li>• Montée en compétence locale</li>
            <li>• Développement PME logistiques</li>
            <li>• Amélioration conditions de vie</li>
          </ul>
        </div>

        <div class="p-6 rounded-xl border border-purple-800/40 bg-purple-950/20 space-y-3">
          <div class="text-3xl">🎯</div>
          <h3 class="font-semibold text-purple-300">Stratégique</h3>
          <ul class="space-y-2 text-sm opacity-90">
            <li>• Hub logistique sous-régional</li>
            <li>• Intégration CEMAC accélérée</li>
            <li>• Sécurisation corridors</li>
            <li>• Influence géopolitique +</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Témoignages / Études de cas -->
    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">{{ t('impact.testimonials.title') || 'Retours d\'expérience' }}</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-4">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <span class="text-2xl">💼</span>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-emerald-300 mb-2">Importateurs tchadiens</h3>
              <p class="text-sm opacity-90 italic leading-relaxed">
                "Le Port Sec de Douala a réduit nos délais de dédouanement de 15 jours à 48h. Une révolution pour notre activité."
              </p>
              <p class="text-xs opacity-60 mt-3">— Union des Importateurs du Tchad</p>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-4">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span class="text-2xl">🏛️</span>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-blue-300 mb-2">Autorités portuaires</h3>
              <p class="text-sm opacity-90 italic leading-relaxed">
                "La fluidification des opérations a amélioré notre capacité de traitement de 40%. Un partenariat exemplaire."
              </p>
              <p class="text-xs opacity-60 mt-3">— Direction Générale PAD</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Opportunité / Accès documents -->
    <section class="p-8 rounded-xl border border-neutral-800 bg-neutral-900 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div class="space-y-2">
        <h3 class="text-xl md:text-2xl font-bold">{{ t('impact.opportunity.title') || 'Participer à l\'impact' }}</h3>
        <p class="text-sm opacity-80">Découvrez comment investir dans ces projets à fort impact</p>
      </div>
      <div class="flex flex-wrap gap-3">
        <RouterLink to="/dataroom" class="rounded-xl px-6 py-3 font-semibold bg-emerald-500 text-black hover:bg-emerald-400 transition focus:outline-none focus:ring-2 focus:ring-emerald-500">
          {{ t('impact.opportunity.cta') || 'Documentation' }}
        </RouterLink>
        <RouterLink to="/contact" class="rounded-xl px-6 py-3 font-semibold border border-neutral-700 hover:bg-neutral-800 transition focus:outline-none focus:ring-2 focus:ring-neutral-500">
          {{ t('hero.ctaContact') || 'Nous contacter' }}
        </RouterLink>
      </div>
    </section>

    <!-- Disclaimer -->
    <p class="text-xs opacity-60 text-center">
      {{ t('impact.disclaimer') || 'Les valeurs présentées sont indicatives et pourront être ajustées après mise en service.' }}
    </p>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import BeforeAfterSlider from '../components/BeforeAfterSlider.vue'
import StatCard from '../components/StatCard.vue'

const { t } = useI18n()

// Active le slider Avant/Après avec visuel
const hasSlider = true
</script>

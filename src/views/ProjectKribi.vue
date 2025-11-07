<template>
  <main class="space-y-12 pb-16">
    <!-- Breadcrumbs -->
    <Breadcrumbs :items="[
      { label: 'Accueil', to: '/' },
      { label: 'Nos Projets', to: '/projects' },
      { label: 'Port Sec de Kribi' }
    ]" />

    <!-- Hero Section avec visuel -->
    <section class="max-w-6xl mx-auto px-6">
      <div class="rounded-2xl border border-amber-700/40 bg-gradient-to-br from-amber-950/20 via-neutral-900 to-neutral-950 overflow-hidden">
        <!-- Image placeholder -->
        <div class="aspect-[21/9] bg-gradient-to-br from-amber-900/20 to-neutral-800 relative overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center space-y-4 p-8">
              <div class="text-7xl opacity-40">🚢</div>
              <p class="text-sm text-neutral-400">Visuel du Port en Eau Profonde de Kribi</p>
            </div>
          </div>
          <!-- Badge statut superposé -->
          <div class="absolute top-6 left-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/80 backdrop-blur-sm border border-amber-700/40 text-sm">
              <span class="inline-block h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span class="text-amber-300 font-semibold">{{ t('project.status', 'EN PRÉPARATION') }}</span>
            </div>
          </div>
        </div>

        <!-- Contenu Hero -->
        <div class="p-8 md:p-12 space-y-6">
          <h1 class="text-3xl md:text-5xl font-bold">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-white to-amber-300">
              Port Sec de Kribi
            </span>
          </h1>

          <p class="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            {{ t('kribi.description', 'Extension stratégique du réseau GPM, ce projet créera un hub logistique directement connecté au Port en Eau Profonde de Kribi pour fluidifier le commerce extérieur du Tchad.') }}
          </p>

          <!-- Méta informations -->
          <div class="flex flex-wrap gap-6 text-neutral-400">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="font-medium">Kribi, Cameroun</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="font-medium">{{ t('kribi.launch', 'Lancement prévu : T2 2026') }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-medium">Durée: 18 mois</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi Kribi? -->
    <section class="max-w-6xl mx-auto px-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-amber-400"></span>
        <h2 class="font-semibold">Positionnement stratégique</h2>
      </header>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-3">
          <div class="text-3xl">🌊</div>
          <h3 class="text-lg font-semibold text-amber-300">Accès maritime direct</h3>
          <p class="text-sm text-neutral-400 leading-relaxed">
            Connexion directe au Port en Eau Profonde de Kribi, infrastructure moderne avec tirant d'eau de 16m
          </p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-3">
          <div class="text-3xl">🛣️</div>
          <h3 class="text-lg font-semibold text-amber-300">Corridor multimodal</h3>
          <p class="text-sm text-neutral-400 leading-relaxed">
            Route Kribi-Douala-N'Djamena sécurisée, alternative stratégique au corridor traditionnel
          </p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-3">
          <div class="text-3xl">⚡</div>
          <h3 class="text-lg font-semibold text-amber-300">Gain de temps</h3>
          <p class="text-sm text-neutral-400 leading-relaxed">
            Réduction de 30% des délais d'acheminement grâce aux infrastructures modernes
          </p>
        </div>
      </div>
    </section>

    <!-- KPIs du projet -->
    <section class="max-w-6xl mx-auto px-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-amber-400"></span>
        <h2 class="font-semibold">Caractéristiques techniques</h2>
      </header>

      <div class="grid md:grid-cols-4 gap-4">
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <p class="text-xs text-neutral-500 uppercase tracking-wider">Superficie</p>
          <p class="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-white">
            25 ha
          </p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <p class="text-xs text-neutral-500 uppercase tracking-wider">Capacité annuelle</p>
          <p class="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-white">
            45K EVP
          </p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <p class="text-xs text-neutral-500 uppercase tracking-wider">Investissement</p>
          <p class="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-white">
            28 Mds
          </p>
          <p class="text-xs text-neutral-500 mt-1">XAF</p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <p class="text-xs text-neutral-500 uppercase tracking-wider">Emplois créés</p>
          <p class="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-white">
            250+
          </p>
        </div>
      </div>
    </section>

    <!-- Timeline de développement -->
    <section class="max-w-6xl mx-auto px-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-amber-400"></span>
        <h2 class="font-semibold">Calendrier de réalisation</h2>
      </header>

      <div class="relative">
        <!-- Ligne de temps -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-700 to-transparent"></div>

        <div class="space-y-8">
          <!-- Phase 1 -->
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center font-bold text-amber-300 relative z-10">
              T0
            </div>
            <div class="flex-1 pt-3">
              <h3 class="text-lg font-semibold text-white mb-2">T2 2026 : Sécurisation foncière</h3>
              <p class="text-neutral-400 text-sm">Acquisition du terrain, études d'impact environnemental, autorisations administratives</p>
            </div>
          </div>

          <!-- Phase 2 -->
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 rounded-full bg-neutral-900 border-2 border-amber-600 flex items-center justify-center font-bold text-amber-400 relative z-10">
              T1
            </div>
            <div class="flex-1 pt-3">
              <h3 class="text-lg font-semibold text-white mb-2">T3 2026 : Travaux infrastructure</h3>
              <p class="text-neutral-400 text-sm">Terrassement, voiries, réseaux, bâtiments administratifs et techniques</p>
            </div>
          </div>

          <!-- Phase 3 -->
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 rounded-full bg-neutral-900 border-2 border-amber-700 flex items-center justify-center font-bold text-amber-500 relative z-10">
              T2
            </div>
            <div class="flex-1 pt-3">
              <h3 class="text-lg font-semibold text-white mb-2">T1 2027 : Équipements & Systèmes</h3>
              <p class="text-neutral-400 text-sm">Installation matériel de manutention, systèmes IT, formation des équipes</p>
            </div>
          </div>

          <!-- Phase 4 -->
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 rounded-full bg-neutral-900 border-2 border-amber-800 flex items-center justify-center font-bold text-amber-600 relative z-10">
              T3
            </div>
            <div class="flex-1 pt-3">
              <h3 class="text-lg font-semibold text-white mb-2">T4 2027 : Mise en service</h3>
              <p class="text-neutral-400 text-sm">Phase pilote, certification, ouverture commerciale progressive</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partenaires & Soutiens -->
    <section class="max-w-6xl mx-auto px-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-amber-400"></span>
        <h2 class="font-semibold">Partenaires & Soutiens institutionnels</h2>
      </header>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 text-center space-y-3">
          <div class="text-4xl">🇹🇩</div>
          <h3 class="font-semibold">État du Tchad</h3>
          <p class="text-xs text-neutral-500">Soutien stratégique et facilitation administrative</p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 text-center space-y-3">
          <div class="text-4xl">🇨🇲</div>
          <h3 class="font-semibold">État du Cameroun</h3>
          <p class="text-xs text-neutral-500">Partenariat bilatéral et accès au PEPK</p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 text-center space-y-3">
          <div class="text-4xl">🏛️</div>
          <h3 class="font-semibold">CEMAC</h3>
          <p class="text-xs text-neutral-500">Cadre réglementaire communautaire</p>
        </div>
      </div>
    </section>

    <!-- Impact attendu -->
    <section class="max-w-6xl mx-auto px-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-amber-400"></span>
        <h2 class="font-semibold">Impact socio-économique attendu</h2>
      </header>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-4">
          <h3 class="text-lg font-semibold text-amber-300">Bénéfices économiques</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-neutral-300">Réduction de 30% des délais d'acheminement</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-neutral-300">Baisse des coûts logistiques de 20%</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-neutral-300">Augmentation de la compétitivité des exportations tchadiennes</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-neutral-300">Diversification des corridors logistiques</span>
            </li>
          </ul>
        </div>

        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-4">
          <h3 class="text-lg font-semibold text-amber-300">Impact social</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-neutral-300">250+ emplois directs créés</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-neutral-300">600+ emplois indirects dans la chaîne logistique</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-neutral-300">Formation de 150 professionnels de la logistique</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-neutral-300">Renforcement de la coopération Tchad-Cameroun</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Newsletter inscription -->
    <section class="max-w-3xl mx-auto px-6">
      <div class="rounded-2xl border border-amber-700/40 bg-gradient-to-br from-amber-950/20 to-neutral-900 p-8 md:p-12 space-y-6">
        <div class="text-center space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-700/40 text-xs">
            <span class="inline-block h-2 w-2 rounded-full bg-amber-400"></span>
            <span class="text-amber-300">Restez informé</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-white">
            Suivre l'avancement du projet
          </h2>
          <p class="text-neutral-400">
            Recevez les actualités, jalons et opportunités liées au développement du Port Sec de Kribi
          </p>
        </div>

        <form @submit.prevent="handleSubscribe" class="space-y-4">
          <div class="flex flex-col sm:flex-row gap-3">
            <input
              v-model="email"
              type="email"
              placeholder="votre@email.com"
              required
              class="flex-1 px-5 py-3.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition"
            />
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-8 py-3.5 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-500 transition focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Inscription...' : "M'informer" }}
            </button>
          </div>

          <p class="text-xs text-neutral-500 text-center">
            {{ t('kribi.newsletter.privacy', 'Aucun spam, désabonnement à tout moment. Vos données sont protégées.') }}
          </p>
        </form>

        <div v-if="subscribed" class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center">
          <div class="flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="font-semibold">{{ t('kribi.newsletter.success', 'Merci ! Vous recevrez nos actualités.') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA & Navigation -->
    <section class="max-w-6xl mx-auto px-6 space-y-6">
      <!-- CTA principal -->
      <div class="p-8 rounded-2xl border border-neutral-800 bg-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 text-center md:text-left">
          <h3 class="text-xl font-bold">Intéressé par ce projet ?</h3>
          <p class="text-neutral-400 text-sm">Découvrez les opportunités d'investissement et partenariat</p>
        </div>
        <div class="flex flex-wrap gap-3 justify-center">
          <RouterLink
            to="/dataroom"
            class="px-6 py-3 rounded-xl bg-emerald-500 text-neutral-900 font-semibold hover:bg-emerald-400 transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Documentation investisseurs
          </RouterLink>
          <RouterLink
            to="/contact"
            class="px-6 py-3 rounded-xl border border-neutral-700 font-semibold hover:bg-neutral-800 transition focus:outline-none focus:ring-2 focus:ring-neutral-500"
          >
            Nous contacter
          </RouterLink>
        </div>
      </div>

      <!-- Autres projets -->
      <OtherProjects current-project="kribi" />

      <!-- Retour -->
      <div class="pt-6">
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>{{ t('kribi.back', 'Retour à nos projets') }}</span>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import OtherProjects from '../components/OtherProjects.vue'

const { t } = useI18n()

const email = ref('')
const subscribed = ref(false)
const isSubmitting = ref(false)

const handleSubscribe = async () => {
  if (!email.value) return

  isSubmitting.value = true

  // Simuler l'envoi (remplacer par votre API)
  await new Promise(resolve => setTimeout(resolve, 1000))

  console.log('Newsletter subscription:', email.value)
  subscribed.value = true
  email.value = ''
  isSubmitting.value = false

  setTimeout(() => {
    subscribed.value = false
  }, 5000)
}
</script>

<style scoped>
/* Animations au scroll (optionnel) */
main {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

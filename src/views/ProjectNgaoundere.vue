<template>
  <main class="space-y-12 pb-16">
    <!-- Breadcrumbs -->
    <Breadcrumbs :items="[
      { label: 'Accueil', to: '/' },
      { label: 'Nos Projets', to: '/projects' },
      { label: 'Port Sec de Ngaoundéré' }
    ]" />

    <!-- Hero Section avec visuel -->
    <section class="max-w-6xl mx-auto px-6">
      <div class="rounded-2xl border border-blue-700/40 bg-gradient-to-br from-blue-950/20 via-neutral-900 to-neutral-950 overflow-hidden">
        <!-- Contenu Hero -->
        <div class="p-8 md:p-12 space-y-6">
          <!-- Badge statut -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/80 backdrop-blur-sm border border-blue-700/40 text-sm">
            <span class="inline-block h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span class="text-blue-300 font-semibold">{{ t('project.status', 'EN ÉTUDE') }}</span>
          </div>

          <h1 class="text-3xl md:text-5xl font-bold">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-blue-300">
              Port Sec de Ngaoundéré
            </span>
          </h1>

          <p class="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            {{ t('ngaoundere.description', 'Hub logistique multimodal stratégique au carrefour des corridors ferroviaires et routiers, ce projet constituera la porte d\'entrée du Tchad depuis le Cameroun.') }}
          </p>

          <!-- Méta informations -->
          <div class="flex flex-wrap gap-6 text-neutral-400">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="font-medium">Ngaoundéré, Cameroun</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="font-medium">{{ t('ngaoundere.launch', 'Lancement prévu : 2030-2032') }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-medium">Durée: 24 mois</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi Ngaoundéré? -->
    <section class="max-w-6xl mx-auto px-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-blue-400"></span>
        <h2 class="font-semibold">Positionnement stratégique</h2>
      </header>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-3">
          <div class="text-3xl">🚂</div>
          <h3 class="text-lg font-semibold text-blue-300">Terminus ferroviaire</h3>
          <p class="text-sm text-neutral-400 leading-relaxed">
            Dernière gare de la liaison Douala-Ngaoundéré, point d'accès au réseau ferré camerounais
          </p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-3">
          <div class="text-3xl">🗺️</div>
          <h3 class="text-lg font-semibold text-blue-300">Carrefour multimodal</h3>
          <p class="text-sm text-neutral-400 leading-relaxed">
            Jonction stratégique des corridors routiers et ferroviaires vers le Tchad et la RCA
          </p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-3">
          <div class="text-3xl">🎯</div>
          <h3 class="text-lg font-semibold text-blue-300">Proximité frontalière</h3>
          <p class="text-sm text-neutral-400 leading-relaxed">
            À 350km de la frontière tchadienne, hub idéal pour la massification des flux
          </p>
        </div>
      </div>
    </section>

    <!-- KPIs du projet -->
    <section class="max-w-6xl mx-auto px-6 space-y-6">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-blue-400"></span>
        <h2 class="font-semibold">Caractéristiques techniques</h2>
      </header>

      <div class="grid md:grid-cols-4 gap-4">
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <p class="text-xs text-neutral-500 uppercase tracking-wider">Superficie</p>
          <p class="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
            35 ha
          </p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <p class="text-xs text-neutral-500 uppercase tracking-wider">Capacité annuelle</p>
          <p class="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
            60K EVP
          </p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <p class="text-xs text-neutral-500 uppercase tracking-wider">Investissement</p>
          <p class="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
            42 Mds
          </p>
          <p class="text-xs text-neutral-500 mt-1">XAF</p>
        </div>
        <div class="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
          <p class="text-xs text-neutral-500 uppercase tracking-wider">Emplois créés</p>
          <p class="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
            320+
          </p>
        </div>
      </div>
    </section>

    <!-- Newsletter inscription -->
    <section class="max-w-3xl mx-auto px-6">
      <div class="rounded-2xl border border-blue-700/40 bg-gradient-to-br from-blue-950/20 to-neutral-900 p-8 md:p-12 space-y-6">
        <div class="text-center space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-700/40 text-xs">
            <span class="inline-block h-2 w-2 rounded-full bg-blue-400"></span>
            <span class="text-blue-300">Restez informé</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-white">
            Suivre l'avancement du projet
          </h2>
          <p class="text-neutral-400">
            Recevez les actualités des études, jalons et opportunités liées au Port Sec de Ngaoundéré
          </p>
        </div>

        <form @submit.prevent="handleSubscribe" class="space-y-4">
          <div class="flex flex-col sm:flex-row gap-3">
            <input
              v-model="email"
              type="email"
              placeholder="votre@email.com"
              required
              class="flex-1 px-5 py-3.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
            />
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Inscription...' : "S'inscrire" }}
            </button>
          </div>

          <p class="text-xs text-neutral-500 text-center">
            {{ t('ngaoundere.newsletter.privacy', 'Aucun spam, désabonnement à tout moment. Vos données sont protégées.') }}
          </p>
        </form>

        <div v-if="subscribed" class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center">
          <div class="flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="font-semibold">{{ t('ngaoundere.newsletter.success', 'Merci ! Vous serez informé des avancées du projet.') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA & Navigation -->
    <section class="max-w-6xl mx-auto px-6 space-y-6">
      <!-- Autres projets -->
      <OtherProjects current-project="ngaoundere" />

      <!-- Retour -->
      <div class="pt-6">
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>{{ t('ngaoundere.back', 'Retour à nos projets') }}</span>
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

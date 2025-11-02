<template>
  <main class="space-y-8 pb-16">
    <!-- Breadcrumbs -->
    <Breadcrumbs :items="[
      { label: 'Accueil', to: '/' },
      { label: 'Nos Projets', to: '/projects' },
      { label: 'Port Sec de Kribi' }
    ]" />

    <!-- Card centrée sobre -->
    <section class="max-w-3xl mx-auto p-6">
      <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-12 space-y-6">

        <!-- Badge statut -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/30 border border-amber-700/40 text-xs">
          <span class="inline-block h-2 w-2 rounded-full bg-amber-500"></span>
          <span class="text-amber-400 font-medium">{{ t('project.status', 'EN PRÉPARATION') }}</span>
        </div>

        <!-- Titre -->
        <h1 class="text-3xl md:text-4xl font-bold text-white">
          Port Sec de Kribi
        </h1>

        <!-- Description courte -->
        <p class="text-lg text-neutral-300 leading-relaxed">
          {{ t('kribi.description', 'Extension stratégique du réseau GPM, ce projet créera un hub logistique directement connecté au Port en Eau Profonde de Kribi pour fluidifier le commerce extérieur du Tchad.') }}
        </p>

        <!-- Date de lancement -->
        <div class="flex items-center gap-2 text-neutral-400">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="font-medium">{{ t('kribi.launch', 'Lancement prévu : T2 2026') }}</span>
        </div>

        <!-- Séparateur -->
        <div class="border-t border-neutral-800"></div>

        <!-- Newsletter simple -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold text-white">
            {{ t('kribi.newsletter.title', 'Recevoir les actualités du projet') }}
          </h2>

          <form @submit.prevent="handleSubscribe" class="space-y-3">
            <div class="flex gap-2">
              <input
                v-model="email"
                type="email"
                placeholder="votre@email.com"
                required
                class="flex-1 px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
              />
              <button
                type="submit"
                class="px-6 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-500 transition focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {{ t('kribi.newsletter.cta', 'M\'informer') }}
              </button>
            </div>

            <p class="text-xs text-neutral-500">
              {{ t('kribi.newsletter.privacy', 'Aucun spam, désabonnement à tout moment.') }}
            </p>
          </form>

          <div v-if="subscribed" class="p-3 rounded-lg bg-emerald-950/30 border border-emerald-700/40 text-emerald-400 text-sm">
            ✓ {{ t('kribi.newsletter.success', 'Merci ! Vous recevrez nos actualités.') }}
          </div>
        </div>
      </div>
    </section>

    <!-- Autres projets -->
    <section class="max-w-6xl mx-auto p-6">
      <OtherProjects current-project="kribi" />
    </section>

    <!-- Retour -->
    <section class="max-w-6xl mx-auto p-6">
      <RouterLink
        to="/projects"
        class="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>{{ t('kribi.back', 'Retour à nos projets') }}</span>
      </RouterLink>
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

const handleSubscribe = () => {
  console.log('Newsletter subscription:', email.value)
  subscribed.value = true
  email.value = ''

  setTimeout(() => {
    subscribed.value = false
  }, 5000)
}
</script>

<style scoped>
/* Espacement entre sections */
main {
  padding-bottom: 4rem;
}
</style>

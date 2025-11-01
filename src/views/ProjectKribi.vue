<template>
  <main class="space-y-8 pb-16">
    <!-- Breadcrumbs -->
    <Breadcrumbs :items="[
      { label: 'Accueil', to: '/' },
      { label: 'Nos Projets', to: '/projects' },
      { label: 'Port Sec de Kribi' }
    ]" />

    <!-- Hero -->
    <section class="max-w-6xl mx-auto p-6">
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/80 text-xs">
          <span class="inline-block h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
          <span>{{ t('project.status', 'En préparation') }}</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
            Port Sec de Kribi
          </span>
        </h1>

        <p class="text-xl opacity-90 max-w-3xl">
          {{ t('kribi.tagline', 'Extension naturelle du réseau GPM, connectant le Port en Eau Profonde de Kribi au commerce régional CEMAC.') }}
        </p>

        <div class="flex items-center gap-3 text-sm opacity-80">
          <span>📍 Kribi, Cameroun</span>
          <span>•</span>
          <span>🚀 Lancement prévu : T2 2026</span>
        </div>
      </div>
    </section>

    <!-- Vision du projet -->
    <section class="max-w-6xl mx-auto p-6 space-y-4">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('kribi.vision.title', 'Le projet') }}</h2>
      </header>

      <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8 space-y-4">
        <p class="text-lg leading-relaxed">
          {{ t('kribi.vision.p1', 'Le Port Sec de Kribi s\'inscrit dans la continuité stratégique du Port Sec de Douala, en créant un hub logistique directement connecté au Port en Eau Profonde de Kribi (PEPK).') }}
        </p>
        <p class="leading-relaxed opacity-90">
          {{ t('kribi.vision.p2', 'Cette plateforme permettra de fluidifier les opérations douanières et logistiques pour les marchandises tchadiennes transitant par le corridor atlantique, tout en renforçant la compétitivité du commerce extérieur du Tchad.') }}
        </p>
      </div>
    </section>

    <!-- Carte localisation -->
    <section class="max-w-6xl mx-auto p-6 space-y-4">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('kribi.location.title', 'Localisation stratégique') }}</h2>
      </header>

      <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-4 overflow-hidden" style="min-height: 400px;">
        <MapGPM mode="interactive" />
      </div>

      <p class="text-sm opacity-70 text-center">
        {{ t('kribi.location.caption', 'Position stratégique au cœur du corridor Tchad-Cameroun') }}
      </p>
    </section>

    <!-- Timeline prévue -->
    <section class="max-w-6xl mx-auto p-6 space-y-4">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('kribi.timeline.title', 'Calendrier prévisionnel') }}</h2>
      </header>

      <div class="grid md:grid-cols-4 gap-4">
        <div class="rounded-xl border border-neutral-800 bg-neutral-900 p-5 space-y-2">
          <div class="text-2xl">📋</div>
          <div class="font-semibold">T2 2025</div>
          <p class="text-sm opacity-80">Finalisation études de faisabilité</p>
        </div>

        <div class="rounded-xl border border-neutral-800 bg-neutral-900 p-5 space-y-2">
          <div class="text-2xl">🤝</div>
          <div class="font-semibold">T4 2025</div>
          <p class="text-sm opacity-80">Signature accords institutionnels</p>
        </div>

        <div class="rounded-xl border border-neutral-800 bg-neutral-900 p-5 space-y-2">
          <div class="text-2xl">🏗️</div>
          <div class="font-semibold">T2 2026</div>
          <p class="text-sm opacity-80">Début des travaux d'infrastructure</p>
        </div>

        <div class="rounded-xl border border-neutral-800 bg-neutral-900 p-5 space-y-2">
          <div class="text-2xl">🎯</div>
          <div class="font-semibold">T1 2027</div>
          <p class="text-sm opacity-80">Mise en service opérationnelle</p>
        </div>
      </div>
    </section>

    <!-- Caractéristiques prévisionnelles -->
    <section class="max-w-6xl mx-auto p-6 space-y-4">
      <header class="flex items-center gap-2 text-sm opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <h2 class="font-semibold">{{ t('kribi.specs.title', 'Caractéristiques (estimation)') }}</h2>
      </header>

      <div class="grid md:grid-cols-4 gap-4">
        <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <p class="text-xs opacity-60">Surface</p>
          <p class="text-2xl font-semibold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-white">
            15 ha
          </p>
        </div>

        <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <p class="text-xs opacity-60">Capacité annuelle</p>
          <p class="text-2xl font-semibold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-white">
            50K EVP
          </p>
        </div>

        <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <p class="text-xs opacity-60">Emplois créés</p>
          <p class="text-2xl font-semibold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-white">
            200+
          </p>
        </div>

        <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
          <p class="text-xs opacity-60">Investissement</p>
          <p class="text-2xl font-semibold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-white">
            À définir
          </p>
        </div>
      </div>

      <p class="text-xs opacity-60 text-center pt-2">
        * Données prévisionnelles sujettes à ajustement selon les études finales
      </p>
    </section>

    <!-- CTA Newsletter -->
    <section class="max-w-6xl mx-auto p-6">
      <div class="rounded-2xl border border-emerald-800/40 bg-gradient-to-br from-emerald-900/20 to-neutral-900 p-8 md:p-12 text-center space-y-6">
        <div class="space-y-3">
          <h3 class="text-2xl md:text-3xl font-bold">
            {{ t('kribi.newsletter.title', 'Restez informé du lancement') }}
          </h3>
          <p class="opacity-90 max-w-2xl mx-auto">
            {{ t('kribi.newsletter.subtitle', 'Recevez les mises à jour exclusives sur l\'avancement du projet Port Sec de Kribi.') }}
          </p>
        </div>

        <form @submit.prevent="handleSubscribe" class="max-w-md mx-auto space-y-4">
          <div class="flex gap-2">
            <input
              v-model="email"
              type="email"
              placeholder="votre@email.com"
              required
              class="flex-1 px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition"
            />
            <button
              type="submit"
              class="px-6 py-3 rounded-xl bg-emerald-500 text-neutral-900 font-semibold hover:bg-emerald-400 transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {{ t('kribi.newsletter.cta', 'M\'informer') }}
            </button>
          </div>

          <p class="text-xs opacity-60">
            {{ t('kribi.newsletter.privacy', 'Vous recevrez uniquement les actualités du Port Sec de Kribi. Aucun spam, désabonnement à tout moment.') }}
          </p>
        </form>

        <div v-if="subscribed" class="mt-4 p-4 rounded-xl bg-emerald-900/30 border border-emerald-700/50 text-emerald-300">
          ✓ {{ t('kribi.newsletter.success', 'Merci ! Vous recevrez nos prochaines actualités.') }}
        </div>
      </div>
    </section>

    <!-- Retour Projects -->
    <section class="max-w-6xl mx-auto p-6">
      <RouterLink
        to="/projects"
        class="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition"
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
import MapGPM from '../components/MapGPM.vue'

const { t } = useI18n()

const email = ref('')
const subscribed = ref(false)

const handleSubscribe = () => {
  // TODO: Intégrer avec backend/service email (Mailchimp, Brevo, etc.)
  console.log('Newsletter subscription:', email.value)
  subscribed.value = true
  email.value = ''

  // Masquer le message après 5 secondes
  setTimeout(() => {
    subscribed.value = false
  }, 5000)
}
</script>

<style scoped>
/* Animation d'apparition */
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

main {
  animation: fadeIn 0.6s ease-out;
}
</style>

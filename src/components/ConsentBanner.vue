<template>
  <Transition name="slide-up">
    <div
      v-if="consentBannerVisible"
      class="fixed bottom-0 left-0 right-0 z-[200] p-4 sm:p-6"
      role="dialog"
      aria-labelledby="consent-title"
      aria-describedby="consent-description"
    >
      <div class="max-w-6xl mx-auto">
        <div class="glass-card-consent rounded-xl p-5 sm:p-6 shadow-2xl border border-emerald-500/20">
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <!-- Icône Cookie -->
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>

            <!-- Texte -->
            <div class="flex-1">
              <h3 id="consent-title" class="text-base sm:text-lg font-semibold text-neutral-100 mb-2">
                {{ $t('consent.title', 'Protection de vos données') }}
              </h3>
              <p id="consent-description" class="text-sm text-neutral-300 leading-relaxed">
                {{ $t('consent.description', 'Nous utilisons des cookies pour améliorer votre expérience et mesurer les performances de nos campagnes publicitaires. Vos données sont traitées conformément au RGPD.') }}
                <a href="/privacy" class="text-emerald-400 hover:text-emerald-300 underline ml-1">
                  {{ $t('consent.learnMore', 'En savoir plus') }}
                </a>
              </p>
            </div>

            <!-- Boutons -->
            <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                @click="handleReject"
                class="px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-300 bg-neutral-800/80 hover:bg-neutral-700/80 border border-neutral-700 transition-all duration-200 hover:scale-105"
              >
                {{ $t('consent.reject', 'Refuser') }}
              </button>
              <button
                @click="handleAccept"
                class="px-5 py-2.5 rounded-lg text-sm font-semibold text-neutral-900 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/25"
              >
                {{ $t('consent.accept', 'Accepter tout') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useConsent } from '@/composables/useConsent'

const { consentBannerVisible, acceptAll, rejectAll } = useConsent()

const handleAccept = () => {
  acceptAll()
}

const handleReject = () => {
  rejectAll()
}
</script>

<style scoped>
.glass-card-consent {
  background: rgba(23, 23, 23, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Animation slide-up */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Responsive - Texte plus petit sur mobile */
@media (max-width: 640px) {
  .glass-card-consent {
    background: rgba(23, 23, 23, 0.98);
  }
}
</style>

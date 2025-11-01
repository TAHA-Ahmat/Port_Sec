<template>
  <div class="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100 p-6">
    <div class="max-w-2xl w-full text-center space-y-6">
      <!-- Icône d'erreur -->
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30">
        <svg class="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <!-- Titre -->
      <div class="space-y-2">
        <h1 class="text-3xl md:text-4xl font-bold">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-white to-red-300">
            Une erreur est survenue
          </span>
        </h1>
        <p class="text-lg opacity-80">
          Nous sommes désolés pour ce désagrément.
        </p>
      </div>

      <!-- Message d'erreur (si fourni) -->
      <div v-if="error" class="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-left">
        <div class="font-mono text-sm text-red-400">
          {{ error.message || 'Erreur inconnue' }}
        </div>
        <div v-if="error.stack && showDetails" class="mt-2 text-xs opacity-60 overflow-auto max-h-40">
          {{ error.stack }}
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          @click="handleReload"
          class="px-6 py-3 rounded-lg bg-emerald-500 text-black font-semibold hover:scale-[1.02] transition"
        >
          Recharger la page
        </button>
        <RouterLink
          to="/"
          class="px-6 py-3 rounded-lg border border-neutral-700 font-semibold hover:bg-neutral-800 transition"
        >
          Retour à l'accueil
        </RouterLink>
        <button
          v-if="error"
          @click="showDetails = !showDetails"
          class="px-6 py-3 rounded-lg border border-neutral-800 text-sm opacity-60 hover:opacity-100 transition"
        >
          {{ showDetails ? 'Masquer' : 'Voir' }} les détails
        </button>
      </div>

      <!-- Info de contact -->
      <div class="text-sm opacity-70 space-y-1">
        <p>Si le problème persiste, contactez-nous :</p>
        <a href="mailto:contact@portsectchad.com" class="text-emerald-400 hover:underline">
          contact@portsectchad.com
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  error: {
    type: Error,
    default: null
  }
})

const showDetails = ref(false)

const handleReload = () => {
  window.location.reload()
}

// Log l'erreur en console (pour debug)
if (props.error) {
  console.error('Error caught by ErrorFallback:', props.error)
}
</script>

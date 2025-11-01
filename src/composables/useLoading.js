/**
 * Composable pour gérer l'état de loading global
 * Permet d'afficher un spinner pendant les opérations longues
 */

import { ref } from 'vue'

// État global partagé entre tous les composants
const isLoading = ref(false)
const loadingMessage = ref('Chargement...')
const loadingSubmessage = ref('')

export function useLoading() {
  /**
   * Afficher le loading
   */
  const showLoading = (message = 'Chargement...', submessage = '') => {
    isLoading.value = true
    loadingMessage.value = message
    loadingSubmessage.value = submessage
  }

  /**
   * Masquer le loading
   */
  const hideLoading = () => {
    isLoading.value = false
    loadingMessage.value = 'Chargement...'
    loadingSubmessage.value = ''
  }

  /**
   * Exécuter une fonction asynchrone avec loading automatique
   */
  const withLoading = async (fn, message = 'Chargement...', submessage = '') => {
    try {
      showLoading(message, submessage)
      return await fn()
    } finally {
      hideLoading()
    }
  }

  return {
    isLoading,
    loadingMessage,
    loadingSubmessage,
    showLoading,
    hideLoading,
    withLoading
  }
}

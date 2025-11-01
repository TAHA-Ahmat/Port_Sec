/**
 * useScrollReveal - Composable pour animer les éléments au scroll
 * Utilise IntersectionObserver pour détecter l'entrée dans le viewport
 *
 * @param {string} selector - Sélecteur CSS des éléments à animer (défaut: 'section, [data-testid]')
 * @param {number} threshold - Pourcentage visible pour déclencher (défaut: 0.15)
 */
import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(selector = 'section, [data-testid]', threshold = 0.15) {
  let observer = null

  onMounted(() => {
    // Configuration de l'observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            // Optionnel : arrêter d'observer après animation (performance)
            // observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Déclenche 50px avant le bas du viewport
      }
    )

    // Observer tous les éléments correspondants
    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    // Nettoyage
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })
}

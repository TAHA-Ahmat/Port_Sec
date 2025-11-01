/**
 * useMagneticButton - Effet magnétique sur les boutons
 * Le bouton "suit" le curseur quand on s'approche (rayon 60px)
 *
 * Usage:
 * const buttonRef = ref(null)
 * useMagneticButton(buttonRef, { strength: 0.3, radius: 60 })
 */
import { onMounted, onUnmounted } from 'vue'

export function useMagneticButton(elementRef, options = {}) {
  const { strength = 0.3, radius = 60 } = options

  let rafId = null

  const handleMouseMove = (e) => {
    // Accéder à l'élément DOM (RouterLink renvoie un composant, pas un élément direct)
    const element = elementRef.value?.$el || elementRef.value
    if (!element || typeof element.getBoundingClientRect !== 'function') return

    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

    if (distance < radius) {
      // Dans la zone magnétique
      const pull = (radius - distance) / radius // 0 à 1
      const moveX = distanceX * strength * pull
      const moveY = distanceY * strength * pull

      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        element.style.transform = `translate(${moveX}px, ${moveY}px)`
        element.style.transition = 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)'
      })
    } else {
      // Hors de la zone, retour à la position initiale
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        element.style.transform = 'translate(0, 0)'
        element.style.transition = 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)'
      })
    }
  }

  const handleMouseLeave = () => {
    // Accéder à l'élément DOM (RouterLink renvoie un composant, pas un élément direct)
    const element = elementRef.value?.$el || elementRef.value
    if (!element || typeof element.style === 'undefined') return

    if (rafId) cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(() => {
      element.style.transform = 'translate(0, 0)'
      element.style.transition = 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)'
    })
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      // Vérifier que l'élément existe ET est un élément DOM valide
      const element = elementRef.value?.$el || elementRef.value

      if (element && typeof element.addEventListener === 'function') {
        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        element.addEventListener('mouseleave', handleMouseLeave)
      }
    }
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('mousemove', handleMouseMove)

      const element = elementRef.value?.$el || elementRef.value
      if (element && typeof element.removeEventListener === 'function') {
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
    if (rafId) cancelAnimationFrame(rafId)
  })
}

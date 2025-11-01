<template>
  <!-- Barre de progression FIXED toujours visible sous navbar sticky -->
  <div
    class="fixed left-0 right-0 z-[90] pointer-events-none"
    style="top: 64px; height: 3px;"
    role="progressbar"
    :aria-valuenow="scrollProgress"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div
      class="progress-bar-fill h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 transition-all duration-200 ease-out"
      :style="{ width: scrollProgress + '%' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const updateProgress = () => {
  if (typeof window === 'undefined') return

  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY || document.documentElement.scrollTop

  const scrollableHeight = documentHeight - windowHeight

  // Éviter division par zéro si la page est trop courte
  if (scrollableHeight <= 0) {
    scrollProgress.value = 0
    return
  }

  const progress = (scrollTop / scrollableHeight) * 100
  scrollProgress.value = Math.min(100, Math.max(0, progress))
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })

    // Init au chargement
    updateProgress()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', updateProgress)
    window.removeEventListener('resize', updateProgress)
  }
})
</script>

<style scoped>
/* Glow effect prononcé pour visibilité maximale */
.progress-bar-fill {
  box-shadow:
    0 0 15px rgba(16, 185, 129, 0.9),
    0 0 30px rgba(16, 185, 129, 0.5),
    0 2px 10px rgba(16, 185, 129, 0.6);
}

/* Animation pulsante pour attirer l'œil */
@keyframes progressGlow {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.5);
  }
}

.progress-bar-fill {
  animation: progressGlow 2.5s ease-in-out infinite;
  will-change: width, filter;
}
</style>

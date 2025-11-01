<template>
  <div
    class="fixed top-0 left-0 right-0 h-1 bg-transparent z-[9999] pointer-events-none"
    role="progressbar"
    :aria-valuenow="scrollProgress"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div
      class="h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/50 transition-all duration-150 ease-out"
      :style="{ width: scrollProgress + '%' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const updateProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY || document.documentElement.scrollTop

  const scrollableHeight = documentHeight - windowHeight
  const progress = (scrollTop / scrollableHeight) * 100

  scrollProgress.value = Math.min(100, Math.max(0, progress))
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress() // Init
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<style scoped>
/* Animation de glow subtile */
.h-full {
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.6), 0 0 20px rgba(16, 185, 129, 0.3);
}
</style>

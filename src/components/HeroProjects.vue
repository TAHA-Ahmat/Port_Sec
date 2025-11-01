<template>
  <section class="max-w-7xl mx-auto p-4 md:p-6">
    <!-- Grid 2 colonnes : Carte gauche + Texte droite -->
    <div class="grid gap-6 md:gap-8 md:grid-cols-2 items-center">

      <!-- CARTE À GAUCHE - Occupe bien son espace -->
      <div class="relative order-2 md:order-1">
        <div
          ref="mapContainer"
          class="map-wrapper relative rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-850 to-neutral-800 overflow-hidden"
          :style="{
            transform: `translateY(${parallaxMap}px)`,
            minHeight: '500px',
            height: '600px'
          }"
        >
          <MapGPM mode="interactive" class="w-full h-full" />
        </div>
      </div>

      <!-- TEXTE À DROITE - Bien structuré -->
      <div
        ref="textContainer"
        class="space-y-4 md:space-y-6 order-1 md:order-2"
        :style="{ transform: `translateY(${parallaxText}px)` }"
      >
        <!-- Tag / badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/80 text-xs opacity-90"
          role="note"
          aria-label="section-projets"
        >
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{{ t('nav.projects', 'Nos Projets') }}</span>
        </div>

        <!-- Title avec gradient -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
            {{ t('projectsPage.hero.title', 'Construire les infrastructures logistiques du futur') }}
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="opacity-90 text-base md:text-lg leading-relaxed">
          {{ t('projectsPage.hero.intro', 'GPM développe un réseau de ports secs et plateformes logistiques pour fluidifier le commerce extérieur du Tchad.') }}
        </p>

        <!-- CTA unique -->
        <div
          ref="heroCtas"
          class="flex flex-wrap gap-3 pt-4"
          :style="{ transform: `translateY(${parallaxCtas}px)` }"
        >
          <RouterLink
            to="/contact"
            ref="ctaPrimaryRef"
            class="cta-primary px-6 py-3 rounded-xl bg-emerald-500 text-neutral-900 font-bold hover:bg-emerald-400 shadow-2xl shadow-black/60 hover:shadow-emerald-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-base md:text-lg inline-block"
            :aria-label="t('projectsPage.hero.ctaPrimary', 'Nous contacter')"
          >
            {{ t('projectsPage.hero.ctaPrimary', 'Nous contacter') }}
          </RouterLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
/**
 * HeroProjects.vue - Version grid 2 colonnes avec motion design
 * - Carte MapGPM à gauche (occupe bien son espace, 600px height)
 * - Texte à droite avec parallax subtil
 * - Motion design: parallax multi-couches + magnetic CTAs + gradient animé
 * - Labels villes 100% visibles (pas de superposition)
 */
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import MapGPM from './MapGPM.vue'
import { useMagneticButton } from '@/composables/useMagneticButton'

const { t } = useI18n()

// ===== Effet Parallax multi-couches (carte + texte + CTAs) =====
const parallaxMap = ref(0)
const parallaxText = ref(0)
const parallaxCtas = ref(0)
const mapContainer = ref(null)
const textContainer = ref(null)
const heroCtas = ref(null)

// ===== Magnetic CTA =====
const ctaPrimaryRef = ref(null)

// Activer l'effet magnétique sur le bouton
useMagneticButton(ctaPrimaryRef, { strength: 0.3, radius: 80 })

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    const scrollY = window.scrollY
    // Carte : vitesse réduite pour stabilité visuelle
    parallaxMap.value = scrollY * 0.05
    // Texte : vitesse ultra-subtile
    parallaxText.value = scrollY * 0.03
    // CTAs : vitesse minimale pour ancrer l'attention
    parallaxCtas.value = scrollY * 0.01
  }
}

onMounted(() => {
  // Activer l'effet parallax
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  // Nettoyer l'événement scroll
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
/* Wrapper de la carte avec hover effect subtil */
.map-wrapper {
  transition: transform 0.3s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.3s ease;
  will-change: transform;
}

.map-wrapper:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 12px 40px rgba(16, 185, 129, 0.15);
}

/* Animation breathing glow au CTA primaire */
@keyframes buttonGlow {
  0%, 100% {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(16, 185, 129, 0.3);
  }
  50% {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.5);
  }
}

.cta-primary {
  animation: buttonGlow 8s ease-in-out infinite;
}

/* Transition smooth pour le parallax */
.map-wrapper,
[ref="textContainer"],
[ref="heroCtas"] {
  transition: transform 0.3s cubic-bezier(0.33, 1, 0.68, 1);
}

/* Responsive - Mobile stack vertical */
@media (max-width: 768px) {
  .map-wrapper {
    height: 450px !important;
    min-height: 450px !important;
  }
}

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

section {
  animation: fadeIn 0.8s ease-out;
}
</style>

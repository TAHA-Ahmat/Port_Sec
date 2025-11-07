<template>
  <div class="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 relative">
    <!-- Noise Texture Background -->
    <div class="noise-bg" aria-hidden="true"></div>

    <!-- Emblèmes institutionnels en watermark background -->
    <WatermarkSeals />

    <!-- Header institutionnel binational (position normale, peut scroller hors de vue) -->
    <InstitutionalHeader />

    <!-- Navbar fixed (reste toujours visible, top dynamique) -->
    <Navbar />

    <!-- Spacer pour compenser navbar fixed (64px hauteur navbar) -->
    <div class="h-16"></div>

    <!-- Scroll Progress Bar - Juste après spacer dans le flux -->
    <ScrollProgressBar />
    <main class="flex-1 relative z-10">
      <router-view :key="$route.fullPath" />
    </main>
    <Footer />

    <!-- Loading spinner global -->
    <LoadingSpinner
      :show="isLoading"
      :message="loadingMessage"
      :submessage="loadingSubmessage"
    />
  </div>
</template>

<script setup>
import InstitutionalHeader from './components/InstitutionalHeader.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import ScrollProgressBar from './components/ScrollProgressBar.vue'
import WatermarkSeals from './components/WatermarkSeals.vue'
import { useSeo } from './composables/useSeo'
import { useLoading } from './composables/useLoading'

// Activer le SEO dynamique
useSeo()

// État de loading global
const { isLoading, loadingMessage, loadingSubmessage } = useLoading()
</script>

<style>
/* ===== CSS Variables - Easing curves professionnelles ===== */
:root {
  --ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-accelerate: cubic-bezier(0.4, 0.0, 1, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ===== Classe .hoverable - Micro-interactions cohérentes ===== */
.hoverable {
  transition: transform 0.3s var(--ease-bounce),
              box-shadow 0.3s ease;
  will-change: transform, box-shadow;
}

.hoverable:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 12px 40px rgba(16, 185, 129, 0.15);
}

/* Version subtile pour éléments plus petits */
.hoverable-subtle {
  transition: transform 0.25s var(--ease-standard),
              box-shadow 0.25s ease;
}

.hoverable-subtle:hover {
  transform: translateY(-3px) scale(1.01);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.1);
}

/* ===== Noise Texture Background ===== */
.noise-bg {
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
  opacity: 0.4;
  animation: grain 8s steps(10) infinite;
}

@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}

/* ===== Glassmorphism standardisé ===== */
.glass-card {
  background: rgba(23, 23, 23, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.glass-card-subtle {
  background: rgba(23, 23, 23, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>

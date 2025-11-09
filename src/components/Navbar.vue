<template>
  <!-- Header global - Fixed avec top dynamique (0px ou 56px selon scroll) -->
  <header
    ref="headerRef"
    class="fixed left-0 right-0 z-50 border-b border-emerald-500/20 bg-gradient-to-r from-neutral-950/95 via-neutral-900/95 to-neutral-950/95 backdrop-blur-xl shadow-lg shadow-emerald-500/5 transition-all duration-300 ease-out"
    :style="{ top: navbarTop }"
    role="banner"
  >
    <nav
      class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"
      role="navigation"
      aria-label="Primary"
    >
      <!-- Logo / Accueil -->
      <RouterLink
        to="/"
        class="flex items-center gap-2 font-semibold tracking-wide hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl px-2 py-1"
      >
        <img
          :src="logoGpm"
          alt="GPM"
          class="h-10 w-auto bg-black rounded-lg px-2 py-1"
        />
      </RouterLink>

      <!-- Menu desktop -->
      <ul class="hidden md:flex items-center gap-6 text-sm">
        <li v-for="item in navItems" :key="item.to">
          <RouterLink
            :to="item.to"
            :class="linkClass(item.to)"
            :aria-current="isActive(item.to) ? 'page' : undefined"
            class="focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl px-1 py-0.5"
          >
            {{ t(item.key) || item.fallback }}
          </RouterLink>
        </li>
      </ul>

      <!-- Actions à droite (desktop) -->
      <div class="hidden md:flex items-center gap-3">
        <!-- Sélecteur de langue -->
        <div class="rounded-xl border border-neutral-800 bg-neutral-900 p-1 flex items-center gap-1">
          <button
            class="px-2 py-1 text-xs rounded-lg"
            :class="locale === 'fr' ? 'bg-emerald-500/90 text-neutral-900 font-semibold' : 'opacity-70 hover:opacity-100'"
            @click="setLocale('fr')"
            type="button"
          >
            FR
          </button>
          <button
            class="px-2 py-1 text-xs rounded-lg"
            :class="locale === 'en' ? 'bg-emerald-500/90 text-neutral-900 font-semibold' : 'opacity-70 hover:opacity-100'"
            @click="setLocale('en')"
            type="button"
          >
            EN
          </button>
        </div>
      </div>

      <!-- Burger mobile moderne -->
      <button
        class="md:hidden inline-flex flex-col items-center justify-center gap-1.5 h-10 w-10 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 hover:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
        type="button"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="mobile-menu"
        @click="toggle()"
        @keydown.esc="close()"
      >
        <span class="sr-only">Toggle menu</span>
        <!-- Icône hamburger animée (3 lignes) -->
        <span
          class="block h-0.5 w-5 rounded-full bg-emerald-400 transition-all duration-300"
          :class="open ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block h-0.5 w-5 rounded-full bg-emerald-400 transition-all duration-300"
          :class="open ? 'opacity-0' : 'opacity-100'"
        ></span>
        <span
          class="block h-0.5 w-5 rounded-full bg-emerald-400 transition-all duration-300"
          :class="open ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </nav>
  </header>

  <!-- Menu mobile fullscreen avec drawer - HORS du header pour couvrir 100vh -->
  <transition name="menu-mobile">
      <div
        v-if="open"
        class="fixed inset-0 z-[100] md:hidden"
        @click="close()"
      >
        <!-- Overlay backdrop gauche (15% largeur) avec gradient animé -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-md backdrop-animated">
          <!-- Gradient animé -->
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-purple-500/10 animate-gradient"></div>
          <!-- Particles flottantes -->
          <div class="particles-container">
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
            <div class="particle particle-4"></div>
            <div class="particle particle-5"></div>
          </div>
        </div>

        <!-- Drawer lateral (85% largeur, slide from right) - Hauteur complète -->
        <div
          id="mobile-menu"
          ref="drawerRef"
          class="absolute inset-y-0 right-0 w-[85%] max-w-sm h-full glass-drawer border-l border-emerald-500/20 shadow-2xl"
          @click.stop
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <nav class="h-full overflow-y-auto flex flex-col px-6 pt-4 pb-4 space-y-4" aria-label="Mobile">
            <!-- Header du drawer avec logo animé -->
            <div class="flex items-center justify-between pb-4 border-b border-neutral-800 border-emerald-500/20">
              <!-- Logo GPM avec animation -->
              <div class="flex items-center gap-2">
                <div class="logo-pulse relative">
                  <img :src="logoGpm" alt="GPM" class="h-8 w-auto" />
                  <div class="logo-ring"></div>
                </div>
              </div>
              <!-- Bouton close avec rotation -->
              <button
                @click="close()"
                class="close-button p-2 rounded-lg hover:bg-neutral-800 transition-all duration-300 group"
                aria-label="Fermer le menu"
              >
                <svg class="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Liens primaires avec animation staggered -->
            <ul class="space-y-2.5 flex-1 overflow-y-auto pr-2 -mr-2">
              <li
                v-for="(item, index) in navItems"
                :key="'m-'+item.to"
                class="mobile-menu-item"
                :style="{ animationDelay: `${index * 0.08}s` }"
              >
                <RouterLink
                  :to="item.to"
                  :class="mobileLinkClass(item.to)"
                  :aria-current="isActive(item.to) ? 'page' : undefined"
                  class="menu-item-link menu-item-3d group relative block px-4 py-2.5 rounded-xl border bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 font-medium text-sm overflow-hidden"
                  @click="close()"
                  @mouseenter="handleItemHover"
                  @mousemove="handleItemMove"
                  @mouseleave="handleItemLeave"
                >
                  <!-- Icône SVG -->
                  <div class="flex items-center gap-3">
                    <svg
                      class="w-5 h-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      :class="isActive(item.to) ? 'text-emerald-400' : 'text-neutral-400 group-hover:text-emerald-300'"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                    </svg>
                    <span class="relative z-10">{{ t(item.key) || item.fallback }}</span>
                  </div>

                  <!-- Ripple effect container -->
                  <span class="ripple-container absolute inset-0 pointer-events-none"></span>
                </RouterLink>
              </li>
            </ul>

            <!-- Sélecteur langue -->
            <div class="flex justify-center pt-4 border-t border-neutral-800">
              <div class="rounded-xl border border-neutral-800 bg-neutral-900 p-1 inline-flex items-center gap-1">
                <button
                  class="px-3 py-1.5 text-xs rounded-lg transition-all"
                  :class="locale === 'fr' ? 'bg-emerald-500/90 text-neutral-900 font-semibold' : 'opacity-70 hover:opacity-100'"
                  @click="setLocale('fr')"
                  type="button"
                >
                  FR
                </button>
                <button
                  class="px-3 py-1.5 text-xs rounded-lg transition-all"
                  :class="locale === 'en' ? 'bg-emerald-500/90 text-neutral-900 font-semibold' : 'opacity-70 hover:opacity-100'"
                  @click="setLocale('en')"
                  type="button"
                >
                  EN
                </button>
              </div>
            </div>

            <!-- Badge développeur Madmit (mobile uniquement) avec animation floating -->
            <div class="badge-madmit flex items-center justify-center gap-1 text-xs text-gray-300 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 select-none">
              <span class="text-sky-400 badge-icon">&lt;/&gt;</span>
              <span>Développé par</span>
              <span class="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent badge-text">
                Madmit
              </span>
            </div>
          </nav>
        </div>
      </div>
    </transition>
</template>

<script setup>
// =========================================
// Navbar.vue — Fixed simple toujours visible
// =========================================
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import logoGpm from '@/assets/images/logoGpm.svg'

// État panneau mobile
const open = ref(false)
const route = useRoute()
const { t, locale } = useI18n()

// Ref pour le header et drawer
const headerRef = ref(null)
const drawerRef = ref(null)

// ===== Navbar dynamique : top change selon scroll =====
// Hauteur de l'institutional header = 56px
const INSTITUTIONAL_HEIGHT = 56
const navbarTop = ref('56px') // Commence à 56px (sous institutional header)

const handleNavbarScroll = () => {
  if (typeof window !== 'undefined') {
    const scrollY = window.scrollY
    // Si scroll < 56px, navbar à 56px (sous institutional)
    // Si scroll >= 56px, navbar à 0px (prend la place en haut)
    navbarTop.value = scrollY < INSTITUTIONAL_HEIGHT ? '56px' : '0px'
  }
}

// État swipe gesture
const touchStartX = ref(0)
const touchCurrentX = ref(0)
const isDragging = ref(false)

// Items de navigation (clé i18n + fallback + target + icon)
const navItems = [
  {
    key: 'nav.home',
    fallback: 'Accueil',
    to: '/',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    key: 'nav.projects',
    fallback: 'Nos Projets',
    to: '/projects',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    key: 'nav.dataroom',
    fallback: 'Espace documentaire',
    to: '/dataroom',
    icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
  },
  {
    key: 'nav.contact',
    fallback: 'Contact',
    to: '/contact',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  }
]

// Détermination active (gère sous-routes)
const isActive = (to) => {
  // Accueil: strict
  if (to === '/') return route.path === '/'
  // Autres: /invest ou /invest/... => actif
  return route.path === to || route.path.startsWith(to + '/')
}

// Classes desktop
const linkClass = (to) => {
  return [
    'hover:opacity-90 transition',
    isActive(to) ? 'text-white font-medium' : 'text-neutral-300'
  ]
}

// Classes mobile
const mobileLinkClass = (to) => {
  return isActive(to)
    ? 'border-emerald-500 text-white'
    : 'border-neutral-800 text-neutral-200'
}

// Toggle/close
const toggle = () => { open.value = !open.value }
const close = () => { open.value = false }

// ===== Swipe to close gesture =====
const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
  touchCurrentX.value = e.touches[0].clientX
  isDragging.value = true
}

const handleTouchMove = (e) => {
  if (!isDragging.value) return

  touchCurrentX.value = e.touches[0].clientX
  const deltaX = touchCurrentX.value - touchStartX.value

  // Autoriser seulement le swipe vers la droite (pour fermer)
  if (deltaX > 0 && drawerRef.value) {
    drawerRef.value.style.transform = `translateX(${deltaX}px)`
    drawerRef.value.style.transition = 'none'
  }
}

const handleTouchEnd = () => {
  if (!isDragging.value) return

  const deltaX = touchCurrentX.value - touchStartX.value

  // Si swipe > 100px, fermer le menu
  if (deltaX > 100) {
    close()
  }

  // Reset le style
  if (drawerRef.value) {
    drawerRef.value.style.transform = ''
    drawerRef.value.style.transition = ''
  }

  isDragging.value = false
}

// Persistance locale (non bloquante)
const setLocale = (lng) => {
  try {
    locale.value = lng
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('ps_locale', lng)
    }
  } catch (_) { /* silencieux */ }
}

// Bloquer le scroll du body quand menu ouvert
watch(open, (newValue) => {
  if (typeof document !== 'undefined') {
    if (newValue) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
})

onMounted(() => {
  // Scroll listener pour navbar dynamique
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleNavbarScroll, { passive: true })
    // Calculer position initiale au montage
    handleNavbarScroll()
  }

  // Locale persistance
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem('ps_locale')
      if (saved && (saved === 'fr' || saved === 'en')) {
        locale.value = saved
      }
    }
  } catch (_) { /* silencieux */ }
})

onUnmounted(() => {
  // Cleanup: retirer scroll listener
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleNavbarScroll)
  }

  // Cleanup: retirer overflow-hidden si le composant est détruit avec menu ouvert
  if (typeof document !== 'undefined') {
    document.body.classList.remove('overflow-hidden')
  }
})
</script>

<style scoped>
/* ===== Drawer opaque (pas de glassmorphism pour éviter transparence) ===== */
.glass-drawer {
  background: linear-gradient(
    135deg,
    rgb(10, 10, 10) 0%,
    rgb(15, 15, 15) 50%,
    rgb(10, 10, 10) 100%
  );
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.7), inset 1px 0 0 rgba(16, 185, 129, 0.1);
}

/* ===== Animations menu mobile fullscreen ===== */
.menu-mobile-enter-active {
  transition: opacity 0.25s ease-out;
}

.menu-mobile-leave-active {
  transition: opacity 0.2s ease-in;
}

.menu-mobile-enter-from,
.menu-mobile-leave-to {
  opacity: 0;
}

/* Animation du drawer à l'intérieur (slide from right) */
.menu-mobile-enter-active #mobile-menu {
  transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1);
}

.menu-mobile-leave-active #mobile-menu {
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.menu-mobile-enter-from #mobile-menu {
  transform: translateX(100%);
}

.menu-mobile-leave-to #mobile-menu {
  transform: translateX(100%);
}

/* ===== Animation staggered des items ===== */
@keyframes slideInStagger {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.mobile-menu-item {
  animation: slideInStagger 0.4s cubic-bezier(0.33, 1, 0.68, 1) both;
}

/* Glow effect sur item actif */
.border-emerald-500 {
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.3), inset 0 0 10px rgba(16, 185, 129, 0.1);
  animation: pulseGlow 2s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.3), inset 0 0 10px rgba(16, 185, 129, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(16, 185, 129, 0.5), inset 0 0 15px rgba(16, 185, 129, 0.2);
  }
}

/* ===== Micro-interactions sur menu items ===== */
.menu-item-link {
  transform-origin: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.menu-item-link:hover {
  transform: translateX(4px) scale(1.02);
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.2);
}

.menu-item-link:active {
  transform: translateX(2px) scale(0.98);
}

/* ===== Ripple effect au clic ===== */
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 0.6;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

.ripple-container::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.6) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  pointer-events: none;
}

.menu-item-link:active .ripple-container::after {
  animation: ripple 0.6s ease-out;
}

/* ===== Badge Madmit floating animation ===== */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-3px) rotate(0.5deg);
  }
  50% {
    transform: translateY(-6px) rotate(-0.5deg);
  }
  75% {
    transform: translateY(-3px) rotate(0.5deg);
  }
}

@keyframes breathe {
  0%, 100% {
    opacity: 0.9;
  }
  50% {
    opacity: 1;
  }
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

.badge-madmit {
  animation: float 4s ease-in-out infinite, breathe 3s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.badge-madmit:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.badge-icon {
  animation: iconPulse 2s ease-in-out infinite;
}

.badge-text {
  background-size: 200% auto;
  animation: shimmerText 3s linear infinite;
}

@keyframes shimmerText {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* ===== Backdrop animé avec gradient ===== */
@keyframes gradient {
  0%, 100% {
    transform: rotate(0deg) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: rotate(5deg) scale(1.1);
    opacity: 0.6;
  }
}

.animate-gradient {
  animation: gradient 8s ease-in-out infinite;
}

.backdrop-animated {
  transition: backdrop-filter 0.3s ease;
}

/* ===== Particles flottantes ===== */
.particles-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(1px);
}

@keyframes floatParticle1 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(30vw, -100vh);
    opacity: 0;
  }
}

@keyframes floatParticle2 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(-20vw, -100vh);
    opacity: 0;
  }
}

@keyframes floatParticle3 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(40vw, -100vh);
    opacity: 0;
  }
}

.particle-1 {
  left: 10%;
  top: 80%;
  animation: floatParticle1 15s ease-in-out infinite;
  animation-delay: 0s;
}

.particle-2 {
  left: 30%;
  top: 90%;
  animation: floatParticle2 12s ease-in-out infinite;
  animation-delay: 2s;
}

.particle-3 {
  left: 50%;
  top: 85%;
  animation: floatParticle3 18s ease-in-out infinite;
  animation-delay: 4s;
}

.particle-4 {
  left: 70%;
  top: 75%;
  animation: floatParticle1 14s ease-in-out infinite;
  animation-delay: 6s;
}

.particle-5 {
  left: 20%;
  top: 95%;
  animation: floatParticle2 16s ease-in-out infinite;
  animation-delay: 8s;
}

/* ===== Effet moderne sur le header ===== */
header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(16, 185, 129, 0.3) 20%,
    rgba(16, 185, 129, 0.6) 50%,
    rgba(16, 185, 129, 0.3) 80%,
    transparent 100%
  );
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* ===== Optimisation mode paysage (landscape) pour mobile/tablette ===== */
@media (orientation: landscape) and (max-height: 500px) {
  /* Réduire le padding du drawer */
  #mobile-menu nav {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  /* Réduire l'espacement entre les items */
  #mobile-menu nav > ul {
    gap: 0.5rem !important;
  }

  .mobile-menu-item {
    margin-bottom: 0 !important;
  }

  /* Réduire le padding des liens */
  .menu-item-link {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
    font-size: 0.813rem !important;
  }

  /* Réduire la taille du logo dans le header du drawer */
  #mobile-menu img {
    height: 1.5rem !important;
  }

  /* Réduire le padding du header du drawer */
  #mobile-menu nav > div:first-child {
    padding-bottom: 0.5rem !important;
  }

  /* Réduire l'espacement du sélecteur de langue */
  #mobile-menu nav > div:nth-last-child(2) {
    padding-top: 0.5rem !important;
  }

  /* Réduire la taille des icônes SVG */
  .menu-item-link svg {
    width: 1.125rem !important;
    height: 1.125rem !important;
  }

  /* Réduire le badge Madmit */
  .badge-madmit {
    padding-top: 0.375rem !important;
    padding-bottom: 0.375rem !important;
    font-size: 0.688rem !important;
  }

  /* Réduire le bouton de fermeture */
  .close-button {
    padding: 0.375rem !important;
  }

  .close-button svg {
    width: 1.125rem !important;
    height: 1.125rem !important;
  }

  /* Optimiser le scroll du menu */
  #mobile-menu nav > ul {
    padding-right: 0.25rem !important;
    margin-right: -0.25rem !important;
  }
}

/* ===== Optimisation pour les très petites hauteurs (iPhone SE landscape, etc.) ===== */
@media (orientation: landscape) and (max-height: 400px) {
  /* Espacement encore plus réduit */
  #mobile-menu nav {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .menu-item-link {
    padding-top: 0.375rem !important;
    padding-bottom: 0.375rem !important;
  }

  /* Cacher le badge Madmit sur les très petits écrans en paysage */
  .badge-madmit {
    display: none !important;
  }
}
</style>

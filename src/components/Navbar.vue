<template>
  <!-- Header global - Fixed (toujours en haut) -->
  <header
    class="fixed top-0 left-0 right-0 z-50 border-b border-emerald-500/20 bg-gradient-to-r from-neutral-950/95 via-neutral-900/95 to-neutral-950/95 backdrop-blur-xl shadow-lg shadow-emerald-500/5"
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

        <!-- CTA Invest (optionnel, non bloquant) -->
        <RouterLink
          to="/invest"
          class="px-3 py-1.5 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-neutral-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {{ t('hero.ctaInvest') || 'Investir' }}
        </RouterLink>
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
        <!-- Overlay backdrop gauche (15% largeur) -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

        <!-- Drawer lateral (85% largeur, slide from right) - Hauteur complète -->
        <div
          id="mobile-menu"
          class="absolute inset-y-0 right-0 w-[85%] max-w-sm h-full glass-drawer border-l border-emerald-500/20 shadow-2xl"
          @click.stop
        >
          <nav class="h-full overflow-y-auto flex flex-col px-6 pt-4 pb-4 space-y-4" aria-label="Mobile">
            <!-- Header du drawer avec bouton close -->
            <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span class="text-sm font-semibold text-emerald-400">Menu</span>
              <button
                @click="close()"
                class="p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                aria-label="Fermer le menu"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  class="block px-4 py-2.5 rounded-xl border bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 font-medium text-sm"
                  @click="close()"
                >
                  {{ t(item.key) || item.fallback }}
                </RouterLink>
              </li>
            </ul>

            <!-- Actions secondaires -->
            <div class="flex items-center gap-3 pt-4 border-t border-neutral-800">
              <RouterLink
                to="/dataroom"
                class="flex-1 px-4 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                @click="close()"
              >
                {{ t('nav.dataroom') || 'Dataroom' }}
              </RouterLink>
              <RouterLink
                to="/invest"
                class="flex-1 px-4 py-2.5 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-neutral-900 text-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-lg shadow-emerald-500/20"
                @click="close()"
              >
                {{ t('nav.invest') || 'Investir' }}
              </RouterLink>
            </div>

            <!-- Sélecteur langue -->
            <div class="flex justify-center">
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

            <!-- Badge développeur Madmit (mobile uniquement) -->
            <div class="flex items-center justify-center gap-1 text-xs text-gray-300 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 select-none">
              <span class="text-sky-400">&lt;/&gt;</span>
              <span>Développé par</span>
              <span class="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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

// Items de navigation (clé i18n + fallback + target)
const navItems = [
  { key: 'nav.home', fallback: 'Accueil', to: '/' },
  { key: 'nav.projects', fallback: 'Nos Projets', to: '/projects' },
  { key: 'nav.invest', fallback: 'Investir', to: '/invest' },
  { key: 'nav.dataroom', fallback: 'Espace documentaire', to: '/dataroom' },
  { key: 'nav.contact', fallback: 'Contact', to: '/contact' }
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
</style>

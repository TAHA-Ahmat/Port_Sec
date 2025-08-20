<template>
  <!-- Header global -->
  <header
    class="sticky top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur"
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
        class="flex items-center gap-2 font-semibold tracking-wide hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl"
      >
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <span>GPM</span>
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

      <!-- Burger mobile -->
      <button
        class="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        type="button"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="mobile-menu"
        @click="toggle()"
        @keydown.esc="close()"
      >
        <span class="sr-only">Toggle menu</span>
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-90" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 7h16M4 12h16M4 17h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-90" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 6l12 12M6 18L18 6"/>
        </svg>
      </button>
    </nav>

    <!-- Panneau mobile -->
    <transition name="fade">
      <div
        v-if="open"
        id="mobile-menu"
        class="md:hidden border-t border-neutral-800 bg-neutral-950/95"
      >
        <nav class="max-w-6xl mx-auto px-4 py-4 space-y-4" aria-label="Mobile">
          <!-- Liens primaires -->
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="'m-'+item.to">
              <RouterLink
                :to="item.to"
                :class="mobileLinkClass(item.to)"
                :aria-current="isActive(item.to) ? 'page' : undefined"
                class="block px-3 py-2 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                @click="close()"
              >
                {{ t(item.key) || item.fallback }}
              </RouterLink>
            </li>
          </ul>

          <!-- Actions secondaires -->
          <div class="flex items-center gap-2">
            <RouterLink
              to="/dataroom"
              class="flex-1 px-3 py-2 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              @click="close()"
            >
              {{ t('nav.dataroom') || 'Espace documentaire' }}
            </RouterLink>
            <RouterLink
              to="/invest"
              class="flex-1 px-3 py-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-neutral-900 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              @click="close()"
            >
              {{ t('nav.invest') || 'Investir' }}
            </RouterLink>
          </div>

          <!-- Sélecteur langue -->
          <div class="pt-2">
            <div class="rounded-xl border border-neutral-800 bg-neutral-900 p-1 inline-flex items-center gap-1">
              <button
                class="px-2 py-1 text-xs rounded-lg"
                :class="locale === 'fr' ? 'bg-emerald-500/90 text-neutral-900 font-semibold' : 'opacity-70 hover:opacity-100'"
                @click="setLocale('fr'); close()"
                type="button"
              >
                FR
              </button>
              <button
                class="px-2 py-1 text-xs rounded-lg"
                :class="locale === 'en' ? 'bg-emerald-500/90 text-neutral-900 font-semibold' : 'opacity-70 hover:opacity-100'"
                @click="setLocale('en'); close()"
                type="button"
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
// =========================================
// Navbar.vue (amélioré) — zéro régression
// =========================================
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

// État panneau mobile
const open = ref(false)
const route = useRoute()
const { t, locale } = useI18n()

// Items de navigation (clé i18n + fallback + target)
const navItems = [
  { key: 'nav.home', fallback: 'Accueil', to: '/' },
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

onMounted(() => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem('ps_locale')
      if (saved && (saved === 'fr' || saved === 'en')) {
        locale.value = saved
      }
    }
  } catch (_) { /* silencieux */ }
})
</script>

<style scoped>
/* Transition simple pour le panneau mobile */
.fade-enter-active, .fade-leave-active { transition: opacity 0.18s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

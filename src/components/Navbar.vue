<template>
  <header class="sticky top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur">
    <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo / Accueil -->
      <RouterLink to="/" class="flex items-center gap-2 font-semibold tracking-wide hover:opacity-90">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <span>Port Sec</span>
      </RouterLink>

      <!-- Menu desktop -->
      <ul class="hidden md:flex items-center gap-6 text-sm">
        <li>
          <RouterLink :class="linkClass('/')" to="/">
            {{ t('nav.home') || 'Accueil' }}
          </RouterLink>
        </li>
        <li>
          <RouterLink :class="linkClass('/dataroom')" to="/dataroom">
            {{ t('nav.dataroom') || 'Espace documentaire' }}
          </RouterLink>
        </li>
        <li>
          <RouterLink :class="linkClass('/contact')" to="/contact">
            {{ t('nav.contact') || 'Contact' }}
          </RouterLink>
        </li>
      </ul>

      <!-- Bouton Investir + sélecteur langue -->
      <div class="hidden md:flex items-center gap-3">
        <select v-model="locale" class="bg-neutral-900 border border-neutral-700 rounded px-2 py-1 text-sm">
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>
        <RouterLink to="/investir"
          class="px-4 py-2 rounded bg-emerald-400 text-black font-medium hover:opacity-90">
          {{ t('nav.invest') || 'Investir' }}
        </RouterLink>
      </div>

      <!-- Bouton menu mobile -->
      <button @click="open = !open" class="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded border border-neutral-700">
        <span class="i">≡</span>
      </button>
    </nav>

    <!-- Menu mobile -->
    <div v-if="open" class="md:hidden border-t border-neutral-800/60 bg-neutral-950">
      <div class="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
        <RouterLink @click="open=false" :class="linkClass('/')" to="/">
          {{ t('nav.home') || 'Accueil' }}
        </RouterLink>
        <RouterLink @click="open=false" :class="linkClass('/dataroom')" to="/dataroom">
          {{ t('nav.dataroom') || 'Espace documentaire' }}
        </RouterLink>
        <RouterLink @click="open=false" :class="linkClass('/contact')" to="/contact">
          {{ t('nav.contact') || 'Contact' }}
        </RouterLink>

        <div class="flex items-center justify-between pt-2">
          <select v-model="locale" class="bg-neutral-900 border border-neutral-700 rounded px-2 py-1 text-sm">
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
          <RouterLink @click="open=false" to="/investir"
            class="px-4 py-2 rounded bg-emerald-400 text-black font-medium hover:opacity-90">
            {{ t('nav.invest') || 'Investir' }}
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const open = ref(false)
const route = useRoute()
const { t, locale } = useI18n()

const linkClass = (to) => [
  'hover:opacity-90',
  route.path === to ? 'text-white font-medium' : 'text-neutral-300'
]
</script>

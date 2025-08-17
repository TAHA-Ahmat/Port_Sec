<template>
  <section class="min-h-[60vh] max-w-6xl mx-auto p-6 flex flex-col items-center justify-center text-center gap-3">
    <h1 class="text-4xl font-bold">404</h1>
    <p class="opacity-80">Page introuvable</p>
    <RouterLink to="/" class="px-4 py-2 rounded bg-white text-black">Retour à l’accueil</RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

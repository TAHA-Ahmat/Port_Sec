<template>
  <section class="max-w-3xl mx-auto p-6 space-y-8">
    <header class="space-y-2 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <span>{{ t('nav.contact') }}</span>
      </div>
      <h1 class="text-2xl md:text-3xl font-bold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
          {{ t('nav.contact') }}
        </span>
      </h1>
      <p class="opacity-80">Échangeons sur le projet ou l’accès à l’espace documentaire.</p>
    </header>

    <form class="space-y-4">
      <input class="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800" placeholder="Nom" />
      <input class="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800" placeholder="Email" />
      <textarea class="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800" rows="5" placeholder="Votre message (contexte, questions…)"></textarea>
      <div class="flex gap-3">
        <button type="submit" class="px-5 py-3 rounded bg-emerald-500 text-black font-semibold hover:scale-[1.02] transition">Envoyer</button>
        <RouterLink to="/dataroom" class="px-5 py-3 rounded border border-neutral-700 font-semibold hover:bg-neutral-800 transition">Demander l’accès à l’espace documentaire</RouterLink>
      </div>
    </form>

    <div class="text-sm opacity-70">
      <div class="font-semibold">{{ t('footer.contact.title') }}</div>
      <div>{{ t('footer.contact.addr') }}</div>
      <div class="mt-1">Réponse sous 48h ouvrées.</div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
const { t } = useI18n()
</script>

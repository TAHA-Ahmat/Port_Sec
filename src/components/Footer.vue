<template>
  <footer class="bg-neutral-900 text-gray-300 py-10 border-t border-neutral-800">
    <div class="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-4">

      <!-- Tagline / Adresse -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-emerald-400">
          {{ $t('footer.tagline') }}
        </h3>
        <p class="text-sm opacity-80 leading-relaxed">
          {{ $t('footer.contact.addr') }}
        </p>
      </div>

      <!-- Liens -->
      <div>
        <h4 class="text-sm font-semibold mb-2 text-gray-100">
          {{ $t('nav.project') }}
        </h4>
        <ul class="space-y-1 text-sm">
          <li><RouterLink to="/" class="hover:text-emerald-400 transition">{{ $t('footer.links.project') }}</RouterLink></li>
          <li><RouterLink to="/impact" class="hover:text-emerald-400 transition">{{ $t('footer.links.impact') }}</RouterLink></li>
          <li><RouterLink to="/invest" class="hover:text-emerald-400 transition">{{ $t('footer.links.invest') }}</RouterLink></li>
          <li><RouterLink to="/dataroom" class="hover:text-emerald-400 transition">{{ $t('footer.links.dataroom') }}</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-emerald-400 transition">{{ $t('footer.links.contact') }}</RouterLink></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-sm font-semibold mb-2 text-gray-100">
          {{ $t('footer.contact.title') }}
        </h4>
        <p class="text-sm opacity-80">
          {{ $t('footer.contact.addr') }}
        </p>
      </div>

      <!-- Légal -->
      <div>
        <h4 class="text-sm font-semibold mb-2 text-gray-100">
          {{ $t('footer.legal.mentions') }}
        </h4>
        <p class="text-xs opacity-80">
          {{ $t('footer.legal.cookies') }}
        </p>
        <p class="text-xs mt-4 opacity-60">
          {{ $t('footer.updated') }}
        </p>
      </div>

    </div>

    <!-- Copyright -->
    <div class="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-neutral-800 text-center text-sm opacity-60">
      {{ $t('footer.copyright') }}
    </div>

    <!-- Badge développeur Madmit -->
    <div class="flex items-center justify-center gap-1 text-xs text-gray-300 bg-neutral-900/80 border border-neutral-800 rounded-lg px-3 py-1 mt-4 mx-auto w-fit select-none">
      <span class="text-sky-400">&lt;/&gt;</span>
      <span>Développé par</span>
      <span class="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Madmit
      </span>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

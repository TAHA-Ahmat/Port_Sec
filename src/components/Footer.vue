<template>
  <footer class="bg-neutral-900 text-gray-300 py-10 border-t border-neutral-800">
    <!-- Logo GPM Text en haut centré -->
    <div class="max-w-6xl mx-auto px-4 mb-8 text-center">
      <img
        src="@/assets/images/gpmLogoText.svg"
        alt="Genesis Port Management"
        class="h-12 mx-auto opacity-90"
      />
      <p class="text-xs opacity-60 mt-2">Genesis Port Management</p>
    </div>

    <div class="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">

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

    <!-- Sceaux institutionnels + Copyright -->
    <div class="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-neutral-800">
      <!-- Sceaux République -->
      <div class="flex items-center justify-center gap-6 md:gap-8 mb-4">
        <div class="flex items-center gap-3">
          <img
            src="@/assets/images/emblemeCameroun.png"
            alt="République du Cameroun"
            class="sceau-footer h-10 w-10 object-contain"
          />
          <span class="hidden md:inline text-xs font-medium tracking-wide uppercase opacity-80">
            République du Cameroun
          </span>
        </div>

        <div class="h-8 w-px bg-neutral-700"></div>

        <div class="flex items-center gap-3">
          <span class="hidden md:inline text-xs font-medium tracking-wide uppercase opacity-80">
            République du Tchad
          </span>
          <img
            src="@/assets/images/tchad_embleme.png"
            alt="République du Tchad"
            class="sceau-footer h-10 w-10 object-contain"
          />
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-sm opacity-60">
        {{ $t('footer.copyright') }}
      </div>
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

<style scoped>
/* Égalisation visuelle des sceaux - Taille identique */
.sceau-footer {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

/* CORRECTION CRITIQUE : Sceau Cameroun 0.7x plus petit → Agrandir à 1.43x */
.sceau-footer[alt="République du Cameroun"] {
  filter: brightness(1.15) contrast(1.1);
  transform: scale(1.43);
  transform-origin: center;
}

/* Aucune animation sur les sceaux - respect institutionnel */
.sceau-footer {
  transition: none;
}
</style>

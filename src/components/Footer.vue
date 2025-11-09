<template>
  <footer class="relative z-10 bg-neutral-900 text-gray-300 py-10 border-t border-neutral-800">
    <!-- Logo GPM Text en haut centré -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10 text-center">
      <img
        src="@/assets/images/gpmlogoText.svg"
        alt="Genesis Port Management"
        class="h-10 sm:h-12 mx-auto opacity-90"
      />
      <p class="text-xs opacity-60 mt-2">Genesis Port Management</p>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-4">

      <!-- Navigation -->
      <div class="footer-section">
        <h4 class="text-sm font-semibold mb-3 sm:mb-4 text-gray-100">
          Navigation
        </h4>
        <ul class="space-y-2.5 sm:space-y-2 text-sm">
          <li><RouterLink to="/" class="footer-link">{{ $t('footer.links.home') }}</RouterLink></li>
          <li><RouterLink to="/projects" class="footer-link">{{ $t('footer.links.project') }}</RouterLink></li>
        </ul>
      </div>

      <!-- Investisseurs -->
      <div class="footer-section">
        <h4 class="text-sm font-semibold mb-3 sm:mb-4 text-gray-100">
          Investisseurs
        </h4>
        <ul class="space-y-2.5 sm:space-y-2 text-sm">
          <li><RouterLink to="/dataroom" class="footer-link">{{ $t('footer.links.dataroom') }}</RouterLink></li>
          <li><RouterLink to="/contact" class="footer-link">{{ $t('footer.links.contact') }}</RouterLink></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-section">
        <h4 class="text-sm font-semibold mb-3 sm:mb-4 text-gray-100">
          {{ $t('footer.contact.title') }}
        </h4>
        <p class="text-sm opacity-80 leading-relaxed">
          {{ $t('footer.contact.addr') }}
        </p>
      </div>

      <!-- Légal -->
      <div class="footer-section">
        <h4 class="text-sm font-semibold mb-3 sm:mb-4 text-gray-100">
          {{ $t('footer.legal.mentions') }}
        </h4>
        <p class="text-xs opacity-80 leading-relaxed">
          {{ $t('footer.legal.cookies') }}
        </p>
        <p class="text-xs mt-3 opacity-60">
          {{ $t('footer.updated') }}
        </p>
      </div>

    </div>

    <!-- Sceaux institutionnels + Copyright -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-neutral-800">
      <!-- Sceaux République -->
      <div class="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-5">
        <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <img
            src="@/assets/images/emblemeCameroun.png"
            alt="République du Cameroun"
            class="sceau-footer h-9 w-9 sm:h-10 sm:w-10 object-contain"
          />
          <span class="text-[10px] sm:text-xs font-medium tracking-wide uppercase opacity-70 sm:opacity-80 text-center sm:text-left">
            Cameroun
          </span>
        </div>

        <div class="h-6 sm:h-8 w-px bg-neutral-700"></div>

        <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <span class="text-[10px] sm:text-xs font-medium tracking-wide uppercase opacity-70 sm:opacity-80 text-center sm:text-left sm:order-first">
            Tchad
          </span>
          <img
            src="@/assets/images/tchad_embleme.png"
            alt="République du Tchad"
            class="sceau-footer h-9 w-9 sm:h-10 sm:w-10 object-contain"
          />
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-xs sm:text-sm opacity-60 leading-relaxed">
        {{ $t('footer.copyright') }}
      </div>
    </div>

    <!-- Badge développeur Madmit -->
    <div class="flex items-center justify-center gap-1 text-[11px] sm:text-xs text-gray-300 bg-neutral-900/80 border border-neutral-800 rounded-lg px-3 py-1.5 sm:py-1 mt-4 sm:mt-5 mx-auto w-fit select-none">
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
/* ===== MOBILE-FIRST OPTIMIZATIONS ===== */

/* Footer sections - Better spacing on mobile */
.footer-section {
  min-height: fit-content;
}

/* Links - Touch-friendly on mobile */
.footer-link {
  display: inline-block;
  padding: 2px 0;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: rgb(52, 211, 153);
}

/* Touch target enhancement mobile */
@media (max-width: 640px) {
  .footer-link {
    padding: 4px 0;
    min-height: 32px;
    display: flex;
    align-items: center;
  }
}

/* ===== SCEAUX INSTITUTIONNELS ===== */

/* Égalisation visuelle des sceaux - Taille identique */
.sceau-footer {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

/* Mobile: taille réduite */
@media (max-width: 640px) {
  .sceau-footer {
    width: 36px;
    height: 36px;
  }
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

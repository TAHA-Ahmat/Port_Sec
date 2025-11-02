<template>
  <!-- Barre institutionnelle (position normale, scroll hors de vue) -->
  <div class="institutional-header relative bg-neutral-950 border-b border-neutral-800/50">
    <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-6 md:gap-12">
      <!-- Sceau Cameroun + Texte -->
      <div class="flex items-center gap-3">
        <img
          src="@/assets/images/emblemeCameroun.png"
          alt="République du Cameroun"
          class="sceau-national sceau-cameroun h-10 md:h-12 w-10 md:w-12 object-contain"
        />
        <span class="hidden md:inline text-xs md:text-sm font-medium tracking-widest uppercase opacity-90">
          République du Cameroun
        </span>
      </div>

      <!-- Séparateur -->
      <div class="h-8 md:h-10 w-px bg-neutral-700"></div>

      <!-- Sceau Tchad + Texte -->
      <div class="flex items-center gap-3">
        <span class="hidden md:inline text-xs md:text-sm font-medium tracking-widest uppercase opacity-90">
          République du Tchad
        </span>
        <img
          src="@/assets/images/tchad_embleme.png"
          alt="République du Tchad"
          class="sceau-national sceau-tchad h-10 md:h-12 w-10 md:w-12 object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Composant institutionnel - Pas d'interactivité, juste présence officielle
</script>

<style scoped>
.institutional-header {
  /* Hauteur totale : 56px (py-2 + h-12 + borders) */
  min-height: 56px;
}

/* Égalisation visuelle des sceaux */
.sceau-national {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

/* CORRECTION CRITIQUE : Sceau Cameroun 0.7x plus petit → Agrandir à 1.43x */
.sceau-cameroun {
  filter: brightness(1.15) contrast(1.1);
  transform: scale(1.43);
  transform-origin: center;
}

/* Aucune animation sur les sceaux - respect institutionnel */
.sceau-national {
  transition: none;
}

@media (max-width: 768px) {
  .sceau-national {
    width: 40px;
    height: 40px;
  }

  .sceau-cameroun {
    transform: scale(1.43);
  }
}
</style>

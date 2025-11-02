<template>
  <!-- Watermarks institutionnels en background -->
  <div class="watermark-container" aria-hidden="true">
    <!-- Sceau Cameroun - Top Left -->
    <img
      src="@/assets/images/emblemeCameroun.png"
      alt=""
      class="watermark watermark-cameroun"
    />

    <!-- Sceau Tchad - Top Right -->
    <img
      src="@/assets/images/tchad_embleme.png"
      alt=""
      class="watermark watermark-tchad"
    />
  </div>
</template>

<script setup>
// Composant watermark - background décoratif institutionnel
</script>

<style scoped>
.watermark-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.watermark {
  position: fixed;
  width: 180px;
  height: 180px;
  object-fit: contain;
  opacity: 0.15;
  pointer-events: none;
}

.watermark-cameroun {
  top: 15%;
  left: 5%;
  /* CORRECTION CRITIQUE : Sceau Cameroun 0.7x plus petit → Agrandir à 1.43x */
  filter: brightness(1.15) contrast(1.1);
  transform: scale(1.43);
  transform-origin: center;
}

.watermark-tchad {
  top: 15%;
  right: 5%;
}

/* Responsive - réduire sur mobile */
@media (max-width: 768px) {
  .watermark {
    width: 120px;
    height: 120px;
    opacity: 0.12;
  }

  .watermark-cameroun {
    transform: scale(1.43);
  }

  .watermark-cameroun {
    top: 10%;
    left: 2%;
  }

  .watermark-tchad {
    top: 10%;
    right: 2%;
  }
}

/* Variante desktop large */
@media (min-width: 1440px) {
  .watermark {
    width: 220px;
    height: 220px;
  }
}
</style>

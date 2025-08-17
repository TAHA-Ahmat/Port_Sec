<template>
  <section class="space-y-4">
    <!-- Titre ligne (facultatif) -->
    <div class="flex items-center justify-between">
      <h3 class="text-base md:text-lg font-semibold">
        <span class="opacity-80">{{ labelBefore || '—' }}</span>
        <span class="opacity-40 mx-2">/</span>
        <span class="opacity-80">{{ labelAfter || '—' }}</span>
      </h3>
    </div>

    <!-- Zone comparateur -->
    <div class="relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 md:p-6 overflow-hidden">
      <!-- Grille 2 colonnes : Avant / Après -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Colonne Avant -->
        <div class="space-y-2">
          <div class="text-sm uppercase tracking-wide opacity-60">{{ labelBefore || '—' }}</div>
          <ul class="list-disc pl-5 space-y-1 text-sm opacity-90">
            <li v-for="(item, i) in safeBefore" :key="`before-${i}`">{{ item }}</li>
            <li v-if="!safeBefore.length" class="opacity-50">—</li>
          </ul>
        </div>

        <!-- Colonne Après -->
        <div class="space-y-2">
          <div class="text-sm uppercase tracking-wide opacity-60">{{ labelAfter || '—' }}</div>
          <ul class="list-disc pl-5 space-y-1 text-sm opacity-90">
            <li v-for="(item, i) in safeAfter" :key="`after-${i}`">{{ item }}</li>
            <li v-if="!safeAfter.length" class="opacity-50">—</li>
          </ul>
        </div>
      </div>

      <!-- Trait vertical indicatif (optionnel) -->
      <div
        v-if="showHandle"
        class="pointer-events-none absolute inset-y-4 md:inset-y-6"
        :style="{ left: sliderPosition }"
      >
        <div class="w-px h-full bg-emerald-400/30"></div>
      </div>

      <!-- Slider accessible -->
      <div class="mt-6">
        <input
          type="range"
          min="0"
          max="100"
          v-model.number="pos"
          :aria-label="ariaLabel || 'Comparison slider'"
          class="w-full accent-emerald-400"
        />
      </div>
    </div>

    <!-- Note (optionnelle) -->
    <p v-if="note" class="text-xs opacity-60">{{ note }}</p>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

/**
 * Props :
 * - initial : nombre entre 0 et 1 (position initiale du curseur). Par défaut 0.5.
 * - labelBefore / labelAfter : libellés transmis par le parent (ex: t('impact.before')).
 * - itemsBefore / itemsAfter : tableaux de chaînes (les textes viennent du parent).
 * - showHandle : affiche le trait vertical indicatif.
 * - ariaLabel : accessibilité pour l’input range.
 * - note : texte optionnel sous le composant.
 */
const props = defineProps({
  initial: { type: Number, default: 0.5 },
  labelBefore: { type: String, default: '' },
  labelAfter: { type: String, default: '' },
  itemsBefore: { type: Array, default: () => [] },
  itemsAfter: { type: Array, default: () => [] },
  showHandle: { type: Boolean, default: true },
  ariaLabel: { type: String, default: '' },
  note: { type: String, default: '' }
})

/* Position interne en % (0–100), dérivée de initial (0–1). */
const clamp01 = (v) => (typeof v === 'number' ? Math.min(1, Math.max(0, v)) : 0.5)
const pos = ref(Math.round(clamp01(props.initial) * 100))

watch(
  () => props.initial,
  (nv) => {
    pos.value = Math.round(clamp01(nv) * 100)
  }
)

/* Filtrage sécurisé des listes (chaînes non vides). */
const normalizeList = (arr) =>
  Array.isArray(arr) ? arr.map(String).map((s) => s.trim()).filter(Boolean) : []

const safeBefore = computed(() => normalizeList(props.itemsBefore))
const safeAfter = computed(() => normalizeList(props.itemsAfter))

/* Position CSS pour le trait indicatif. */
const sliderPosition = computed(() => `${pos.value}%`)
</script>

<style scoped>
/* Rester simple : l’accent est géré par Tailwind (accent-emerald-400).
   On s’assure juste d’un focus visible (navig. clavier). */
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-thumb:focus {
  outline: 2px solid rgba(16, 185, 129, 0.6); /* emerald-400/60 */
}
</style>

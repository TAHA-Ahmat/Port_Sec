<template>
  <nav
    class="breadcrumbs max-w-6xl mx-auto px-6 py-4"
    aria-label="Fil d'Ariane"
  >
    <ol class="flex items-center gap-2 text-sm">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center gap-2"
      >
        <!-- Lien ou texte -->
        <RouterLink
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="text-emerald-300 hover:text-emerald-200 hover:underline transition"
        >
          {{ item.label }}
        </RouterLink>
        <span
          v-else
          class="font-semibold"
          :class="index === items.length - 1 ? 'text-white' : 'opacity-70'"
        >
          {{ item.label }}
        </span>

        <!-- Séparateur -->
        <span
          v-if="index < items.length - 1"
          class="opacity-40"
          aria-hidden="true"
        >
          ›
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  /**
   * Breadcrumb items
   * Format: [{ label: 'Accueil', to: '/' }, { label: 'Projets' }]
   * Le dernier item n'a pas de 'to' (page actuelle)
   */
  items: {
    type: Array,
    required: true,
    validator: (items) => {
      return items.every(item => item.label)
    }
  }
})
</script>

<style scoped>
.breadcrumbs {
  opacity: 0.85;
}

.breadcrumbs:hover {
  opacity: 1;
}
</style>

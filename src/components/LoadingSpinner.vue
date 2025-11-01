<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/90 backdrop-blur-sm"
    :class="{ 'pointer-events-none': !blocking }"
  >
    <div class="text-center space-y-4">
      <!-- Spinner animé -->
      <div class="relative inline-flex">
        <div class="w-16 h-16 border-4 border-neutral-800 border-t-emerald-500 rounded-full animate-spin"></div>
        <div class="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-emerald-400 rounded-full animate-spin-slow"></div>
      </div>

      <!-- Message -->
      <div v-if="message" class="text-neutral-300 font-medium">
        {{ message }}
      </div>

      <!-- Sous-message -->
      <div v-if="submessage" class="text-sm text-neutral-500">
        {{ submessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: 'Chargement...'
  },
  submessage: {
    type: String,
    default: ''
  },
  blocking: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
@keyframes spin-slow {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 2s linear infinite reverse;
}
</style>

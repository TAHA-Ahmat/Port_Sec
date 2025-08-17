<template>
  <div class="p-4 rounded-lg border border-neutral-800 bg-neutral-900">
    <div class="text-sm opacity-75">{{ label }}</div>
<div class="text-2xl font-semibold mt-1">
  {{ value }}<span v-if="unit" class="text-base opacity-70">&nbsp;{{ unit }}</span>
</div>

  </div>
</template>
<script setup>
defineProps({ label: String, value: [String, Number], unit: String })
</script>

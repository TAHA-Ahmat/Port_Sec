<template>
  <figure class="w-full overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
    <!-- Wrapper ratio -->
    <div class="relative w-full" :style="ratioStyle">
      <template v-if="src">
        <img :src="src" :alt="alt" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </template>
      <template v-else>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <div class="text-4xl mb-2">🖼️</div>
            <div class="text-sm opacity-70">{{ placeholder || 'Visuel en préparation' }}</div>
          </div>
        </div>
      </template>
    </div>
    <figcaption v-if="caption" class="px-3 py-2 text-xs opacity-70 border-t border-neutral-800">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  caption: { type: String, default: '' },
  ratio: { type: String, default: '16:9' }, // '16:9', '4:3', '1:1', '21:9'
  placeholder: { type: String, default: '' }
})

// Calcule le padding-top (%) pour garder le ratio sans plugin
const ratioStyle = computed(() => {
  const [w, h] = props.ratio.split(':').map(Number)
  const pct = h && w ? (h / w) * 100 : 56.25 // fallback 16:9
  return { paddingTop: pct + '%' }
})
</script>

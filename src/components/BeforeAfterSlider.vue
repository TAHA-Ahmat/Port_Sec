<template>
  <section
    class="relative max-w-6xl mx-auto p-6"
    role="region"
    :aria-label="aria"
  >
    <!-- Wrapper aspect-ratio -->
    <div
      class="relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950"
      :style="wrapperStyle"
      ref="wrapperRef"
    >
      <!-- SKELETON / LOADING -->
      <div
        v-if="loading || !hasImages"
        class="absolute inset-0 grid place-items-center bg-neutral-950"
      >
        <div class="animate-pulse text-xs opacity-60">
          {{ t('home.beforeAfter.title', 'Avant / Après') }}
        </div>
      </div>

      <!-- BEFORE -->
      <img
        v-else
        class="absolute inset-0 h-full w-full object-cover select-none"
        :src="beforeSrc"
        :alt="beforeAltResolved"
        :loading="imgLoadingAttr"
        draggable="false"
        @dragstart.prevent
      />

      <!-- AFTER (clipped) -->
      <div
        v-if="!loading && hasImages"
        class="absolute inset-0 overflow-hidden"
        :style="{ width: clipWidth + '%' }"
        aria-hidden="true"
      >
        <img
          class="absolute inset-0 h-full w-full object-cover select-none"
          :src="afterSrc"
          :alt="afterAltResolved"
          :loading="imgLoadingAttr"
          draggable="false"
          @dragstart.prevent
        />
      </div>

      <!-- Badges labels -->
      <div v-if="!loading && hasImages" class="pointer-events-none absolute inset-x-0 top-0 p-3 flex justify-between">
        <!-- Badge BEFORE -->
        <div class="pointer-events-auto">
          <slot name="badge-before">
            <span class="px-2 py-1 rounded-full text-xs border border-neutral-800 bg-neutral-900/80 backdrop-blur">
              {{ labelsResolved.before }}
            </span>
          </slot>
        </div>
        <!-- Badge AFTER -->
        <div class="pointer-events-auto">
          <slot name="badge-after">
            <span class="px-2 py-1 rounded-full text-xs border border-neutral-800 bg-neutral-900/80 backdrop-blur">
              {{ labelsResolved.after }}
            </span>
          </slot>
        </div>
      </div>

      <!-- HANDLE -->
      <div
        v-if="!loading && hasImages"
        class="absolute inset-y-0"
        :style="{ left: clipWidth + '%' }"
      >
        <!-- Ligne -->
        <div class="absolute inset-y-0 -translate-x-1/2 w-px bg-white/40"></div>

        <!-- Poignée -->
        <button
          ref="handleRef"
          type="button"
          class="group absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full border border-white/60 bg-white/90 text-neutral-900 shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          :aria-label="ariaHandle"
          role="slider"
          :aria-valuenow="position"
          :aria-valuemin="min"
          :aria-valuemax="max"
          :disabled="disabled"
          @pointerdown="onPointerDown"
          @keydown.left.prevent="nudge(-step)"
          @keydown.right.prevent="nudge(step)"
          @keydown.home.prevent="setPosition(min)"
          @keydown.end.prevent="setPosition(max)"
          @keydown.esc.prevent="center()"
          @dblclick="toggleEdge()"
        >
          <!-- icône double chevrons -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto opacity-90 group-active:opacity-100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.5 6l-6 6 6 6V6zm3 0v12l6-6-6-6z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Footer slot (légendes, notes) -->
    <div class="mt-3 text-xs opacity-70">
      <slot name="footer">
        <template v-if="notesResolved.length">
          <p v-for="(n, i) in notesResolved" :key="'n'+i">{{ n }}</p>
        </template>
      </slot>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  /** Images */
  beforeSrc: { type: String, default: '' },
  afterSrc: { type: String, default: '' },
  beforeAlt: { type: String, default: '' },
  afterAlt: { type: String, default: '' },

  /** Position du handle (0..100) — v-model */
  modelValue: { type: Number, default: undefined },
  /** Position initiale si pas de v-model */
  initial: { type: Number, default: 50 },
  /** Contraintes slider */
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 5 },

  /** États */
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },

  /** Labels i18n overrides */
  labels: { type: Object, default: () => ({}) },

  /** Accessibilité */
  ariaLabel: { type: String, default: '' },
  ariaHandleLabel: { type: String, default: '' },

  /** Mise en page */
  aspect: { type: String, default: '16/9' }, // ex: '4/3', '1/1'
  eager: { type: Boolean, default: false } // eager->loading=auto sinon lazy
})

const emit = defineEmits(['update:modelValue', 'change'])

const { t } = useI18n()

// ------------------------------------
// images présentes ?
const hasImages = computed(() => !!props.beforeSrc && !!props.afterSrc)
const imgLoadingAttr = computed(() => (props.eager ? 'eager' : 'lazy'))

// ------------------------------------
// labels (i18n + overrides)
const labelsResolved = computed(() => {
  const before = props.labels.before || t('home.beforeAfter.labels.before', 'Avant')
  const after  = props.labels.after  || t('home.beforeAfter.labels.after',  'Après')
  return { before, after }
})

const notesResolved = computed(() => {
  const raw = (/** @type {any} */ (t('home.beforeAfter.notes')))
  return Array.isArray(raw) ? raw : []
})

const aria = computed(() =>
  props.ariaLabel || t('home.beforeAfter.title', 'Avant / Après')
)
const ariaHandle = computed(() =>
  props.ariaHandleLabel || t('home.beforeAfter.handle', 'Poignée de comparaison')
)

const beforeAltResolved = computed(() => props.beforeAlt || labelsResolved.value.before)
const afterAltResolved  = computed(() => props.afterAlt  || labelsResolved.value.after)

// ------------------------------------
// position (v-model ou interne)
const internal = ref(Number.isFinite(props.modelValue) ? props.modelValue : clamp(props.initial))
const position = computed({
  get: () => (Number.isFinite(props.modelValue) ? props.modelValue : internal.value),
  set: (val) => {
    const v = clamp(val)
    if (Number.isFinite(props.modelValue)) {
      emit('update:modelValue', v)
    } else {
      internal.value = v
      emit('update:modelValue', v) // permet d'écouter quand même
    }
  }
})
const clipWidth = computed(() => clamp(position.value))

watch(() => props.modelValue, (nv) => {
  if (Number.isFinite(nv)) internal.value = clamp(nv)
})

// ------------------------------------
// wrapper size pour pointer -> %
const wrapperRef = ref(null)
const handleRef = ref(null)
let dragging = false

const onPointerDown = (e) => {
  if (props.disabled) return
  dragging = true
  try { e.target.setPointerCapture?.(e.pointerId) } catch {}
  moveFromEvent(e)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}

const onPointerMove = (e) => {
  if (!dragging) return
  moveFromEvent(e)
}

const onPointerUp = (e) => {
  dragging = false
  try { e.target.releasePointerCapture?.(e.pointerId) } catch {}
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
  emit('change', position.value)
}

function moveFromEvent(e) {
  const el = wrapperRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const pct = (x / rect.width) * 100
  position.value = clamp(pct)
}

// ------------------------------------
// helpers clavier
function nudge(delta) {
  position.value = clamp(position.value + delta)
  emit('change', position.value)
}
function center() {
  position.value = clamp(50)
  emit('change', position.value)
}
function setPosition(val) {
  position.value = clamp(val)
  emit('change', position.value)
}
function toggleEdge() {
  position.value = position.value > 50 ? props.min : props.max
  emit('change', position.value)
}

// ------------------------------------
// styles
const wrapperStyle = computed(() => ({ aspectRatio: props.aspect }))

// ------------------------------------
onMounted(() => {
  const el = wrapperRef.value
  if (!el) return
  el.addEventListener('pointerdown', (e) => {
    if (e.target === handleRef.value) return
    onPointerDown(e)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
})

// ------------------------------------
function clamp(v) {
  const lo = Number.isFinite(props.min) ? props.min : 0
  const hi = Number.isFinite(props.max) ? props.max : 100
  const n = Math.max(lo, Math.min(hi, +v))
  const s = props.step > 0 ? props.step : 1
  return Math.round(n / s) * s
}
</script>

<style scoped>
/* Accent du handle au focus clavier */
:focus-visible { outline: none; }
</style>

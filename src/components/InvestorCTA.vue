<template>
  <section class="max-w-6xl mx-auto p-6">
    <div
      class="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      role="region"
      :aria-label="aria"
    >
      <!-- Zone gauche -->
      <div class="flex-1 space-y-2">
        <!-- slot prefix (logos/labels) -->
        <slot name="prefix" />

        <h3 class="text-lg md:text-xl font-semibold">
          {{ resolvedTitle }}
        </h3>
        <p v-if="resolvedSubtitle" class="opacity-80">
          {{ resolvedSubtitle }}
        </p>

        <!-- slot suffix (petites mentions, garanties) -->
        <slot name="suffix" />
      </div>

      <!-- Actions droite -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
        <!-- CTA primaire -->
        <component
          :is="primaryIsExternal ? 'a' : 'RouterLink'"
          :to="!primaryIsExternal ? primaryTo : undefined"
          :href="primaryIsExternal ? primaryHref : undefined"
          :target="primaryIsExternal ? '_blank' : undefined"
          rel="noopener"
          class="px-4 py-2 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 text-center"
          :class="[
            variant === 'outline'
              ? 'border border-emerald-500/70 text-emerald-300 hover:bg-neutral-800'
              : 'bg-emerald-500/90 hover:bg-emerald-400 text-neutral-900',
            disabled ? 'pointer-events-none opacity-60' : ''
          ]"
          :aria-busy="loading ? 'true' : 'false'"
          :aria-disabled="disabled ? 'true' : 'false'"
        >
          <span v-if="loading" class="inline-flex items-center gap-2">
            <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10" class="opacity-30"/><path d="M12 2a10 10 0 0 1 10 10h-2A8 8 0 0 0 12 4V2z"/></svg>
            {{ primaryLabel }}
          </span>
          <span v-else>{{ primaryLabel }}</span>
        </component>

        <!-- CTA secondaire -->
        <component
          :is="secondaryIsExternal ? 'a' : 'RouterLink'"
          :to="!secondaryIsExternal ? secondaryTo : undefined"
          :href="secondaryIsExternal ? secondaryHref : undefined"
          :target="secondaryIsExternal ? '_blank' : undefined"
          rel="noopener"
          class="px-4 py-2 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 text-center border border-neutral-800 bg-neutral-950 hover:bg-neutral-800"
          :class="[disabled ? 'pointer-events-none opacity-60' : '']"
          :aria-busy="loading ? 'true' : 'false'"
          :aria-disabled="disabled ? 'true' : 'false'"
        >
          {{ secondaryLabel }}
        </component>
      </div>
    </div>

    <!-- slot extra (sous la carte) -->
    <div class="px-1 pt-3">
      <slot name="extra" />
    </div>
  </section>
</template>

<script setup>
// =========================================
// InvestorCTA.vue (amélioré) — 0 régression
// =========================================
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  /** Titre & sous-titre (priment sur i18n si fournis) */
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },

  /** CTA primaire */
  primaryTo: { type: String, default: '/dataroom' },
  primaryHref: { type: String, default: '' }, // externe si défini
  primaryLabel: { type: String, default: '' },

  /** CTA secondaire */
  secondaryTo: { type: String, default: '/contact' },
  secondaryHref: { type: String, default: '' },
  secondaryLabel: { type: String, default: '' },

  /** Apparence & états */
  variant: { type: String, default: 'solid' }, // 'solid' | 'outline'
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },

  /** Accessibilité */
  ariaLabel: { type: String, default: '' }
})

const { t } = useI18n()

const aria = computed(() =>
  props.ariaLabel || t('invest.title', 'Opportunité d’investissement')
)

const resolvedTitle = computed(() =>
  props.title || t('invest.title', 'Opportunité d’investissement')
)
const resolvedSubtitle = computed(() =>
  props.subtitle || t('invest.pitch', '')
)

// labels i18n (sans modifier les clés existantes)
const resolvedPrimaryLabel = computed(() => {
  if (props.primaryLabel) return props.primaryLabel
  // dataroom.open est présent dans ton i18n, conservé
  return t('dataroom.open', 'Espace documentaire')
})

const resolvedSecondaryLabel = computed(() => {
  if (props.secondaryLabel) return props.secondaryLabel
  return t('nav.contact', 'Contact')
})

// expose pour le template (évite l’ombre avec props du même nom)
const primaryLabel = resolvedPrimaryLabel
const secondaryLabel = resolvedSecondaryLabel

// internes/externe ?
const primaryIsExternal = computed(() => !!props.primaryHref && !props.primaryTo)
const secondaryIsExternal = computed(() => !!props.secondaryHref && !props.secondaryTo)
</script>

<style scoped>
:focus-visible { outline: none; }
</style>

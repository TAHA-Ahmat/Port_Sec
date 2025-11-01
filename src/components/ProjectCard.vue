<template>
  <section
    class="max-w-6xl mx-auto p-6 space-y-6"
    role="region"
    :aria-label="aria"
  >
    <!-- Header -->
    <header class="flex items-center gap-2 text-sm opacity-80">
      <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
      <h2 class="font-semibold">{{ resolvedTitle }}</h2>
    </header>

    <!-- Grid de cartes projets -->
    <div
      class="grid gap-6"
      :class="gridClass"
      role="list"
    >
      <article
        v-for="(project, i) in resolvedProjects"
        :key="i + ':' + project.name"
        class="project-card hoverable group rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-emerald-700/40 focus-within:ring-2 focus-within:ring-emerald-500 relative"
        role="listitem"
        tabindex="0"
        @click="createRipple"
      >
        <!-- Image (si disponible) -->
        <div
          v-if="project.image"
          class="aspect-video overflow-hidden bg-neutral-800"
        >
          <img
            :src="project.image"
            :alt="project.name"
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Placeholder si pas d'image -->
        <div
          v-else
          class="aspect-video bg-gradient-to-br from-neutral-800 via-neutral-850 to-neutral-900 flex items-center justify-center"
          aria-hidden="true"
        >
          <span class="text-5xl opacity-30">🏗️</span>
        </div>

        <!-- Contenu -->
        <div class="p-4 space-y-3">
          <!-- Titre + badge statut -->
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-semibold flex-1">{{ project.name }}</h3>
            <span
              v-if="project.status"
              class="shrink-0 px-2 py-1 rounded-full text-xs border"
              :class="statusClass(project.status)"
            >
              {{ project.status }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-sm opacity-80">{{ project.description }}</p>

          <!-- CTA -->
          <div class="pt-2">
            <component
              :is="project.link && project.link.startsWith('http') ? 'a' : 'RouterLink'"
              v-if="project.link"
              :to="!project.link.startsWith('http') ? project.link : undefined"
              :href="project.link.startsWith('http') ? project.link : undefined"
              :target="project.link.startsWith('http') ? '_blank' : undefined"
              rel="noopener"
              class="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            >
              <span>{{ ctaLabel }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </component>
            <span
              v-else
              class="inline-block text-xs opacity-50"
            >
              {{ t('projects.comingSoon', 'À venir') }}
            </span>
          </div>
        </div>
      </article>
    </div>

    <!-- Footer slot -->
    <div>
      <slot name="footer" />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  /** Projects : tableau d'objets { name, description, status, link, image } */
  projects: { type: Array, default: null },

  /** Titre de la section */
  title: { type: String, default: '' },

  /** Nombre de colonnes (2-4) */
  columns: { type: Number, default: 4 },

  /** Label CTA */
  ctaLabel: { type: String, default: '' },

  /** Accessibilité */
  ariaLabel: { type: String, default: '' }
})

const { t, tm } = useI18n()

// Accessibilité
const aria = computed(() =>
  props.ariaLabel || t('projects.title', 'Nos Projets')
)

// Titre
const resolvedTitle = computed(() =>
  props.title || t('projects.title', 'Nos Projets')
)

// Label CTA
const ctaLabel = computed(() =>
  props.ctaLabel || t('projects.discover', 'Découvrir le projet')
)

// Projects depuis i18n ou props
const resolvedProjects = computed(() => {
  if (Array.isArray(props.projects) && props.projects.length) return props.projects

  const items = tm('projects.items')
  if (Array.isArray(items) && items.length) return items

  // Fallback
  return []
})

// Grille responsive
const gridClass = computed(() => {
  const c = Math.min(4, Math.max(2, +props.columns || 4))
  const map = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }
  return map[c] || map[4]
})

// Classes de statut
const statusClass = (status) => {
  const s = status?.toLowerCase() || ''
  if (s.includes('cours') || s.includes('progress')) {
    return 'bg-emerald-900/30 text-emerald-300 border-emerald-700/50'
  }
  if (s.includes('prépara') || s.includes('preparation')) {
    return 'bg-yellow-900/30 text-yellow-300 border-yellow-700/50'
  }
  if (s.includes('étude') || s.includes('study')) {
    return 'bg-blue-900/30 text-blue-300 border-blue-700/50'
  }
  return 'bg-neutral-800 text-neutral-300 border-neutral-700'
}

// Stagger animation : générer --index CSS dynamique pour chaque carte
onMounted(() => {
  const cards = document.querySelectorAll('.project-card')
  cards.forEach((card, i) => {
    card.style.setProperty('--index', i + 1)
  })
})

// Ripple Effect au clic
const createRipple = (event) => {
  const card = event.currentTarget
  const ripple = document.createElement('span')

  const rect = card.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2

  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`
  ripple.classList.add('ripple')

  card.appendChild(ripple)

  // Supprimer après animation
  setTimeout(() => {
    ripple.remove()
  }, 600)
}
</script>

<style scoped>
:focus-visible {
  outline: none;
}

/* ===== Animation Stagger - Cascade reveal ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card {
  opacity: 0;
  animation: fadeInUp 0.6s var(--ease-standard) forwards;
  animation-delay: calc(var(--index, 1) * 0.15s);
}

/* Effet hover carte - pas de conflit avec .hoverable */
.group:hover img {
  /* Déjà géré par transition-transform dans le template */
}

/* ===== Ripple Effect ===== */
.ripple {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0) 70%);
  transform: scale(0);
  animation: ripple-animation 0.6s ease-out;
  pointer-events: none;
  z-index: 10;
}

@keyframes ripple-animation {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>

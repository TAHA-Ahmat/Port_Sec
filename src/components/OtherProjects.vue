<template>
  <section class="space-y-4">
    <!-- Titre section -->
    <header class="flex items-center gap-2 text-sm opacity-80">
      <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
      <h2 class="font-semibold">{{ t('otherProjects.title', 'Autres projets GPM') }}</h2>
    </header>

    <!-- Grid 2 projets -->
    <div class="grid md:grid-cols-2 gap-4">
      <RouterLink
        v-for="project in otherProjects"
        :key="project.id"
        :to="project.link"
        class="group rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1"
      >
        <!-- Badge statut -->
        <div class="inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs mb-3" :class="project.badgeClass">
          <span class="inline-block h-2 w-2 rounded-full" :class="project.dotClass"></span>
          <span class="font-medium" :class="project.textClass">{{ project.status }}</span>
        </div>

        <!-- Titre -->
        <h3 class="text-lg font-bold mb-2 group-hover:text-emerald-300 transition-colors">
          {{ project.title }}
        </h3>

        <!-- Description courte -->
        <p class="text-sm text-neutral-400 mb-4 line-clamp-2">
          {{ project.description }}
        </p>

        <!-- CTA -->
        <div class="flex items-center gap-2 text-sm text-emerald-400 font-medium">
          <span>{{ project.cta }}</span>
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  currentProject: {
    type: String,
    required: true,
    validator: (value) => ['douala', 'kribi', 'ngaoundere'].includes(value)
  }
})

// Tous les projets
const allProjects = [
  {
    id: 'douala',
    title: 'Port Sec du Tchad à Douala',
    description: 'Premier port sec opérationnel du réseau GPM, connectant le Tchad au Port de Douala via un corridor logistique sécurisé.',
    status: 'EN COURS',
    link: '/projects/douala',
    cta: 'Voir détails',
    badgeClass: 'bg-emerald-950/30 border border-emerald-700/40',
    dotClass: 'bg-emerald-500',
    textClass: 'text-emerald-400'
  },
  {
    id: 'kribi',
    title: 'Port Sec de Kribi',
    description: 'Extension stratégique du réseau GPM, créant un hub logistique connecté au Port en Eau Profonde de Kribi.',
    status: 'EN PRÉPARATION',
    link: '/projects/kribi',
    cta: 'En savoir plus',
    badgeClass: 'bg-amber-950/30 border border-amber-700/40',
    dotClass: 'bg-amber-500',
    textClass: 'text-amber-400'
  },
  {
    id: 'ngaoundere',
    title: 'Port Sec de Ngaoundéré',
    description: 'Hub multimodal stratégique au carrefour ferroviaire et routier, porte d\'entrée du Tchad depuis le Cameroun.',
    status: 'EN ÉTUDE',
    link: '/projects/ngaoundere',
    cta: 'En savoir plus',
    badgeClass: 'bg-blue-950/30 border border-blue-700/40',
    dotClass: 'bg-blue-500',
    textClass: 'text-blue-400'
  }
]

// Filtrer pour exclure le projet actuel
const otherProjects = computed(() => {
  return allProjects.filter(project => project.id !== props.currentProject)
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<template>
  <!-- Watermarks institutionnels -->
  <WatermarkSeals />

  <section class="max-w-3xl mx-auto p-6 space-y-8 relative z-10">
    <header class="space-y-2 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <span>{{ t('nav.contact') }}</span>
      </div>
      <h1 class="text-2xl md:text-3xl font-bold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
          {{ t('nav.contact') }}
        </span>
      </h1>
      <p class="opacity-80">Échangeons sur le projet ou l'accès à l'espace documentaire.</p>
    </header>

    <!-- Message de succès -->
    <div v-if="formState === 'success'" class="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
      <div class="flex items-center gap-2 font-semibold mb-1">
        <span class="text-xl">✓</span>
        Message envoyé avec succès !
      </div>
      <p class="text-sm opacity-90">Nous vous répondrons sous 48h ouvrées.</p>
    </div>

    <!-- Message d'erreur -->
    <div v-if="formState === 'error'" class="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
      <div class="flex items-center gap-2 font-semibold mb-1">
        <span class="text-xl">✕</span>
        Erreur lors de l'envoi
      </div>
      <p class="text-sm opacity-90">{{ errorMessage }}</p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Nom -->
      <div>
        <input
          v-model="formData.name"
          type="text"
          class="w-full px-4 py-3 rounded-lg bg-neutral-900 border transition"
          :class="errors.name ? 'border-red-500' : 'border-neutral-800'"
          placeholder="Nom complet *"
          @blur="validateField('name')"
        />
        <p v-if="errors.name" class="mt-1 text-sm text-red-400">{{ errors.name }}</p>
      </div>

      <!-- Email -->
      <div>
        <input
          v-model="formData.email"
          type="email"
          class="w-full px-4 py-3 rounded-lg bg-neutral-900 border transition"
          :class="errors.email ? 'border-red-500' : 'border-neutral-800'"
          placeholder="Email professionnel *"
          @blur="validateField('email')"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email }}</p>
      </div>

      <!-- Message -->
      <div>
        <textarea
          v-model="formData.message"
          class="w-full px-4 py-3 rounded-lg bg-neutral-900 border transition"
          :class="errors.message ? 'border-red-500' : 'border-neutral-800'"
          rows="5"
          placeholder="Votre message (contexte, questions…) *"
          @blur="validateField('message')"
        ></textarea>
        <p v-if="errors.message" class="mt-1 text-sm text-red-400">{{ errors.message }}</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          :disabled="isSubmitting || formState === 'success'"
          class="px-5 py-3 rounded bg-emerald-500 text-black font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          :class="isSubmitting ? 'opacity-70' : 'hover:scale-[1.02]'"
        >
          <span v-if="isSubmitting">Envoi en cours...</span>
          <span v-else>Envoyer</span>
        </button>
        <RouterLink
          to="/dataroom"
          class="px-5 py-3 rounded border border-neutral-700 font-semibold hover:bg-neutral-800 transition text-center"
        >
          Demander l'accès à l'espace documentaire
        </RouterLink>
      </div>

      <p class="text-xs opacity-60">* Champs obligatoires</p>
    </form>

    <div class="text-sm opacity-70 text-center pt-8 border-t border-neutral-800">
      <div class="font-semibold">{{ t('footer.contact.title') }}</div>
      <div>{{ t('footer.contact.addr') }}</div>
      <div class="mt-1">Réponse sous 48h ouvrées.</div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import * as yup from 'yup'
import WatermarkSeals from '../components/WatermarkSeals.vue'

const { t } = useI18n()

// État du formulaire
const formState = ref('idle') // 'idle' | 'success' | 'error'
const isSubmitting = ref(false)
const errorMessage = ref('')

// Données du formulaire
const formData = reactive({
  name: '',
  email: '',
  message: ''
})

// Erreurs de validation
const errors = reactive({
  name: '',
  email: '',
  message: ''
})

// Schéma de validation Yup
const validationSchema = yup.object({
  name: yup
    .string()
    .required('Le nom est requis')
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom est trop long'),
  email: yup
    .string()
    .required('L\'email est requis')
    .email('L\'email n\'est pas valide'),
  message: yup
    .string()
    .required('Le message est requis')
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(2000, 'Le message est trop long (max 2000 caractères)')
})

// Valider un champ individuel
const validateField = async (fieldName) => {
  try {
    await validationSchema.validateAt(fieldName, formData)
    errors[fieldName] = ''
  } catch (error) {
    errors[fieldName] = error.message
  }
}

// Valider tout le formulaire
const validateForm = async () => {
  try {
    await validationSchema.validate(formData, { abortEarly: false })
    // Réinitialiser toutes les erreurs
    errors.name = ''
    errors.email = ''
    errors.message = ''
    return true
  } catch (err) {
    // Afficher toutes les erreurs
    err.inner.forEach((error) => {
      errors[error.path] = error.message
    })
    return false
  }
}

// Soumettre le formulaire
const handleSubmit = async () => {
  // Réinitialiser l'état
  formState.value = 'idle'
  errorMessage.value = ''

  // Valider le formulaire
  const isValid = await validateForm()
  if (!isValid) {
    return
  }

  // Simuler l'envoi (à remplacer par un vrai backend)
  isSubmitting.value = true

  try {
    // Importer dynamiquement le service
    const { submitContactForm } = await import('../services/contactService.js')

    // Envoyer via Netlify Forms (ou API si configurée)
    await submitContactForm({
      name: formData.name,
      email: formData.email,
      message: formData.message
    })

    // Succès
    formState.value = 'success'

    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      formData.name = ''
      formData.email = ''
      formData.message = ''
      formState.value = 'idle'
    }, 3000)

  } catch (error) {
    // Erreur
    formState.value = 'error'
    errorMessage.value = error.message || 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
    console.error('Erreur envoi formulaire:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

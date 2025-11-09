<template>
  <!-- Watermarks institutionnels -->
  <WatermarkSeals />

  <section class="max-w-6xl mx-auto p-6 space-y-12 relative z-10 dataroom-container">
    <!-- =========================
         1) En-tête
    ========================== -->
    <header class="space-y-2 text-left animate-fade-in">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80 hover:border-emerald-700/60 hover:bg-neutral-800 transition-all duration-300">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400 pulse-dot"></span>
        <span>{{ t('nav.dataroom') || 'Espace documentaire' }}</span>
      </div>

      <h1 class="text-2xl md:text-3xl font-bold leading-tight animate-slide-up">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300 animate-gradient">
          {{ t('invest.title') || 'Opportunité d\'investissement' }}
        </span>
      </h1>

      <p class="opacity-80 max-w-3xl animate-slide-up animation-delay-100">
        {{ t('invest.pitch') || 'Un actif logistique stratégique au PAD (Douala), au service des flux Tchad–CEMAC.' }}
      </p>
    </header>

    <!-- =========================
         FORMULAIRE D'ACCÈS - PRIORITÉ #1
    ========================== -->
    <section id="dataroom" aria-label="Demande d'accès espace documentaire" class="space-y-8 border-t border-emerald-800/30 pt-12 animate-slide-up animation-delay-200">
      <header class="space-y-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80 hover:border-emerald-700/60 hover:bg-neutral-800 transition-all duration-300">
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400 pulse-dot"></span>
          <span>Formulaire d'accès</span>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300 animate-gradient">
            Demander l'accès aux documents
          </span>
        </h2>
        <p class="opacity-80 max-w-3xl">Remplissez le formulaire ci-dessous pour recevoir un accès sécurisé aux documents après validation.</p>
      </header>

      <!-- Message de succès -->
      <Transition name="success-slide">
        <div v-if="formState === 'success'" class="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 success-message">
          <div class="flex items-center gap-3 font-semibold mb-2 text-lg">
            <span class="text-2xl success-icon">✓</span>
            Demande envoyée avec succès !
          </div>
          <p class="opacity-90">
            Nous allons examiner votre demande et vous enverrons les accès à l'espace documentaire sous 48h ouvrées.
          </p>
        </div>
      </Transition>

      <!-- Message d'erreur -->
      <Transition name="error-shake">
        <div v-if="formState === 'error'" class="p-6 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 error-message">
          <div class="flex items-center gap-3 font-semibold mb-2">
            <span class="text-xl error-icon">✕</span>
            Erreur lors de l'envoi
          </div>
          <p class="opacity-90">{{ errorMessage }}</p>
        </div>
      </Transition>

      <!-- Formulaire de demande d'accès -->
      <div v-if="formState !== 'success'" class="space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-xl md:text-2xl font-bold">Formulaire de demande d'accès</h3>
          <span class="text-xs opacity-60">* Champs obligatoires</span>
        </div>

        <!-- Form wrapper avec design moderne -->
        <div class="relative rounded-2xl border border-emerald-800/40 bg-gradient-to-br from-emerald-900/10 via-neutral-900 to-neutral-950 p-6 md:p-8 overflow-hidden form-premium">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none glow-effect"></div>
          <div class="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl floating-orb"></div>

          <form @submit.prevent="handleSubmit" class="space-y-6 relative z-10">
          <!-- Nom et Prénom -->
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-2 opacity-80">Prénom *</label>
              <input
                v-model="formData.firstName"
                type="text"
                class="form-input"
                :class="errors.firstName ? 'border-red-500' : ''"
                placeholder="Votre prénom"
                @blur="validateField('firstName')"
              />
              <p v-if="errors.firstName" class="mt-1 text-sm text-red-400">{{ errors.firstName }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 opacity-80">Nom *</label>
              <input
                v-model="formData.lastName"
                type="text"
                class="form-input"
                :class="errors.lastName ? 'border-red-500' : ''"
                placeholder="Votre nom"
                @blur="validateField('lastName')"
              />
              <p v-if="errors.lastName" class="mt-1 text-sm text-red-400">{{ errors.lastName }}</p>
            </div>
          </div>

          <!-- Email et Téléphone -->
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-2 opacity-80">Email professionnel *</label>
              <input
                v-model="formData.email"
                type="email"
                class="form-input"
                :class="errors.email ? 'border-red-500' : ''"
                placeholder="email@entreprise.com"
                @blur="validateField('email')"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 opacity-80">Téléphone *</label>
              <input
                v-model="formData.phone"
                type="tel"
                class="form-input"
                :class="errors.phone ? 'border-red-500' : ''"
                placeholder="+XXX XX XX XX XX"
                @blur="validateField('phone')"
              />
              <p v-if="errors.phone" class="mt-1 text-sm text-red-400">{{ errors.phone }}</p>
            </div>
          </div>

          <!-- Société et Fonction -->
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-2 opacity-80">Société / Organisation *</label>
              <input
                v-model="formData.company"
                type="text"
                class="form-input"
                :class="errors.company ? 'border-red-500' : ''"
                placeholder="Nom de votre société"
                @blur="validateField('company')"
              />
              <p v-if="errors.company" class="mt-1 text-sm text-red-400">{{ errors.company }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 opacity-80">Fonction *</label>
              <input
                v-model="formData.position"
                type="text"
                class="form-input"
                :class="errors.position ? 'border-red-500' : ''"
                placeholder="Ex: Directeur Investissements"
                @blur="validateField('position')"
              />
              <p v-if="errors.position" class="mt-1 text-sm text-red-400">{{ errors.position }}</p>
            </div>
          </div>

          <!-- Type d'investisseur -->
          <div>
            <label class="block text-sm font-medium mb-2 opacity-80">Type d'investisseur *</label>
            <select
              v-model="formData.investorType"
              class="form-input"
              :class="errors.investorType ? 'border-red-500' : ''"
              @blur="validateField('investorType')"
            >
              <option value="">Sélectionnez un type</option>
              <option value="institutional">Investisseur institutionnel</option>
              <option value="private_equity">Fonds de Private Equity</option>
              <option value="family_office">Family Office</option>
              <option value="corporate">Entreprise / Corporate</option>
              <option value="government">Institution publique / Gouvernementale</option>
              <option value="other">Autre</option>
            </select>
            <p v-if="errors.investorType" class="mt-1 text-sm text-red-400">{{ errors.investorType }}</p>
          </div>

          <!-- Message / Motivation -->
          <div>
            <label class="block text-sm font-medium mb-2 opacity-80">Motivation / Message</label>
            <textarea
              v-model="formData.message"
              class="form-input"
              rows="4"
              placeholder="Décrivez brièvement votre intérêt pour le projet (optionnel)"
            ></textarea>
          </div>

          <!-- Bouton d'envoi -->
          <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20 btn-submit-premium"
              :class="isSubmitting ? 'opacity-70 scale-95' : 'hover:scale-[1.02] hover:shadow-emerald-500/40 hover:shadow-2xl'"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </span>
              <span v-else class="flex items-center justify-center gap-2">
                Envoyer ma demande
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <RouterLink
              to="/contact"
              class="px-6 py-3 rounded-lg border border-neutral-700 font-semibold hover:bg-neutral-800 hover:border-emerald-700/40 transition-all duration-300 text-center group hover:scale-[1.01]"
            >
              Nous contacter directement
            </RouterLink>
          </div>
        </form>
        </div>
      </div>

      <!-- Règles -->
      <div class="space-y-3 p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-emerald-700/40 hover:bg-neutral-800/70 transition-all duration-300">
        <h3 class="text-lg font-bold flex items-center gap-2">
          <span class="text-xl">📋</span>
          Règles d'utilisation
        </h3>
        <ul class="space-y-2 opacity-80 text-sm">
          <li class="flex items-start gap-2 hover:opacity-100 transition-opacity">
            <span class="text-emerald-400 mt-0.5">✓</span>
            <span>Accès accordé uniquement après validation de votre profil</span>
          </li>
          <li class="flex items-start gap-2 hover:opacity-100 transition-opacity">
            <span class="text-emerald-400 mt-0.5">✓</span>
            <span>Documents en lecture seule, protégés par mot de passe</span>
          </li>
          <li class="flex items-start gap-2 hover:opacity-100 transition-opacity">
            <span class="text-emerald-400 mt-0.5">✓</span>
            <span>Accord de confidentialité (NDA) requis pour certains documents sensibles</span>
          </li>
          <li class="flex items-start gap-2 hover:opacity-100 transition-opacity">
            <span class="text-emerald-400 mt-0.5">✓</span>
            <span>Usage strictement limité à l'évaluation du projet d'investissement</span>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import * as yup from 'yup'

import WatermarkSeals from '../components/WatermarkSeals.vue'

const { t, tm } = useI18n()


// État du formulaire
const formState = ref('idle')
const isSubmitting = ref(false)
const errorMessage = ref('')

// Données du formulaire
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  position: '',
  investorType: '',
  message: ''
})

// Erreurs de validation
const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  position: '',
  investorType: ''
})

// Schéma de validation
const validationSchema = yup.object({
  firstName: yup.string().required('Le prénom est requis').min(2, 'Trop court'),
  lastName: yup.string().required('Le nom est requis').min(2, 'Trop court'),
  email: yup.string().required('L\'email est requis').email('Email invalide'),
  phone: yup.string().required('Le téléphone est requis').min(8, 'Numéro invalide'),
  company: yup.string().required('La société est requise').min(2, 'Trop court'),
  position: yup.string().required('La fonction est requise').min(2, 'Trop court'),
  investorType: yup.string().required('Le type d\'investisseur est requis')
})

// Valider un champ
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
    Object.keys(errors).forEach(key => errors[key] = '')
    return true
  } catch (err) {
    err.inner.forEach(error => {
      errors[error.path] = error.message
    })
    return false
  }
}

// Soumettre le formulaire
const handleSubmit = async () => {
  formState.value = 'idle'
  errorMessage.value = ''

  const isValid = await validateForm()
  if (!isValid) return

  isSubmitting.value = true

  try {
    // Envoi via Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '5e272f01-90e0-4d25-82d3-c68fa0d54f18',
        subject: 'Demande accès DataRoom',
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: 'contact@gpmtchad.com',
        replyto: formData.email,
        message: `
DEMANDE ACCÈS DATAROOM

Nom: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Téléphone: ${formData.phone}
Société: ${formData.company}
Fonction: ${formData.position}
Type: ${formData.investorType}

${formData.message ? `Message:\n${formData.message}\n` : ''}
Date: ${new Date().toLocaleDateString('fr-FR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
})}
        `.trim()
      })
    })

    const result = await response.json()

    if (result.success) {
      formState.value = 'success'

      // Réinitialiser après 5 secondes
      setTimeout(() => {
        Object.keys(formData).forEach(key => formData[key] = '')
        formState.value = 'idle'
      }, 5000)
    } else {
      throw new Error('Erreur lors de l\'envoi du formulaire')
    }

  } catch (error) {
    formState.value = 'error'
    errorMessage.value = error.message || 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* ========================================
   ANIMATIONS & KEYFRAMES
======================================== */

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide up animation */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient animation */
@keyframes gradientFlow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Pulse dot */
@keyframes pulseDot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

/* Floating orb */
@keyframes floatingOrb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.1;
  }
  50% {
    transform: translate(20px, -20px) scale(1.1);
    opacity: 0.15;
  }
}

/* Glow pulse */
@keyframes glowPulse {
  0%, 100% {
    opacity: 0.05;
  }
  50% {
    opacity: 0.15;
  }
}

/* Success icon pop */
@keyframes successPop {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Error shake */
@keyframes errorShake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  75% {
    transform: translateX(10px);
  }
}

/* Apply animations */
.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientFlow 8s ease infinite;
}

.pulse-dot {
  animation: pulseDot 2s ease-in-out infinite;
}

.floating-orb {
  animation: floatingOrb 8s ease-in-out infinite;
}

.glow-effect {
  animation: glowPulse 4s ease-in-out infinite;
}

/* Animation delays */
.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

/* Success/Error Transitions */
.success-slide-enter-active {
  animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.success-slide-leave-active {
  animation: fadeIn 0.3s reverse;
}

.error-shake-enter-active {
  animation: errorShake 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.error-shake-leave-active {
  animation: fadeIn 0.3s reverse;
}

.success-icon {
  display: inline-block;
  animation: successPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.error-icon {
  display: inline-block;
  animation: errorShake 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.success-message,
.error-message {
  box-shadow: 0 10px 40px -10px currentColor;
}

/* ========================================
   FORM PREMIUM EFFECTS
======================================== */

.form-premium {
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-premium:hover {
  border-color: rgba(52, 211, 153, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 20px 60px -20px rgba(52, 211, 153, 0.3);
}

/* ========================================
   BUTTON PREMIUM EFFECTS
======================================== */

.btn-submit-premium {
  position: relative;
  overflow: hidden;
}

.btn-submit-premium::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-submit-premium:hover::before {
  width: 300px;
  height: 300px;
}

.btn-submit-premium:active {
  transform: scale(0.98);
}

/* ========================================
   CARD EFFECTS
======================================== */

.doc-card {
  position: relative;
  overflow: hidden;
}

.doc-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.1), transparent);
  transition: left 0.5s;
}

.doc-card:hover::before {
  left: 100%;
}

.doc-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px -10px rgba(52, 211, 153, 0.3);
}

/* ========================================
   CONTAINER PARALLAX
======================================== */

.dataroom-container {
  perspective: 1000px;
}

/* ========================================
   ENTÊTES HOMOGÈNES
======================================== */
.section-head {
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* 2 */
}
@media (min-width: 768px) {
  .section-head {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  opacity: 0.8;
  font-size: .95rem;
}
.section-legend {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  font-size: .8rem;
  opacity: .6;
}
.dot {
  display: inline-block;
  height: 0.5rem; /* 2 */
  width: 0.5rem;  /* 2 */
  border-radius: 9999px;
  background-color: rgb(52 211 153); /* emerald-400 */
}

/* Cartes & KPI */
.card {
  border-radius: 1rem;         /* rounded-2xl */
  border: 1px solid rgb(38 38 38); /* border-neutral-800 */
  background-color: rgb(23 23 23); /* bg-neutral-900 */
  padding: 1rem;               /* p-4 */
}
.kpi-label {
  font-size: .75rem;           /* text-xs */
  opacity: .6;
}
.kpi-value {
  margin-top: .25rem;
  font-size: 1.25rem;          /* text-xl */
  font-weight: 600;
  background-image: linear-gradient(to right, #6ee7b7, #ffffff, #6ee7b7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Boutons */
.btn-primary {
  padding: .5rem .75rem;       /* px-3 py-2 */
  border-radius: .5rem;        /* rounded-lg */
  background-color: rgb(5 150 105);  /* emerald-600 */
  color: rgb(23 23 23);        /* text-neutral-900 */
  font-weight: 600;
  font-size: .875rem;          /* text-sm */
  transition: background-color .15s ease-in-out;
}
.btn-primary:hover {
  background-color: rgb(16 185 129); /* emerald-500 */
}
.btn-secondary {
  padding: .5rem .75rem;       /* px-3 py-2 */
  border-radius: .5rem;        /* rounded-lg */
  border: 1px solid rgb(38 38 38);   /* border-neutral-800 */
  background-color: rgb(23 23 23);   /* bg-neutral-900 */
  font-size: .875rem;          /* text-sm */
  transition: background-color .15s ease-in-out;
}
.btn-secondary:hover {
  background-color: rgb(38 38 38);   /* bg-neutral-800 */
}

/* Grilles : même hauteur par rang */
.auto-rows-\[1fr\] {
  grid-auto-rows: 1fr;
}

/* Style du formulaire */
.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: rgb(23 23 23);
  border: 1px solid rgb(38 38 38);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
  position: relative;
}

.form-input:focus {
  outline: none;
  border-color: rgb(52 211 153);
  background-color: rgb(38 38 38);
  box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.1), 0 10px 30px -10px rgba(52, 211, 153, 0.2);
  transform: translateY(-2px) scale(1.005);
}

.form-input:hover:not(:focus) {
  border-color: rgb(64, 64, 64);
  background-color: rgb(30, 30, 30);
  transform: translateY(-1px);
}

.form-input::placeholder {
  color: rgb(115 115 115);
  transition: color 0.3s;
}

.form-input:focus::placeholder {
  color: rgb(140 140 140);
}

select.form-input {
  cursor: pointer;
}

textarea.form-input {
  resize: vertical;
  min-height: 120px;
}

textarea.form-input:focus {
  min-height: 150px;
}

/* ========================================
   SMOOTH SCROLL & PERFORMANCE
======================================== */

.dataroom-container {
  scroll-behavior: smooth;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ========================================
   CARD HOVER 3D EFFECT
======================================== */

.card {
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateZ(10px);
}

/* ========================================
   LOADING STATE SHIMMER
======================================== */

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.btn-submit-premium:disabled {
  background: linear-gradient(90deg, #059669 0%, #10b981 50%, #059669 100%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite linear;
}

/* ========================================
   FOCUS VISIBLE IMPROVEMENTS
======================================== */

*:focus-visible {
  outline: 2px solid rgba(52, 211, 153, 0.5);
  outline-offset: 4px;
  border-radius: 0.375rem;
}

button:focus-visible,
a:focus-visible {
  outline-color: rgba(52, 211, 153, 0.8);
}

/* Thème sombre conservé (aucune régression visuelle) */
</style>

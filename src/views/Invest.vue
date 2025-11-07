<template>
  <!-- Watermarks institutionnels -->
  <WatermarkSeals />

  <section class="max-w-6xl mx-auto p-6 space-y-12 relative z-10">
    <!-- =========================
         1) En-tête
    ========================== -->
    <header class="space-y-2 text-left">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <span>{{ t('nav.invest') || 'Investir' }}</span>
      </div>

      <h1 class="text-2xl md:text-3xl font-bold leading-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
          {{ t('invest.title') || 'Opportunité d’investissement' }}
        </span>
      </h1>

      <p class="opacity-80 max-w-3xl">
        {{ t('invest.pitch') || 'Un actif logistique stratégique au PAD (Douala), au service des flux Tchad–CEMAC.' }}
      </p>
    </header>

    <!-- =========================
         2) Capacités & ressources (Opérationnel)
    ========================== -->
    <section aria-label="Capacités et ressources" class="space-y-3">
      <h2 class="section-title">
        <span class="dot" aria-hidden="true"></span>
        {{ t('home.kpiOps.title', 'Capacités & ressources') }}
      </h2>

      <ul role="list" class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[1fr]">
        <li role="listitem" class="card h-full">
          <p class="kpi-label">{{ t('home.kpiOps.areaHa', 'Superficie (ha)') }}</p>
          <p class="kpi-value">
            {{ t('home.kpiOps.values.areaHa', t('home.kpiOps.areaHaValue', '')) }}
          </p>
        </li>

        <li role="listitem" class="card h-full">
          <p class="kpi-label">{{ t('home.kpiOps.capacityEvp', 'Capacité (EVP/an)') }}</p>
          <p class="kpi-value">
            {{ t('home.kpiOps.values.capacityEvp', t('home.kpiOps.capacityEvpValue', '')) }}
          </p>
        </li>

        <li role="listitem" class="card h-full">
          <p class="kpi-label">{{ t('home.kpiOps.railFleet', 'Matériel ferroviaire') }}</p>
          <p class="kpi-value">
            {{ t('home.kpiOps.values.railFleet', t('home.kpiOps.railFleetValue', '')) }}
          </p>
        </li>

        <li role="listitem" class="card h-full">
          <p class="kpi-label">{{ t('home.kpiOps.jobsDirect', 'Emplois directs') }}</p>
          <p class="kpi-value">
            {{ t('home.kpiOps.values.jobsDirect', t('home.kpiOps.jobsDirectValue', '')) }}
          </p>
        </li>
      </ul>

      <!-- CTA après Opérations -->
      <div class="flex flex-wrap gap-3">
        <RouterLink to="/contact" class="btn-primary">
          {{ t('hero.ctaContact', 'Nous contacter') }}
        </RouterLink>
      </div>
    </section>

    <!-- =========================
         3) Points forts
    ========================== -->
    <section aria-label="Points forts" class="space-y-4">
      <h2 class="section-title">
        <span class="dot" aria-hidden="true"></span>
        Points forts du projet
      </h2>

      <ul role="list" class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[1fr]">
        <li role="listitem" class="card h-full flex items-start gap-3">
          <span class="text-emerald-400 text-xl mt-1">🎯</span>
          <span class="leading-relaxed">Position stratégique au cœur du corridor Douala–N'Djamena</span>
        </li>
        <li role="listitem" class="card h-full flex items-start gap-3">
          <span class="text-emerald-400 text-xl mt-1">⚖️</span>
          <span class="leading-relaxed">Cadre légal sécurisé et appui étatique</span>
        </li>
        <li role="listitem" class="card h-full flex items-start gap-3">
          <span class="text-emerald-400 text-xl mt-1">💼</span>
          <span class="leading-relaxed">Rentabilité soutenue par un marché captif</span>
        </li>
        <li role="listitem" class="card h-full flex items-start gap-3">
          <span class="text-emerald-400 text-xl mt-1">📈</span>
          <span class="leading-relaxed">Impact économique et social positif</span>
        </li>
      </ul>
    </section>

    <!-- =========================
         4) Process 3 étapes (sans clés interdites)
    ========================== -->
    <section aria-label="Processus d’investissement" class="space-y-4">
      <h2 class="section-title">
        <span class="dot" aria-hidden="true"></span>
        <!-- Texte direct pour éviter d’introduire une clé non listée -->
        Processus d’investissement (3 étapes)
      </h2>

      <ol class="grid gap-4 grid-cols-1 sm:grid-cols-3 auto-rows-[1fr]">
        <Step n="1" :title="t('invest.step1', 'Prise de contact')" />
        <Step n="2" :title="t('invest.step2', 'Accès dataroom & échanges')" />
        <Step n="3" :title="t('invest.step3', 'Term sheet & closing')" />
      </ol>

      <!-- micro-CTA -->
      <div class="flex flex-wrap gap-3">
        <RouterLink to="/contact" class="btn-primary">
          {{ t('hero.ctaContact', 'Nous contacter') }}
        </RouterLink>
        <a href="#dataroom" class="btn-secondary">
          {{ t('dataroom.open', 'Accéder à la dataroom') }}
        </a>
      </div>
    </section>

    <!-- =========================
         5) Cadre légal (version courte)
    ========================== -->
    <section aria-label="Cadre légal" class="space-y-3">
      <h2 class="section-title">
        <span class="dot" aria-hidden="true"></span>
        {{ t('home.legal.title', 'Cadre légal & institutionnel') }}
      </h2>

      <ul role="list" class="grid gap-4 grid-cols-1 sm:grid-cols-3 auto-rows-[1fr]">
        <li v-for="(it, i) in legalList" :key="`legal-${i}`"
            role="listitem"
            class="card h-full flex items-start gap-3">
          <span class="text-emerald-400 mt-1">✔</span>
          <span class="leading-relaxed">{{ it }}</span>
        </li>
      </ul>
    </section>

    <!-- =========================
         6) Opportunité investisseurs
    ========================== -->
    <section aria-label="Opportunité investisseurs" class="space-y-3">
      <h2 class="section-title">
        <span class="dot" aria-hidden="true"></span>
        {{ t('investPlus.opportunity.title', 'Opportunité pour les investisseurs') }}
      </h2>

      <ul role="list" class="grid gap-4 grid-cols-1 sm:grid-cols-3 auto-rows-[1fr]">
        <li v-for="(b, i) in oppoBullets" :key="`oppo-${i}`" role="listitem" class="card h-full">
          <div class="font-medium">{{ b }}</div>
        </li>
      </ul>

    </section>

    <!-- =========================
         7) Demander l'accès à l'espace documentaire
    ========================== -->
    <section id="dataroom" aria-label="Demande d'accès espace documentaire" class="space-y-8 border-t border-neutral-800/60 pt-12">
      <header class="space-y-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80">
          <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>{{ t('nav.dataroom') || 'Espace documentaire' }}</span>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
            {{ t('dataroom.open') || 'Demander l\'accès à l\'espace documentaire' }}
          </span>
        </h2>
        <p class="opacity-80 max-w-3xl">Remplissez le formulaire ci-dessous pour recevoir un accès sécurisé aux documents après validation.</p>
      </header>

      <!-- Message de succès -->
      <div v-if="formState === 'success'" class="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
        <div class="flex items-center gap-3 font-semibold mb-2 text-lg">
          <span class="text-2xl">✓</span>
          Demande envoyée avec succès !
        </div>
        <p class="opacity-90">
          Nous allons examiner votre demande et vous enverrons les accès à l'espace documentaire sous 48h ouvrées.
        </p>
      </div>

      <!-- Message d'erreur -->
      <div v-if="formState === 'error'" class="p-6 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
        <div class="flex items-center gap-3 font-semibold mb-2">
          <span class="text-xl">✕</span>
          Erreur lors de l'envoi
        </div>
        <p class="opacity-90">{{ errorMessage }}</p>
      </div>

      <!-- Formulaire de demande d'accès -->
      <div v-if="formState !== 'success'" class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-xl md:text-2xl font-bold">Formulaire de demande d'accès</h3>
          <span class="text-xs opacity-60">* Champs obligatoires</span>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
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
              class="px-6 py-3 rounded-lg bg-emerald-500 text-black font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
              :class="isSubmitting ? 'opacity-70' : 'hover:scale-[1.02]'"
            >
              <span v-if="isSubmitting">Envoi en cours...</span>
              <span v-else>Envoyer ma demande</span>
            </button>
            <RouterLink
              to="/contact"
              class="px-6 py-3 rounded-lg border border-neutral-700 font-semibold hover:bg-neutral-800 transition text-center"
            >
              Nous contacter directement
            </RouterLink>
          </div>
        </form>
      </div>

      <!-- Documents disponibles -->
      <div class="space-y-3">
        <h3 class="text-xl md:text-2xl font-bold">Documents disponibles après validation</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <Doc name="Pitch deck" desc="Présentation synthétique du projet"/>
          <Doc name="Études techniques" desc="Détails techniques et d'avancement"/>
          <Doc name="Cadre juridique" desc="Cadre légal, conformité et risques"/>
          <Doc name="Modèle financier" desc="Structure de financement et projections"/>
          <Doc name="Gouvernance" desc="Organisation, équipe et calendrier"/>
          <Doc name="Due diligence" desc="Rapports d'audit et de conformité"/>
        </div>
      </div>

      <!-- Comment ça marche -->
      <div class="space-y-3">
        <h3 class="text-xl md:text-2xl font-bold">Comment ça marche ?</h3>
        <ol class="grid md:grid-cols-3 gap-4">
          <StepDataroom n="1" title="Demande" desc="Remplissez le formulaire ci-dessus"/>
          <StepDataroom n="2" title="Validation" desc="Examen sous 48h ouvrées"/>
          <StepDataroom n="3" title="Accès" desc="Réception des identifiants par email"/>
        </ol>
      </div>

      <!-- Règles -->
      <div class="space-y-3 p-6 rounded-xl border border-neutral-800 bg-neutral-900/50">
        <h3 class="text-lg font-bold">Règles d'utilisation</h3>
        <ul class="space-y-2 opacity-80 text-sm">
          <li class="flex items-start gap-2">
            <span class="text-emerald-400 mt-0.5">✓</span>
            <span>Accès accordé uniquement après validation de votre profil</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-400 mt-0.5">✓</span>
            <span>Documents en lecture seule, protégés par mot de passe</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-400 mt-0.5">✓</span>
            <span>Accord de confidentialité (NDA) requis pour certains documents sensibles</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-400 mt-0.5">✓</span>
            <span>Usage strictement limité à l'évaluation du projet d'investissement</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- =========================
         8) CTA finaux
    ========================== -->
    <footer class="flex flex-wrap gap-3 border-t border-neutral-800/60 pt-6 mt-12">
      <RouterLink to="/contact" class="btn-primary">
        {{ t('hero.ctaContact', 'Nous contacter') }}
      </RouterLink>
    </footer>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import * as yup from 'yup'

import WatermarkSeals from '../components/WatermarkSeals.vue'

const { t, tm } = useI18n()

// Cadre légal (3 clés courtes uniquement)
const legalList = computed(() => {
  const items = [
    t('home.legal.mou', ''),
    t('home.legal.nyConvention', ''),
    t('home.legal.bilateral', '')
  ].filter(Boolean)
  return items
})

// Opportunité investisseurs (3 bullets)
const oppoBullets = computed(() => {
  const arr = tm('investPlus.opportunity.bullets') || []
  return Array.isArray(arr) ? arr.filter(Boolean) : []
})

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
    // Simuler l'envoi (à connecter à votre backend)
    await new Promise(resolve => setTimeout(resolve, 1500))

    // En production, envoyer à votre API ou service email
    console.log('Demande d\'accès DataRoom:', formData)

    formState.value = 'success'

    // Réinitialiser après 5 secondes
    setTimeout(() => {
      Object.keys(formData).forEach(key => formData[key] = '')
      formState.value = 'idle'
    }, 5000)

  } catch (error) {
    formState.value = 'error'
    errorMessage.value = error.message || 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}

// Petit composant interne pour les étapes processus d'investissement
const Step = {
  props: { n: String, title: String },
  template: `
    <li class="card h-full">
      <div class="text-2xl">{{ n }}️⃣</div>
      <div class="font-semibold mt-1">{{ title }}</div>
    </li>
  `
}

// Composant pour les étapes de la dataroom
const StepDataroom = {
  props: { n: String, title: String, desc: String },
  template: `
    <li class="p-5 rounded-xl border border-neutral-800 bg-neutral-900">
      <div class="text-2xl mb-2">{{ n }}️⃣</div>
      <div class="font-semibold mb-1">{{ title }}</div>
      <p class="text-sm opacity-80">{{ desc }}</p>
    </li>
  `
}

// Composant pour les documents
const Doc = {
  props: { name: String, desc: String },
  template: `
    <div class="p-5 rounded-xl border border-neutral-800 bg-neutral-900">
      <div class="font-semibold mb-1">{{ name }}</div>
      <p class="text-sm opacity-80">{{ desc }}</p>
    </div>
  `
}
</script>

<style scoped>
/* Entêtes homogènes */
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
  transition: all 0.15s ease-in-out;
  color: white;
}

.form-input:focus {
  outline: none;
  border-color: rgb(52 211 153);
  background-color: rgb(38 38 38);
}

.form-input::placeholder {
  color: rgb(115 115 115);
}

select.form-input {
  cursor: pointer;
}

/* Thème sombre conservé (aucune régression visuelle) */
</style>

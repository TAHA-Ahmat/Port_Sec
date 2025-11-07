<template>
  <!-- Watermarks institutionnels -->
  <WatermarkSeals />

  <section
    class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden"
    @mousemove="handleMouseMove"
    @mouseleave="spotlightActive = false"
  >
    <!-- Spotlight Effect -->
    <div
      class="spotlight"
      :style="spotlightStyle"
      v-show="spotlightActive"
    ></div>

    <!-- Header -->
    <header class="text-center space-y-4 mb-16 relative z-20">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs opacity-80 backdrop-blur-sm animate-fade-in">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-slow"></span>
        <span>{{ t('nav.contact') }}</span>
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate-slide-up">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
          Contactez-nous
        </span>
      </h1>
      <p class="text-base sm:text-lg opacity-70 max-w-2xl mx-auto animate-slide-up" style="animation-delay: 0.1s">
        Plusieurs moyens pour échanger sur le projet ou demander l'accès à l'espace documentaire
      </p>
    </header>

    <!-- Bento Grid -->
    <div class="bento-grid max-w-5xl mx-auto relative z-10 mb-12">

      <!-- EMAIL CARD (Large XL) - Priority -->
      <div class="bento-card email-card xl-card" style="animation-delay: 0.2s">
        <div class="card-glow email-glow"></div>
        <div class="card-content">
          <div class="icon-wrapper-large email-icon">
            <svg class="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>

          <h3 class="card-title-large">Email professionnel</h3>
          <p class="card-subtitle-large">Contactez-nous par email pour toute demande</p>

          <p class="email-address">{{ emailDisplay }}</p>

          <div class="card-actions">
            <button
              @click="copyEmail"
              class="action-btn secondary-btn"
              :class="{ 'copied': emailCopied }"
            >
              <svg v-if="!emailCopied" class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              <svg v-else class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              {{ emailCopied ? 'Copié !' : 'Copier' }}
            </button>
            <a
              href="mailto:contact@portsectchad.com"
              class="action-btn primary-btn email-btn large-btn"
            >
              <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>Envoyer un email</span>
              <svg class="btn-icon arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- WHATSAPP CARD (Small) -->
      <div class="bento-card whatsapp-card" style="animation-delay: 0.3s">
        <div class="card-glow whatsapp-glow"></div>
        <div class="card-content">
          <div class="icon-wrapper whatsapp-icon">
            <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span class="status-badge">En ligne</span>
          </div>

          <h3 class="card-title">WhatsApp</h3>
          <p class="card-subtitle">Discuter en direct</p>
          <p class="sub-text">Réponse rapide sous 2h</p>

          <a
            href="https://wa.me/23566297957"
            target="_blank"
            rel="noopener noreferrer"
            class="action-btn primary-btn whatsapp-btn"
          >
            <svg class="btn-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Ouvrir WhatsApp</span>
            <svg class="btn-icon arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- ADDRESS CARD (Small) -->
      <div class="bento-card address-card" style="animation-delay: 0.4s">
        <div class="card-glow address-glow"></div>
        <div class="card-content">
          <div class="icon-wrapper address-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>

          <h3 class="card-title">Bureau</h3>
          <p class="card-subtitle">Notre adresse</p>

          <p class="address-text">
            Rue 1036<br>
            Zone SIS aéroportuaire<br>
            N'Djamena, Tchad
          </p>

          <a
            href="https://maps.google.com/?q=42FJ+CQ8+N'Djamena,+Tchad"
            target="_blank"
            rel="noopener noreferrer"
            class="action-btn primary-btn address-btn"
          >
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
            </svg>
            <span>Voir sur Maps</span>
            <svg class="btn-icon arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- SOCIAL MEDIA CARD (Wide) -->
      <div class="bento-card social-card" style="animation-delay: 0.35s;">
        <div class="card-glow social-glow"></div>
        <div class="card-content">
          <div class="flex items-center gap-3 mb-4">
            <div class="icon-wrapper social-icon">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="card-title">Suivez-nous</h3>
              <p class="card-subtitle">Restez informés de nos actualités</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/company/genesis-port-management"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link linkedin-link"
              aria-label="LinkedIn"
            >
              <svg class="social-icon-img" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://twitter.com/gpmchad"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link twitter-link"
              aria-label="Twitter/X"
            >
              <svg class="social-icon-img" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Twitter</span>
            </a>

            <a
              href="https://www.facebook.com/genesisportmanagement"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link facebook-link"
              aria-label="Facebook"
            >
              <svg class="social-icon-img" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

    </div>

    <!-- Footer Info -->
    <div class="text-center space-y-6 pt-12 border-t border-neutral-800/60 relative z-20 animate-fade-in" style="animation-delay: 0.7s">
      <!-- Time & SLA Info -->
      <div class="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
        <div class="p-4 rounded-lg border border-neutral-800 bg-neutral-900/50">
          <div class="text-2xl mb-2">🕐</div>
          <div class="text-xs font-semibold text-emerald-300 mb-1">Horaires</div>
          <div class="text-xs opacity-70">Lun – Ven, 8h – 17h (WAT)</div>
        </div>
        <div class="p-4 rounded-lg border border-neutral-800 bg-neutral-900/50">
          <div class="text-2xl mb-2">📧</div>
          <div class="text-xs font-semibold text-blue-300 mb-1">Email</div>
          <div class="text-xs opacity-70">Réponse sous 48h ouvrées</div>
        </div>
        <div class="p-4 rounded-lg border border-neutral-800 bg-neutral-900/50">
          <div class="text-2xl mb-2">💬</div>
          <div class="text-xs font-semibold text-green-300 mb-1">WhatsApp</div>
          <div class="text-xs opacity-70">Réponse sous 2h (horaires)</div>
        </div>
      </div>

      <RouterLink
        to="/dataroom"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm font-semibold hover:bg-neutral-800 hover:border-emerald-500/50 transition-all duration-300 group"
      >
        <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <span>Demander l'accès à l'espace documentaire</span>
        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import WatermarkSeals from '../components/WatermarkSeals.vue'

const { t } = useI18n()

// State
const emailCopied = ref(false)
const spotlightActive = ref(false)
const spotlightX = ref(0)
const spotlightY = ref(0)

// Email display
const emailDisplay = computed(() => 'contact@portsectchad.com')

// Spotlight style
const spotlightStyle = computed(() => ({
  left: `${spotlightX.value}px`,
  top: `${spotlightY.value}px`,
}))

// Handle mouse move for spotlight effect
const handleMouseMove = (event) => {
  spotlightActive.value = true
  spotlightX.value = event.clientX - event.currentTarget.getBoundingClientRect().left
  spotlightY.value = event.clientY - event.currentTarget.getBoundingClientRect().top
}

// Copy email to clipboard
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('contact@portsectchad.com')
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<style scoped>
/* ========================================
   ANIMATIONS KEYFRAMES
======================================== */
@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes badge-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.8;
  }
}

@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

@keyframes gradient-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes arrow-slide {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

/* ========================================
   SPOTLIGHT EFFECT
======================================== */
.spotlight {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(52, 211, 153, 0.08) 0%,
    rgba(52, 211, 153, 0.03) 30%,
    transparent 70%
  );
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: left 0.15s ease-out, top 0.15s ease-out;
  z-index: 1;
}

/* ========================================
   BENTO GRID LAYOUT
======================================== */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  grid-auto-rows: minmax(280px, auto);
}

.bento-card {
  position: relative;
  border-radius: 1.5rem;
  border: 1px solid rgb(38 38 38);
  background: linear-gradient(135deg, rgb(20 20 20) 0%, rgb(10 10 10) 100%);
  padding: 2rem;
  overflow: visible;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: float 6s ease-in-out infinite;
  opacity: 0;
  animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.bento-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 1px;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    var(--glow-color) 90deg,
    transparent 180deg
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: gradient-rotate 8s linear infinite;
}

.bento-card:hover::before {
  opacity: 0.6;
}

.bento-card:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: transparent;
}

/* XL Card (WhatsApp) */
.xl-card {
  grid-column: span 2;
  grid-row: span 1;
  padding: 2.5rem;
  animation-delay: 0.3s;
  animation-duration: 7s;
}

/* Email Card */
.email-card {
  --glow-color: rgba(59, 130, 246, 0.6);
  animation-delay: 0.2s;
  animation-duration: 5s;
}

.email-card:hover {
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.25);
}

/* WhatsApp Card */
.whatsapp-card {
  --glow-color: rgba(16, 185, 129, 0.6);
  animation-duration: 6.5s;
}

.whatsapp-card:hover {
  box-shadow: 0 30px 60px rgba(16, 185, 129, 0.3);
}

/* Address Card */
.address-card {
  --glow-color: rgba(245, 158, 11, 0.6);
  animation-delay: 0.4s;
  animation-duration: 5.5s;
}

.address-card:hover {
  box-shadow: 0 20px 50px rgba(245, 158, 11, 0.25);
}

/* Social Media Card */
.social-card {
  --glow-color: rgba(139, 92, 246, 0.6);
  grid-column: span 2;
  animation-delay: 0.35s;
  animation-duration: 6s;
}

.social-card:hover {
  box-shadow: 0 20px 50px rgba(139, 92, 246, 0.25);
}

/* ========================================
   CARD GLOW BACKGROUND
======================================== */
.card-glow {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.2;
  animation: glow-pulse 4s ease-in-out infinite;
  pointer-events: none;
}

.email-glow {
  background: rgb(59, 130, 246);
  top: -80px;
  right: -80px;
  width: 300px;
  height: 300px;
}

.whatsapp-glow {
  background: rgb(16, 185, 129);
  top: -50px;
  right: -50px;
}

.address-glow {
  background: rgb(245, 158, 11);
  bottom: -50px;
  left: -50px;
}

.social-glow {
  background: rgb(139, 92, 246);
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}

/* ========================================
   CARD CONTENT
======================================== */
.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100%;
}

/* ========================================
   ICONS
======================================== */
.icon-wrapper {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.3s ease;
}

.bento-card:hover .icon {
  transform: scale(1.1) rotate(5deg);
}

.email-icon {
  background: rgba(59, 130, 246, 0.15);
  color: rgb(59, 130, 246);
}

.whatsapp-icon {
  background: rgba(16, 185, 129, 0.15);
  color: rgb(16, 185, 129);
}

.address-icon {
  background: rgba(245, 158, 11, 0.15);
  color: rgb(245, 158, 11);
}

.social-icon {
  background: rgba(139, 92, 246, 0.15);
  color: rgb(139, 92, 246);
}

/* Large Icon (WhatsApp) */
.icon-wrapper-large {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.15);
  color: rgb(16, 185, 129);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.icon-large {
  width: 2.5rem;
  height: 2.5rem;
  transition: transform 0.3s ease;
}

.bento-card:hover .icon-large {
  transform: scale(1.1) rotate(-5deg);
}

/* Status Badge */
.status-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: rgb(16, 185, 129);
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  animation: badge-pulse 2s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.7);
}

/* ========================================
   CARD TEXT
======================================== */
.card-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.card-title-large {
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.card-subtitle {
  font-size: 0.875rem;
  opacity: 0.7;
  margin-top: -0.5rem;
}

.card-subtitle-large {
  font-size: 1rem;
  opacity: 0.8;
  margin-top: -0.5rem;
}

.card-hint {
  font-size: 0.8125rem;
  opacity: 0.6;
  font-style: italic;
  margin-top: -0.5rem;
}

.sub-text {
  font-size: 0.75rem;
  opacity: 0.6;
  font-style: italic;
  margin-top: -0.75rem;
}

.email-address {
  font-size: 0.9375rem;
  font-weight: 600;
  color: rgb(59, 130, 246);
  font-family: 'Courier New', monospace;
  word-break: break-all;
  padding: 0.75rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 0.5rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.address-text {
  font-size: 0.9375rem;
  line-height: 1.7;
  opacity: 0.9;
  padding: 0.75rem;
  background: rgba(245, 158, 11, 0.1);
  border-radius: 0.5rem;
  border: 1px solid rgba(245, 158, 11, 0.2);
}

/* ========================================
   ACTION BUTTONS
======================================== */
.card-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  flex: 1;
  justify-content: center;
  min-width: fit-content;
}

.btn-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.btn-icon.arrow {
  width: 0.875rem;
  height: 0.875rem;
}

/* Primary Button */
.primary-btn {
  background: rgb(52, 211, 153);
  color: rgb(10, 10, 10);
}

.primary-btn:hover {
  background: rgb(16, 185, 129);
  transform: scale(1.03);
}

.primary-btn:hover .arrow {
  animation: arrow-slide 0.6s ease-in-out infinite;
}

.email-btn {
  background: rgb(59, 130, 246);
}

.email-btn:hover {
  background: rgb(37, 99, 235);
}

.whatsapp-btn {
  background: rgb(16, 185, 129);
}

.whatsapp-btn:hover {
  background: rgb(5, 150, 105);
}

.address-btn {
  background: rgb(245, 158, 11);
}

.address-btn:hover {
  background: rgb(217, 119, 6);
}

.large-btn {
  padding: 1rem 2rem;
  font-size: 1rem;
  width: 100%;
  max-width: 100%;
}

/* Secondary Button */
.secondary-btn {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.15);
  flex: 0 1 auto;
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
}

.secondary-btn.copied {
  background: rgba(16, 185, 129, 0.2);
  border-color: rgb(16, 185, 129);
  color: rgb(16, 185, 129);
}

/* ========================================
   SOCIAL LINKS
======================================== */
.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  border: 1px solid transparent;
  flex: 1;
  justify-content: center;
  min-width: fit-content;
}

.social-icon-img {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;
}

.linkedin-link {
  background: rgba(10, 102, 194, 0.15);
  color: rgb(10, 102, 194);
  border-color: rgba(10, 102, 194, 0.3);
}

.linkedin-link:hover {
  background: rgba(10, 102, 194, 0.25);
  border-color: rgb(10, 102, 194);
  transform: translateY(-2px);
}

.twitter-link {
  background: rgba(29, 155, 240, 0.15);
  color: rgb(29, 155, 240);
  border-color: rgba(29, 155, 240, 0.3);
}

.twitter-link:hover {
  background: rgba(29, 155, 240, 0.25);
  border-color: rgb(29, 155, 240);
  transform: translateY(-2px);
}

.facebook-link {
  background: rgba(24, 119, 242, 0.15);
  color: rgb(24, 119, 242);
  border-color: rgba(24, 119, 242, 0.3);
}

.facebook-link:hover {
  background: rgba(24, 119, 242, 0.25);
  border-color: rgb(24, 119, 242);
  transform: translateY(-2px);
}

.social-link:hover .social-icon-img {
  transform: scale(1.1) rotate(5deg);
}

/* ========================================
   MOBILE RESPONSIVE
======================================== */
@media (max-width: 640px) {
  /* Sur très petit mobile : tout en 1 colonne */
  .bento-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    grid-auto-rows: auto;
  }

  .xl-card,
  .social-card {
    grid-column: span 1;
    padding: 1.75rem;
    min-height: auto !important;
  }

  .bento-card {
    padding: 1.5rem;
    min-height: auto !important;
    height: auto !important;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  /* Sur tablette : garde le layout 2 colonnes */
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .xl-card {
    grid-column: span 2;
    padding: 2rem;
    min-height: auto !important;
  }

  .bento-card {
    padding: 1.5rem;
    min-height: auto !important;
    height: auto !important;
  }
}

@media (max-width: 768px) {
  .icon-wrapper {
    width: 3.75rem;
    height: 3.75rem;
  }

  .icon {
    width: 1.625rem;
    height: 1.625rem;
  }

  .icon-wrapper-large {
    width: 5rem;
    height: 5rem;
  }

  .icon-large {
    width: 2.75rem;
    height: 2.75rem;
  }

  .card-title {
    font-size: 1.125rem;
  }

  .card-title-large {
    font-size: 1.625rem;
  }

  .card-subtitle {
    font-size: 0.8125rem;
  }

  .card-subtitle-large {
    font-size: 0.9375rem;
  }

  .card-actions {
    flex-direction: column;
    gap: 0.625rem;
  }

  .action-btn {
    width: 100%;
    flex: 1 1 100%;
    padding: 0.875rem 1.25rem;
  }

  .large-btn {
    padding: 1rem 1.5rem;
    font-size: 0.9375rem;
  }

  /* Disable spotlight on mobile */
  .spotlight {
    display: none;
  }

  /* Reduce animations on mobile */
  .bento-card {
    animation: fade-in 0.6s ease-out forwards !important;
  }

  .email-address,
  .address-text {
    font-size: 0.875rem;
  }
}

/* ========================================
   ACCESSIBILITY
======================================== */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

.bento-card:focus-within {
  outline: 2px solid rgb(52, 211, 153);
  outline-offset: 2px;
}

.action-btn:focus-visible {
  outline: 2px solid rgb(52, 211, 153);
  outline-offset: 2px;
}
</style>

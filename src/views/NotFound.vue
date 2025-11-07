<template>
  <main class="min-h-[80vh] max-w-6xl mx-auto px-6 py-16 flex flex-col items-center justify-center relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 pointer-events-none opacity-20">
      <div class="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-neutral-800/30 rounded-full blur-3xl animate-float-slower"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center space-y-8 max-w-2xl">
      <!-- 404 Large -->
      <div class="space-y-4">
        <div class="error-code">
          <span class="block text-[180px] md:text-[220px] font-black leading-none tracking-tighter">
            <span class="bg-clip-text text-transparent bg-gradient-to-br from-emerald-400 via-emerald-300 to-neutral-500 animate-gradient-shift">
              404
            </span>
          </span>
        </div>

        <!-- Icon/Illustration -->
        <div class="flex justify-center animate-bounce-subtle">
          <div class="relative">
            <div class="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full"></div>
            <svg class="w-24 h-24 text-emerald-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </div>
        </div>

        <div class="space-y-2">
          <h1 class="text-3xl md:text-4xl font-bold text-white">
            Page introuvable
          </h1>
          <p class="text-lg text-neutral-400">
            Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
          </p>
        </div>
      </div>

      <!-- Quick suggestions -->
      <div class="space-y-4">
        <p class="text-sm text-neutral-500 uppercase tracking-wider font-semibold">
          Suggestions de navigation
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <RouterLink
            to="/"
            class="quick-link group"
          >
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="text-xs font-medium mt-2">Accueil</span>
          </RouterLink>

          <RouterLink
            to="/projects"
            class="quick-link group"
          >
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span class="text-xs font-medium mt-2">Projets</span>
          </RouterLink>

          <RouterLink
            to="/dataroom"
            class="quick-link group"
          >
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span class="text-xs font-medium mt-2">Documentation</span>
          </RouterLink>

          <RouterLink
            to="/contact"
            class="quick-link group"
          >
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="text-xs font-medium mt-2">Contact</span>
          </RouterLink>
        </div>
      </div>

      <!-- Primary CTA -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <RouterLink
          to="/"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-neutral-900 font-bold hover:bg-emerald-400 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 group"
        >
          <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Retour à l'accueil</span>
        </RouterLink>

        <button
          @click="goBack"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-neutral-700 bg-neutral-900 text-white font-semibold hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-500"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          <span>Page précédente</span>
        </button>
      </div>

      <!-- Help text -->
      <div class="pt-8 border-t border-neutral-800">
        <p class="text-sm text-neutral-500">
          Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à
          <RouterLink to="/contact" class="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition">
            nous contacter
          </RouterLink>
        </p>
      </div>
    </div>

    <!-- Error code for debugging (hidden by default, visible in console) -->
    <div class="hidden">
      Error: 404 - Page Not Found
      URL: {{ currentPath }}
      Timestamp: {{ timestamp }}
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const currentPath = ref('')
const timestamp = ref('')

onMounted(() => {
  currentPath.value = route.path
  timestamp.value = new Date().toISOString()

  // Log l'erreur pour le debugging
  console.warn('404 Error:', {
    path: route.path,
    timestamp: timestamp.value
  })
})

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
/* Quick link card */
.quick-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid rgb(38 38 38);
  background: linear-gradient(135deg, rgb(23 23 23) 0%, rgb(38 38 38) 100%);
  color: rgb(229 229 229);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.quick-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.quick-link:hover {
  border-color: rgb(52 211 153 / 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.15);
}

.quick-link:hover::before {
  opacity: 1;
}

.quick-link:active {
  transform: translateY(0);
}

/* Animations */
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes float-slower {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(20px) translateX(-10px);
  }
}

@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 12s ease-in-out infinite;
}

.animate-bounce-subtle {
  animation: bounce-subtle 3s ease-in-out infinite;
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

/* Error code styling */
.error-code {
  position: relative;
  user-select: none;
}

.error-code::before {
  content: '404';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: inherit;
  font-weight: inherit;
  color: rgb(38 38 38);
  z-index: -1;
  filter: blur(20px);
  opacity: 0.5;
}

/* Page enter animation */
main {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

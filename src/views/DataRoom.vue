<template>
  <section class="max-w-6xl mx-auto p-6 space-y-12">
    <header class="space-y-2">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs opacity-80">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
        <span>{{ t('nav.dataroom') }}</span>
      </div>
      <h1 class="text-2xl md:text-3xl font-bold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-300">
          {{ t('dataroom.open') }}
        </span>
      </h1>
      <p class="opacity-80 max-w-3xl">Accès aux documents clés après validation.</p>
      <RouterLink to="/contact" class="inline-block mt-2 px-5 py-2.5 rounded bg-emerald-400 text-black font-medium hover:opacity-90">
        Demander l’accès
      </RouterLink>
    </header>

    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">Comment ça marche ?</h2>
      <ol class="grid md:grid-cols-3 gap-4">
        <Step n="1" title="Demande" desc="Vous faites une demande d’accès."/>
        <Step n="2" title="Validation" desc="Validation simple et rapide."/>
        <Step n="3" title="Lecture" desc="Accès sécurisé en lecture seule."/>
      </ol>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl md:text-2xl font-bold">Documents disponibles</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <Doc name="Pitch deck" desc="Présentation synthétique du projet."/>
        <Doc name="Études & APD" desc="Détails techniques et d’avancement."/>
        <Doc name="Juridique" desc="Cadre, conformité et risques."/>
        <Doc name="Financement" desc="Modèle économique et structure."/>
        <Doc name="Gouvernance" desc="Organisation et calendrier."/>
      </div>
      <p class="text-xs opacity-60">{{ t('impact.disclaimer') }}</p>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl md:text-2xl font-bold">Règles d’utilisation</h2>
      <ul class="list-disc list-inside opacity-80">
        <li>Accès sur validation, en lecture seule.</li>
        <li>Confidentialité (NDA) selon besoin.</li>
        <li>Usage limité à l’évaluation du projet.</li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
const { t } = useI18n()
const Step = { props:{n:String,title:String,desc:String}, template:`<li class="p-5 rounded-xl border border-neutral-800 bg-neutral-900"><div class="text-2xl">{{n}}️⃣</div><div class="font-semibold mt-1">{{title}}</div><p class="text-sm opacity-80 mt-1">{{desc}}</p></li>`}
const Doc  = { props:{name:String,desc:String}, template:`<div class="p-5 rounded-xl border border-neutral-800 bg-neutral-900"><div class="font-semibold">{{name}}</div><p class="text-sm opacity-80 mt-1">{{desc}}</p></div>`}
</script>

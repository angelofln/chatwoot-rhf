<script setup>
// RHF: mostra uma página do CRM na área principal do Chatwoot. O CRM, com
// ?embed=1, esconde o próprio menu lateral para não ficar menu dentro de menu.
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const CRM_URL = 'https://crm.rhftalentoscanoas.com.br';
const PAGES = {
  comercial: '/comercial',
  candidatos: '/candidatos',
};

const route = useRoute();
const src = computed(() => {
  const path = PAGES[route.params.page];
  return path ? `${CRM_URL}${path}?embed=1` : '';
});
</script>

<template>
  <section class="flex flex-col w-full h-full bg-n-background">
    <iframe
      v-if="src"
      :key="src"
      :src="src"
      title="CRM RHF"
      class="w-full h-full border-0"
      allow="clipboard-write"
    />
    <p v-else class="p-6 text-sm text-n-slate-11">Página do CRM não encontrada.</p>
  </section>
</template>

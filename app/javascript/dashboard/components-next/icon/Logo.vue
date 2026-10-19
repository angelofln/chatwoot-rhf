<script setup>
import { useAttrs } from 'vue';
import { useMapGetter } from 'dashboard/composables/store';

const attrs = useAttrs();
const globalConfig = useMapGetter('globalConfig/get');
</script>

<template>
  <img
    v-if="globalConfig.logoThumbnail"
    v-bind="attrs"
    :src="globalConfig.logoThumbnail"
  />
  <!-- RHF: ícone "R" laranja no lugar da marca do Chatwoot. -->
  <svg
    v-else
    v-once
    v-bind="attrs"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16" height="16" rx="4" fill="#F76B15" />
    <text
      x="8"
      y="11.6"
      text-anchor="middle"
      font-family="Arial, Helvetica, sans-serif"
      font-size="10.5"
      font-weight="900"
      fill="#FFFFFF"
    >
      R
    </text>
  </svg>
</template>

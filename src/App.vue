<template>
  <router-view dir="auto" v-slot="{ Component }">
    <div class="w-full h-full " :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <v-fade-transition mode="out-in">
      <component :is="Component"></component>
    </v-fade-transition>
  </div>
  </router-view>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const locale = useI18n();

</script>

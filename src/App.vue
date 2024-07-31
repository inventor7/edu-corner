<template>
  <router-view v-slot="{ Component }">
    <v-fade-transition mode="out-in">
      <component :is="Component"></component>
    </v-fade-transition>
  </router-view>
</template>

<script setup lang="ts">
import { useLocale } from "vuetify";
import { useI18n } from "vue-i18n";

const { current: uiLocale } = useLocale();
const { locale } = useI18n();

watch(
  locale,
  (appLocale) => {
    if (!appLocale) return;

    uiLocale.value = appLocale;

    document.body.lang = appLocale;
    document.body.dir = appLocale === "ar" ? "rtl" : "ltr";
  },
  { immediate: true }
);
</script>

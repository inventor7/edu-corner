<template>
  <div>
    <TransitionGroup name="fade">
      <WelcomeEdu v-if="false" class="bg-[#0077B6] h-screen w-screen" />
      <WelcomeCarousel v-else />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import WelcomeCarousel from "../components/WelcomeCarousel.vue";
import WelcomeEdu from "../components/WelcomeEdu.vue";
const isShowing = ref(true);

onMounted(() => {
  setTimeout(() => {
    isShowing.value = false;
  }, 3000);
});
</script>

<template>
  <div>this is login page</div>
  {{ count }}
  <v-btn @click="increment()" color="primary"> {{ $t("hello") }} </v-btn>
</template>

<script setup lang="ts">
const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height parent_container">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthLayout",
});
</script>

<style>
.parent_container {
  padding: 10px;
}
</style>

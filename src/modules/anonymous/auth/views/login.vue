<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <div class="flex flex-col justify-center items-center gap-4">
          <h2 class="text-3xl font-bold">Welcome Back !</h2>
          <p>Login to Edu Corner</p>
        </div>

        <v-form>
          <v-text-field
            v-model="email"
            label="Email"
            outlined
            dense
            prepend-inner-icon="mdi-email"
            type="email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            outlined
            dense
            prepend-inner-icon="mdi-lock"
            type="password"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const count = ref(0);
</script>

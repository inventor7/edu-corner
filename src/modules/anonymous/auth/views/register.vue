<template>
  <v-container>
    <v-row justify="center">
      <v-col class="space-y-8" cols="12">
        <div class="text-center">
          <h2 class="text-3xl font-bold">Welcome Back !</h2>
          <p class="text-sm text-gray-700">Login to Edu Corner</p>
        </div>

        <v-form fast-fail @submit.prevent="submit">
          <v-text-field
            placeholder="Name"
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            solo
            dense
            autocomplete="name"
            type="text"
          >
            <template class="w-full" v-slot:append-inner>
              <img class="mr-6 ml-2" src="/src/assets/form/person.png" alt="" />
            </template>
          </v-text-field>

          <v-text-field
            placeholder="Email"
            v-model="email.value.value"
            :counter="10"
            :error-messages="email.errorMessage.value"
            solo
            dense
            autocomplete="email"
            type="email"
          >
            <template class="w-full" v-slot:append-inner>
              <img class="mr-6 ml-2" src="/src/assets/form/email.png" alt="" />
            </template>
          </v-text-field>

          <v-text-field
            v-model="password.value.value"
            :counter="10"
            :error-messages="password.errorMessage.value"
            placeholder="Password"
            dense
            solo
            autocomplete="new-password"
            type="password"
          >
            <template class="w-full" v-slot:append-inner>
              <img
                class="mr-6 ml-2"
                src="/src/assets/form/closedEye.png"
                alt=""
              />
            </template>
          </v-text-field>
          <v-text-field
            v-model="password_confirmation.value.value"
            :counter="10"
            :error-messages="password_confirmation.errorMessage.value"
            placeholder="Retype assword"
            dense
            solo
            autocomplete="new-password"
            type="password"
          >
            <template class="w-full" v-slot:append-inner>
              <img
                class="mr-6 ml-2"
                src="/src/assets/form/closedEye.png"
                alt=""
              />
            </template>
          </v-text-field>

          <div class="flex flex-row justify-end items-center w-full">
            <v-btn class="mb-4" variant="plain" size="x-small"
              >Forgot Password?</v-btn
            >
          </div>

          <v-btn type="submit" class="w-full" size="large" color="primary"
            >Login</v-btn
          >
        </v-form>
        <v-divider class="opacity-100 my-0" :thickness="2" color="black"
          ><p class="text-xs text-gray-600">or</p></v-divider
        >
        <div class="flex flex-col justify-between items-center w-full gap-4">
          <v-btn
            color="secondary"
            variant="outlined"
            class="w-full text-xs normal-case"
            size="large"
          >
            <template class="w-full" v-slot:prepend>
              <img class="h-5" src="/src/assets/form/google.png" alt="" />
            </template>
            Sign In With Google
          </v-btn>

          <v-btn
            color="#1877F2"
            class="w-full text-xs normal-case"
            size="large"
          >
            <template class="w-full" v-slot:prepend>
              <img
                class="h-5"
                src="/src/assets/form/fb.png"
                alt=""
              /> </template
            >Sign In With Facebook</v-btn
          >
        </div>

        <p class="text-xs text-center w-full text-gray-600">
          Don't have an account?

          <span class="underline text-sky-700"> Sign Up</span>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { type } from "../../../../auto-imports";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (!value && value?.length < 2) {
        return "Name is required.";
      }

      return true;
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    password(value) {
      if (value?.length < 6) {
        return "Password must be at least 6 characters long.";
      }

      return true;
    },
    password_confirmation(value) {
      if (value !== password.value.value) {
        return "Passwords do not match.";
      }

      return true;
    },
  },
});

const name = useField("name");
const email = useField("email");
const password = useField("password");
const password_confirmation = useField("password_confirmation");

const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

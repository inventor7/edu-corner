<!-- WelcomeCarousel.vue -->
<template>
  <v-carousel
    v-model="currentSlide"
    :show-arrows="false"
    hide-delimiters
    height="100vh"
    duration="300"
  >
    <v-carousel-item v-for="(slide, index) in slides" :key="index">
      <v-container class="fill-height" fluid>
        <v-btn
          v-if="index != slides.length - 1"
          @click="currentSlide = slides.length - 1"
          class="absolute top-4 right-4"
          rounded
          size="small"
          color="primary"
          >skip</v-btn
        >

        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-card
              flat
              elevation="0"
              class="bg-transparent text-center mb-10 pa-6"
            >
              <v-avatar :border="0" size="250" class="mb-12">
                <v-img :src="slide.image" alt="Student avatar"></v-img>
              </v-avatar>
              <h1 class="text-3xl font-weight-bold mb-4">
                Explore Limitless Learning
              </h1>
              <p class="text-body-2 text-gray-500 mb-12">
                Lorem ipsum dolor sit amet a consectetur. Ut enim ad minim
                veniam, be tincidunt ultricies leo.
              </p>
              <v-row class="flex space-x-4 justify-center">
                <v-btn
                  class="w-5/12"
                  size="large"
                  variant="outlined"
                  v-if="index > 0"
                  text
                  @click="currentSlide--"
                >
                  BACK
                </v-btn>

                <v-btn
                  class="w-5/12"
                  size="large"
                  width="400"
                  v-if="index === slides.length - 1"
                  color="primary"
                  @click="onFinish"
                >
                  Sign Up
                </v-btn>

                <v-btn
                  class="w-5/12"
                  size="large"
                  v-if="!(index === slides.length - 1)"
                  color="primary"
                  @click="currentSlide++"
                >
                  NEXT
                </v-btn>
              </v-row>
            </v-card>
            <v-row justify="center" class="mt-10">
              <v-progress-linear
                color="primary"
                height="12"
                class="w-1/2"
                max="5"
                min="0"
                :model-value="currentSlide + 1"
                rounded
              ></v-progress-linear>
            </v-row>
            <router-link :to="{ name: 'login' }">
              <p
                v-if="index === slides.length - 1"
                class="text-sm text-center mt-8"
              >
                already have an account ?<span
                  class="ml-2 underline text-blue-700"
                  href=""
                  >login</span
                >
              </p></router-link
            >
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentSlide = ref(0);

const slides = [
  {
    image: "/src/assets/welcome/welcome1.png",
    title: "Explore Limitless Learning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/src/assets/welcome/welcome2.png",
    title: "Set The Stage For Success",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/src/assets/welcome/welcome3.png",
    title: "Dive Into Educational Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/src/assets/welcome/welcome4.png",
    title: "Start Your Academic Journey",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/src/assets/welcome/welcome5.png",
    title: "Engage Deeply with Learning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const onFinish = () => {
  router.push({ name: "register" });
};
</script>

<style scoped>
h1 {
  font-family: "Tenor Sans", sans-serif;
}

.text-button {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
}
</style>

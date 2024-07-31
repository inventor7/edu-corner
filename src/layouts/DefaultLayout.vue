<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item to="/" prepend-icon="mdi-home" title="Home" />
        <v-list-item
          to="/courses"
          prepend-icon="mdi-book-open-page-variant"
          title="Courses"
        />
        <v-list-item to="/profile" prepend-icon="mdi-account" title="Profile" />
      </v-list>
    </v-navigation-drawer> -->

    <v-app-bar app>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>Edu Corner</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
const drawer = ref(false);
</script>

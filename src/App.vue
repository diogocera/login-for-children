<template>
  <v-app style="background-color: #ffdaca">
    <app-nav-bar v-if="$route.path !== '/login'" />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNavBar from "@/components/AppNavBar.vue";

export default {
  name: "App",

  components: { AppNavBar },
};
</script>

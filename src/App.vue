<template>
  <v-app style="background-color: #ffdaca">
    <v-app-bar v-if="$route.name !== 'Login'" app flat color="transparent">
      <v-spacer />

      <app-nav-login-button />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNavLoginButton from "./components/AppNavLoginButton.vue";

export default {
  components: { AppNavLoginButton },

  name: "App",

  data: () => ({
    //
  }),
};
</script>

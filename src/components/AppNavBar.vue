<template>
  <v-app-bar app flat color="transparent">
    <v-spacer />

    <h5 v-if="userIsLoggedIn">{{ username }}</h5>
    <app-nav-login-button v-else />
  </v-app-bar>
</template>

<script>
import AppNavLoginButton from "./AppNavLoginButton.vue";

export default {
  name: "AppNavBar",

  components: { AppNavLoginButton },

  computed: {
    userIsLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },

    username() {
      return this.$store.getters.getUsername;
    },
  },
};
</script>

<style></style>

<template>
  <v-app style="background-color: #ffdaca">
    <v-app-bar app flat color="transparent">
      <v-spacer />

      <v-btn v-if="$route.name !== 'Login'" to="login" text>
        <span class="mr-2">Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      :disabled="!formIsValid"
      :loading="loading"
      @click="$emit('login')"
      ref="login-submit-button"
    >
      Login
    </v-btn>

    <v-snackbar :value="showLoginErrorMessage" color="error" multi-line>
      <span>
        No match was found for the combination of e-mail and password given.
      </span>
      <v-icon>mdi-emoticon-sad</v-icon>
      <br />
      <span> Try again!</span>
      <v-icon>mdi-emoticon-wink</v-icon>

      <template v-slot:action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="$emit('close-error-message')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>
export default {
  name: "LoginSubmitButton",

  props: {
    formIsValid: Boolean,

    loading: Boolean,

    showLoginErrorMessage: Boolean,
  },
};
</script>

<style></style>

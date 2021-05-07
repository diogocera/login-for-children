<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-card>
        <v-card-text primary-title>
          <v-form v-model="valid" class="ma-5">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              prepend-icon="mdi-email"
              class="mb-3"
            />

            <v-text-field
              v-model="password"
              :rules="[passwordRules.required, passwordRules.min]"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              counter
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              class="mb-4"
            />

            <v-row justify="center">
              <v-btn flat color="primary" :disabled="!valid">Login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      email: "",
      emailRules: [
        (value) => !!value || "Please, write your e-mail on this box.",
        (value) =>
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) ||
          "Your e-mail should look something like yourname@email.com.",
      ],

      password: "",
      showPassword: false,
      passwordRules: {
        required: (value) =>
          !!value || "Please, write your password on this box.",
        min: (value) =>
          value.length >= 8 ||
          "It should have at least 8 characters (letters, numbers, or special characters like #@_",
        emailMatch: () => "The e-mail and password given don't match.",
      },

      valid: false,
    };
  },
};
</script>

<style></style>

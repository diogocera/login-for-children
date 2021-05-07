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
        (value) =>
          this.isInputFilled(value) || "Please, write your e-mail on this box.",
        (value) =>
          this.isEmailValid(value) ||
          "Your e-mail should look something like yourname@email.com.",
      ],

      password: "",
      showPassword: false,
      passwordRules: {
        required: (value) =>
          this.isInputFilled(value) ||
          "Please, write your password on this box.",
        min: (value) =>
          this.doesPasswordHaveMinNumberCharacters(value) ||
          "It should have at least 8 characters (letters, numbers, or special characters like #@_",
      },

      valid: false,
    };
  },

  methods: {
    isInputFilled(value) {
      return !!value;
    },

    isEmailValid(value) {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
    },

    doesPasswordHaveMinNumberCharacters(value) {
      return value.length >= 8;
    },
  },
};
</script>

<style></style>

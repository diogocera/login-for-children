<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-card>
        <v-card-text primary-title>
          <v-form
            v-model="formIsValid"
            :disabled="loading"
            lazy-validation
            class="ma-5"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              prepend-icon="mdi-email"
              autocomplete="email"
              class="mb-3"
            >
              <template v-slot:append-outer>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
                  </template>
                  Your e-mail should look something like "yourname@email.com"
                </v-tooltip>
              </template>
            </v-text-field>

            <v-text-field
              v-model="password"
              :rules="[passwordRules.required, passwordRules.min]"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              counter
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              autocomplete="password"
              class="mb-4"
            >
              <template v-slot:append-outer>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
                  </template>
                  Your password will have 8 or more characters and may
                  include<br />
                  letters, numbers, or special characters like # @ _
                </v-tooltip>
              </template>
            </v-text-field>

            <login-submit-button
              :form-is-valid="formIsValid"
              :loading="loading"
              :showLoginErrorMessage="showLoginErrorMessage"
              @login="tryLogin"
              @close-error-message="showLoginErrorMessage = false"
            />
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import LoginSubmitButton from "../components/LoginSubmitButton.vue";

export default {
  components: { LoginSubmitButton },
  name: "Login",

  data() {
    return {
      email: "",
      emailRules: [(value) => this.getEmailValidationMessage(value)],

      password: "",
      showPassword: false,
      passwordRules: {
        required: (value) =>
          this.isInputFilled(value) ||
          "Please, write your password on this box.",
        min: (value) =>
          this.doesPasswordHaveMinNumberCharacters(value) ||
          "The password has at least 8 characters",
      },

      formIsValid: false,

      loading: false,

      showLoginErrorMessage: false,
    };
  },

  methods: {
    ...mapActions(["login"]),

    getEmailValidationMessage(value) {
      if (!this.isInputFilled(value)) {
        return "Please, write your e-mail on this box.";
      } else if (!this.isEmailValid(value)) {
        return "Please, write a valid e-mail.";
      }
      return true;
    },

    isInputFilled(value) {
      return !!value;
    },

    isEmailValid(value) {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
    },

    doesPasswordHaveMinNumberCharacters(value) {
      return value.length >= 8;
    },

    async tryLogin() {
      if (this.formIsValid)
        try {
          this.loading = true;
          await this.login({ email: this.email, password: this.password });
          this.$router.push("/");
        } catch (e) {
          this.showLoginErrorMessage = true;
        } finally {
          this.loading = false;
        }
    },
  },
};
</script>

<style></style>

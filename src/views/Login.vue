<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-card>
        <v-card-text primary-title>
          <v-form v-model="formIsValid" :disabled="loading" class="ma-5">
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
              <v-btn
                text
                color="primary"
                :disabled="!formIsValid"
                :loading="loading"
                @click="tryLogin"
              >
                Login
              </v-btn>

              <v-snackbar
                v-model="showLoginErrorMessage"
                :timeout="4000"
                color="error"
                multi-line
              >
                <span
                  >No match was found for the combination of e-mail and password
                  given.
                </span>
                <v-icon>mdi-emoticon-sad</v-icon>
                <br />
                <span> Try again!</span>
                <v-icon>mdi-emoticon-wink</v-icon>

                <template v-slot:action="{ attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    @click="showLoginErrorMessage = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </template>
              </v-snackbar>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
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
          "It should have at least 8 characters (letters, numbers, or special characters like #@_",
      },

      formIsValid: false,

      showLoginErrorMessage: false,
      loading: false,
    };
  },

  methods: {
    ...mapActions(["login"]),

    getEmailValidationMessage(value) {
      if (!this.isInputFilled(value)) {
        return "Please, write your e-mail on this box.";
      } else if (!this.isEmailValid(value)) {
        return "Your e-mail should look something like yourname@email.com.";
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

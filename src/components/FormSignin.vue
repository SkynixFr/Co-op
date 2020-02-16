<template>
  <v-container fluid class="auth">
    <v-row>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-icon size="50" color="primary">mdi-account-group</v-icon>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <p class="headline font-weight-bold">Créer son compte sur Co'op</p>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-text-field
            label="Nom"
            outlined
            clearable
            prepend-icon="mdi-pencil-box"
            color="primary"
            :rules="[rules.required]"
            v-model="name"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-text-field
            label="E-mail"
            outlined
            clearable
            prepend-icon="mdi-at"
            color="primary"
            :rules="[rules.required, rules.email]"
            v-model="email"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-text-field
            label="Mot de passe"
            outlined
            prepend-icon="mdi-lock"
            color="primary"
            counter
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required, rules.min]"
            @click:append="showPassword = !showPassword"
            v-model="password1"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-text-field
            label="Confirmation du mot de passe"
            outlined
            prepend-icon="mdi-lock"
            color="primary"
            counter
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required, rules.min]"
            @click:append="showPassword = !showPassword"
            v-model="password2"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-alert
            type="error"
            :value="showError"
            transition="scale-transition"
          >
            {{ error }}
          </v-alert>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-btn color="primary" dark @click="signIn">Créer son compte</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FormSignin",
  data() {
    return {
      showPassword: false,
      showError: false,
      emailPattern: "",
      name: "",
      email: "",
      password1: "",
      password2: "",
      error: "",
      rules: {
        required: value => !!value || "Ce champs est requis",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          this.emailPattern = pattern.test(value);
          return pattern.test(value) || "E-mail invalide";
        },
        min: value => value.length >= 8 || "Minimum 8 caractères"
      }
    };
  },
  methods: {
    setError(message) {
      this.error = message;
      this.showError = true;
      setTimeout(() => {
        this.error = "";
        this.showError = false;
      }, 2000);
    },
    signIn() {
      let parameters = {
        fullname: this.name,
        email: this.email,
        password: this.password1
      };
      if (
        parameters.fullname === "" ||
        parameters.email === "" ||
        this.password1 === "" ||
        this.password2 === ""
      ) {
        this.setError("Les champs ne sont pas remplis");
      } else if (this.emailPattern === false) {
        this.setError("L'adresse e-mail n'est pas correcte !");
      } else if (this.password1.length < 8 || this.password2.length < 8) {
        this.setError("Les mots de passe n'ont pas assez de caratères !");
      } else if (this.password1 != this.password2) {
        this.setError("Les mots de passe ne correspondent pas !");
      } else {
        axios.post("members", parameters).then(response => {
          this.$router.push("login");
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
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
          <p class="headline font-weight-bold">Se connecter à Co'op</p>
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
            v-on:keyup.enter="login"
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
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required, rules.min]"
            @click:append="showPassword = !showPassword"
            v-model="password"
            v-on:keyup.enter="login"
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
          <v-btn color="primary" dark @click="login">Se connecter</v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center" class="signin">
          <p>Nouveau sur Co'op ?</p>
          <router-link to="/signin">Créer un compte</router-link>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FormLogin",
  data() {
    return {
      showPassword: false,
      showError: false,
      emailPattern: "",
      email: "",
      password: "",
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
    login() {
      let parameters = {
        email: this.email,
        password: this.password
      };
      if (parameters.email === "" || parameters.password === "") {
        this.setError("Les champs ne sont pas remplis !");
      } else if (this.emailPattern === false) {
        this.setError("L'adresse e-mail n'est pas correcte !");
      } else if (parameters.password.length < 8) {
        this.setError("Le mot de passe n'a pas assez de caratères !");
      } else {
        axios
          .post("members/signin", parameters)
          .then(response => {
            this.$store.commit("login", response.data);
            this.$router.push("/");
          })
          .catch(error => {
            this.setError(
              "Le mot de passe ou l'adresse mail ne sont pas correct"
            );
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.signin {
  p {
    margin-right: 1%;
  }
  a {
    text-decoration: none;
  }
}
</style>
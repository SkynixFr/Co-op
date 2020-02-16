<template>
  <v-container fluid class="auth">
    <v-row>
      <v-col cols="12" md="4" offset="4">
        <v-row justify="center">
          <v-icon size="50" color="primary">mdi-account-group</v-icon>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" offset="4">
        <v-row justify="center">
          <p class="headline font-weight-bold">Se connecter à Co'op</p>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" offset="4">
        <v-row justify="center">
          <v-text-field
            label="E-mail"
            outlined
            clearable
            prepend-icon="mdi-at"
            color="primary"
            :rules="[rules.required, rules.email]"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" offset="4">
        <v-row justify="center">
          <v-text-field
            label="Mot de passe"
            outlined
            prepend-icon="mdi-lock"
            color="primary"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required]"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" offset="4">
        <v-row justify="center">
          <v-btn color="primary" dark>Se connecter</v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" offset="4">
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
  name: "formLogin",
  data() {
    return {
      showPassword: false,
      rules: {
        required: value => !!value || "Ce champs est requis",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "E-mail invalide";
        }
      }
    };
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
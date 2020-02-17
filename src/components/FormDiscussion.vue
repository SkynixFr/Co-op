<template>
  <v-container fluid class="auth">
    <v-row>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-icon size="50" color="primary">mdi-forum</v-icon>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <p class="headline font-weight-bold">
            Créer une discussion sur Co'op
          </p>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-text-field
            label="Titre"
            outlined
            clearable
            prepend-icon="mdi-format-title"
            color="primary"
            :rules="[rules.required, rules.min]"
            v-model="name"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-textarea
            class="mx-2"
            label="Description"
            rows="3"
            outlined
            prepend-icon="mdi-comment"
            auto-grow
            clearable
            :rules="[rules.required]"
          ></v-textarea>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-alert type="error" transition="scale-transition">
            {{ error }}
          </v-alert>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-btn color="primary" dark>Créer une discussion</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FormDiscussion",
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
        min: value => value.length >= 3 || "Minimum 3 caractères"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
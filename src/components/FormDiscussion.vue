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
            counter
            prepend-icon="mdi-format-title"
            color="primary"
            :rules="[rules.required, rules.minTitle]"
            v-model="title"
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
            :rules="[rules.required, rules.minDescription]"
            v-model="description"
            counter
          ></v-textarea>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-alert
            type="error"
            transition="scale-transition"
            :value="showError"
          >
            {{ error }}
          </v-alert>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" sm="8" offset-sm="2">
        <v-row justify="center">
          <v-btn color="primary" dark @click="addDiscussion"
            >Créer une discussion</v-btn
          >
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
      title: "",
      description: "",
      error: "",
      rules: {
        required: value => !!value || "Ce champs est requis",
        minTitle: value => value.length >= 3 || "Minimum 3 caractères",
        minDescription: value => value.length >= 10 || "Minimum 10 caractères"
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
    addDiscussion() {
      let parameters = {
        label: this.title,
        topic: this.description
      };
      if (parameters.label === "" || parameters.topic === "") {
        this.setError("Les champs ne sont pas remplis !");
      } else if (this.title.length < 3) {
        this.setError("Le titre est trop petit !");
      } else if (this.description.length < 10) {
        this.setError("La description est trop petite !");
      } else {
        axios.post("channels", parameters).then(response => {
          this.$router.push("/");
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
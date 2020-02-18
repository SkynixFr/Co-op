<template>
  <v-card tile>
    <v-toolbar color="primary" dark>
      <v-toolbar-title> <v-icon>mdi-forum</v-icon> Discussion </v-toolbar-title>
    </v-toolbar>
    <v-row justify="end">
      <v-col cols="12" md="auto">
        <div class="message">
          <div class="text">
            <p>Nom utilisateur</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            quibusdam deleniti cumque! Commodi, nisi corrupti consectetur
            officiis amet non? Quos fugiat nesciunt quas recusandae dolorem
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
            minima. Eligendi quae iure voluptatem tenetur rem nulla officia unde
            laudantium corrupti quas dolore explicabo dicta, doloremque placeat
            dignissimos consequatur dolor. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Adipisci, eos distinctio? Voluptatum
            cumque unde, sit, enim delectus porro earum veniam libero, similique
            commodi accusamus! Culpa magnam corrupti amet id voluptatum? ipsam
            nobis eius non eligendi.
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row justify="start">
      <v-col cols="12" md="auto">
        <div class="message">
          <div class="text">
            <p>Nom utilisateur</p>
            ls
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" no-gutters>
      <v-col cols="12" md="11">
        <v-text-field
          type="text"
          rounded
          label="Envoyer un message"
          filled
          clearable
          clear-icon="mdi-close-circle"
          color="primary"
          prepend-icon="mdi-emoticon"
          append-outer-icon="mdi-send"
          @click:append-outer="sendMessage"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MessageList",
  data() {
    return {};
  },
  methods: {
    sendMessage() {
      console.log("Hello");
    }
  }
};
</script>

<style lang="scss" scoped>
.message {
  margin: 1%;
  padding: 15px;
  background-color: #a8ddfd;
  border-radius: 28px;
}
</style>
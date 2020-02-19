<template>
  <v-card tile>
    <v-toolbar color="primary" dark>
      <v-toolbar-title> <v-icon>mdi-forum</v-icon> Discussion </v-toolbar-title>
    </v-toolbar>
    <v-row v-for="message in messages" :key="message.id">
      <v-col cols="12" md="auto">
        <Message :broadcast="broadcastId" :content="message.message" />
      </v-col>
    </v-row>
    {{ broadcastId }}
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
          v-model="inputMessage"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { bus } from "../main";
import Message from "@/components/Message.vue";
export default {
  name: "MessageList",
  components: {
    Message
  },
  props: ["messages"],
  data() {
    return {
      broadcastId: "",
      inputMessage: ""
    };
  },
  methods: {
    sendMessage() {
      let parameters = {
        memberId: this.$store.state.member.id,
        message: this.inputMessage,
        messages: []
      };
      axios
        .post("channels/" + this.broadcastId + "/posts", parameters)
        .then(response => {
          console.log(response.data);
          console.log(this.messages, "Message List");
          this.messages.push(response.data);
        });
    }
  },
  watch: {
    $route(to, from) {
      if (this.$route.params.id) {
        this.broadcastId = this.$route.params.id;
      }
    }
  },
  created() {
    bus.$on("getMessages", data => {
      this.messages = data;
    });
  },
  mounted() {
    if (this.$route.params.id) {
      this.broadcastId = this.$route.params.id;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
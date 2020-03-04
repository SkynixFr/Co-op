<template>
  <v-card tile v-show="isShow">
    <v-toolbar color="primary" dark>
      <v-toolbar-title> <v-icon>mdi-forum</v-icon> Discussion </v-toolbar-title>
    </v-toolbar>
    <v-row>
      <v-col cols="12" md="auto">
        <Message
          v-for="message in messages"
          :key="message.id"
          :broadcast="broadcastId"
          :message="message"
        />
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
          v-model="inputMessage"
          v-on:keyup.enter="sendMessage"
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
  data() {
    return {
      broadcastId: "",
      inputMessage: "",
      messages: [],
      isShow: false
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
          this.messages.push(response.data);
          this.inputMessage = "";
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
      this.isShow = true;
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
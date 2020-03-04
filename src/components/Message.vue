<template>
  <div class="message">
    <div class="text">
      <img :src="getGravatar(memberMessage)" alt="" width="50" />
      <span class="message-fullname">
        {{ memberMessage.fullname }} :
        <v-btn
          icon
          v-if="this.memberConnect === this.message.member_id"
          @click="updateMessage(message)"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          icon
          v-if="this.memberConnect === this.message.member_id"
          @click="deleteMessage(message)"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </span>
      <p class="message-text">{{ message.message }}</p>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  name: "Message",
  props: {
    message: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      memberMessage: this.getMember(this.message.member_id),
      memberConnect: this.$store.state.member.id
    };
  },
  methods: {
    deleteMessage(message) {
      axios
        .delete("channels/" + message.channel_id + "/posts/" + message.id)
        .then(response => {
          bus.$emit("updateMessage");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.message {
  padding: 5px;
  background-color: #1976d2;
  border-radius: 28px;
  margin-bottom: 1%;
  .text {
    color: white;
    min-width: 1000px;
    max-width: 850px;
    text-align: justify;
    .message-text {
      margin-left: 2%;
    }
    .message-fullname {
      font-size: 1.5em;
    }
  }
}
</style>
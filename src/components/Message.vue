<template>
  <div class="message">
    <div class="text">
      <img :src="getGravatar(memberMessage)" width="50" />
      <span class="message-fullname"> {{ memberMessage.fullname }} : </span>
      <v-text-field
        :readonly="isModify"
        type="text"
        flat
        :autofocus="isFocus"
        solo-inverted
        dense
        color="white"
        v-model="message.message"
        @click:prepend="updateMessage"
      >
        <template slot="append" v-if="memberConnect === message.member_id">
          <v-icon @click="updateMessage(message)">mdi-pencil</v-icon>
          <v-icon @click="deleteMessage(message)">mdi-delete</v-icon>
        </template></v-text-field
      >
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
      memberConnect: this.$store.state.member.id,
      isModify: true,
      isFocus: false,
      newMessage: ""
    };
  },
  methods: {
    deleteMessage(message) {
      axios
        .delete("channels/" + message.channel_id + "/posts/" + message.id)
        .then(response => {
          bus.$emit("updateMessage");
        });
    },
    updateMessage(message) {
      this.isModify = !this.isModify;
      if (this.isModify) {
        let parameters = {
          id: message.id,
          message: message.message
        };
        axios
          .put("channels/" + message.channel_id + "/posts/", parameters)
          .then(response => {
            bus.$emit("updateMessage");
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.message {
  width: 100%;
  padding: 5px;
  background-color: #1976d2;
  border-radius: 28px;
  margin-bottom: 1%;
  .text {
    color: white;
    width: 100%;
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
<template>
  <v-card tile>
    <v-toolbar color="primary" dark>
      <v-toolbar-title> <v-icon>mdi-forum</v-icon> Discussions</v-toolbar-title>
    </v-toolbar>
    <v-list three-line subheader>
      <v-list-item-group color="red">
        <v-list-item
          v-for="(broadcast, id) in broadcasts"
          :key="id"
          :to="{
            name: 'Discussions',
            params: { id: broadcast.id }
          }"
          :messages="messages"
          @click="getOnBroadcastMessages"
        >
          <v-list-item-content>
            <v-list-item-title v-html="broadcast.label"></v-list-item-title>
            <v-list-item-subtitle
              v-html="broadcast.topic"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ListDiscussion",
  data() {
    return {
      broadcasts: [],
      messages: []
    };
  },
  methods: {
    getAllBroadcast() {
      axios.get("channels").then(response => {
        this.broadcasts = response.data;
      });
    },
    getOnBroadcastMessages() {
      axios.get("channels/" + this.broadcasts.id + "/posts").then(response => {
        this.messages = response.data.reverse();
        console.log(this.messages);
      });
    }
  },
  mounted() {
    this.getAllBroadcast();
  }
};
</script>

<style lang="scss" scoped>
</style>
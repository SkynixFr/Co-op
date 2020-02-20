<template>
  <v-card tile>
    <v-toolbar color="primary" dark>
      <v-toolbar-title> <v-icon>mdi-forum</v-icon> Discussions</v-toolbar-title>
    </v-toolbar>
    <v-list three-line subheader>
      <v-list-item-group>
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
            <v-list-item-title>
              {{ broadcast.label }}
              <v-btn icon><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn icon @click="deleteBroadcast(broadcast.id)"
                ><v-icon>mdi-delete-forever</v-icon></v-btn
              >
            </v-list-item-title>

            <v-list-item-subtitle v-html="broadcast.topic">
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { bus } from "../main";
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
      axios
        .get("channels/" + this.$route.params.id + "/posts")
        .then(response => {
          this.messages = response.data.reverse();
          bus.$emit("getMessages", this.messages);
        });
    },
    deleteBroadcast(id) {
      axios.delete("channels/" + id).then(response => {
        this.getAllBroadcast();
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
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
          @click="getOnBroadcastMessages(broadcast.id)"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ broadcast.label }}
              <v-btn icon @click="openModal"><v-icon>mdi-pencil</v-icon></v-btn>
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
      showModal: false
    };
  },
  methods: {
    getAllBroadcast() {
      axios.get("channels").then(response => {
        this.broadcasts = response.data;
      });
    },
    getOnBroadcastMessages(id) {
      axios.get("channels/" + id + "/posts").then(response => {
        bus.$emit("getMessages", response.data.reverse());
      });
    },
    deleteBroadcast(id) {
      axios.delete("channels/" + id).then(response => {
        this.getAllBroadcast();
      });
    },
    openModal() {
      this.showModal = true;
    }
  },
  created() {
    bus.$on("updateMessage", update => {
      this.getOnBroadcastMessages(this.$route.params.id);
    });
  },
  mounted() {
    if (this.$route.params.id) {
      this.getOnBroadcastMessages(this.$route.params.id);
    }
    this.getAllBroadcast();
  }
};
</script>

<style lang="scss" scoped>
</style>
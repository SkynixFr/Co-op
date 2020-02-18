<template>
  <v-container fluid>
    <v-row>
      <v-col order="1" cols="12" md="4" sm="12">
        <BroadcastList />
      </v-col>
      <v-col order="2" cols="12" md="8" sm="12">
        <MessageList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BroadcastList from "@/components/BroadcastList.vue";
import MessageList from "@/components/MessageList.vue";
export default {
  name: "Home",
  components: {
    BroadcastList,
    MessageList
  }
};
</script>

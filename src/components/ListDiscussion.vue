<template>
  <v-card max-width="30%" height="auto" tile>
    <v-toolbar color="primary" dark>
      <v-toolbar-title> <v-icon>mdi-forum</v-icon> Discussions</v-toolbar-title>
    </v-toolbar>
    <v-list three-line subheader>
      <v-list-item-group color="red">
        <v-list-item v-for="(discussion, id) in discussions" :key="id">
          <v-list-item-content>
            <v-list-item-title v-html="discussion.label"></v-list-item-title>
            <v-list-item-subtitle
              v-html="discussion.topic"
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
      discussions: []
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
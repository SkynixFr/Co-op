<template>
  <div>
    <v-bottom-navigation color="red" grow shift dark>
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/discussion">
        <span>Discussion</span>
        <v-icon>mdi-forum</v-icon>
      </v-btn>
      <v-btn to="/profile">
        <span>Profile</span>
        <v-icon>mdi-account-box</v-icon>
      </v-btn>
      <v-btn to="/members">
        <span>Membres</span>
        <v-icon>mdi-account-multiple</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style lang="scss" scoped>
</style>
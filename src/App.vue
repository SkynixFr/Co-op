<template>
  <v-app>
    <Menu />
    <router-view />
  </v-app>
</template>

<script>
import Menu from "@/components/Navbar.vue";
import Home from "@/views/Home.vue";
export default {
  name: "App",
  components: {
    Home,
    Menu
  },
  mounted() {
    axios.get("members").then(response => {
      this.$store.commit("setMembres", response.data);
    });
  }
};
</script>
<style lang="scss" scoped>
</style>
<template>
  <v-app>
    <Menu />
    <v-btn
      fixed
      bottom
      right
      color="rgb(220, 20, 60)"
      fab
      dark
      depressed
      @click="logOut"
    >
      <v-icon color="white">mdi-logout</v-icon>
    </v-btn>
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
  methods: {
    logOut() {
      axios.delete("members/signout").then(response => {
        this.$router.push("/login");
      });
    }
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
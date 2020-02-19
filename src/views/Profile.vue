<template>
  <div>
    <h1>Profil</h1>
    {{ membre.fullname }}
  </div>
</template>

<script>
export default {
  name: "Profil",
  data() {
    return {
      membre: this.getMember(this.$route.params.id)
    };
  },
  mounted() {
    console.log(this.getMember(this.$route.params.id));
  }
};
</script>

<style lang="scss" scoped>
</style>
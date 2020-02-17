<template>
  <div>
    <FormDiscussion />
  </div>
</template>

<script>
import Menu from "@/components/Navbar.vue";
import FormDiscussion from "@/components/FormDiscussion.vue";
export default {
  name: "discussion",
  components: {
    FormDiscussion,
    Menu
  }
};
</script>

<style lang="scss" scoped>
</style>
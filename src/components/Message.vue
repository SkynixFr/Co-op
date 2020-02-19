<template>
  <div class="message">
    <div class="text">
      <p>Nom utilisateur</p>
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["content"]
};
</script>

<style lang="scss" scoped>
.message {
  padding: 15px;
  background-color: #1976d2;
  border-radius: 28px;
  .text {
    color: white;
    min-width: 150px;
    max-width: 850px;
    text-align: justify;
    p {
      font-weight: bold;
    }
  }
}
</style>
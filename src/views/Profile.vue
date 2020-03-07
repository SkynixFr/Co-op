<template>
  <v-container fluid>
    <v-row justify="center" no-gutters>
      <v-col cols="12" md="4" sm="6">
        <v-card outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Profile</div>
              <v-list-item-title class="headline mb-1">
                {{ member.fullname }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ member.email }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="100">
              <img :src="getGravatar(member)" alt="" width="250" />
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="10" offset-md="1">
        <v-col cols="12" sm="12" md="12">
          <p class="headline-text">Les derniers messages :</p>
        </v-col>
        <v-col cols="12" sm="10" md="10" offset="1">
          <ul v-for="message in arrayMessage" :key="message.id">
            <router-link
              :to="{
                name: 'Discussions',
                params: { id: message.channel_id }
              }"
            >
              <li class="text-message">
                {{ message.message }} - {{ message.created_at }}
              </li>
            </router-link>
          </ul>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profil",
  data() {
    return {
      member: this.getMember(this.$route.params.id),
      arrayMessage: []
    };
  },
  methods: {
    getAllMessages() {
      axios.get("channels").then(channels => {
        channels.data.forEach(channel => {
          axios.get("channels/" + channel.id + "/posts").then(messages => {
            messages.data.forEach(message => {
              if (message.member_id === this.member.id) {
                this.arrayMessage.push(message);
                this.arrayMessage = this.arrayMessage.slice(0, 10);
              }
            });
          });
        });
      });
    }
  },
  mounted() {
    this.getAllMessages();
  }
};
</script>

<style lang="scss" scoped>
.headline-text {
  font-size: 2em;
  font-weight: 300;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
  .text-message {
    border: 1px solid grey;
    padding: 1%;
    margin: 1%;
    font-size: 1em;
    font-weight: 300;
    &:hover {
      background-color: #f5f5f5;
      color: #1976d2;
      border: 1px solid #1976d2;
    }
  }
}
</style>
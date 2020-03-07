<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <v-row justify="center">
          <v-icon size="50" color="primary">mdi-account-group</v-icon>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset-md="3">
        <v-row justify="center">
          <p class="headline font-weight-bold">
            Liste des membres sur Co'op
          </p>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" v-for="member in members" :key="member.id">
        <v-card
          outlined
          :to="{
            name: 'Profile',
            params: { id: member.id }
          }"
        >
          <v-list-item three-line>
            <v-list-item-avatar tile size="80">
              <img :src="getGravatar(member)" alt="" width="250" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ member.fullname }}
                <v-btn icon v-if="member.id != memberConnect">
                  <v-icon @click="deleteMember(member.id)">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ member.created_at }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Members",
  data() {
    return {
      members: [],
      memberConnect: this.$store.state.member.id
    };
  },
  methods: {
    deleteMember(id) {
      axios.delete("members/" + id).then(response => {
        this.members = response.data;
      });
    }
  },
  mounted() {
    axios.get("members").then(response => {
      this.members = response.data;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
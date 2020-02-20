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

          <v-card-actions>
            <v-btn icon color="primary"><v-icon>mdi-twitter</v-icon></v-btn>
            <v-btn icon color="indigo darken-2"
              ><v-icon>mdi-facebook-messenger</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profil",
  data() {
    return {
      member: this.getMember(this.$route.params.id)
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
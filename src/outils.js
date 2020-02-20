export const outils = {
  methods: {
    getMember(id) {
      let members = this.$store.state.members;
      for (let i = 0; i < members.length; i++) {
        if (members[i].id == id) {
          return members[i];
        }
      }
    },
    getGravatar(members) {
      let hash = md5(members.email);
      return "https://avatars.dicebear.com/v2/bottts/" + hash + ".svg";
    }
  }
};

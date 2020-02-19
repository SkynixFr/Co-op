import Vue from "vue";
import Vuex from "vuex";

import VuexPersist from "vuex-persist";

const vp = new VuexPersist({
  key: "store",
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vp.plugin],
  state: {
    isConnected: false,
    member: "",
    memberTokenSession: "",
    members: []
  },
  mutations: {
    setMembres(state, members) {
      state.members = members;
    },
    login(state, data) {
      state.isConnected = true;
      state.member = data.member;
      state.memberTokenSession = data.token;
    }
  },
  actions: {},
  modules: {}
});

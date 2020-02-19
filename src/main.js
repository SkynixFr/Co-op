import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;

window.axios = axios.create({
  baseURL: "https://tools.sopress.net/iut/coop/api/",
  headers: {
    Authorization: "418c37dd13f975ff82d7073a4360a2ee8d961517"
  }
});

import { outils } from "./outils";
Vue.mixin(outils);

new Vue({
  router,
  store,
  vuetify,
  render: function(h) {
    return h(App);
  },
  beforeCreate() {
    window.axios.interceptors.request.use(
      config => {
        if (this.$store.state.memberTokenSession) {
          config.url += "?token=" + this.$store.state.memberTokenSession;
        }
        return config;
      },
      error => {
        return console.log(error);
      }
    );
  }
}).$mount("#app");

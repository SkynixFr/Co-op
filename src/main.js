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
    Authorization: "c62709aaf8bb867f465dc54d408014f5e8dfd3fe"
  }
});

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
        if (this.$store.state.memberToken_session) {
          config.url += "?token=" + this.$store.state.memberToken_session;
        }
        return config;
      },
      error => {
        return console.log(error);
      }
    );
  }
}).$mount("#app");

import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter(to, from, next) {
      if (!store.state.isConnected) {
        next("/login");
      } else {
        next();
      }
    },
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter(to, from, next) {
      if (store.state.isConnected) {
        next("/");
      } else {
        next();
      }
    },
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/signin",
    name: "Signin",
    beforeEnter(to, from, next) {
      if (store.state.isConnected) {
        next("/");
      } else {
        next();
      }
    },
    component: () => import("@/views/Signin.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

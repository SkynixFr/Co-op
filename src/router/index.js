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
    beforeRouteEnter(to, from, next) {
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
    beforeRouteEnter(to, from, next) {
      if (store.state.isConnected) {
        next("/");
      } else {
        next("/signin");
      }
    },
    component: () => import("@/views/Signin.vue")
  },
  {
    path: "/discussion",
    name: "Discussion",
    beforeEnter(to, from, next) {
      if (!store.state.isConnected) {
        next("/login");
      } else {
        next();
      }
    },
    component: () => import("@/views/Discussion.vue")
  },
  {
    path: "/discussions/:id",
    name: "Discussions",
    component: () => import("@/views/Home.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

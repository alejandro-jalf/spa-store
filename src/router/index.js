import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Home from "../views/Home.vue";
import Conexiones from "../views/Conexiones.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/conexiones",
    name: "Conexiones",
    component: Conexiones,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const isPermitted = name => {
  const finded = store.state.userAccessTo.find(tab => tab === name);
  return typeof finded !== "undefined";
};

const existTab = name => {
  const finded = store.state.tabs.find(tab => tab.name === name);
  return typeof finded !== "undefined";
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.login) {
      console.log("estas logueado");
      if (isPermitted(to.name)) {
        next();
      } else {
        store.commit("showAlertDialog", [
          "No tienes autorizacion para entrar a esta ruta"
        ]);
      }
    } else {
      console.log("sesion cerrada");
      next({ name: "Login" });
    }
  } else {
    console.log("sin auntenticar");
    if (to.name === "Login" && store.state.login) {
      console.log("sesion abierta");
      next({ name: store.state.userAccessTo[0] });
      return;
    }
    if (to.name !== "Login" && !store.state.login) {
      next({ name: "Login" });
      return;
    }
    if (!existTab(to.name)) {
      store.commit("showAlertDialog", ["Esta ruta no existe"]);
      next({ name: "Home" });
      return;
    }
    console.log("No estas logueado");
    next();
  }
});

export default router;

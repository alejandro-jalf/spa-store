<template>
  <div id="app">
    <b-overlay :show="loading" no-wrap></b-overlay>
    <NavBar v-if="login"></NavBar>
    <router-view :class="{ container: login }" />
    <Alert></Alert>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";

export default {
  name: "app",
  components: {
    NavBar,
    Alert
  },
  computed: {
    ...mapState(["loading", "login"])
  }
};
</script>

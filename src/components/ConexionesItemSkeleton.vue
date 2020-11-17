<template>
  <b-card v-if="!thereAreConections">
    <b-row>
      <b-col cols="2">
        <b-skeleton type="avatar"></b-skeleton>
      </b-col>
      <b-col cols="7">
        <b-skeleton></b-skeleton>
        <b-skeleton></b-skeleton>
      </b-col>
      <b-col cols="3">
        <b-skeleton type="button"></b-skeleton>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ConexionesItemSkeleton",
  computed: {
    ...mapState(["conexiones"]),
    thereAreConections() {
      return this.conexiones.length > 0;
    }
  }
};
</script>

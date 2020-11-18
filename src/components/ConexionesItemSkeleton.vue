<template>
  <b-card v-if="!thereAreConections">
    <b-row>
      <b-col cols="2">
        <b-skeleton type="avatar" width="20px" height="20px"></b-skeleton>
      </b-col>
      <b-col cols="6">
        <b-skeleton height="20px"></b-skeleton>
        <!-- <b-skeleton></b-skeleton> -->
      </b-col>
      <b-col cols="3">
        <b-skeleton type="button" height="20px"></b-skeleton>
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

<template>
  <div>
    <b-list-group>
      <ConexionesItemSkeleton
        v-for="skeleto in conexionesSkeleton"
        :key="skeleto + 'skeleto'"
      />
      <ConexionesItem
        v-for="(item, index) of conexiones"
        :sucursal="item"
        :key="index"
      />
    </b-list-group>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ConexionesItem from "./ConexionesItem";
import ConexionesItemSkeleton from "./ConexionesItemSkeleton";

export default {
  name: "Conexiones",
  data() {
    return {
      conexionesSkeleton: [0, 1, 2, 3, 4, 5]
    };
  },
  components: {
    ConexionesItem,
    ConexionesItemSkeleton
  },
  computed: {
    ...mapState(["conexiones"])
  }
};
</script>

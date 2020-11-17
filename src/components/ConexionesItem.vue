<template>
  <b-list-group-item class="d-flex align-items-center">
    <b-icon
      variant="primary"
      :icon="loadActive(sucursal.success)"
      class="mr-3"
      font-scale="2"
    ></b-icon>
    <span class="mr-auto">
      <strong>{{ NAMES_SUC[sucursal.conexion] }}</strong>
    </span>
    <b-badge variant="ligth">{{ sucursal.message }}</b-badge>
  </b-list-group-item>
</template>

<script>
import { NAMES_SUC } from "../configs";

export default {
  name: "ConexionesItem",
  props: {
    sucursal: Object
  },
  data() {
    return {
      NAMES_SUC
    };
  },
  methods: {
    loadActive(value) {
      return value ? "toggle-on" : "toggle-off";
    }
  }
};
</script>

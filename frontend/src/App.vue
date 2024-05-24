<template>
  <div class="container mt-4">
    <h1 class="text-center">PRUEBA TÉCNICA</h1>
    <div class="card">
      <div class="card-body">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="conductores-tab"
              data-bs-toggle="tab"
              data-bs-target="#conductores"
              type="button"
              role="tab"
              aria-controls="conductores"
              aria-selected="true"
            >
              Conductores
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="vehiculos-tab"
              data-bs-toggle="tab"
              data-bs-target="#vehiculos"
              type="button"
              role="tab"
              aria-controls="vehiculos"
              aria-selected="false"
            >
              Vehiculos
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="conductores"
            role="tabpanel"
            aria-labelledby="conductores-tab"
          >
            <Conductores
              :lista_conductores="lista_conductores"
              @cargar="getConducttores()"
            />
          </div>
          <div
            class="tab-pane fade"
            id="vehiculos"
            role="tabpanel"
            aria-labelledby="vehiculos-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Conductores from "./components/Conductores.vue";
import axios from "axios";
/*import Swal from "sweetalert2/dist/sweetalert2";
import Multiselect from "@vueform/multiselect";
import bootstrap from "bootstrap/dist/css/bootstrap";
import bootstrapjs from "bootstrap/dist/js/bootstrap";*/

export default {
  name: "App",
  data() {
    return {
      lista_conductores: {},
    };
  },
  components: { Conductores },
  mounted() {
    this.getConducttores();
  },
  methods: {
    getConducttores() {
      axios
        .get("http://localhost/proyecto/backend/public/api/conductores")
        .then((response) => {
          this.lista_conductores = response.data;
        });
    },
  },
};
</script>

<style></style>

<template>
  <div class="p-4">
    <button
      type="button"
      class="btn btn-primary mb-3"
      data-bs-toggle="modal"
      data-bs-target="#conductoresForm"
      @click="
        id = null;
        titulo = 'Crear';
        $refs.conductoresForm.limpiar();
      "
    >
      Crear
    </button>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Conductor</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(conductor, index) in lista_conductores" v-bind:key="index">
          <th scope="row">{{ conductor.nombre }}</th>
          <td>
            <button
              type="button"
              class="btn btn-warning mr-2"
              data-bs-toggle="modal"
              data-bs-target="#conductoresForm"
              @click="
                id = 1;
                titulo = 'Editar';
                $refs.conductoresForm.getConductorByID(conductor.id);
              "
            >
              Editar
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="eliminar(conductor.id)"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="modal fade"
      id="conductoresForm"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="conductoresFormLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <ConductoresForm
          ref="conductoresForm"
          :id="id"
          :titulo="titulo"
          @cargar="$emit('cargar')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2";
import ConductoresForm from "../components/ConductoresForm.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      crear: false,
      id: null,
      titulo: null,
    };
  },
  components: {
    ConductoresForm,
  },
  props: {
    lista_conductores: {},
  },
  mounted() {},
  methods: {
    eliminar(id) {
      axios
        .delete(
          "http://localhost/proyecto/backend/public/api/conductores/" + id
        )
        .then(() => {
          Swal.fire({
            title: "Éxito",
            html: "Conductor eliminado exitosamente",
            icon: "success",
            showConfirmButton: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
            timer: 2500,
          });
          this.$emit("cargar");
        });
    },
  },
};
</script>

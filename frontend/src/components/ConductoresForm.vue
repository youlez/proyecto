<template>
  <form @submit.prevent="guardarFormulario" class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="conductoresFormLabel">
        {{ titulo }} Conductor
      </h5>
    </div>
    <div class="modal-body">
      <label for="nombre" class="form-label">Nombre</label>
      <input
        type="text"
        class="form-control"
        id="nombre"
        v-model="form.nombre"
        required
      />
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Cerrar
      </button>
      <button type="submit" class="btn btn-success">Guardar</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2";
export default {
  name: "HelloWorld",
  data() {
    return {
      form: {
        id: null,
        nombre: null,
      },
    };
  },
  props: {
    id: null,
    titulo: {
      type: String,
    },
  },
  mounted() {
    console.log(this.id);
  },
  methods: {
    limpiar() {
      Object.keys(this.form).forEach((key) => {
        this.form[key] = null;
      });
    },
    getConductorByID(id) {
      this.limpiar();
      axios
        .get("http://localhost/proyecto/backend/public/api/conductores/" + id)
        .then((response) => {
          this.form = response.data;
        });
    },
    guardarFormulario() {
      if (this.form.id != null) {
        axios
          .put(
            `http://localhost/proyecto/backend/public/api/conductores/${this.form.id}`,
            this.form
          )
          .then(() => {
            Swal.fire({
              title: "Éxito",
              html: "Conductor guardado exitosamente",
              icon: "success",
              showConfirmButton: false,
              allowEscapeKey: false,
              allowOutsideClick: false,
              timer: 2500,
            });
            this.getConductorByID(this.form.id);
            this.$emit("cargar");
          });
      } else {
        axios
          .post(
            `http://localhost/proyecto/backend/public/api/conductores`,
            this.form
          )
          .then(() => {
            Swal.fire({
              title: "Éxito",
              html: "Conductor guardado exitosamente",
              icon: "success",
              showConfirmButton: false,
              allowEscapeKey: false,
              allowOutsideClick: false,
              timer: 2500,
            });
            this.$emit("cargar");
          });
      }
    },
  },
};
</script>

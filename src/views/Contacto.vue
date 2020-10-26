<template>
  <div>
    <section class="padd-top w-75">
      <h1 class="titulo-seccion">CONTACTO</h1>

      <form
        @submit.prevent="agregarContacto()"
        name="contacto"
        method="post"
        netlify
        netlify-honeypot="bot-field"
        class=" ml-auto mr-auto"
      >
        <input type="hidden" name="form-name" value="contacto" />
        <div class="form-row">
          <div class="form-group col-lg-6">
            <label for="nombre" class="texto-chico">Nombre y Apellido</label>
            <input type="text" v-model="form.nombre" class="form-control texto-chico" id="nombre" name="nombre" />
          </div>
          <div class="form-group col-lg-6">
            <label for="email" class="texto-chico">Email</label>
            <input type="email" v-model="form.email" class="form-control texto-chico" id="email" name="email" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-lg-6">
            <label for="telefono" class="texto-chico">Teléfono</label>
            <input type="text" v-model="form.tel" class="form-control texto-chico" id="telefono" name="telefono" />
          </div>
        </div>

        
         <div class="form-group">
          <label for="mensaje" class="texto-chico">Comentario:</label>
          <textarea v-model="form.mensaje" class="form-control texto-chico" rows="5" id="mensaje" name="mensaje"></textarea>
        </div>

        <button type="submit" class="btn btn-primary texto-normal">Enviar</button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "contacto",
  data() {
    return {
      form: {
        nombre: "",
        email: "",
        tel: "",
      },

      nuevaEntrada: {}
    };
  },

  methods: {
    encode(data) {
      console.log("data", data);
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

    agregarContacto() {
      this.form.push(this.nuevaEntrada);
      localStorage.setItem("local-form", JSON.stringify(this.form));

      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      let datos = this.encode({ "form-name": "contacto", ...this.form });

      axios.post("/contacto", datos, axiosConfig)
      .then(() => {
        this.$router.push('thanks')
      })
      .catch(() => {
        this.$router.push('404')
      })

      this.form.nombre = "";
      this.form.email = "";
      this.form.tel = "";
    }
  },

  created: function() {
    let datosDB = JSON.parse(localStorage.getItem("local-form"));
    if (datosDB === null) {
      this.form = [];
    } else {
      this.form = datosDB;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../public/css/styles.scss";
.btn {
  padding: 0.5em 1.6em;
  margin-top: 2em;
}
.form-group {
  padding: 1em;
}
option,
select {
  font-size: 1.2em;
}
</style>
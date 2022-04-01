<template>
  <v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="apellidos"
              :rules="nameRules"
              label="Apellidos De La Familia"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="pasesadul"
              :rules="numeRules"
              label="Núm. Pases Adultos"
              type="number"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="pasesniñ"
              :rules="numeRules"
              label="Núm. Pases Niños"
              type="number"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="pasesadulasis"
              :rules="numeRules"
              label="Núm. Pases Adultos a Usar"
              type="number"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="pasesniñasis"
              :rules="numeRules"
              label="Núm. Pases Niños a Usar"
              type="number"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-col>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="guardar">
          Guardar
        </v-btn>
      </v-col>
    </v-form>
  </v-card>
  <!-- aqui pondre el componente con un modal para ver despues de guardar los datos -->
</template>

<script>
export default {
  name: "confirma_datos",
  data: () => ({
    //variables locales
    valid: false,
    apellidos: "",
    pasesadul: "",
    pasesniñ: "",
    pasesadulasis: "",
    pasesniñasis: "",

    nameRules: [
      (v) => !!v || "Este campo es requerido",
      // (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    numeRules: [
      (v) => !!v || "Este campo es requerido",
      // (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
  }),

  methods: {
    guardar() {
      // this.validate();
      const datos = {
        ApellidosFamilia: this.apellidos,
        PasesAdultos: this.pasesadul,
        PasesNiños: this.pasesniñ,
        AsisAdultos: this.pasesadulasis,
        AsisNiños: this.pasesniñasis,
      };
      //console.log(datos);
      const uri =
        "https://confirmacion-asistencia-boda.herokuapp.com/api/confirmacion";
      this.axios
        .post(uri, datos)
        .then((response) => {
          //todo lo que trae del backend
          //console.log(response.data);
          this.$toastr.success(response.data.message, "Mensaje:");
          //this.invitados = response.data.body;
          localStorage.setItem("id", response.data.body);

          this.$router.push({ name: "Mostrar_Info" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>

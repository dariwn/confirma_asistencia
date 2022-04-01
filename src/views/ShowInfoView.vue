<template>
  <v-card>
    <v-card-title> Información Registrada</v-card-title>

    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Apellidos De Familias</th>
            <th class="text-center">Pases De Adultos Confirmados</th>
            <th class="text-center">Pases De Niños Confirmados</th>
          </tr>
        </thead>
        <tbody>
          <td class="text-center">{{ dato.ApellidosFamilia }}</td>
          <td class="text-center">{{ dato.AsisAdultos }}</td>
          <td class="text-center">{{ dato.AsisNiños }}</td>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: "MostrarInfo",
  data: () => ({
    dato: {},
  }),
  mounted() {
    this.obteninfo();
  },
  methods: {
    obteninfo() {
      let id = localStorage.getItem("id");

      const uri =
        "https://confirmacion-asistencia-boda.herokuapp.com/api/confirmacion/" +
        id;

      this.axios
        .get(uri)
        .then((response) => {
          //todo lo que trae del backend
          //console.log(response.data.body);
          this.dato = response.data.body;
          //console.log(this.dato);
        })
        .catch((error) => {
          console.log(error);
        });

      localStorage.removeItem("id");
    },
  },
};
</script>

<style></style>

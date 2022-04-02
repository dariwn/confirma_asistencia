<template>
  <v-card outLined :loading="loading">
    <v-card-title> Confirmacion De Asistencia </v-card-title>
    <ConfirmaDatos></ConfirmaDatos>

    <!-- <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Apellidos De Familias</th>
            <th class="text-center">Núm. Pases Adultos</th>
            <th class="text-center">Núm. Pases Niños</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in invitados" :key="item.ApellidosFamilia">
            <td class="text-center">{{ item.ApellidosFamilia }}</td>
            <td class="text-center">{{ item.AsisAdultos }}</td>
            <td class="text-center">{{ item.AsisNiños }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table> -->
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import ConfirmaDatos from "./ConfirmaDatos.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data: () => ({
    invitados: [],
    loading: false,
  }),
  computed: {
    ...mapState(["url"]),
  },
  mounted() {
    this.getLista();
  },
  methods: {
    getLista() {
      this.loading = true;
      const uri =
        "https://confirmacion-asistencia-boda.herokuapp.com/api/confirmacion";
      this.axios
        .get(uri)
        .then((response) => {
          //todo lo que trae del backend
          // console.log(response.data.body);
          this.invitados = response.data.body;
        })
        .catch((error) => {
          console.log(error);
        });
      this.loading = false;
    },
  },
  components: { ConfirmaDatos },
};
</script>

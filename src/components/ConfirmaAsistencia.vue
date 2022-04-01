<template>
  <v-card></v-card>
</template>
<script>
export default {
  name: "confirma_asistencia",
  data: () => ({
    form: {
      apellidos: "",
      pasesadul: "",
      pasesniñ: "",
      pasesadulasis: "",
      pasesniñasis: "",
    },
  }),
  methods: {
    guardar() {
      console.log(this.form);
    },
  },
};
</script>

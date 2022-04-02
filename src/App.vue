<template>
  <v-app>
    <v-app-bar app color="amber accent-3">
      <div class="d-flex align-center">
        <v-img
          alt="Boda Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="150"
        />
      </div>
    </v-app-bar>

    <v-main>
      <!-- <v-container>
        <v-btn @click="openForm" outlined>
          <span class="mr-4">Confirmar Asistencia</span>
          <v-icon>mdi-clipboard-edit</v-icon>
        </v-btn>
      </v-container> -->
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),

  // methods: {
  //   openForm() {
  //     this.$router.push({ name: "confirma_datos" });
  //   },
  // },
};
</script>

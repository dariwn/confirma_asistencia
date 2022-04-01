module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/confirma_asistencia/" : "/",
};
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
});

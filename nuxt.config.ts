export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/variables.css", "~/assets/styles/global.scss"],
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  buildDir: ".nuxt",
  router: {
    base: "/fashiofy/",
  },
});

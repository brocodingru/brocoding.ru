import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/scss/style.scss"],
  buildModules: ["@nuxtjs/google-fonts"],
  modules: ["@nuxtjs/color-mode"],
  googleFonts: {
    families: {
      "Inter": [400, 500, 700],
    },
  },
});

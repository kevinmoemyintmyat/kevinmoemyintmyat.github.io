// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": { prerender: true },
  },
  app: {
    baseURL: "/",
    head: {
      link: [{ rel: "icon", type: "image/png", href: "./favicon.png" }],
      title: "Kevin Moe Myint Myat - A cat dad, a developer & an artist",
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

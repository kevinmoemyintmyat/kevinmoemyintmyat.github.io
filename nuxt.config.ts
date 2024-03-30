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
      meta: [
        {
          name: "description",
          content: "Kevin Moe Myint Myat - a cat dad, a developer & an artist",
        },
        {
          name: "keywords",
          content: `Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art`,
        },
        {
          property: "og:title",
          content: `Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
        },
        {
          property: "og:type",
          content: "profile",
        },
        {
          property: "og:url",
          content: `https://kevinmoemyintmyat.github.io`,
        },
        {
          property: "og:site:name",
          content: `Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
        },
        {
          property: "og:description",
          content: `Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
        },
        {
          name: "twitter:site",
          content: "https://kevinmoemyintmyat.github.io",
        },
        {
          name: "twitter:description",
          content: "Kevin Moe Myint Myat - a cat dad, a developer & an artist",
        },
        {
          name: "google-site-verification",
          content: "Atx_wVtmc66Yl2ek",
        },
      ],
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

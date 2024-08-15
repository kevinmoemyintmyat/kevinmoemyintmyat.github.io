// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": { prerender: true },
  },
  runtimeConfig: {
    public: {
      karaoke_api_url: process.env.NUXT_ENV_KARAOKE_API,
      dev_blog_api_url: process.env.NUXT_ENV_DEV_TO_API,
    },
  },
  app: {
    baseURL: "/",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://kevinmoemyintmyat.github.io/favicon.png",
        },
      ],
      title: "Kevin Moe Myint Myat - A cat dad, a developer & an artist",
      meta: [
        {
          "http-equiv": "content-language",
          content: "en-us",
        },
        {
          name: "description",
          content: `Kevin Moe Myint Myat is a software developer and an art hobbyist based in Singapore. He is also a full-time cat dad to JieMao (https://www.instagram.com/jiemao_blackcat).
            He spends most of his time working as a software engineer at DT One (https://www.dtone.com) and during the weekends, he pursues his passion "Art" and works on his paintings. He has participated in
            World Charity Painting 2024 (https://en.artassociation.asia/wcpc) and World Heritage Painting 2024 (https://en.artassociation.asia/whpc).`,
        },
        {
          name: "keywords",
          content: `Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, poems, blogs, poem, articles, articles, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art`,
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

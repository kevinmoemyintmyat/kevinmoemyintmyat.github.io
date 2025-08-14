// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": { prerender: true },
    "/blog/**": { prerender: true },
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
          content: `Kevin Moe Myint Myat is a software developer and an art hobbyist based in Singapore. He is also a full-time cat dad to JieMao (https://www.instagram.com/jiemao_theblackcattt).
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
  modules: [
    '@nuxtjs/sitemap',
  ],
  nitro: {
    prerender: {
      routes: [
        '/',
        '/blog/',
        '/blog/3975425417229776902/',
        '/blog/3653068274143975781/',
        '/blog/4189873799748090808/',
        '/blog/1759324615477656166/',
        '/blog/6065732185309731980/',
        '/blog/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m/',
        '/blog/ftp-seer-api-ftp-seer-client-google-seo-3lf2/',
        '/blog/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff/',
        '/blog/react-xper-a-developer-s-guide-to-experiment-react-15i5/',
        '/blog/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j/',
        '/blog/a-day-in-the-life-of-a-software-engineer-1lmh/',
        '/blog/from-human-to-machine-1p1j/',
        '/blog/the-horrors-of-ai-halloween-edition--55ib/',
        '/blog/second-trip-to-bali/',
        '/blog/first-trip-to-bali/',
        '/poems/',
        '/poems/here-comes-the-sun/',
        '/poems/memoirs-of-a-ghost/',
      ]
    }
  }
});

export const sitemap = {
  hostname: 'https://kevinmoemyintmyat.github.io',
  gzip: true,
  exclude: [
    '/admin/**'
  ],
  sitemaps: {
    main: {
      routes: [
        '/',
        '/blog/',
        '/art/',
        '/music/',
        '/about/me/',
        '/poems/',
        '/blog/3975425417229776902/',
        '/blog/3653068274143975781/',
        '/blog/4189873799748090808/',
        '/blog/1759324615477656166/',
        '/blog/6065732185309731980/',
        '/blog/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m/',
        '/blog/ftp-seer-api-ftp-seer-client-google-seo-3lf2/',
        '/blog/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff/',
        '/blog/react-xper-a-developer-s-guide-to-experiment-react-15i5/',
        '/blog/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j/',
        '/blog/a-day-in-the-life-of-a-software-engineer-1lmh/',
        '/blog/from-human-to-machine-1p1j/',
        '/blog/the-horrors-of-ai-halloween-edition--55ib/',
        '/blog/second-trip-to-bali/',
        '/blog/first-trip-to-bali/',
        '/poems/here-comes-the-sun/',
        '/poems/memoirs-of-a-ghost/',
      ]
    }
  }
};

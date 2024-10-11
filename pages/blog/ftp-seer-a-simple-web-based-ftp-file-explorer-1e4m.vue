<template>
  <section class="mt-20 lg:pl-20 p-5" ref="startOfArticle">
    <h1>FTP Seer - A simple web based FTP file explorer</h1>
    <h2>Written on 23 February 2020</h2>
    <div class="blog-body"><h1>
  <a name="ive-developed-a-full-stack-app-yayy" href="#ive-developed-a-full-stack-app-yayy">
  </a>
  I've developed a full stack app. 🎉 Yayy!!
</h1>

<p>If you need a full stack app which can explore FTP server directory and get file content through web, take a look at my project.</p>

<h2>
  <a name="demos-are-below" href="#demos-are-below">
  </a>
  Demos are below.💡
</h2>

<p>Backend API - <a href="https://ftpseer.herokuapp.com" target="_blank" rel="noopener noreferrer">https://ftpseer.herokuapp.com</a><br>
Frontend UI - <a href="https://ftpseerclient.herokuapp.com" target="_blank" rel="noopener noreferrer">https://ftpseerclient.herokuapp.com</a></p>

<h2>
  <a name="source-code-at" href="#source-code-at">
  </a>
  Source code at 👾
</h2>

<p><a href="https://github.com/m3yevn/ftp-seer" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer</a> and<br>
<a href="https://github.com/m3yevn/ftp-seer-client" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer-client</a></p>

<h1>
  <a name="tech-stack-nodejs-jsftp-svelte-sapper" href="#tech-stack-nodejs-jsftp-svelte-sapper">
  </a>
  Tech Stack : NodeJS, JsFtp, Svelte, Sapper
</h1>

<p>If you wish to contribute kindly create issues and pull requests.</p>

<p>Cheers! 🍺 🍺 🍺</p>

<p>Check me out @ <a href="https://kevinmoemyintmyat.gitlab.io" target="_blank" rel="noopener noreferrer">https://kevinmoemyintmyat.gitlab.io</a></p>

</div>
  </section>
</template>

<script setup>
  useHead({
    title:
      `FTP Seer - A simple web based FTP file explorer - Written by Kevin Moe Myint Myat` ||
      "Kevin Moe Myint Myat - a cat dad, a developer & an artist",
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "https://kevinmoemyintmyat.github.io/favicon.png",
      },
    ],
    meta: [
      {
        name: "description",
        content: `FTP Seer - A simple web based FTP file explorer - Written by Kevin Moe Myint Myat`,
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
        content: `https://kevinmoemyintmyat.github.io/blog/first-trip-to-bali`,
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
    ],
    ogImage: "/favicon.png",
  });
</script>

<script>
  export default {
    methods: {
      showSection(section) {
        this.$refs[section].scrollIntoView({ behavior: "smooth" });
      },
    },
  };
</script>

<style scoped>
  div {
    margin-top: 30px;
  }

  h1 {
    font-size: 60px;
    font-weight: 700;
    padding-bottom: 10px;
  }

  h2 {
    font-size: 30px;
    padding-bottom: 10px;
  }

  .blog-body {
    margin-top: 20px;
  }

  .blog-body h1 {
    font-size: 40px;
    font-weight: 500;
    padding-bottom: 10px;
  }

  a {
    text-decortation: underline;
  }
</style>

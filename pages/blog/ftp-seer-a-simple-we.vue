<template>
  <section class="mt-20 lg:pl-20 p-5 ml-20 lg:w-4/6" ref="startOfArticle">
    <h1>FTP Seer - A simple web based FTP file explorer <br /><span>By Kevin Moe Myint Myat</span></h1>
    <h2>Written on 23 February 2020</h2>
    <img class="cover-image" src="https://media.dev.to/dynamic/image/width&#x3D;1000,height&#x3D;420,fit&#x3D;cover,gravity&#x3D;auto,format&#x3D;auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F02zlb2uu47n2zkgd6ge6.png" />
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
    <footer>
      Read my original blog on
      <a href="https://dev.to/m3yevn/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m" target="_blank">https://dev.to/m3yevn/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m</a>
    </footer>
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
        content: `node,fullstack,svelte,ftpseer, Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art`,
      },
      {
        property: "og:title",
        content: `FTP Seer - A simple web based FTP file explorer - Written by Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
      },
      {
        property: "og:type",
        content: "profile",
      },
      {
        property: "og:url",
        content: `https://kevinmoemyintmyat.github.io/blog/ftp-seer-a-simple-we`,
      },
      {
        property: "og:site:name",
        content: `FTP Seer - A simple web based FTP file explorer - Written by Kevin Moe Myint Myat`,
      },
      {
        property: "og:description",
        content: `FTP Seer - A simple web based FTP file explorer - Written by Kevin Moe Myint Myat`,
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

  h1 span {
    font-size: 50px;
    color: whitesmoke;
  }

  h2 {
    font-size: 45px;
    padding-bottom: 10px;
    line-height: 2;
  }

  .blog-body {
    margin-top: 20px;
  }

  .blog-body h1 {
    font-size: 40px;
    font-weight: 500;
    padding-bottom: 10px;
  }

  footer {
    padding-top: 32px;
    font-size: 20px;
    color: gray;
  }

  footer a {
    text-decoration: underline;
    color: maroon;
  }
</style>

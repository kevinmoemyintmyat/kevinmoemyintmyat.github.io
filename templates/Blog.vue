<template>
  <section class="mt-20 lg:pl-20 p-5 lg:ml-20 lg:w-4/6" ref="startOfArticle">
    <h1>{{ title }} <br /><span>By Kevin Moe Myint Myat</span></h1>
    <h2>Written on {{ date }}</h2>
    <img class="cover-image" src="{{ cover_image }}" />
    <div class="blog-body">{{{ html }}}</div>
    <footer>
      Read my original blog on
      <a href="{{ source }}" target="_blank">{{ source }}</a>
    </footer>
  </section>
</template>

<script setup>
  useHead({
    title:
      `{{ title }} - Written by Kevin Moe Myint Myat` ||
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
        content: `{{ title }} - Written by Kevin Moe Myint Myat`,
      },
      {
        name: "keywords",
        content: `{{tags}}, Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art`,
      },
      {
        property: "og:title",
        content: `{{ title }} - Written by Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
      },
      {
        property: "og:type",
        content: "profile",
      },
      {
        property: "og:url",
        content: `https://kevinmoemyintmyat.github.io/blog/{{ slug }}`,
      },
      {
        property: "og:site:name",
        content: `{{ title }} - Written by Kevin Moe Myint Myat`,
      },
      {
        property: "og:description",
        content: `{{ title }} - Written by Kevin Moe Myint Myat`,
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

<template>
  <section class="mt-20 lg:pl-20 p-5 lg:ml-20 lg:w-4/6" ref="startOfArticle">
    <h1>{{ title }} <br /><span>By Kevin Moe Myint Myat</span></h1>
    <div class="tip-section">
      <a href="https://ko-fi.com/m3_yevnnn" target="_blank" class="tip-button">
        Tip me if you want ☕
      </a>
    </div>
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

code {
  padding: 16px;
  background: rgb(41, 41, 41);
  display: block;
  border-radius: 12px;
  width: 1024px;
}

ol,
ul,
menu {
  list-style: decimal;
  margin: 1em;
  padding: 1em;
}

ol li {
  padding: 8px;
}

.blog-body h1 {
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 10px;
}

footer {
  padding-top: 32px;
  font-size: 20px;
  color: whitesmoke;
}

footer a {
  text-decoration: underline;
  color: crimson;
}

.tip-section {
  margin-top: 40px;
  text-align: left;
}

.tip-button {
  display: inline-block;
  background: linear-gradient(135deg, #1a1a1a 0%, #8b0000 100%);
  color: white;
  padding: 15px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);
}

.tip-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 0, 0, 0.5);
  background: linear-gradient(135deg, #8b0000 0%, #1a1a1a 100%);
}
</style>

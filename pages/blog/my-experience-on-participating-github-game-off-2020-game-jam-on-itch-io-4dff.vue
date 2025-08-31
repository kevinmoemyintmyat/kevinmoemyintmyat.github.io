<template>
  <section class="mt-20 lg:pl-20 p-5 lg:ml-20 lg:w-4/6" ref="startOfArticle">
    <h1>👾 Krescent - My experience on participating Github Game Off 2020 Game Jam on Itch.io 👾 <br /><span>By Kevin Moe Myint Myat</span></h1>
    <div class="tip-section">
      <a href="https://ko-fi.com/m3_yevnnn" target="_blank" class="tip-button">
        Tip me if you want ☕
      </a>
    </div>
    <h2>Written on 23 December 2020</h2>
    <img class="cover-image" src="https://media2.dev.to/dynamic/image/width&#x3D;1000,height&#x3D;420,fit&#x3D;cover,gravity&#x3D;auto,format&#x3D;auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fnisypnnl5ktwlvbdx1pp.png" />
    <div class="blog-body"><p>😅 Last month I participated in a game jam on <a href="https://itch.io" target="_blank" rel="noopener noreferrer">https://itch.io</a> with a browser game that I've co-developed with my colleague from work. It's called...</p>

<h1>
  <a name="krescent-moonshot-themed-game-" href="#krescent-moonshot-themed-game-">
  </a>
  Krescent ( 🚀 Moonshot Themed Game 🌙 )
</h1>

<p>The submission can be viewed here ... </p>

<p><a href="https://m3yevn.itch.io/krescent" target="_blank" rel="noopener noreferrer">https://m3yevn.itch.io/krescent</a></p>

<p>The actual link to the game is at ...</p>

<p><a href="https://krescent.vercel.app/" target="_blank" rel="noopener noreferrer">https://krescent.vercel.app/</a></p>

<h1>
  <a name="the-idea" href="#the-idea">
  </a>
  <strong>THE IDEA</strong> 💡
</h1>

<p>The theme is called <code>Moonshot</code>, so I was pretty sure I'm going to build a planetary theme. After that, as I came from web development background, I started research Javascript games and encountered this game tutorial called The Aviator which is created with ThreeJS.</p>

<p>Ref: <a href="https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/" target="_blank" rel="noopener noreferrer">https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/</a></p>

<p>This game has the basic idea of what I wanted to do which is an endless running game on the moon avoiding rocks and eating points. Very basic and easy for beginner game developer!</p>

<h1>
  <a name="the-tech-stack" href="#the-tech-stack">
  </a>
  <strong>THE TECH STACK</strong> 📚
</h1>

<ol>
<li>Programming - Javascript</li>
<li>Framework - Nuxt VueJS</li>
<li>3D WebGL Engine - BabylonJS</li>
<li>Hosting - Vercel</li>
<li>OS wrappers - ElectronJS</li>
</ol>

<p>Javascript as a core programming language is guaranteed since that's the one that I'm comfortable with and luckily my colleague who is a python developer agree to explore it. </p>

<p>For the framework, VueJS Nuxt is a choice because I'm used to work with React in professional life and that's why I took it up a notch and tried something different. However, I've got a few Vue experience on personal projects and hobby projects. Nuxt was chosen just for the quick scaffolding and famous DX (Developer Experience)</p>

<p>For 3D WebGL engine, I would like to try ThreeJS because it's well known across JS world and I'm interested to test it out. But then again, my colleague would like to explore BabylonJS and I also agree to it since BabylonJS has a good documentation as well as a good reputation comparable with ThreeJS.</p>

<h1>
  <a name="the-implementation" href="#the-implementation">
  </a>
  <strong>THE IMPLEMENTATION</strong> ⚒️
</h1>

<p>We have to used up our hard-earned weekends developing the game and researching. At first, coming up with a boilerplate was easy because of Nuxt 's excellent toolings. Vuex is also used to manage the state across different components. The difficulty came when we started touching on Canvas. </p>

<p>As for convenience I used Vue-Babylonjs wrapper initially which has a learning curve abit deeper that we expected. And the documentation doesn't seem to help us also. The wrapper library has done a great job in starting the scene and mesh objects but when it comes to real dirty job, it lacks the freedom to program. </p>

<p>That leads us to implement our actual game logic like collision, moving, rotation etc to use the vanilla babylonJS object approach since it has the playground and big community with lots of examples to play with. Surprisingly, when we were doing the development, BabylonJS just released the new documentation as well which is super helpful for us.</p>

<p>After 3 weeks of grinding our weekends and some weekday nights, the basic functions of game has done. I took it as a win. The last week, we just used it for improvements and garnishing with better game experience.</p>

<h1>
  <a name="the-lesson" href="#the-lesson">
  </a>
  <strong>THE LESSON</strong> 🎄
</h1>

<p>Although we didn't win, that was not our intension in the first place. Our intension was to try out game development in action and yes, we felt it. Game development, as fun as it is when the players are playing, the sweat and tears that the developers have to put in to details to create a good game is just admirable. I got a lot of fun working on that and it helps me to grow in my day-to-day developer career also. Hope you guys like my sharing!</p>

<p>How about you guys also? <br>
Have some game development experience? <br>
❓❓❓❓<br>
Please share in the comments below. 👇</p>

<p>The Github repo for the project <br>
<a href="https://github.com/m3yevn/krescent" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/krescent</a></p>

</div>
    <footer>
      Read my original blog on
      <a href="https://dev.to/m3yevn/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff" target="_blank">https://dev.to/m3yevn/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff</a>
    </footer>
  </section>
</template>

<script setup>
useHead({
  title:
    `👾 Krescent - My experience on participating Github Game Off 2020 Game Jam on Itch.io 👾 - Written by Kevin Moe Myint Myat` ||
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
      content: `👾 Krescent - My experience on participating Github Game Off 2020 Game Jam on Itch.io 👾 - Written by Kevin Moe Myint Myat`,
    },
    {
      name: "keywords",
      content: `gamedev,vue,babylonjs, Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art`,
    },
    {
      property: "og:title",
      content: `👾 Krescent - My experience on participating Github Game Off 2020 Game Jam on Itch.io 👾 - Written by Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
    },
    {
      property: "og:type",
      content: "profile",
    },
    {
      property: "og:url",
      content: `https://kevinmoemyintmyat.github.io/blog/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff`,
    },
    {
      property: "og:site:name",
      content: `👾 Krescent - My experience on participating Github Game Off 2020 Game Jam on Itch.io 👾 - Written by Kevin Moe Myint Myat`,
    },
    {
      property: "og:description",
      content: `👾 Krescent - My experience on participating Github Game Off 2020 Game Jam on Itch.io 👾 - Written by Kevin Moe Myint Myat`,
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

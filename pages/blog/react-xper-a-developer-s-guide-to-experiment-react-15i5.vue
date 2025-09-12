<template>
  <section class="mt-20 lg:pl-20 p-5 lg:ml-20 lg:w-4/6" ref="startOfArticle">
    <h1>React Xper - A developer&#x27;s guide to experiment React 👨‍🔬 <br /><span>By Kevin Moe Myint Myat</span></h1>
    <div class="tip-section">
      <a href="https://ko-fi.com/m3_yevnnn" target="_blank" class="tip-button">
        Tip me if you want ☕
      </a>
    </div>
    <h2>Written on 10 July 2021</h2>
    <img class="cover-image" src="https://media2.dev.to/dynamic/image/width&#x3D;1000,height&#x3D;420,fit&#x3D;cover,gravity&#x3D;auto,format&#x3D;auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0yvn9awow1fbhteif6tq.PNG" />
    <div class="blog-body"><p>React Xper is a experimental website to test out the<br>
many concepts of ReactJS and its related libraries.<br>
The beautiful UI is bootstrapped with Grommet v2 with a little bit of styled-components custom styling. Dark mode is available too 🧛‍♂️ .</p>

<blockquote>
<h4>
  <a name="the-main-purpose-of-this-website-is-to-experiment-almost-any-technologies-with-reactjs" href="#the-main-purpose-of-this-website-is-to-experiment-almost-any-technologies-with-reactjs">
  </a>
  The main purpose of this website is to experiment almost any technologies with ReactJS. 👨‍💻
</h4>
</blockquote>

<p>So far, it is currently focused mainly on the new React hooks such as useEffect, useReducer, useMemo and internationalization library such as react-intl. ㊗️</p>

<p>Whenever I have an idea or two and want to try it out as a proof-of-concept, I will use this boilerplate to add-on.<br>
Moreover, it has a brief technical explanation in every post so other people can also visit the pages and have an understanding. 👍🏻</p>

<p>Although there's only like 4 lab experiments , I expect it to grow in the future.</p>

<blockquote>
<h4>
  <a name="all-the-science-about-reactjs-will-be-happening-there-for-sure" href="#all-the-science-about-reactjs-will-be-happening-there-for-sure">
  </a>
  All the science about ReactJS will be happening there for sure.
</h4>
</blockquote>

<p>Please visit <a href="https://react-xper.vercel.app/" target="_blank" rel="noopener noreferrer">https://react-xper.vercel.app/</a> to check it out.<br>
Or if you would like to contribute or make experiments on your own, create a branch and pull request at <a href="https://github.com/m3yevn/react-xper" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/react-xper</a></p>

<p>Thanks for reading &amp; Stay safe! 😷</p>

</div>
    <footer>
      Read my original blog on
      <a href="https://dev.to/m3yevn/react-xper-a-developer-s-guide-to-experiment-react-15i5" target="_blank">https://dev.to/m3yevn/react-xper-a-developer-s-guide-to-experiment-react-15i5</a>
    </footer>
  </section>
</template>

<script setup>
useHead({
  title:
    `React Xper - A developer&#x27;s guide to experiment React 👨‍🔬 - Written by Kevin Moe Myint Myat` ||
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
      content: `React Xper - A developer&#x27;s guide to experiment React 👨‍🔬 - Written by Kevin Moe Myint Myat`,
    },
    {
      name: "keywords",
      content: `react,reactxper,experiments,javascript, Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art`,
    },
    {
      property: "og:title",
      content: `React Xper - A developer&#x27;s guide to experiment React 👨‍🔬 - Written by Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
    },
    {
      property: "og:type",
      content: "profile",
    },
    {
      property: "og:url",
      content: `https://kevinmoemyintmyat.github.io/blog/react-xper-a-developer-s-guide-to-experiment-react-15i5`,
    },
    {
      property: "og:site:name",
      content: `React Xper - A developer&#x27;s guide to experiment React 👨‍🔬 - Written by Kevin Moe Myint Myat`,
    },
    {
      property: "og:description",
      content: `React Xper - A developer&#x27;s guide to experiment React 👨‍🔬 - Written by Kevin Moe Myint Myat`,
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
/* Import Google Fonts for better typography */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

div {
  margin-top: 30px;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 10px;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

/* Responsive font sizing for larger screens */
@media (min-width: 640px) {
  h1 {
    font-size: 40px;
  }
}

@media (min-width: 768px) {
  h1 {
    font-size: 50px;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 48px;
  }
}

h1 span {
  color: whitesmoke;
  font-weight: 400;
  font-size: 0.7em;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  padding-bottom: 20px;
  line-height: 1.4;
  font-weight: 500;
}

/* Responsive font sizing for larger screens */
@media (min-width: 640px) {
  h2 {
    font-size: 30px;
  }
}

@media (min-width: 768px) {
  h2 {
    font-size: 38px;
  }
}

@media (min-width: 1024px) {
  h2 {
    font-size: 32px;
    line-height: 1.4;
  }
}

.blog-body {
  margin-top: 20px;
  max-width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Improved typography for blog content */
.blog-body p {
  font-size: 18px;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  color: whitesmoke;
  font-weight: 400;
  letter-spacing: 0.01em;
}

.blog-body h1,
.blog-body h2,
.blog-body h3,
.blog-body h4,
.blog-body h5,
.blog-body h6 {
  font-family: 'Playfair Display', serif;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  font-weight: 600;
}

.blog-body h1 {
  font-size: 2.5rem;
}

.blog-body h2 {
  font-size: 2rem;
  color: crimson;
}

.blog-body h3 {
  font-size: 1.75rem;
}

.blog-body h4 {
  font-size: 1.5rem;
}

/* Improved image spacing and styling */
.blog-body img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.cover-image {
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

/* Improved code blocks */
code {
  padding: 1.5rem;
  background: rgb(41, 41, 41);
  display: block;
  border-radius: 12px;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  margin: 1.5rem 0;
}

/* Improved lists */
ol,
ul,
menu {
  margin: 1.5rem 0;
  padding-left: 2rem;
  line-height: 1.65;
}

ol li,
ul li {
  padding: 0.5rem 0;
  font-size: 18px;
  line-height: 1.65;
}

/* Improved blockquotes */
blockquote {
  border-left: 4px solid crimson;
  padding: 1.5rem 2rem;
  margin: 2rem 0;
  background-color: rgba(220, 20, 60, 0.1);
  border-radius: 0 8px 8px 0;
  font-style: italic;
  font-size: 1.1em;
  line-height: 1.6;
}

blockquote p {
  margin: 0;
  font-weight: 400;
}

/* Improved tables */
.blog-body table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: 16px;
}

.blog-body th,
.blog-body td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-body th {
  background-color: rgba(220, 20, 60, 0.2);
  font-weight: 600;
  color: crimson;
}

footer {
  padding-top: 3rem;
  font-size: 18px;
  color: whitesmoke;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
}

footer a {
  text-decoration: underline;
  color: crimson;
  font-weight: 500;
}

.tip-section {
  margin-top: 20px;
  text-align: left;
}

.tip-button {
  display: inline-block;
  background: linear-gradient(135deg, #1a1a1a 0%, #8b0000 50%, #1a1a1a 100%);
  background-size: 200% 100%;
  background-position: 0% 0%;
  color: white;
  padding: 12px 24px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: background-position 0.5s ease-in-out;
  box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);
}

/* Responsive sizing for larger screens */
@media (min-width: 640px) {
  .tip-section {
    margin-top: 30px;
  }
  
  .tip-button {
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 25px;
  }
}

.tip-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(139, 0, 0, 0.6), 0 0 20px rgba(139, 0, 0, 0.4);
  background-position: 100% 0%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .blog-body p {
    font-size: 16px;
    line-height: 1.6;
  }
  
  .blog-body h1 {
    font-size: 2rem;
  }
  
  .blog-body h2 {
    font-size: 1.5rem;
  }
  
  .blog-body img {
    margin: 1.5rem auto;
  }
  
  blockquote {
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
  }
}

@media (min-width: 1200px) {
  .blog-body {
    max-width: 800px;
  }
}
</style>

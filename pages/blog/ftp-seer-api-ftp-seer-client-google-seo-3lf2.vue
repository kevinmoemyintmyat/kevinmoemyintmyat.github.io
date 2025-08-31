<template>
  <section class="mt-20 lg:pl-20 p-5 lg:ml-20 lg:w-4/6" ref="startOfArticle">
    <h1>FTP Seer API + FTP Seer Client Google SEO <br /><span>By Kevin Moe Myint Myat</span></h1>
    <div class="tip-section">
      <a href="https://ko-fi.com/m3_yevnnn" target="_blank" class="tip-button">
        Tip me if you want ☕
      </a>
    </div>
    <h2>Written on 29 March 2020</h2>
    <img class="cover-image" src="https://media2.dev.to/dynamic/image/width&#x3D;1000,height&#x3D;420,fit&#x3D;cover,gravity&#x3D;auto,format&#x3D;auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fliw75hbrte70vgzwwmhy.png" />
    <div class="blog-body"><h1>
  <a name="my-open-source-project-ftp-seer-is-on-google-search-now-yay" href="#my-open-source-project-ftp-seer-is-on-google-search-now-yay">
  </a>
  My open source project FTP Seer is on Google Search now. Yay!!! 🦄
</h1>


<hr>

<h3>
  <a name="background-of-ftp-seer" href="#background-of-ftp-seer">
  </a>
  Background of FTP Seer 💎
</h3>

<p>Back in the days, when I was working on an in-house project where the client requirements are to gather application logs from remote server using FTP protocol and show it on their admin portal, I needed a backend API to fetch directory list and get file contents.</p>

<p>I found the <a href="https://www.npmjs.com/package/jsftp" target="_blank" rel="noopener noreferrer">JSFTP library</a> which is pretty useful for my case and decided to put that in my tech stack. After that, I use Node and ExpressJS to serve http server to create a RESTful API which has now become the <a href="https://ftpseer.herokuapp.com/" target="_blank" rel="noopener noreferrer">FTP Seer API</a></p>

<h3>
  <a name="continue-to-develop" href="#continue-to-develop">
  </a>
  Continue to develop 😎
</h3>

<p>The API serve its purpose and the in-house project was done. However, I felt the need to make it open-source and create a full-stack application so that other developers can utilise it as well. So, starting from three or four months back, I picked up the old API in my archived repository and  polished it by refactoring. I even wrote a landing page so that people can test the API just by the first visit.</p>

<h3>
  <a name="giving-it-a-demo-client-application" href="#giving-it-a-demo-client-application">
  </a>
  Giving it a demo client application 💄
</h3>

<p>In order to properly use it, I also created a frontend application with a framework that I was obsessed with back then which is Svelte and Sapper framework to serve it universally (Client, Server-Side, Service-Worker).<br>
The demo frontend application becomes <a href="https://ftpseerclient.herokuapp.com/" target="_blank" rel="noopener noreferrer">FTP Seer Client</a>.</p>

<h3>
  <a name="deploying-the-apps" href="#deploying-the-apps">
  </a>
  Deploying the apps ⚙️
</h3>

<p>For deployment, since I didn't intend to purchase a domain for it, I used Heroku to deploy on their domain. I set up a CircleCI CI/CD pipeline so that whenever I push my latest commit it will deploy to heroku. The pipeline is available below<br>
FTP Seer API - <a href="https://circleci.com/gh/m3yevn/ftp-seer" target="_blank" rel="noopener noreferrer">https://circleci.com/gh/m3yevn/ftp-seer</a><br>
FTP Seer Client - <a href="https://circleci.com/gh/m3yevn/ftp-seer-client" target="_blank" rel="noopener noreferrer">https://circleci.com/gh/m3yevn/ftp-seer-client</a></p>

<p>and the configuration is at <br>
<a href="https://github.com/m3yevn/ftp-seer/blob/master/.circleci/config.yml" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer/blob/master/.circleci/config.yml</a><br>
<a href="https://github.com/m3yevn/ftp-seer-client/blob/master/.circleci/config.yml" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer-client/blob/master/.circleci/config.yml</a></p>

<h3>
  <a name="making-them-available-on-google" href="#making-them-available-on-google">
  </a>
  Making them available on Google 🌎
</h3>

<p>However, Heroku domains are bad in SEO search results, therefore I used meta tags to provide suitable keywords, images, authors to make Google to crawl properly. I used Google Search Console and get verification meta tags , add them on the respective index.html and we're good to go.</p>

<h3>
  <a name="the-final-result-is-shown-in-the-cover-image-where-you-can-see-both-ftp-seer-applications-when-you-make-a-search-on-google" href="#the-final-result-is-shown-in-the-cover-image-where-you-can-see-both-ftp-seer-applications-when-you-make-a-search-on-google">
  </a>
  The final result is shown in the cover image where you can see both FTP Seer applications when you make a search on Google.
</h3>


<hr>

<h4>
  <a name="stay-safe-and-thanks-for-reading" href="#stay-safe-and-thanks-for-reading">
  </a>
  Stay safe and Thanks for reading! ❤️
</h4>

<h5>
  <a name="catch-up-with-me-at-httpskevinmoemyintmyatgitlabio" href="#catch-up-with-me-at-httpskevinmoemyintmyatgitlabio">
  </a>
  Catch up with me at <a href="https://kevinmoemyintmyat.gitlab.io" target="_blank" rel="noopener noreferrer">https://kevinmoemyintmyat.gitlab.io</a>
</h5>

</div>
    <footer>
      Read my original blog on
      <a href="https://dev.to/m3yevn/ftp-seer-api-ftp-seer-client-google-seo-3lf2" target="_blank">https://dev.to/m3yevn/ftp-seer-api-ftp-seer-client-google-seo-3lf2</a>
    </footer>
  </section>
</template>

<script setup>
useHead({
  title:
    `FTP Seer API + FTP Seer Client Google SEO - Written by Kevin Moe Myint Myat` ||
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
      content: `FTP Seer API + FTP Seer Client Google SEO - Written by Kevin Moe Myint Myat`,
    },
    {
      name: "keywords",
      content: `ftpseer,ftpseerapi,ftpseerclient,seer, Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art`,
    },
    {
      property: "og:title",
      content: `FTP Seer API + FTP Seer Client Google SEO - Written by Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
    },
    {
      property: "og:type",
      content: "profile",
    },
    {
      property: "og:url",
      content: `https://kevinmoemyintmyat.github.io/blog/ftp-seer-api-ftp-seer-client-google-seo-3lf2`,
    },
    {
      property: "og:site:name",
      content: `FTP Seer API + FTP Seer Client Google SEO - Written by Kevin Moe Myint Myat`,
    },
    {
      property: "og:description",
      content: `FTP Seer API + FTP Seer Client Google SEO - Written by Kevin Moe Myint Myat`,
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
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 10px;
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
}

h2 {
  font-size: 24px;
  padding-bottom: 20px;
  line-height: 1.5;
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
    line-height: 1.5;
  }
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
</style>

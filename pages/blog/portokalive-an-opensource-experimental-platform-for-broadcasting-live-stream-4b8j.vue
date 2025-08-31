<template>
  <section class="mt-20 lg:pl-20 p-5 lg:ml-20 lg:w-4/6" ref="startOfArticle">
    <h1>PortokaLive - An opensource experimental platform for broadcasting live stream <br /><span>By Kevin Moe Myint Myat</span></h1>
    <div class="tip-section">
      <a href="https://ko-fi.com/m3_yevnnn" target="_blank" class="tip-button">
        Tip me if you want ☕
      </a>
    </div>
    <h2>Written on 29 July 2021</h2>
    <img class="cover-image" src="" />
    <div class="blog-body"><p>🎉🎉🎉 After years of procrastinating on working on this project, I'm finally proud to launch this platform PortokaLive to public. Hooray! Here's the link</p>

<ul>
<li>Web ( <a href="https://portokalive.vercel.app/" target="_blank" rel="noopener noreferrer">https://portokalive.vercel.app/</a> )</li>
<li>Mobile ( <a href="https://play.google.com/store/apps/details?id=com.portokalive" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.portokalive</a>)</li>
</ul>

<h1>
  <a name="how-it-started-the-origin" href="#how-it-started-the-origin">
  </a>
  🌞 How it started (The origin)
</h1>

<p>PortokaLive was started off as a coding challenge by one of the company that I was interviewing back in 2019. The company requested me to showcase my coding ability and asked to create a proof-of-concept POC application which can do a live-streaming between Mobile Application and Web.</p>

<p>Since I'm proficient in Javascript, I've done my research and found that <a href="https://www.npmjs.com/package/node-media-server" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/node-media-server</a> (Node Media Server) is a viable option for me to use to implement this kind of feature.</p>

<p>I've checked out their code, forked and changed some styling/navigation to the react-native application which will do the recording and broadcasting as well as the node-media-server using rtmp protocol.</p>

<p>There are lots of tutorials online on how to play the live stream in React web using videojs. Luckily, node-media-server provide option to play the video in flv format which directly suits our needs.</p>

<p>Eventually, after 2 or 3 days of self hackathon, the suite of Mobile Client, Web Client, Media Server and Auth API server written in node.js are completed and demonstrated to them. Anyway, I ended up not accepting their offer and this POC project was left behind as a byproduct hanging in my repository.</p>

<h1>
  <a name="rebranding-to-another-name" href="#rebranding-to-another-name">
  </a>
  💙 Rebranding to another name
</h1>

<p>When it was created it was given the company's name and logo, which is in Orange and white color theme. Considering to rebrand this project, I've decided to just stick to the original theme and also give the name as "OrangeLive" which I thought was pretty good. However, after searching on the Google, it seems that the name was taken by another company leading me to change it into something else. I tried to use Google Translate to search other names of Orange in other languages.</p>

<p>Finally, I found out Orange in Greek language is called <code>Portokali</code>.<br>
<a href="https://translate.google.com/?sl=el&amp;tl=en&amp;text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%AC%CE%BB%CE%B9&amp;op=translate&amp;hl=en" target="_blank" rel="noopener noreferrer">https://translate.google.com/?sl=el&amp;tl=en&amp;text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%AC%CE%BB%CE%B9&amp;op=translate&amp;hl=en</a></p>

<p>And fortunately, I can omit the "L" and "I" of the <code>Live</code> word if I merged them together. So, there it goes. "PortokaLive"</p>

<h1>
  <a name="tech-stack" href="#tech-stack">
  </a>
  📚 Tech Stack
</h1>

<p>The tech stack was initially a rush because I just want to quickly completed in a few days so I just went for my comfort stack which is </p>

<ol>
<li>React for Web UI</li>
<li>Bootstrap for Web theme</li>
<li>Node.JS (Typescript) for API</li>
<li>ReactNative for Mobile</li>
<li>Ui Kitten for Mobile theme</li>
</ol>

<p>There was a change in media server because media server with rtmp support cannot be deployed on any free backend hosting. (Or maybe at least I don't know, Give a comment below if you know how to 😉)<br>
Therefore, I changed it to using api.video(<a href="https://api.video" target="_blank" rel="noopener noreferrer">https://api.video</a>)  freemium which is great except the part they put watermark if you want to use it without paying premium charges.</p>

<p>api.video came with a cool REST api and iframe web player which makes my life easier so that I do not need to develop all the wrappers around it.</p>

<h1>
  <a name="illustration-design" href="#illustration-design">
  </a>
  💅 Illustration Design
</h1>

<p>To put some aesthetic design in my app, I've used Undraw's free illustrations which are not only attractive but also accurately designed to the context.</p>

<p>Please checkout <a href="https://undraw.co/" target="_blank" rel="noopener noreferrer">https://undraw.co/</a>  (❤️ Super cool illustration pack!)</p>

<h1>
  <a name="conclusion" href="#conclusion">
  </a>
  Conclusion
</h1>

<p>Disclaimer of this application is that it is not meant for production or public use but anyone who are interested in these tech stack can checkout and learn from it for educational purpose.</p>

<p>Stay safe and Thanks for the read! 🙇‍♂️🙇‍♂️</p>

<p>Author: Kevin Moe Myint Myat<br>
<a href="https://kevinmoemyintmyat.gitlab.io" target="_blank" rel="noopener noreferrer">https://kevinmoemyintmyat.gitlab.io</a></p>

</div>
    <footer>
      Read my original blog on
      <a href="https://dev.to/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j" target="_blank">https://dev.to/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j</a>
    </footer>
  </section>
</template>

<script setup>
useHead({
  title:
    `PortokaLive - An opensource experimental platform for broadcasting live stream - Written by Kevin Moe Myint Myat` ||
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
      content: `PortokaLive - An opensource experimental platform for broadcasting live stream - Written by Kevin Moe Myint Myat`,
    },
    {
      name: "keywords",
      content: `portokalive,portoka,live,react, Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art`,
    },
    {
      property: "og:title",
      content: `PortokaLive - An opensource experimental platform for broadcasting live stream - Written by Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
    },
    {
      property: "og:type",
      content: "profile",
    },
    {
      property: "og:url",
      content: `https://kevinmoemyintmyat.github.io/blog/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j`,
    },
    {
      property: "og:site:name",
      content: `PortokaLive - An opensource experimental platform for broadcasting live stream - Written by Kevin Moe Myint Myat`,
    },
    {
      property: "og:description",
      content: `PortokaLive - An opensource experimental platform for broadcasting live stream - Written by Kevin Moe Myint Myat`,
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

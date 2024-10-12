export default [
  {
    type_of: "article",
    id: 774965,
    title:
      "PortokaLive - An opensource experimental platform for broadcasting live stream",
    description:
      "🎉🎉🎉 After years of procrastinating on working on this project, I'm finally proud to launch this...",
    readable_publish_date: "Jul 29 '21",
    slug: "portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",
    path: "/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",
    url: "https://dev.to/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",
    comments_count: 0,
    public_reactions_count: 1,
    collection_id: null,
    published_timestamp: "2021-07-29T06:04:22Z",
    positive_reactions_count: 1,
    cover_image: null,
    social_image:
      "https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7mmocpymsmn2udq3mv3c.png",
    canonical_url:
      "https://dev.to/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",
    created_at: "2021-07-29T06:04:22Z",
    edited_at: null,
    crossposted_at: null,
    published_at: "2021-07-29T06:04:22Z",
    last_comment_at: "2021-07-29T06:04:22Z",
    reading_time_minutes: 3,
    tag_list: "portokalive, portoka, live, react",
    tags: ["portokalive", "portoka", "live", "react"],
    body_html:
      '<p>🎉🎉🎉 After years of procrastinating on working on this project, I\'m finally proud to launch this platform PortokaLive to public. Hooray! Here\'s the link</p>\n\n<ul>\n<li>Web ( <a href="https://portokalive.vercel.app/" target="_blank" rel="noopener noreferrer">https://portokalive.vercel.app/</a> )</li>\n<li>Mobile ( <a href="https://play.google.com/store/apps/details?id=com.portokalive" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.portokalive</a>)</li>\n</ul>\n\n<h1>\n  <a name="how-it-started-the-origin" href="#how-it-started-the-origin">\n  </a>\n  🌞 How it started (The origin)\n</h1>\n\n<p>PortokaLive was started off as a coding challenge by one of the company that I was interviewing back in 2019. The company requested me to showcase my coding ability and asked to create a proof-of-concept POC application which can do a live-streaming between Mobile Application and Web.</p>\n\n<p>Since I\'m proficient in Javascript, I\'ve done my research and found that <a href="https://www.npmjs.com/package/node-media-server" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/node-media-server</a> (Node Media Server) is a viable option for me to use to implement this kind of feature.</p>\n\n<p>I\'ve checked out their code, forked and changed some styling/navigation to the react-native application which will do the recording and broadcasting as well as the node-media-server using rtmp protocol.</p>\n\n<p>There are lots of tutorials online on how to play the live stream in React web using videojs. Luckily, node-media-server provide option to play the video in flv format which directly suits our needs.</p>\n\n<p>Eventually, after 2 or 3 days of self hackathon, the suite of Mobile Client, Web Client, Media Server and Auth API server written in node.js are completed and demonstrated to them. Anyway, I ended up not accepting their offer and this POC project was left behind as a byproduct hanging in my repository.</p>\n\n<h1>\n  <a name="rebranding-to-another-name" href="#rebranding-to-another-name">\n  </a>\n  💙 Rebranding to another name\n</h1>\n\n<p>When it was created it was given the company\'s name and logo, which is in Orange and white color theme. Considering to rebrand this project, I\'ve decided to just stick to the original theme and also give the name as "OrangeLive" which I thought was pretty good. However, after searching on the Google, it seems that the name was taken by another company leading me to change it into something else. I tried to use Google Translate to search other names of Orange in other languages.</p>\n\n<p>Finally, I found out Orange in Greek language is called <code>Portokali</code>.<br>\n<a href="https://translate.google.com/?sl=el&amp;tl=en&amp;text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%AC%CE%BB%CE%B9&amp;op=translate&amp;hl=en" target="_blank" rel="noopener noreferrer">https://translate.google.com/?sl=el&amp;tl=en&amp;text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%AC%CE%BB%CE%B9&amp;op=translate&amp;hl=en</a></p>\n\n<p>And fortunately, I can omit the "L" and "I" of the <code>Live</code> word if I merged them together. So, there it goes. "PortokaLive"</p>\n\n<h1>\n  <a name="tech-stack" href="#tech-stack">\n  </a>\n  📚 Tech Stack\n</h1>\n\n<p>The tech stack was initially a rush because I just want to quickly completed in a few days so I just went for my comfort stack which is </p>\n\n<ol>\n<li>React for Web UI</li>\n<li>Bootstrap for Web theme</li>\n<li>Node.JS (Typescript) for API</li>\n<li>ReactNative for Mobile</li>\n<li>Ui Kitten for Mobile theme</li>\n</ol>\n\n<p>There was a change in media server because media server with rtmp support cannot be deployed on any free backend hosting. (Or maybe at least I don\'t know, Give a comment below if you know how to 😉)<br>\nTherefore, I changed it to using api.video(<a href="https://api.video" target="_blank" rel="noopener noreferrer">https://api.video</a>)  freemium which is great except the part they put watermark if you want to use it without paying premium charges.</p>\n\n<p>api.video came with a cool REST api and iframe web player which makes my life easier so that I do not need to develop all the wrappers around it.</p>\n\n<h1>\n  <a name="illustration-design" href="#illustration-design">\n  </a>\n  💅 Illustration Design\n</h1>\n\n<p>To put some aesthetic design in my app, I\'ve used Undraw\'s free illustrations which are not only attractive but also accurately designed to the context.</p>\n\n<p>Please checkout <a href="https://undraw.co/" target="_blank" rel="noopener noreferrer">https://undraw.co/</a>  (❤️ Super cool illustration pack!)</p>\n\n<h1>\n  <a name="conclusion" href="#conclusion">\n  </a>\n  Conclusion\n</h1>\n\n<p>Disclaimer of this application is that it is not meant for production or public use but anyone who are interested in these tech stack can checkout and learn from it for educational purpose.</p>\n\n<p>Stay safe and Thanks for the read! 🙇‍♂️🙇‍♂️</p>\n\n<p>Author: Kevin Moe Myint Myat<br>\n<a href="https://kevinmoemyintmyat.gitlab.io" target="_blank" rel="noopener noreferrer">https://kevinmoemyintmyat.gitlab.io</a></p>\n\n',
    body_markdown:
      "🎉🎉🎉 After years of procrastinating on working on this project, I'm finally proud to launch this platform PortokaLive to public. Hooray! Here's the link\n - Web ( https://portokalive.vercel.app/ )\n - Mobile ( https://play.google.com/store/apps/details?id=com.portokalive)\n\n# 🌞 How it started (The origin)\n\nPortokaLive was started off as a coding challenge by one of the company that I was interviewing back in 2019. The company requested me to showcase my coding ability and asked to create a proof-of-concept POC application which can do a live-streaming between Mobile Application and Web.\n\nSince I'm proficient in Javascript, I've done my research and found that https://www.npmjs.com/package/node-media-server (Node Media Server) is a viable option for me to use to implement this kind of feature.\n\nI've checked out their code, forked and changed some styling/navigation to the react-native application which will do the recording and broadcasting as well as the node-media-server using rtmp protocol.\n\nThere are lots of tutorials online on how to play the live stream in React web using videojs. Luckily, node-media-server provide option to play the video in flv format which directly suits our needs.\n\nEventually, after 2 or 3 days of self hackathon, the suite of Mobile Client, Web Client, Media Server and Auth API server written in node.js are completed and demonstrated to them. Anyway, I ended up not accepting their offer and this POC project was left behind as a byproduct hanging in my repository.\n\n# 💙 Rebranding to another name\n\nWhen it was created it was given the company's name and logo, which is in Orange and white color theme. Considering to rebrand this project, I've decided to just stick to the original theme and also give the name as \"OrangeLive\" which I thought was pretty good. However, after searching on the Google, it seems that the name was taken by another company leading me to change it into something else. I tried to use Google Translate to search other names of Orange in other languages.\n\nFinally, I found out Orange in Greek language is called `Portokali`.\nhttps://translate.google.com/?sl=el&tl=en&text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%AC%CE%BB%CE%B9&op=translate&hl=en\n\nAnd fortunately, I can omit the \"L\" and \"I\" of the `Live` word if I merged them together. So, there it goes. \"PortokaLive\"\n\n# 📚 Tech Stack\n\nThe tech stack was initially a rush because I just want to quickly completed in a few days so I just went for my comfort stack which is \n\n1. React for Web UI\n2. Bootstrap for Web theme\n3. Node.JS (Typescript) for API\n4. ReactNative for Mobile\n5. Ui Kitten for Mobile theme\n\nThere was a change in media server because media server with rtmp support cannot be deployed on any free backend hosting. (Or maybe at least I don't know, Give a comment below if you know how to 😉)\nTherefore, I changed it to using api.video(https://api.video)  freemium which is great except the part they put watermark if you want to use it without paying premium charges.\n\napi.video came with a cool REST api and iframe web player which makes my life easier so that I do not need to develop all the wrappers around it.\n\n# 💅 Illustration Design\n\nTo put some aesthetic design in my app, I've used Undraw's free illustrations which are not only attractive but also accurately designed to the context.\n\nPlease checkout https://undraw.co/  (❤️ Super cool illustration pack!)\n\n# Conclusion\n\nDisclaimer of this application is that it is not meant for production or public use but anyone who are interested in these tech stack can checkout and learn from it for educational purpose.\n\nStay safe and Thanks for the read! 🙇‍♂️🙇‍♂️\n\nAuthor: Kevin Moe Myint Myat\nhttps://kevinmoemyintmyat.gitlab.io\n\n\n",
    user: {
      name: "Kevin Moe Myint Myat 👨‍💻",
      username: "m3yevn",
      twitter_username: null,
      github_username: "m3yevn",
      user_id: 217073,
      website_url: "https://kevinmoemyintmyat.github.io",
      profile_image:
        "https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",
      profile_image_90:
        "https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",
    },
  },
  {
    type_of: "article",
    id: 755467,
    title: "React Xper - A developer's guide to experiment React 👨‍🔬",
    description:
      "React Xper is a experimental website to test out the many concepts of ReactJS and its related...",
    readable_publish_date: "Jul 10 '21",
    slug: "react-xper-a-developer-s-guide-to-experiment-react-15i5",
    path: "/m3yevn/react-xper-a-developer-s-guide-to-experiment-react-15i5",
    url: "https://dev.to/m3yevn/react-xper-a-developer-s-guide-to-experiment-react-15i5",
    comments_count: 0,
    public_reactions_count: 0,
    collection_id: null,
    published_timestamp: "2021-07-10T10:13:28Z",
    positive_reactions_count: 0,
    cover_image:
      "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0yvn9awow1fbhteif6tq.PNG",
    social_image:
      "https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0yvn9awow1fbhteif6tq.PNG",
    canonical_url:
      "https://dev.to/m3yevn/react-xper-a-developer-s-guide-to-experiment-react-15i5",
    created_at: "2021-07-10T10:13:28Z",
    edited_at: null,
    crossposted_at: null,
    published_at: "2021-07-10T10:13:28Z",
    last_comment_at: "2021-07-10T10:13:28Z",
    reading_time_minutes: 1,
    tag_list: "react, reactxper, experiments, javascript",
    tags: ["react", "reactxper", "experiments", "javascript"],
    body_html:
      '<p>React Xper is a experimental website to test out the<br>\nmany concepts of ReactJS and its related libraries.<br>\nThe beautiful UI is bootstrapped with Grommet v2 with a little bit of styled-components custom styling. Dark mode is available too 🧛‍♂️ .</p>\n\n<blockquote>\n<h4>\n  <a name="the-main-purpose-of-this-website-is-to-experiment-almost-any-technologies-with-reactjs" href="#the-main-purpose-of-this-website-is-to-experiment-almost-any-technologies-with-reactjs">\n  </a>\n  The main purpose of this website is to experiment almost any technologies with ReactJS. 👨‍💻\n</h4>\n</blockquote>\n\n<p>So far, it is currently focused mainly on the new React hooks such as useEffect, useReducer, useMemo and internationalization library such as react-intl. ㊗️</p>\n\n<p>Whenever I have an idea or two and want to try it out as a proof-of-concept, I will use this boilerplate to add-on.<br>\nMoreover, it has a brief technical explanation in every post so other people can also visit the pages and have an understanding. 👍🏻</p>\n\n<p>Although there\'s only like 4 lab experiments , I expect it to grow in the future.</p>\n\n<blockquote>\n<h4>\n  <a name="all-the-science-about-reactjs-will-be-happening-there-for-sure" href="#all-the-science-about-reactjs-will-be-happening-there-for-sure">\n  </a>\n  All the science about ReactJS will be happening there for sure.\n</h4>\n</blockquote>\n\n<p>Please visit <a href="https://react-xper.vercel.app/" target="_blank" rel="noopener noreferrer">https://react-xper.vercel.app/</a> to check it out.<br>\nOr if you would like to contribute or make experiments on your own, create a branch and pull request at <a href="https://github.com/m3yevn/react-xper" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/react-xper</a></p>\n\n<p>Thanks for reading &amp; Stay safe! 😷</p>\n\n',
    body_markdown:
      "React Xper is a experimental website to test out the\nmany concepts of ReactJS and its related libraries.\nThe beautiful UI is bootstrapped with Grommet v2 with a little bit of styled-components custom styling. Dark mode is available too 🧛‍♂️ .\n\n> #### The main purpose of this website is to experiment almost any technologies with ReactJS. 👨‍💻\n\nSo far, it is currently focused mainly on the new React hooks such as useEffect, useReducer, useMemo and internationalization library such as react-intl. ㊗️\n\nWhenever I have an idea or two and want to try it out as a proof-of-concept, I will use this boilerplate to add-on.\nMoreover, it has a brief technical explanation in every post so other people can also visit the pages and have an understanding. 👍🏻\n\nAlthough there's only like 4 lab experiments , I expect it to grow in the future.\n\n> #### All the science about ReactJS will be happening there for sure.\n\nPlease visit https://react-xper.vercel.app/ to check it out.\nOr if you would like to contribute or make experiments on your own, create a branch and pull request at https://github.com/m3yevn/react-xper\n\nThanks for reading & Stay safe! 😷",
    user: {
      name: "Kevin Moe Myint Myat 👨‍💻",
      username: "m3yevn",
      twitter_username: null,
      github_username: "m3yevn",
      user_id: 217073,
      website_url: "https://kevinmoemyintmyat.github.io",
      profile_image:
        "https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",
      profile_image_90:
        "https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",
    },
  },
  {
    type_of: "article",
    id: 550942,
    title:
      "👾 Krescent - My experience on participating Github Game Off 2020 Game Jam on Itch.io 👾",
    description:
      "😅 Last month I participated in a game jam on https://itch.io with a browser game that I've...",
    readable_publish_date: "Dec 23 '20",
    slug: "my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",
    path: "/m3yevn/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",
    url: "https://dev.to/m3yevn/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",
    comments_count: 0,
    public_reactions_count: 3,
    collection_id: null,
    published_timestamp: "2020-12-23T15:06:25Z",
    positive_reactions_count: 3,
    cover_image:
      "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fnisypnnl5ktwlvbdx1pp.png",
    social_image:
      "https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fnisypnnl5ktwlvbdx1pp.png",
    canonical_url:
      "https://dev.to/m3yevn/my-experience-on-participating-github-game-off-2020-game-jam-on-itch-io-4dff",
    created_at: "2020-12-23T15:06:25Z",
    edited_at: "2021-07-10T10:11:19Z",
    crossposted_at: null,
    published_at: "2020-12-23T15:06:25Z",
    last_comment_at: "2020-12-23T15:06:25Z",
    reading_time_minutes: 3,
    tag_list: "gamedev, vue, babylonjs",
    tags: ["gamedev", "vue", "babylonjs"],
    body_html:
      '<p>😅 Last month I participated in a game jam on <a href="https://itch.io" target="_blank" rel="noopener noreferrer">https://itch.io</a> with a browser game that I\'ve co-developed with my colleague from work. It\'s called...</p>\n\n<h1>\n  <a name="krescent-moonshot-themed-game-" href="#krescent-moonshot-themed-game-">\n  </a>\n  Krescent ( 🚀 Moonshot Themed Game 🌙 )\n</h1>\n\n<p>The submission can be viewed here ... </p>\n\n<p><a href="https://m3yevn.itch.io/krescent" target="_blank" rel="noopener noreferrer">https://m3yevn.itch.io/krescent</a></p>\n\n<p>The actual link to the game is at ...</p>\n\n<p><a href="https://krescent.vercel.app/" target="_blank" rel="noopener noreferrer">https://krescent.vercel.app/</a></p>\n\n<h1>\n  <a name="the-idea" href="#the-idea">\n  </a>\n  <strong>THE IDEA</strong> 💡\n</h1>\n\n<p>The theme is called <code>Moonshot</code>, so I was pretty sure I\'m going to build a planetary theme. After that, as I came from web development background, I started research Javascript games and encountered this game tutorial called The Aviator which is created with ThreeJS.</p>\n\n<p>Ref: <a href="https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/" target="_blank" rel="noopener noreferrer">https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/</a></p>\n\n<p>This game has the basic idea of what I wanted to do which is an endless running game on the moon avoiding rocks and eating points. Very basic and easy for beginner game developer!</p>\n\n<h1>\n  <a name="the-tech-stack" href="#the-tech-stack">\n  </a>\n  <strong>THE TECH STACK</strong> 📚\n</h1>\n\n<ol>\n<li>Programming - Javascript</li>\n<li>Framework - Nuxt VueJS</li>\n<li>3D WebGL Engine - BabylonJS</li>\n<li>Hosting - Vercel</li>\n<li>OS wrappers - ElectronJS</li>\n</ol>\n\n<p>Javascript as a core programming language is guaranteed since that\'s the one that I\'m comfortable with and luckily my colleague who is a python developer agree to explore it. </p>\n\n<p>For the framework, VueJS Nuxt is a choice because I\'m used to work with React in professional life and that\'s why I took it up a notch and tried something different. However, I\'ve got a few Vue experience on personal projects and hobby projects. Nuxt was chosen just for the quick scaffolding and famous DX (Developer Experience)</p>\n\n<p>For 3D WebGL engine, I would like to try ThreeJS because it\'s well known across JS world and I\'m interested to test it out. But then again, my colleague would like to explore BabylonJS and I also agree to it since BabylonJS has a good documentation as well as a good reputation comparable with ThreeJS.</p>\n\n<h1>\n  <a name="the-implementation" href="#the-implementation">\n  </a>\n  <strong>THE IMPLEMENTATION</strong> ⚒️\n</h1>\n\n<p>We have to used up our hard-earned weekends developing the game and researching. At first, coming up with a boilerplate was easy because of Nuxt \'s excellent toolings. Vuex is also used to manage the state across different components. The difficulty came when we started touching on Canvas. </p>\n\n<p>As for convenience I used Vue-Babylonjs wrapper initially which has a learning curve abit deeper that we expected. And the documentation doesn\'t seem to help us also. The wrapper library has done a great job in starting the scene and mesh objects but when it comes to real dirty job, it lacks the freedom to program. </p>\n\n<p>That leads us to implement our actual game logic like collision, moving, rotation etc to use the vanilla babylonJS object approach since it has the playground and big community with lots of examples to play with. Surprisingly, when we were doing the development, BabylonJS just released the new documentation as well which is super helpful for us.</p>\n\n<p>After 3 weeks of grinding our weekends and some weekday nights, the basic functions of game has done. I took it as a win. The last week, we just used it for improvements and garnishing with better game experience.</p>\n\n<h1>\n  <a name="the-lesson" href="#the-lesson">\n  </a>\n  <strong>THE LESSON</strong> 🎄\n</h1>\n\n<p>Although we didn\'t win, that was not our intension in the first place. Our intension was to try out game development in action and yes, we felt it. Game development, as fun as it is when the players are playing, the sweat and tears that the developers have to put in to details to create a good game is just admirable. I got a lot of fun working on that and it helps me to grow in my day-to-day developer career also. Hope you guys like my sharing!</p>\n\n<p>How about you guys also? <br>\nHave some game development experience? <br>\n❓❓❓❓<br>\nPlease share in the comments below. 👇</p>\n\n<p>The Github repo for the project <br>\n<a href="https://github.com/m3yevn/krescent" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/krescent</a></p>\n\n',
    body_markdown:
      "😅 Last month I participated in a game jam on https://itch.io with a browser game that I've co-developed with my colleague from work. It's called...\n\n# Krescent ( 🚀 Moonshot Themed Game 🌙 ) \n\nThe submission can be viewed here ... \n\nhttps://m3yevn.itch.io/krescent\n\nThe actual link to the game is at ...\n\nhttps://krescent.vercel.app/\n\n# **THE IDEA** 💡\n\nThe theme is called `Moonshot`, so I was pretty sure I'm going to build a planetary theme. After that, as I came from web development background, I started research Javascript games and encountered this game tutorial called The Aviator which is created with ThreeJS.\n\nRef: https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/\n\nThis game has the basic idea of what I wanted to do which is an endless running game on the moon avoiding rocks and eating points. Very basic and easy for beginner game developer!\n\n# **THE TECH STACK** 📚\n\n1. Programming - Javascript\n2. Framework - Nuxt VueJS\n3. 3D WebGL Engine - BabylonJS\n4. Hosting - Vercel\n4. OS wrappers - ElectronJS\n\nJavascript as a core programming language is guaranteed since that's the one that I'm comfortable with and luckily my colleague who is a python developer agree to explore it. \n\nFor the framework, VueJS Nuxt is a choice because I'm used to work with React in professional life and that's why I took it up a notch and tried something different. However, I've got a few Vue experience on personal projects and hobby projects. Nuxt was chosen just for the quick scaffolding and famous DX (Developer Experience)\n\nFor 3D WebGL engine, I would like to try ThreeJS because it's well known across JS world and I'm interested to test it out. But then again, my colleague would like to explore BabylonJS and I also agree to it since BabylonJS has a good documentation as well as a good reputation comparable with ThreeJS.\n\n# **THE IMPLEMENTATION** ⚒️\n\nWe have to used up our hard-earned weekends developing the game and researching. At first, coming up with a boilerplate was easy because of Nuxt 's excellent toolings. Vuex is also used to manage the state across different components. The difficulty came when we started touching on Canvas. \n\nAs for convenience I used Vue-Babylonjs wrapper initially which has a learning curve abit deeper that we expected. And the documentation doesn't seem to help us also. The wrapper library has done a great job in starting the scene and mesh objects but when it comes to real dirty job, it lacks the freedom to program. \n\nThat leads us to implement our actual game logic like collision, moving, rotation etc to use the vanilla babylonJS object approach since it has the playground and big community with lots of examples to play with. Surprisingly, when we were doing the development, BabylonJS just released the new documentation as well which is super helpful for us.\n\nAfter 3 weeks of grinding our weekends and some weekday nights, the basic functions of game has done. I took it as a win. The last week, we just used it for improvements and garnishing with better game experience.\n\n# **THE LESSON** 🎄\n\nAlthough we didn't win, that was not our intension in the first place. Our intension was to try out game development in action and yes, we felt it. Game development, as fun as it is when the players are playing, the sweat and tears that the developers have to put in to details to create a good game is just admirable. I got a lot of fun working on that and it helps me to grow in my day-to-day developer career also. Hope you guys like my sharing!\n\nHow about you guys also? \nHave some game development experience? \n❓❓❓❓\nPlease share in the comments below. 👇\n\nThe Github repo for the project \nhttps://github.com/m3yevn/krescent",
    user: {
      name: "Kevin Moe Myint Myat 👨‍💻",
      username: "m3yevn",
      twitter_username: null,
      github_username: "m3yevn",
      user_id: 217073,
      website_url: "https://kevinmoemyintmyat.github.io",
      profile_image:
        "https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",
      profile_image_90:
        "https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",
    },
  },
  {
    type_of: "article",
    id: 294121,
    title: "FTP Seer API + FTP Seer Client Google SEO",
    description:
      "My open source project FTP Seer is on Google Search now. Yay!!! 🦄               Background o...",
    readable_publish_date: "Mar 29 '20",
    slug: "ftp-seer-api-ftp-seer-client-google-seo-3lf2",
    path: "/m3yevn/ftp-seer-api-ftp-seer-client-google-seo-3lf2",
    url: "https://dev.to/m3yevn/ftp-seer-api-ftp-seer-client-google-seo-3lf2",
    comments_count: 0,
    public_reactions_count: 6,
    collection_id: null,
    published_timestamp: "2020-03-29T02:13:08Z",
    positive_reactions_count: 6,
    cover_image:
      "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fliw75hbrte70vgzwwmhy.png",
    social_image:
      "https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fliw75hbrte70vgzwwmhy.png",
    canonical_url:
      "https://dev.to/m3yevn/ftp-seer-api-ftp-seer-client-google-seo-3lf2",
    created_at: "2020-03-29T01:56:37Z",
    edited_at: "2020-03-29T02:15:46Z",
    crossposted_at: null,
    published_at: "2020-03-29T02:13:08Z",
    last_comment_at: "2020-03-29T02:13:08Z",
    reading_time_minutes: 2,
    tag_list: "ftpseer, ftpseerapi, ftpseerclient, seer",
    tags: ["ftpseer", "ftpseerapi", "ftpseerclient", "seer"],
    body_html:
      '<h1>\n  <a name="my-open-source-project-ftp-seer-is-on-google-search-now-yay" href="#my-open-source-project-ftp-seer-is-on-google-search-now-yay">\n  </a>\n  My open source project FTP Seer is on Google Search now. Yay!!! 🦄\n</h1>\n\n\n<hr>\n\n<h3>\n  <a name="background-of-ftp-seer" href="#background-of-ftp-seer">\n  </a>\n  Background of FTP Seer 💎\n</h3>\n\n<p>Back in the days, when I was working on an in-house project where the client requirements are to gather application logs from remote server using FTP protocol and show it on their admin portal, I needed a backend API to fetch directory list and get file contents.</p>\n\n<p>I found the <a href="https://www.npmjs.com/package/jsftp" target="_blank" rel="noopener noreferrer">JSFTP library</a> which is pretty useful for my case and decided to put that in my tech stack. After that, I use Node and ExpressJS to serve http server to create a RESTful API which has now become the <a href="https://ftpseer.herokuapp.com/" target="_blank" rel="noopener noreferrer">FTP Seer API</a></p>\n\n<h3>\n  <a name="continue-to-develop" href="#continue-to-develop">\n  </a>\n  Continue to develop 😎\n</h3>\n\n<p>The API serve its purpose and the in-house project was done. However, I felt the need to make it open-source and create a full-stack application so that other developers can utilise it as well. So, starting from three or four months back, I picked up the old API in my archived repository and  polished it by refactoring. I even wrote a landing page so that people can test the API just by the first visit.</p>\n\n<h3>\n  <a name="giving-it-a-demo-client-application" href="#giving-it-a-demo-client-application">\n  </a>\n  Giving it a demo client application 💄\n</h3>\n\n<p>In order to properly use it, I also created a frontend application with a framework that I was obsessed with back then which is Svelte and Sapper framework to serve it universally (Client, Server-Side, Service-Worker).<br>\nThe demo frontend application becomes <a href="https://ftpseerclient.herokuapp.com/" target="_blank" rel="noopener noreferrer">FTP Seer Client</a>.</p>\n\n<h3>\n  <a name="deploying-the-apps" href="#deploying-the-apps">\n  </a>\n  Deploying the apps ⚙️\n</h3>\n\n<p>For deployment, since I didn\'t intend to purchase a domain for it, I used Heroku to deploy on their domain. I set up a CircleCI CI/CD pipeline so that whenever I push my latest commit it will deploy to heroku. The pipeline is available below<br>\nFTP Seer API - <a href="https://circleci.com/gh/m3yevn/ftp-seer" target="_blank" rel="noopener noreferrer">https://circleci.com/gh/m3yevn/ftp-seer</a><br>\nFTP Seer Client - <a href="https://circleci.com/gh/m3yevn/ftp-seer-client" target="_blank" rel="noopener noreferrer">https://circleci.com/gh/m3yevn/ftp-seer-client</a></p>\n\n<p>and the configuration is at <br>\n<a href="https://github.com/m3yevn/ftp-seer/blob/master/.circleci/config.yml" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer/blob/master/.circleci/config.yml</a><br>\n<a href="https://github.com/m3yevn/ftp-seer-client/blob/master/.circleci/config.yml" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer-client/blob/master/.circleci/config.yml</a></p>\n\n<h3>\n  <a name="making-them-available-on-google" href="#making-them-available-on-google">\n  </a>\n  Making them available on Google 🌎\n</h3>\n\n<p>However, Heroku domains are bad in SEO search results, therefore I used meta tags to provide suitable keywords, images, authors to make Google to crawl properly. I used Google Search Console and get verification meta tags , add them on the respective index.html and we\'re good to go.</p>\n\n<h3>\n  <a name="the-final-result-is-shown-in-the-cover-image-where-you-can-see-both-ftp-seer-applications-when-you-make-a-search-on-google" href="#the-final-result-is-shown-in-the-cover-image-where-you-can-see-both-ftp-seer-applications-when-you-make-a-search-on-google">\n  </a>\n  The final result is shown in the cover image where you can see both FTP Seer applications when you make a search on Google.\n</h3>\n\n\n<hr>\n\n<h4>\n  <a name="stay-safe-and-thanks-for-reading" href="#stay-safe-and-thanks-for-reading">\n  </a>\n  Stay safe and Thanks for reading! ❤️\n</h4>\n\n<h5>\n  <a name="catch-up-with-me-at-httpskevinmoemyintmyatgitlabio" href="#catch-up-with-me-at-httpskevinmoemyintmyatgitlabio">\n  </a>\n  Catch up with me at <a href="https://kevinmoemyintmyat.gitlab.io" target="_blank" rel="noopener noreferrer">https://kevinmoemyintmyat.gitlab.io</a>\n</h5>\n\n',
    body_markdown:
      "# My open source project FTP Seer is on Google Search now. Yay!!! 🦄\n<hr/>\n### Background of FTP Seer 💎\n\nBack in the days, when I was working on an in-house project where the client requirements are to gather application logs from remote server using FTP protocol and show it on their admin portal, I needed a backend API to fetch directory list and get file contents.\n\nI found the [JSFTP library](https://www.npmjs.com/package/jsftp) which is pretty useful for my case and decided to put that in my tech stack. After that, I use Node and ExpressJS to serve http server to create a RESTful API which has now become the [FTP Seer API](https://ftpseer.herokuapp.com/)\n\n### Continue to develop 😎\n\nThe API serve its purpose and the in-house project was done. However, I felt the need to make it open-source and create a full-stack application so that other developers can utilise it as well. So, starting from three or four months back, I picked up the old API in my archived repository and  polished it by refactoring. I even wrote a landing page so that people can test the API just by the first visit.\n\n### Giving it a demo client application 💄\n\nIn order to properly use it, I also created a frontend application with a framework that I was obsessed with back then which is Svelte and Sapper framework to serve it universally (Client, Server-Side, Service-Worker).\nThe demo frontend application becomes [FTP Seer Client](https://ftpseerclient.herokuapp.com/).\n\n### Deploying the apps ⚙️\n\n\nFor deployment, since I didn't intend to purchase a domain for it, I used Heroku to deploy on their domain. I set up a CircleCI CI/CD pipeline so that whenever I push my latest commit it will deploy to heroku. The pipeline is available below\nFTP Seer API - https://circleci.com/gh/m3yevn/ftp-seer\nFTP Seer Client - https://circleci.com/gh/m3yevn/ftp-seer-client\n\nand the configuration is at \nhttps://github.com/m3yevn/ftp-seer/blob/master/.circleci/config.yml\nhttps://github.com/m3yevn/ftp-seer-client/blob/master/.circleci/config.yml\n\n### Making them available on Google 🌎\n\nHowever, Heroku domains are bad in SEO search results, therefore I used meta tags to provide suitable keywords, images, authors to make Google to crawl properly. I used Google Search Console and get verification meta tags , add them on the respective index.html and we're good to go.\n\n### The final result is shown in the cover image where you can see both FTP Seer applications when you make a search on Google.\n<hr/>\n\n#### Stay safe and Thanks for reading! ❤️\n\n##### Catch up with me at https://kevinmoemyintmyat.gitlab.io\n",
    user: {
      name: "Kevin Moe Myint Myat 👨‍💻",
      username: "m3yevn",
      twitter_username: null,
      github_username: "m3yevn",
      user_id: 217073,
      website_url: "https://kevinmoemyintmyat.github.io",
      profile_image:
        "https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",
      profile_image_90:
        "https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",
    },
  },
  {
    type_of: "article",
    id: 267096,
    title: "FTP Seer - A simple web based FTP file explorer",
    description:
      "I've developed a full stack app. 🎉 Yayy!!   If you need a full stack app which can explore F...",
    readable_publish_date: "Feb 23 '20",
    slug: "ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",
    path: "/m3yevn/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",
    url: "https://dev.to/m3yevn/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",
    comments_count: 1,
    public_reactions_count: 8,
    collection_id: null,
    published_timestamp: "2020-02-23T13:15:13Z",
    positive_reactions_count: 8,
    cover_image:
      "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F02zlb2uu47n2zkgd6ge6.png",
    social_image:
      "https://media.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F02zlb2uu47n2zkgd6ge6.png",
    canonical_url:
      "https://dev.to/m3yevn/ftp-seer-a-simple-web-based-ftp-file-explorer-1e4m",
    created_at: "2020-02-23T13:15:13Z",
    edited_at: "2020-02-24T15:13:22Z",
    crossposted_at: null,
    published_at: "2020-02-23T13:15:13Z",
    last_comment_at: "2020-04-01T09:34:11Z",
    reading_time_minutes: 1,
    tag_list: "node, fullstack, svelte, ftpseer",
    tags: ["node", "fullstack", "svelte", "ftpseer"],
    body_html:
      '<h1>\n  <a name="ive-developed-a-full-stack-app-yayy" href="#ive-developed-a-full-stack-app-yayy">\n  </a>\n  I\'ve developed a full stack app. 🎉 Yayy!!\n</h1>\n\n<p>If you need a full stack app which can explore FTP server directory and get file content through web, take a look at my project.</p>\n\n<h2>\n  <a name="demos-are-below" href="#demos-are-below">\n  </a>\n  Demos are below.💡\n</h2>\n\n<p>Backend API - <a href="https://ftpseer.herokuapp.com" target="_blank" rel="noopener noreferrer">https://ftpseer.herokuapp.com</a><br>\nFrontend UI - <a href="https://ftpseerclient.herokuapp.com" target="_blank" rel="noopener noreferrer">https://ftpseerclient.herokuapp.com</a></p>\n\n<h2>\n  <a name="source-code-at" href="#source-code-at">\n  </a>\n  Source code at 👾\n</h2>\n\n<p><a href="https://github.com/m3yevn/ftp-seer" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer</a> and<br>\n<a href="https://github.com/m3yevn/ftp-seer-client" target="_blank" rel="noopener noreferrer">https://github.com/m3yevn/ftp-seer-client</a></p>\n\n<h1>\n  <a name="tech-stack-nodejs-jsftp-svelte-sapper" href="#tech-stack-nodejs-jsftp-svelte-sapper">\n  </a>\n  Tech Stack : NodeJS, JsFtp, Svelte, Sapper\n</h1>\n\n<p>If you wish to contribute kindly create issues and pull requests.</p>\n\n<p>Cheers! 🍺 🍺 🍺</p>\n\n<p>Check me out @ <a href="https://kevinmoemyintmyat.gitlab.io" target="_blank" rel="noopener noreferrer">https://kevinmoemyintmyat.gitlab.io</a></p>\n\n',
    body_markdown:
      "# I've developed a full stack app. 🎉 Yayy!!\n\n\nIf you need a full stack app which can explore FTP server directory and get file content through web, take a look at my project.\n\n## Demos are below.💡\nBackend API - https://ftpseer.herokuapp.com\nFrontend UI - https://ftpseerclient.herokuapp.com\n\n## Source code at 👾\nhttps://github.com/m3yevn/ftp-seer and\nhttps://github.com/m3yevn/ftp-seer-client\n\n# Tech Stack : NodeJS, JsFtp, Svelte, Sapper\n\nIf you wish to contribute kindly create issues and pull requests.\n\nCheers! 🍺 🍺 🍺\n\nCheck me out @ https://kevinmoemyintmyat.gitlab.io\n\n",
    user: {
      name: "Kevin Moe Myint Myat 👨‍💻",
      username: "m3yevn",
      twitter_username: null,
      github_username: "m3yevn",
      user_id: 217073,
      website_url: "https://kevinmoemyintmyat.github.io",
      profile_image:
        "https://media.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",
      profile_image_90:
        "https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F217073%2F0f0c2cec-62f0-4ec6-b164-23e0a893e311.jpg",
    },
  },
];

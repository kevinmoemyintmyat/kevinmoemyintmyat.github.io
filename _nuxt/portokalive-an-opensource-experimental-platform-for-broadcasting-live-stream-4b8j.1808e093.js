import{i as t,f as a,c as o,o as n,v as r}from"./entry.d768f6bc.js";const i={class:"mt-20 lg:pl-20 p-5 ml-20 lg:w-4/6",ref:"startOfArticle"},d=r('<h1 data-v-493d926e>PortokaLive - An opensource experimental platform for broadcasting live stream <br data-v-493d926e><span data-v-493d926e>By Kevin Moe Myint Myat</span></h1><h2 data-v-493d926e>Written on 29 July 2021</h2><img class="cover-image" src="" data-v-493d926e><div class="blog-body" data-v-493d926e><p data-v-493d926e>🎉🎉🎉 After years of procrastinating on working on this project, I&#39;m finally proud to launch this platform PortokaLive to public. Hooray! Here&#39;s the link</p><ul data-v-493d926e><li data-v-493d926e>Web ( <a href="https://portokalive.vercel.app/" target="_blank" rel="noopener noreferrer" data-v-493d926e>https://portokalive.vercel.app/</a> )</li><li data-v-493d926e>Mobile ( <a href="https://play.google.com/store/apps/details?id=com.portokalive" target="_blank" rel="noopener noreferrer" data-v-493d926e>https://play.google.com/store/apps/details?id=com.portokalive</a>)</li></ul><h1 data-v-493d926e><a name="how-it-started-the-origin" href="#how-it-started-the-origin" data-v-493d926e></a> 🌞 How it started (The origin) </h1><p data-v-493d926e>PortokaLive was started off as a coding challenge by one of the company that I was interviewing back in 2019. The company requested me to showcase my coding ability and asked to create a proof-of-concept POC application which can do a live-streaming between Mobile Application and Web.</p><p data-v-493d926e>Since I&#39;m proficient in Javascript, I&#39;ve done my research and found that <a href="https://www.npmjs.com/package/node-media-server" target="_blank" rel="noopener noreferrer" data-v-493d926e>https://www.npmjs.com/package/node-media-server</a> (Node Media Server) is a viable option for me to use to implement this kind of feature.</p><p data-v-493d926e>I&#39;ve checked out their code, forked and changed some styling/navigation to the react-native application which will do the recording and broadcasting as well as the node-media-server using rtmp protocol.</p><p data-v-493d926e>There are lots of tutorials online on how to play the live stream in React web using videojs. Luckily, node-media-server provide option to play the video in flv format which directly suits our needs.</p><p data-v-493d926e>Eventually, after 2 or 3 days of self hackathon, the suite of Mobile Client, Web Client, Media Server and Auth API server written in node.js are completed and demonstrated to them. Anyway, I ended up not accepting their offer and this POC project was left behind as a byproduct hanging in my repository.</p><h1 data-v-493d926e><a name="rebranding-to-another-name" href="#rebranding-to-another-name" data-v-493d926e></a> 💙 Rebranding to another name </h1><p data-v-493d926e>When it was created it was given the company&#39;s name and logo, which is in Orange and white color theme. Considering to rebrand this project, I&#39;ve decided to just stick to the original theme and also give the name as &quot;OrangeLive&quot; which I thought was pretty good. However, after searching on the Google, it seems that the name was taken by another company leading me to change it into something else. I tried to use Google Translate to search other names of Orange in other languages.</p><p data-v-493d926e>Finally, I found out Orange in Greek language is called <code data-v-493d926e>Portokali</code>.<br data-v-493d926e><a href="https://translate.google.com/?sl=el&amp;tl=en&amp;text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%AC%CE%BB%CE%B9&amp;op=translate&amp;hl=en" target="_blank" rel="noopener noreferrer" data-v-493d926e>https://translate.google.com/?sl=el&amp;tl=en&amp;text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%AC%CE%BB%CE%B9&amp;op=translate&amp;hl=en</a></p><p data-v-493d926e>And fortunately, I can omit the &quot;L&quot; and &quot;I&quot; of the <code data-v-493d926e>Live</code> word if I merged them together. So, there it goes. &quot;PortokaLive&quot;</p><h1 data-v-493d926e><a name="tech-stack" href="#tech-stack" data-v-493d926e></a> 📚 Tech Stack </h1><p data-v-493d926e>The tech stack was initially a rush because I just want to quickly completed in a few days so I just went for my comfort stack which is </p><ol data-v-493d926e><li data-v-493d926e>React for Web UI</li><li data-v-493d926e>Bootstrap for Web theme</li><li data-v-493d926e>Node.JS (Typescript) for API</li><li data-v-493d926e>ReactNative for Mobile</li><li data-v-493d926e>Ui Kitten for Mobile theme</li></ol><p data-v-493d926e>There was a change in media server because media server with rtmp support cannot be deployed on any free backend hosting. (Or maybe at least I don&#39;t know, Give a comment below if you know how to 😉)<br data-v-493d926e> Therefore, I changed it to using api.video(<a href="https://api.video" target="_blank" rel="noopener noreferrer" data-v-493d926e>https://api.video</a>) freemium which is great except the part they put watermark if you want to use it without paying premium charges.</p><p data-v-493d926e>api.video came with a cool REST api and iframe web player which makes my life easier so that I do not need to develop all the wrappers around it.</p><h1 data-v-493d926e><a name="illustration-design" href="#illustration-design" data-v-493d926e></a> 💅 Illustration Design </h1><p data-v-493d926e>To put some aesthetic design in my app, I&#39;ve used Undraw&#39;s free illustrations which are not only attractive but also accurately designed to the context.</p><p data-v-493d926e>Please checkout <a href="https://undraw.co/" target="_blank" rel="noopener noreferrer" data-v-493d926e>https://undraw.co/</a> (❤️ Super cool illustration pack!)</p><h1 data-v-493d926e><a name="conclusion" href="#conclusion" data-v-493d926e></a> Conclusion </h1><p data-v-493d926e>Disclaimer of this application is that it is not meant for production or public use but anyone who are interested in these tech stack can checkout and learn from it for educational purpose.</p><p data-v-493d926e>Stay safe and Thanks for the read! 🙇‍♂️🙇‍♂️</p><p data-v-493d926e>Author: Kevin Moe Myint Myat<br data-v-493d926e><a href="https://kevinmoemyintmyat.gitlab.io" target="_blank" rel="noopener noreferrer" data-v-493d926e>https://kevinmoemyintmyat.gitlab.io</a></p></div><footer data-v-493d926e> Read my original blog on <a href="https://dev.to/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j" target="_blank" data-v-493d926e>https://dev.to/m3yevn/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j</a></footer>',5),s=[d],p={methods:{showSection(e){this.$refs[e].scrollIntoView({behavior:"smooth"})}}},l=Object.assign(p,{__name:"portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j",setup(e){return a({title:"PortokaLive - An opensource experimental platform for broadcasting live stream - Written by Kevin Moe Myint Myat",link:[{rel:"icon",type:"image/png",href:"https://kevinmoemyintmyat.github.io/favicon.png"}],meta:[{name:"description",content:"PortokaLive - An opensource experimental platform for broadcasting live stream - Written by Kevin Moe Myint Myat"},{name:"keywords",content:"portokalive,portoka,live,react, Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art"},{property:"og:title",content:"PortokaLive - An opensource experimental platform for broadcasting live stream - Written by Kevin Moe Myint Myat - a cat dad, a developer & an artist"},{property:"og:type",content:"profile"},{property:"og:url",content:"https://kevinmoemyintmyat.github.io/blog/portokalive-an-opensource-experimental-platform-for-broadcasting-live-stream-4b8j"},{property:"og:site:name",content:"PortokaLive - An opensource experimental platform for broadcasting live stream - Written by Kevin Moe Myint Myat"},{property:"og:description",content:"PortokaLive - An opensource experimental platform for broadcasting live stream - Written by Kevin Moe Myint Myat"},{name:"twitter:site",content:"https://kevinmoemyintmyat.github.io"},{name:"twitter:description",content:"Kevin Moe Myint Myat - a cat dad, a developer & an artist"}],ogImage:"/favicon.png"}),(c,h)=>(n(),o("section",i,s,512))}}),v=t(l,[["__scopeId","data-v-493d926e"]]);export{v as default};
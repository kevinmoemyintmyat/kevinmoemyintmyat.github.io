<template>
    <section>
        <div>
            <h1>
                About Me
            </h1>
            <p>
                Hello there, visitor!
                <br /><br /><br /> I'm Kevin, a software developer/artist based in Singapore and a
                full-time cat
                dad
                🐈‍⬛ to <a href="https://www.instagram.com/jiemao_blackcat/" target="_blank">@jiemao_blackcat</a>.
                <br /><br />
                I'm spending most of my time working at <a href="https://www.dtone.com/" target="_blank">DT One</a>
                as a Software Engineer. You can read more about my professional career portfolio
                <a href="https://kevinmoemyintmyat.gitlab.io" target="blank">here</a>.
                <br /><br />
                <br /><br />
                I ❤️ swimming in the weekends, sometimes cycling in the city and of course, creating <a href="/art"
                    target="_blank">arts</a> and
                maintaining my projects on
                <a href="https://github.com/m3yevn" target="_blank">my github portfolio</a>.
                <br /><br />
                Aside from that, I enjoy writing <NuxtLink to="/blog">blogs</NuxtLink>, <NuxtLink to="/blog">poems and
                    articles</NuxtLink>. Every now and then, I sing <NuxtLink to="/music">karaoke 🎤 </NuxtLink>on Smule
                and also experiment with cooking recipes 🧑‍🍳 which are available on my
                <a href="https://www.tiktok.com/@m3_yevnnn" target="_blank">TikTok</a>.
                <br /><br />
                <br /><br />
                You can check out my arts and paintings if you are an art enthusiast like me.
                ( <NuxtLink class="selling-link" to="/art">Click here!</NuxtLink> )
                <br /><br />
                Just contact me at <a href="mailto: mmm.myintmyat@gmail.comm">mmm.myintmyat@gmail.com</a> if you want to
                buy my paintings 😊. <br /><br />
                Or you can whatsapp me
                at <a :href="whatsAppApiLink" target="_blank">+65 98882256</a> and we can discuss there 😉.
                <br /><br />
                <br /><br />
                <br />
                Best Regards, <br />
                Kevin MMM. <span>(a human like you)</span>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            whatsAppApiLink: "https://api.whatsapp.com/send?phone=6598882256&text=" +
                "Hi Kevin Moe Myint Myat, I saw your art website and I'm interested in your paintings at https://kevinmoemyintmyat.github.io/art. " +
                "Would you like to discuss about the price?"
        }
    }
}
</script>

<script setup>
useHead({
    title: "About Kevin Moe Myint Myat",
    meta: [
        {
            name: 'description', content: `I'm Kevin, a software developer/artist based in Singapore and a full-time cat dad 🐈‍⬛ to @jiemao_blackcat.
I'm spending most of my time working at DT One as a Software Engineer. You can read more about my professional career portfolio in https://kevinmoemyintmyat.gitlab.io.
I ❤️ swimming in the weekends, sometimes cycling in the city and of course, creating arts and maintaining my projects on my github portfolio.
Aside from that, I enjoy writing blogs, poems and articles. Every now and then, I sing karaoke 🎤 on Smule and also experiment with cooking recipes 🧑‍🍳 which are available on my TikTok.
` },
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
            content: `https://kevinmoemyintmyat.github.io/about/me`,
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
            content: "https://kevinmoemyintmyat.github.io/about/me",
        },
        {
            name: "twitter:description",
            content: "Kevin Moe Myint Myat - a cat dad, a developer & an artist",
        },
        {
            name: "google-site-verification",
            content: "Atx_wVtmc66Yl2ek",
        },
    ]
})
</script>

<style lang="css" scoped>
div {
    margin-top: 30px;
}

section {
    padding: 2em;
}

h1 {
    font-size: 100px;
    padding-bottom: 10px;
    color: whitesmoke;
    line-height: 100px;
}

h2 {
    font-size: 30px;
    padding-bottom: 10px;
}

p {
    font-weight: bold;
    color: crimson;
    font-size: large;
    padding: 10px;
    margin-top: 10px;
    background: rgb(35, 35, 35);
    line-height: 1em;
}

p b {
    text-decoration: underline;
}

p h2 {
    color: crimson;
}

p span {
    display: block;
    color: greenyellow;
}

p a {
    cursor: pointer;
    text-decoration: underline;
    color: whitesmoke;
}

hr {
    margin: 16px 0px;
    width: 90%;
    color: grey;
}

ul li {
    cursor: pointer;
}

ul li:hover {
    text-decoration: underline;
}

.selling-link {
    font-size: 0.9rem;
    font-weight: bolder;
    color: greenyellow;
}
</style>
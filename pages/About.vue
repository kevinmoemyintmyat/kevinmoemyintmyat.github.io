<template>

</template>

<script setup>
useHead({
    title: "About Kevin Moe Myint Myat",
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    meta: [
        {
            name: 'description', content: `I'm Kevin, a software developer/artist based in Singapore and a full-time cat dad 🐈‍⬛ to @jiemao_blackcat.
I'm spending most of my time working at DT One as a Software Engineer. You can read more about my professional career portfolio in https://kevinmoemyintmyat.gitlab.io.
I ❤️ swimming in the weekends, sometimes cycling in the city and of course, creating arts and maintaining my projects on my github portfolio.
Aside from that, I enjoy writing blogs, poems and articles. Every now and then, I sing karaoke 🎤 on Smule and also experiment with cooking recipes 🧑‍🍳 which are available on my TikTok.
` },
        {
            name: "keywords",
            content: `Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art, travel blogs, poems, articles, music`,
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
            content: `https://kevinmoemyintmyat.github.io/blog`,
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
            content: "https://kevinmoemyintmyat.github.io",
        },
        {
            name: "twitter:description",
            content: "Kevin Moe Myint Myat - a cat dad, a developer & an artist",
        }
    ]
})

const router = useRouter();
router.push("/about/me");
</script>

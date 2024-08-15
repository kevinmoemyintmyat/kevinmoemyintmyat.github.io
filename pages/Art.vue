<template>
  <div class="h-screen w-screen">
    <div class="title">
      Some of my paintings
    </div>
    <div v-for="(row, index) in artData" :key="index" class="flex flex-col lg:flex-row justify-center items-center">
      <div v-for="art in row" :key="art.name" class="gallery-card">
        <img :src="art.image" :alt="art.name" loading="lazy" />
        <p>
          "{{ art.name }}"
          <br />
          <span>{{ art.description }}</span>
        </p>
        <div class="gallery-card-footer">
          <button @click="chatWhatsappForPrice(art)"><img src="@/assets/icons/whatsapp-icon.svg" />Chat for
            price</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
    title: "Kevin Moe Myint Myat's Art",
    link: [{ rel: "icon", type: "image/png", href: "https://kevinmoemyintmyat.github.io/favicon.png" }],
    meta: [
        { name: 'description', content: `Kevin Moe Myint Myat is a software developer and an art hobbyist based in Singapore. He is also a full-time cat dad to JieMao (https://www.instagram.com/jiemao_blackcat).
            He spends most of his time working as a software engineer at DT One (https://www.dtone.com) and during the weekends, he pursues his passion "Art" and works on his paintings. He has participated in
            World Charity Painting 2024 (https://en.artassociation.asia/wcpc) and World Heritage Painting 2024 (https://en.artassociation.asia/whpc).` },
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
            content: `https://kevinmoemyintmyat.github.io/art`,
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
    ],
    ogImage: '/favicon.png'
})
</script>


<script>
export default {
  data() {
    return {
      artData: [[
        {
          name: "Sail to the sun",
          description: "An expression of life as sailing in the dark ocean towards the sunset",
          image: "/art/art-painting-sail-to-sun.jpg",
        },
        {
          name: "One Eye Tear",
          description: "A tribute of sadness and tragedy during the COVID-19 Pandemic",
          image: "/art/art-painting-one-eye-tear.jpg",
        }
        ,
        {
          name: "Mourning Pines",
          description: "A random expression painting of pine trees during my mourning period",
          image: "/art/art-painting-mourning-pines.jpg",
        }],
      [
        {
          name: "Serene Solitude",
          description: "A representation of a person meditating in solitude having a serenity and zen",
          image: "/art/art-painting-serene-solitude.jpg",
        },
        {
          name: "Dancing to the Symphony",
          description: "A women dancing to the symphony where a crowd is watching and metaphorical eyes",
          image: "/art/art-painting-dancing-to-the-symphony.jpg",
        },
        {
          name: "Welcome to Wonderland",
          description: "An expression of colorful paints blending together to form a scenario of a wonderland",
          image: "/art/art-painting-welcome-to-wonderland.jpg",
        }]
      ],
      whatsAppApiLink: "https://api.whatsapp.com/send?phone=6598882256&text="
    }
  },
  methods: {
    chatWhatsappForPrice(art) {
      const imageSrc = `https://kevinmoemyintmyat.github.io${art.image}`;
      const template = `Hi Kevin Moe Myint Myat, I saw your painting named "${art.name}" at ${imageSrc}. I'm interested in buying it. ` +
        "Would you like to discuss the price? Hope to hear from you soon about possible viewing."
      window.open(this.whatsAppApiLink + template, "_blank");
    }
  }
};
</script>

<style>
.image {
  background-image: url("@/assets/images/me-artist-web.jpg");
  background-size: cover;
}

.overlay {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #000000, rgba(255, 0, 0, 0.201));
  opacity: 1;
}
</style>

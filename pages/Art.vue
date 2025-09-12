<template>
  <div class="h-screen w-screen">
    <div class="title">
      Some of my paintings
    </div>
    <div v-for="(row, rowIndex) in artData" :key="rowIndex" class="flex flex-col lg:flex-row justify-center items-center">
      <div v-for="art in row" :key="art.name" :class="['gallery-card', { 'sold-out': rowIndex >= 2 }]">
        <div class="image-container">
          <img :src="art.image" :alt="art.name" loading="lazy" :class="rowIndex >= 2 ? 'sold-out-image' : 'available-image'" />
          <div v-if="rowIndex >= 2" class="sold-out-overlay">
            <span class="sold-out-text">Not Available</span>
          </div>
        </div>
        <p>
          "{{ art.name }}"
          <br />
          <span class="tooltip">{{ constructLabel(art.description) }}
            <span v-if="art.description.length > 55" class="tooltiptext">{{ art.description }}</span></span>
        </p>
        <div class="gallery-card-footer">
          <button v-if="rowIndex < 2" @click="chatWhatsappForPrice(art)" class="available-button">
            <img src="@/assets/icons/whatsapp-icon.svg" />Chat for price
          </button>
          <button v-else disabled class="disabled-button">
            <img src="@/assets/icons/whatsapp-icon.svg" />Not Available
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function constructLabel(label) {
    if (label?.length > 55) {
        return `${label.slice(0, 55)}...`
    }
    return label;
}

useHead({
  title: "Kevin Moe Myint Myat's Art",
  link: [{ rel: "icon", type: "image/png", href: "https://kevinmoemyintmyat.github.io/favicon.png" }],
  meta: [
    {
      name: 'description', content: `Kevin Moe Myint Myat is a software developer and an art hobbyist based in Singapore. He is also a full-time cat dad to JieMao (https://www.instagram.com/jiemao_theblackcattt).
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
import artData from "~/assets/data/data-art";

export default {
  data() {
    return {
      artData,
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


/* Image Container Styles */
.image-container {
  position: relative;
  overflow: hidden;
}

.available-image {
  transition: all 0.3s ease;
}

.sold-out-image {
  filter: grayscale(100%) brightness(0.6);
  transition: all 0.3s ease;
}

.sold-out-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sold-out-text {
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: rotate(-45deg);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  background: linear-gradient(135deg, #dc143c, #8b0000);
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(220, 20, 60, 0.5);
  white-space: nowrap;
  min-width: max-content;
}

.disabled-button {
  opacity: 0.5;
  cursor: not-allowed;
  background: #666 !important;
  color: #999 !important;
}

.disabled-button:hover {
  transform: none !important;
  box-shadow: none !important;
}

.available-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #dc143c;
  color: white;
  padding: 12px 24px;
  border: 2px solid #dc143c;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  text-transform: uppercase;
}

.available-button:hover {
  background: transparent;
  color: #dc143c;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
}
</style>

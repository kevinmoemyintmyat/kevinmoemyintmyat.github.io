<template>
  <section v-if="showSmule">
    <div class="title">Some of my karaokes on <a href="https://www.smule.com/m3_yevn" target="blank">Smule</a></div>
    <div v-if="state.isLoading" class="flex justify-center items-center">
      <h2 class="loading-text">Loading...</h2>
    </div>
    <div v-for="(row, index) in state.smuleData" :key="index"
      class="flex flex-col lg:flex-row justify-center items-center">
      <div v-for="music in row" :key="music.key" class="gallery-card music-card">
        <a :href="'https://smule.com' + music.web_url" target="blank">
          <img class="cover-img" :src="music.cover_url" :alt="music.key" loading="lazy" />
          <p>
            Title: <span class="tooltip">"{{ constructLabel(music.title) }}" <span v-if="music.title.length > 25"
                class="tooltiptext"> {{ music.title }}</span></span>
            <br />
            Artist: <span class="tooltip">{{ constructLabel(music.artist) }} <span v-if="music.artist.length > 25"
                class="tooltiptext"> {{ music.artist }}</span></span>
            <br />
            Description: <span class="tooltip">{{ constructLabel(music.message) }} <span
                v-if="music.message.length > 25" class="tooltiptext"> {{ music.message }}</span></span>
            <br />
            Cover by: <span class="tooltip"><a :href="'https://smule.com' + music.performed_by_url" target="blank">{{
              constructLabel(music.performed_by) }}</a></span>
          </p>
          <div class="gallery-card-footer">
            <a :href="'https://smule.com' + music.web_url" target="blank">
              <button><img src="@/assets/icons/whatsapp-icon.svg" />View this recording</button>
            </a>
          </div>
        </a>
      </div>
    </div>
    <div class="flex justify-center align-center">
      <button class="outlined" @click="fetchMoreSmuleData" :disabled="state.isLoading">
        {{ state.isLoading ? "Loading..." : "LoadMore" }}</button>
    </div>
  </section>

  <section v-if="showSoundcloud">
    <div class="title">Some of my <a href="https://soundcloud.com/kevinmoemyintmyat" target="blank">Soundcloud</a>
      mixes back in 2020</div>
    <div v-for="(row, index) in soundCloudData" :key="index"
      class="flex flex-col lg:flex-row justify-center items-center">
      <div v-for="music in row" :key="music.src" class="music-video-card">
        <div v-html="music.src"></div>
      </div>
    </div>
  </section>

  <div class="h-screen w-screen">
    <section v-if="showSpotify">
      <div class="title">Some of the songs that inspire me</div>
      <div v-for="(row, index) in spotifyData" :key="index"
        class="flex flex-col lg:flex-row justify-center items-center">
        <div v-for="music in row" :key="music.src" class="gallery-card">
          <div v-html="music.src"></div>
        </div>
      </div>
    </section>

    <section v-if="showYoutube">
      <div class="title">Some of the music videos that I like</div>
      <div v-for="(row, index) in youtubeData" :key="index"
        class="flex flex-col lg:flex-row justify-center items-center">
        <div v-for="music in row" :key="music.src" class="music-video-card">
          <div v-html="music.src"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const smuleApiUrl = config?.public?.karaoke_api_url || `https://kevinmoemyintmyat-api.onrender.com/profile?`;

useHead({
  title: "Kevin Moe Myint Myat's Music Works",
  link: [{ rel: "icon", type: "image/png", href: "https://kevinmoemyintmyat.github.io/favicon.png" }],
  meta: [
    {
      name: 'description', content: `Kevin Moe Myint Myat is a software developer, an aspiring artist and a karaoke singer based in Singapore. He is also a full-time cat dad to JieMao (https://www.instagram.com/jiemao_blackcat).
            He spends most of his time working as a software engineer at DT One (https://www.dtone.com) and during the weekends, he pursues his passion 'Music' and works on his cover songs. He keens to participate in X-factor or *The Idol singing competition one day. :)` },
    {
      name: "keywords",
      content: `Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art, music`,
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
      content: `https://kevinmoemyintmyat.github.io/music`,
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

const state = reactive({
  isLoading: false,
  smuleQuery: {
    pageNumber: 0,
    pageLimit: 6
  },
  smuleData: []
});

function constructLabel(label) {
  if (label.length > 25) {
    return `${label.slice(0, 25)}...`
  }
  return label;
}

async function fetchSmuleData() {
  try {
    console.log(config);
    state.isLoading = true;
    const url = smuleApiUrl + `offset=${state.smuleQuery.pageNumber}&limit=${state.smuleQuery.pageLimit}`;
    const response = await fetch(url);
    const data = await response.json();
    constructData(data.list);
  } catch (ex) {
    console.error(ex);
  } finally {
    state.isLoading = false;
  }
}

function fetchMoreSmuleData() {
  state.smuleQuery.pageNumber = state.smuleQuery.pageNumber + state.smuleQuery.pageLimit;
  fetchSmuleData();
}

function constructData(list) {
  const dataSchema = [];
  if (Array.isArray(list)) {
    let innerArray = [];
    list.forEach((item, index) => {
      if (innerArray?.length <= 3) {
        innerArray.push(item);
      }
      if (innerArray.length === 3) {
        dataSchema.push(innerArray);
        innerArray = [];
      }
    });
    state.smuleData = state.smuleData.concat(dataSchema);
  }
}

onMounted(() => {
  fetchSmuleData();
})

</script>

<script>
import spotifyData from "~/assets/data/data-spotify";
import youtubeData from "~/assets/data/data-youtube";
import soundCloudData from "~/assets/data/data-soundcloud";

export default {
  data() {
    return {
      showSpotify: true,
      showYoutube: true,
      showSmule: true,
      showSoundcloud: true,
      spotifyData,
      soundCloudData,
      youtubeData
    };
  }
};
</script>

<style scoped>
.loading-text {
  font-size: 50px;
  color: whitesmoke;
  padding: 12px;
}
</style>

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
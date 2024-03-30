<template>
  <div class="h-screen w-screen">
    <div class="title">Some of the music that I like</div>
    <div v-for="(row, index) in musicData" :key="index" class="flex flex-col lg:flex-row justify-center items-center">
      <div v-for="art in row" :key="art.src" class="gallery-card">
        <div v-html="art.src"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicData: [
        [
          {
            src: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4T6FWA703h6H7zk1FoSARw?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
          },
          {
            src: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/10nyNJ6zNy2YVYLrcwLccB?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
          },
          {
            src: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5hM5arv9KDbCHS0k9uqwjr?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
          },
        ],
        [
          {
            src: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2i4AouhQeGFBb4g3cx8yqg?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
          },
          {
            src: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0SpkyS1Q4MD8GaVcP5YjT4?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
          },
          {
            src: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2V5SGZFsF1yoDakHRwrmma?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
          }
        ],
      ],
    };
  },
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

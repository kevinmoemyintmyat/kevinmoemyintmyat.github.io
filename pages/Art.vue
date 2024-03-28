<template>
  <div class="h-screen w-screen">
    <div class="title">
      Some of my arts and creations
    </div>
    <div v-for="(row, index) in artData" :key="index" class="flex flex-col lg:flex-row justify-center items-center">
      <div v-for="art in row" :key="art.name" class="gallery-card">
        <img :src="art.image" :alt="art.name" />
        <div class="overlay"></div>
        <p>
          "{{ art.name }}"
          <br />
          <span>{{ art.description }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

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
        }]
      ]
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

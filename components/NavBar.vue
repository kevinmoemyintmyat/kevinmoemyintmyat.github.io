<template>
  <div>
    <div class="p-4 flex flex-row fixed right-0 lg:visible invisible">
      <NuxtLink to="/" class="mx-3">
        <h1 class="text-4xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          Home
        </h1>
      </NuxtLink>
      <NuxtLink to="/art" class="mx-3">
        <h1 class="text-4xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          Art
        </h1>
      </NuxtLink>
      <NuxtLink to="/music" class="mx-3">
        <h1 class="text-4xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          Music
        </h1>
      </NuxtLink>
      <NuxtLink to="/blog" class="mx-3">
        <h1 class="text-4xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          Blog
        </h1>
      </NuxtLink>
      <a href="https://kevinmoemyintmyat.gitlab.io" class="mx-3" target="blank">
        <h1 class="text-4xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          Work
        </h1>
      </a>
      <NuxtLink to="/contact" class="mx-3">
        <h1 class="text-4xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          Contact
        </h1>
      </NuxtLink>
    </div>
    <div class="p-4 flex flex-row fixed right-0 lg:invisible visible">
      <MenuIcon @click="openSlideOver" />
      <SlideOver v-if="!closed" @handle-close="closeSlideOver" />
    </div>
  </div>
</template>

<script>
import MenuIcon from './MenuIcon.vue';
import SlideOver from './SlideOver.vue';

export default {
  data() {
    return { closed: true };
  },
  components: {
    MenuIcon,
    SlideOver
  },
  methods: {
    openSlideOver() {
      this.closed = false;
    },
    closeSlideOver() {
      this.closed = true;
    }
  }
};
</script>

<style scoped>
div {
  z-index: 9999999;
  background-image: linear-gradient(to bottom,
      #000000,
      #000000,
      rgba(255, 0, 0, 0));
  opacity: 1;
}
</style>

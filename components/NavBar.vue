<template>
  <div>
    <div class="p-4 flex flex-row fixed md:right-0 lg:visible">
      <NuxtLink to="/" class="mx-3">
        <h1 class="md:text-4xl sm:text-xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          Home
        </h1>
      </NuxtLink>
      <NuxtLink to="/art" class="mx-3">
        <h1 class="md:text-4xl sm:text-xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          Art
        </h1>
      </NuxtLink>
      <NuxtLink to="/music" class="mx-3">
        <h1 class="md:text-4xl sm:text-xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          Music
        </h1>
      </NuxtLink>
      <NuxtLink to="/blog" class="mx-3">
        <h1 class="md:text-4xl sm:text-xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          Blog
        </h1>
      </NuxtLink>
      <a href="https://kevinmoemyintmyat.gitlab.io" class="mx-3" target="blank">
        <h1 class="md:text-4xl sm:text-xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          Work
        </h1>
      </a>
      <NuxtLink to="/about/me" class="mx-3">
        <h1 class="md:text-4xl sm:text-xl font-bold hover:underline hover:cursor-pointer hover:text-white">
          About
        </h1>
      </NuxtLink>
    </div>
  </div>
</template>

<script>

export default {
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

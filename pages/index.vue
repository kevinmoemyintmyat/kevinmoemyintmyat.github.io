<template>
  <div class="h-screen w-screen flex lg:flex-row sm:flex-col-reverse lg:visible">
    <div class="h-screen lg:w-3/6 w-full flex flex-col justify-center items-center">
      <img v-if="shouldShow" src="@/assets/images/me-cool-avatar.jpg"
        class="mobile-avatar md:visible sm:visible lg:invisible mt-10" />
      <h1 class="p-12">
        <span class="text-9xl">Kevin</span>
        <br />
        <span class="text-white text-2xl p-2">Moe Myint Myat</span>
      </h1>
      <div class="mt-6">
        <a class="underline cursor-pointer" href="https://www.instagram.com/jiemao_theblackcattt/" target="blank">
          <span class="text-white text-1xl">A cat dad</span></a>,
        <a class="underline cursor-pointer" href="https://kevinmoemyintmyat.gitlab.io/" target="blank">
          <span class="text-white text-1xl">a developer</span></a>
        and
        <a class="underline cursor-pointer" href="https://www.instagram.com/m3_yevnnn.arts/" target="blank">
          <span class="text-white text-1xl">an artist</span></a>
      </div>
    </div>
    <div class="image h-screen lg:w-3/6 lg:visible invisible">
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    shouldShow() {
      return window.innerWidth <= 1024;
    }
  }
};
</script>

<script setup>
useHead({
  title: 'Kevin Moe Myint Myat - A cat dad, a developer & an artist',
  link: [{ rel: "icon", type: "image/png", href: "https://kevinmoemyintmyat.github.io/favicon.png" }]
});
</script>

<style scoped>
.image {
  background-image: url("@/assets/images/me-cool.jpg");
  background-size: cover;
}

.mobile-avatar {
  height: 300px;
  width: 300px;
  border-radius: 100%;
}

/* Apply Playfair Display to main headings */
h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

/* Apply Inter to body text */
span {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.5;
}

/* Style the main name */
.text-9xl {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  letter-spacing: -0.03em;
}

/* Style the subtitle */
.text-2xl {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  letter-spacing: 0.05em;
}

/* Style the description links */
.text-1xl {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
}

.text-1xl:hover {
  color: crimson !important;
}
</style>

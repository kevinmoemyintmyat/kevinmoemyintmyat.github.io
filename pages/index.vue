<template>
  <div class="container h-screen w-screen flex lg:flex-row sm:flex-col-reverse">
    <div class="h-screen w-3/6 flex flex-col justify-center items-center">
      <h1>
        <span class="text-9xl">Kevin</span>
        <span class="text-white text-2xl">Moe Myint Myat</span>
      </h1>
      <div class="mt-6">
        <a class="underline cursor-pointer" href="https://www.instagram.com/jiemao_blackcat" target="blank">
          <span class="text-white text-1xl">A cat dad</span></a>,
        <a class="underline cursor-pointer" href="https://kevinmoemyintmyat.gitlab.io/" target="blank">
          <span class="text-white text-1xl">a developer</span></a>,
        <a class="underline cursor-pointer" href="https://www.instagram.com/m3_yevn_artgallery/" target="blank">
          <span class="text-white text-1xl">a painter</span></a>
        and
        <a class="underline cursor-pointer" href="https://www.strava.com/athletes/kmoemyintmyat" target="blank">
          <span class="text-white text-1xl">a cyclist</span></a>
      </div>
    </div>
    <div class="image h-screen w-3/6">
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
export default {};
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

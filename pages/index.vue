<template>
  <div class="h-screen w-screen flex lg:flex-row sm:flex-col-reverse lg:visible">
    <div class="h-screen lg:w-3/6 w-full flex flex-col justify-center items-center">
      <img src="@/assets/images/me-cool-avatar.jpg" class="mobile-avatar md:visible sm:visible lg:invisible" />
      <h1 class="p-12">
        <span class="text-9xl">Kevin</span>
        <br/>
        <span class="text-white text-2xl p-2">Moe Myint Myat</span>
      </h1>
      <div class="mt-6">
        <a class="underline cursor-pointer" href="https://www.instagram.com/jiemao_blackcat/" target="blank">
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
export default {};
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
</style>

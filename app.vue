<template>
  <div class="main">
    <NavBar />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: 'Kevin Moe Myint Myat - A cat dad, a developer & an artist',
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
});
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

body {
  margin: 0;
  background-color: black;
  color: crimson;
}
</style>

<template>
  <div class="container h-screen w-screen flex flex-row">
    <div class="h-screen w-3/6 flex flex-col justify-center items-center">
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

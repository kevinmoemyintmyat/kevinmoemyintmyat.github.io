<template>
  <div
    class="container flex flex-col w-screen h-screen justify-center items-center"
  >
    <p class="text-5xl m-2 font-bold">Error</p>
    <h1 class="text-9xl m-2 font-bold">{{ error?.statusCode }}</h1>
    <p class="text-3xl m-2 font-bold">{{ error?.message }}</p>
    <NuxtLink class="mt-5 text-xl underline" to="/">Go back to Home</NuxtLink>
  </div>
</template>

<script setup>
const { value: error } = useError();
</script>

<style></style>

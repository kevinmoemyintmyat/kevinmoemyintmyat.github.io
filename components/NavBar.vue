<template>
  <div>
    <div class="p-4 flex flex-row fixed md:right-0 lg:visible">
      <div v-for="routeItem in state.routes" :key="routeItem.name" class="mx-3">
        <NuxtLink :to="'/' + routeItem.route" v-if="routeItem.internal">
          <h2
            :class="`md:text-4xl sm:text-xl font-bold hover:underline hover:cursor-pointer hover:text-white ` + selected(routeItem.route)">
            {{ routeItem.name }}
        </h2>
        </NuxtLink>
        <a v-else :href="routeItem.route" target="blank">
          <h2 class="md:text-4xl sm:text-xl font-bold hover:underline hover:cursor-pointer hover:text-white">
            {{ routeItem.name }}
          </h2>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
};
</script>

<script setup>
const route = useRoute();

const state = reactive({
  routes: [
    {
      name: "Home",
      route: "",
      internal: true
    },
    {
      name: "Art",
      route: "art",
      internal: true
    },

    {
      name: "Blog",
      route: "blog",
      internal: true
    },
    {
      name: "Work",
      route: "https://kevinmoemyintmyat.gitlab.io",
      internal: false
    },
    {
      name: "About",
      route: "about/me",
      internal: true
    }
  ]
});

const selected = (value) => {
  const mainPath = route.path.split("/")[1];
  if (mainPath === "about") {
    return value.includes(mainPath) ? "selected" : "";
  }
  return value === mainPath ? "selected" : "";
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

/* Apply Playfair Display to navbar headings */
h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: all 0.3s ease;
}

.selected {
  text-decoration: underline;
  color: whitesmoke;
}
</style>

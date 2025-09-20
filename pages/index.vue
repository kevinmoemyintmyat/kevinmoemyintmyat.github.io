<template>
  <div class="h-screen w-screen flex lg:flex-row sm:flex-col-reverse lg:visible">
    <div class="min-h-screen lg:h-screen lg:w-3/6 w-full flex flex-col justify-start lg:justify-center items-center pt-32 pb-20 lg:pt-0 lg:pb-0">
      <img src="@/assets/images/me-cool-avatar.jpg"
        class="mobile-avatar block lg:hidden mb-8" />
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
      
      <!-- Featured Blog Posts Section -->
      <div class="mt-8 text-center">
        <p class="text-white text-lg mb-4">Author of</p>
        <div class="space-y-2">
          <div v-for="blog in topRatedBlogs" :key="blog.id">
            <a class="inline-block px-4 py-2 bg-red-600 text-white text-1xl underline cursor-pointer hover:bg-red-700 transition-all duration-200" :href="getBlogUrl(blog)">
              "{{ blog.title }}"
            </a>
          </div>
          <div>
            <a class="inline-block px-4 py-2 bg-red-600 text-white text-1xl underline cursor-pointer hover:bg-red-700 transition-all duration-200" href="/blog">
              and more...
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="image h-screen lg:w-3/6 lg:visible invisible">
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script setup>
// Import blog data
import devBlogsData from '@/assets/data/data-dev-blogs.js';
import blogspotBlogsData from '@/assets/data/data-blogspot-blogs.js';
import travelBlogsData from '@/assets/data/data-blog.js';

// Combine all blog data
const allBlogs = [
  ...devBlogsData.map(blog => ({ ...blog, source: 'dev' })),
  ...blogspotBlogsData.map(blog => ({ ...blog, source: 'blogspot' })),
  ...travelBlogsData.map(blog => ({ ...blog, source: 'travel' }))
];

// Get top 3 highest-rated blogs
const topRatedBlogs = computed(() => {
  return allBlogs
    .filter(blog => blog.rating) // Only include blogs with ratings
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)) // Sort by rating (highest first) - ensure numeric comparison
    .slice(0, 3); // Take top 3
});

// Function to generate blog URL based on source
const getBlogUrl = (blog) => {
  if (blog.source === 'dev') {
    return `/blog/${blog.slug}`;
  } else if (blog.source === 'blogspot') {
    return `/blog/${blog.id}`;
  } else if (blog.source === 'travel') {
    return blog.route;
  }
  return '/blog';
};


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

<template>
  <section class="mt-20 lg:ml-20 lg:pl-20 lg:w-4/6 p-5">
    <h1 class="text-4xl font-bold mb-8">Published Blogs</h1>
    <ul>
      <li v-for="post in posts" :key="post.route" class="mb-6">
        <NuxtLink :to="post.route" class="text-2xl text-crimson hover:underline">
          {{ post.title }}
        </NuxtLink>
        <div class="text-gray-400 text-sm">{{ post.date }}<span v-if="post.category">, <b>Category</b>: {{ post.category }}</span></div>
        <div class="text-gray-200">{{ post.description }}</div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import blogData from '~/assets/data/data-blog.js'
import devBlogData from '~/assets/data/data-dev-blogs.js'

// Combine all blog data sources
const posts = [
  ...blogData.map(post => ({
    ...post,
    route: post.route,
    date: post.date?.toLocaleDateString?.() || '',
  })),
  ...devBlogData.map(post => ({
    title: post.title,
    description: post.description,
    route: `/blog/${post.slug}`,
    date: post.readable_publish_date,
    category: post.tag_list,
  })),
]
</script>

<style scoped>
/* Apply Playfair Display to main heading */
h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  letter-spacing: -0.01em;
}

/* Apply Inter to all text elements */
ul {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

li {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.text-crimson {
  color: crimson;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
}

.text-gray-400 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
}

.text-gray-200 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.5;
}
</style>
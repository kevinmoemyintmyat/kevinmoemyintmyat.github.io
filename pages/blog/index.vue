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
.text-crimson {
  color: crimson;
}
</style>
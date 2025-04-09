<template>
  <div class="h-screen w-screen mt-5">
    <div>
      <div v-if="state.latestBlog.title" class="title">Latest Blog</div>
      <div v-if="state.latestBlog.title" class="gallery-card w-full">
        <NuxtLink :to="constructPath(state.latestBlog)">
          <p>
            <span class="tooltip title"
              >"{{ constructLabel(state.latestBlog.title) }}"
              <span
                v-if="state.latestBlog?.title?.length > 55"
                class="tooltiptext"
                >{{ state.latestBlog?.title }}</span
              >
            </span>
            <br />
            <span class="tooltip description"
              >{{ constructLabel(state.latestBlog.description) }}
              <span
                v-if="state.latestBlog?.description?.length > 55"
                class="tooltiptext"
                >{{ state.latestBlog?.description }}</span
              >
            </span>
          </p>
          <div class="gallery-card-footer">
            <span class="date">
              Written on {{ state.latestBlog.date }}, <b>Category</b>:
              <b class="gallery-card-tag">{{ state.latestBlog.category }}</b>
              <b></b>
            </span>
            <span class="read-more"> ...Read more </span>
          </div>
        </NuxtLink>
      </div>
      <div class="title">Published Blogs</div>
      <div
        v-for="(row, index) in blogData"
        :key="index"
        class="flex flex-col lg:flex-row justify-center items-center"
      >
        <div v-for="blog in row" :key="blog.title" class="w-full">
          <NuxtLink v-if="!blog.isHidden" :to="constructPath(blog)">
            <div class="gallery-card">
              <p>
                <span class="tooltip title"
                  >"{{ constructLabel(blog.title) }}"
                  <span v-if="blog?.title?.length > 55" class="tooltiptext">{{
                    blog?.title
                  }}</span>
                </span>
                <br />
                <span class="tooltip description"
                  >{{ constructLabel(blog.description) }}
                  <span
                    v-if="blog?.description?.length > 55"
                    class="tooltiptext"
                    >{{ blog?.description }}</span
                  >
                </span>
              </p>
              <div class="gallery-card-footer">
                <span class="date">
                  Written on {{ blog.date }}, <b>Category</b>:
                  <b class="gallery-card-tag">{{ blog.category }}</b>
                </span>
                <span class="read-more"> ...Read more </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import orderBy from "lodash/orderBy";
import format from "date-fns/format";
import blogs from "~/assets/data/data-blog.js";
import dataDevBlogs from "~/assets/data/data-dev-blogs";
import dataBlogspotBlogs from "~/assets/data/data-blogspot-blogs";

useHead({
  title: "Blogs and Articles by Kevin Moe Myint Myat",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "https://kevinmoemyintmyat.github.io/favicon.png",
    },
  ],
  meta: [
    {
      name: "description",
      content: `Kevin Moe Myint Myat is a software developer and an art hobbyist based in Singapore. He is also a full-time cat dad to JieMao (https://www.instagram.com/jiemao_theblackcattt).
            He spends most of his time working as a software engineer at DT One (https://www.dtone.com) and when he's on his annual leave, he pursues his passion "Travelling" and explore the world. He wrote his travel blogs on this
            personal website to share his vacation experiences with his audiences.`,
    },
    {
      name: "keywords",
      content: `Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art, travel blogs, articles`,
    },
    {
      property: "og:title",
      content: `Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
    },
    {
      property: "og:type",
      content: "profile",
    },
    {
      property: "og:url",
      content: `https://kevinmoemyintmyat.github.io/blog`,
    },
    {
      property: "og:site:name",
      content: `Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
    },
    {
      property: "og:description",
      content: `Kevin Moe Myint Myat - a cat dad, a developer & an artist`,
    },
    {
      name: "twitter:site",
      content: "https://kevinmoemyintmyat.github.io",
    },
    {
      name: "twitter:description",
      content: "Kevin Moe Myint Myat - a cat dad, a developer & an artist",
    },
  ],
});

const config = useRuntimeConfig();
const state = reactive({
  latestBlog: {},
  blogs,
});

const blogData = computed(() => {
  const blogData = [];
  let row = [];
  const sortedBlogs = orderBy(state.blogs, "date", "desc");
  let results = [];
  if (sortedBlogs.length % 2 === 0) {
    results = sortedBlogs.concat({
      isHidden: true,
      date: new Date(),
    });
  } else {
    results = sortedBlogs;
  }
  state.latestBlog = results.shift();
  state.latestBlog = {
    ...state.latestBlog,
    date: format(state.latestBlog.date, "do MMMM yyyy"),
  };

  results.forEach((blog, index) => {
    if (row?.length <= 2) {
      row.push({
        ...blog,
        date: format(blog.date, "do MMMM yyyy"),
      });
    }
    if (row.length === 2) {
      blogData.push(row);
      row = [];
    } else if (index === sortedBlogs.length - 1) {
      blogData.push(row);
      row = [];
    }
  });

  return blogData;
});

onBeforeMount(() => {
  fetchDevBlogData();
  fetchBlogspotBlogData();
});

function fetchDevBlogData() {
  state.blogs = state.blogs.concat(
    dataDevBlogs.map((item) => {
      return {
        ...item,
        date: new Date(item.published_at),
        route: `/blog/${item.slug}`,
        language: "English",
        type: "dev",
      };
    })
  );
}

function fetchBlogspotBlogData() {
  state.blogs = state.blogs.concat(
    dataBlogspotBlogs.map((item) => {
      const div = document.createElement("div");
      div.innerHTML = item.content;
      const description = div.textContent.slice(0, 80);
      return {
        ...item,
        description: description,
        date: new Date(item.published),
        route: `/blog/${item.id}`,
        language: "English"
      };
    })
  );
}

function constructLabel(label) {
  if (label?.length > 55) {
    return `${label.slice(0, 55)}...`;
  }
  return label;
}

function constructPath(blog) {
  if (blog.language === "English") {
    return {
      path: blog.route,
      params: {
        slug: blog.slug || blog.id,
      },
    };
  }
  return {
    path: blog.route,
  };
}
</script>

<style scoped>
.title {
  margin-top: 10px;
}

p {
  font-size: 1.5em;
}

span.title {
  color: whitesmoke;
  font-size: 1.5rem;
  padding: unset;
}

span.description {
  color: crimson;
}

.tooltiptext {
  font-size: 16px;
}

.date {
  font: 1em sans-serif;
  color: gray;
  position: relative;
  display: block;
}

.read-more {
  color: grey;
  text-decoration: underline;
  font-size: 15px;
  right: 0px;
  bottom: 8px;
  position: absolute;
}

.gallery-card {
  width: 98%;
  position: relative;
}

.gallery-card-footer {
  bottom: 0px;
  width: 95%;
}

a {
  cursor: pointer;
}
</style>

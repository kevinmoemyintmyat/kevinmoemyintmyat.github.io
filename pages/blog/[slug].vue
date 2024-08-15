<template>
    <section class="mt-20 lg:pl-20 p-5" ref="startOfArticle">
        <h1>{{ route.query.title }}</h1>
        <h2>Written on {{ route.query.date }}</h2>
        <div v-if="state.isLoading" class="flex justify-center align-center">Loading...</div>
        <p class="blog-body" v-if="!state.isLoading" v-html="state?.blogData?.body_html"></p>
    </section>
</template>


<script setup>
const route = useRoute();

const state = reactive({
    isLoading: false,
    blogData: null
})

useHead({
    title: `${route?.query?.title} - Written by Kevin Moe Myint Myat` || "Kevin Moe Myint Myat - a cat dad, a developer & an artist",
    link: [{ rel: "icon", type: "image/png", href: "https://kevinmoemyintmyat.github.io/favicon.png" }],
    meta: [
        { name: 'description', content: `${route?.query?.title} - Written by Kevin Moe Myint Myat` },
        {
            name: "keywords",
            content: `Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art`,
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
            content: `https://kevinmoemyintmyat.github.io/blog/first-trip-to-bali`,
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
        }
    ],
    ogImage: '/favicon.png'
})

onBeforeMount(() => {
    fetchBlogData();
})

const config = useRuntimeConfig();
const blogApiUrl = route.query.type === "dev" ? config?.public?.dev_blog_api_url : "";

async function fetchBlogData() {
    try {
        state.isLoading = true;
        const response = await fetch(`${blogApiUrl}/articles/${route.query.blog_id}`);
        const data = await response.json();
        state.blogData = data;
    }
    catch (ex) {
        console.error(ex)
    }
    finally {
        state.isLoading = false;
    }
}

</script>

<script>
export default {
    methods: {
        showSection(section) {
            this.$refs[section].scrollIntoView({ behavior: "smooth" });
        }
    }
}
</script>

<style scoped>
div {
    margin-top: 30px;
}

h1 {
    font-size: 60px;
    font-weight: 700;
    padding-bottom: 10px;
}

h2 {
    font-size: 30px;
    padding-bottom: 10px;
}

.blog-body {
    margin-top: 20px;
}
</style>
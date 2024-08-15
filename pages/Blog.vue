<template>
    <div class="h-screen w-screen mt-5">
        <div>
            <div v-if="state.latestBlog.title" class="title">Latest Blog</div>
            <div v-if="state.latestBlog.title" class="gallery-card w-full">
                <NuxtLink :to="constructPath(state.latestBlog)">
                    <p>
                        "{{ state.latestBlog.title }}"
                        <br />
                        <span>{{ state.latestBlog.description }}</span>
                    </p>
                    <div class="gallery-card-footer">
                        <span class="date">
                            Written on {{ state.latestBlog.date }}, <b>Category</b>: <b class="gallery-card-tag">{{
                                state.latestBlog.category
                            }}</b> <b>, Language</b>: <b class="gallery-card-tag">{{ state.latestBlog.language
                                }}</b>
                        </span>
                        <span class="read-more">
                            ...Read more
                        </span>
                    </div>
                </NuxtLink>
            </div>
            <div class="title">Published Blogs</div>
            <div v-for="(row, index) in blogData " :key="index"
                class="flex flex-col lg:flex-row justify-center items-center">
                <div v-for="blog in row " :key="blog.title" class="gallery-card w-full">
                    <NuxtLink :to="constructPath(blog)">
                        <p>
                            <span class="tooltip title">"{{ constructLabel(blog.title) }}"
                                <span v-if="blog?.title?.length > 55" class="tooltiptext">{{ blog?.title }}</span>
                            </span>
                            <br />
                            <span class="tooltip description">{{ constructLabel(blog.description) }}
                                <span v-if="blog?.description?.length > 55" class="tooltiptext">{{ blog?.description
                                    }}</span>
                            </span>
                        </p>
                        <div class="gallery-card-footer">
                            <span class="date">
                                Written on {{ blog.date }}, <b>Category</b>: <b class="gallery-card-tag">{{
                                    blog.category
                                    }}</b> <b>, Language</b>: <b class="gallery-card-tag">{{ blog.language
                                    }}</b>
                            </span>
                            <span class="read-more">
                                ...Read more
                            </span>
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

useHead({
    title: "Blogs, Poems and Articles by Kevin Moe Myint Myat",
    link: [{ rel: "icon", type: "image/png", href: "https://kevinmoemyintmyat.github.io/favicon.png" }],
    meta: [
        {
            name: 'description', content: `Kevin Moe Myint Myat is a software developer and an art hobbyist based in Singapore. He is also a full-time cat dad to JieMao (https://www.instagram.com/jiemao_blackcat).
            He spends most of his time working as a software engineer at DT One (https://www.dtone.com) and when he's on his annual leave, he pursues his passion "Travelling" and explore the world. He wrote his travel blogs on this
            personal website to share his vacation experiences with his audiences.` },
        {
            name: "keywords",
            content: `Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art, travel blogs, poems, articles`,
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
        }
    ]
})

const config = useRuntimeConfig();
const devBlogApiUrl = config?.public?.dev_blog_api_url;

const state = reactive({
    latestBlog: {},
    blogs: [
        {
            title: "The first solo trip to Bali",
            description: "It was a great morning before the flight. I woke up fresh and...",
            date: new Date("2024/03/30"),
            route: "/blog/first-trip-to-bali",
            category: "Travel",
            language: "English"
        },
        {
            title: "The second solo trip to Bali",
            description: "One's just not enough when it comes to Bali. But this time, I'm..",
            date: new Date("2024/04/11"),
            route: "/blog/second-trip-to-bali",
            category: "Travel",
            language: "English"
        },
        {
            title: "နေရောင်လာပြီ",
            title_en: "Here Comes the Sun",
            description: "မျှော်လင့်ချက်နှင့် ခွန်အားကို သရုပ်ဖော်ထားသော ကဗျာတစ်ပုဒ်",
            description_en: "A poem written in Burmese language depicting hope and strength",
            date: new Date("2023/09/08"),
            route: "/poems/here-comes-the-sun",
            category: "Poem",
            language: "Burmese",
            language_date: "8th September 2023 တွင်ရေးသားခဲ့သည်"
        },
        {
            title: "Memoirs of a Ghost",
            description: "A poem depicting internal despair and longing",
            date: new Date("2023/12/05"),
            route: "/poems/memoirs-of-a-ghost",
            category: "Poem",
            language: "English"
        }
    ]
});

const blogData = computed(() => {
    const blogData = [];
    let row = [];
    const sortedBlogs = orderBy(state.blogs, "date", "desc");
    state.latestBlog = sortedBlogs.shift();
    state.latestBlog = {
        ...state.latestBlog,
        date: format(state.latestBlog.date, "do MMMM yyyy")
    };

    sortedBlogs.forEach((blog, index) => {
        if (row?.length <= 2) {
            row.push({
                ...blog,
                date: format(blog.date, "do MMMM yyyy")
            });
        }
        if (row.length === 2) {
            blogData.push(row);
            row = [];
        } else if (index === sortedBlogs.length - 1) {
            blogData.push(row);
            row = [];
        }
    })
    return blogData;
});

onMounted(() => {
    fetchDevBlogData();
});

async function fetchDevBlogData() {
    const response = await fetch(`${devBlogApiUrl}/articles?username=m3yevn`);
    const data = await response.json();
    console.log(data);
    state.blogs = state.blogs.concat(data.map(item => {
        return {
            ...item,
            date: item.created_at,
            route: `/blog/${item.slug}`,
            language: "English",
            type: "dev"
        }
    }));
}

function constructLabel(label) {
    if (label?.length > 55) {
        return `${label.slice(0, 55)}...`
    }
    return label;
}

function constructPath(blog) {
    if (blog.language === "English") {
        return {
            path: blog.route,
            params: {
                slug: blog.slug,
            },
            query: {
                title: blog.title,
                date: blog.date,
                blog_id: blog.id,
                type: blog.type
            }
        }
    }
    return {
        path: blog.route,
        query: {
            title: blog.title,
            title_en: blog.title_en,
            language: blog.language,
            language_date: blog.language_date,
            date: blog.date,
            blog_id: blog.id,
            type: blog.type
        }
    }
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
    width: 100%;
    height: 180px;
    position: relative;
}

.gallery-card-footer {
    position: absolute;
    bottom: 0px;
    width: 95%;
}

.gallery-card:hover {
    width: 100%;
}

a {
    cursor: pointer;
}
</style>
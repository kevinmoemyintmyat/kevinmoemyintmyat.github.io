<template>
    <section class="mt-20 lg:pl-20 p-5" ref="startOfArticle">
        <h1>{{ state.title }}</h1>
        <h2>{{ state.date }} <span v-if="shouldTranslate">
                <button class="translate-button" @click="toggleTranslations"><img
                        src="@/assets/icons/translation.png" />
                    Translate
                </button>
            </span>
        </h2>
        <p class="pt-10">
            Haunted in my own paradise
            <br />
            It became a prison.
            <br />
            I am a cage longing for screeching doves in unison..
            <br /><br />
            Heaven above turns sour into a heap of throes,
            <br />
            a mere pile of ashes and thorns without the rose
            <br /><br />
            <br /><br />
            <br /><br />
            For what dies have lived for the memoirs of a ghost
            <br /><br />
        <div class="flex poem-signature">
            <hr />
            Kevin Moe Myint Myat
        </div>
        </p>
    </section>
</template>

<script setup>
import blogs from "~/assets/data/data-blog";
import format from "date-fns/format";

const route = useRoute();
const thisBlog = blogs.find(blog => blog.id === parseInt(route.query?.blog_id));

const shouldTranslate = computed(() => {
    if (!thisBlog?.language) {
        return false;
    }
    return thisBlog?.language !== "English";
})

const originalState = {
    title: thisBlog.title,
    language: thisBlog.language,
    date: thisBlog.language_date || `Written on ${format(new Date(thisBlog.date), "dd MMMM yyyy")}`,
};

const state = reactive({ ...originalState });

function toggleTranslations() {
    if (state.language !== "en") {
        state.title = thisBlog.title_en;
        state.date = `Written on ${format(new Date(thisBlog.date), "dd MMMM yyyy")}`;
        state.language = "en";
        return;
    }
    state.title = originalState.title;
    state.language = originalState.language;
    state.date = originalState.date;
}

useHead({
    title: "Poems - " + thisBlog.title + " by Kevin Moe Myint Myat",
    link: [{ rel: "icon", type: "image/png", href: "https://kevinmoemyintmyat.github.io/favicon.png" }],
    meta: [
        { name: 'description', content: 'Memoirs of a Ghost by Kevin Moe Myint Myat' },
        {
            name: "keywords",
            content: `Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog, poems, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art`,
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
            content: `https://kevinmoemyintmyat.github.io/poems/memoirs-of-a-ghost`,
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
    font-size: 50px;
    padding-bottom: 10px;
}

h2 {
    font-size: 25px;
    padding-bottom: 10px;
    color: whitesmoke;
    display: flex;
}

h2 span {
    margin-left: 30px;
}

p {
    font-weight: bold;
    color: whitesmoke;
    font-size: large;
}

p h2 {
    color: crimson;
}

p span {
    display: block;
}

p a {
    cursor: pointer;
    text-decoration: underline;
}

ul li {
    cursor: pointer;
}

ul li:hover {
    text-decoration: underline;
}

.translate-button:hover {
    border: unset;
    background-color: crimson;
}
</style>
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
        <p v-if="state.language !== 'en'" class="pt-10">
            မနေ့ညက နေထွက်တာ ကြည့်ရတယ်လို့ အိမ်မက် မက်တယ် ...
            <br /><br />
            ဘာအဓိပ္ပယ်မှန်း မသိပေမယ့် ...
            <br /><br />
            ကျနော် နည်းနည်း...
            <br /><br />
            <br /><br />
            ပျော်လာမိတယ်
        </p>
        <p class="pt-10" v-else>
            Last night I dreamt of a sunrise...
            <br /><br />
            It was nothing, I do not know despise...
            <br /><br />
            A small amount of sadness in me sliced...
            <br /><br />
            <br /><br />
            I slowly smiled...
        </p>
        <div class="flex poem-signature">
            <hr />
            Kevin Moe Myint Myat
        </div>
    </section>
</template>

<script setup>
import blogs from "~/assets/data/data-blog";
import format from "date-fns/format";

const route = useRoute();
const thisBlog = blogs.find(blog => blog.id === parseInt(route.query?.blog_id));

const shouldTranslate = computed(() => {
    return thisBlog?.language !== "English";
})

const originalState = {
    title: thisBlog.title,
    language: thisBlog.language,
    date: thisBlog.language_date,
};

const state = reactive({ ...originalState });

function toggleTranslations() {
    if (state.language !== "en") {
        state.title = thisBlog.title_en;
        state.date = `Written on ${format(new Date(thisBlog.date), "dd MMMM yyyy")}`;
        state.language = "en";
        return useHead({
            title: "Poems - " + thisBlog.title_en + " by Kevin Moe Myint Myat",
        })
    }
    state.title = originalState.title;
    state.language = originalState.language;
    state.date = originalState.date;

    useHead({
        title: "Poems - " + thisBlog.title + " by Kevin Moe Myint Myat",
    })
}

useHead({
    title: "Poems - " + thisBlog.title + " by Kevin Moe Myint Myat",
    link: [{ rel: "icon", type: "image/png", href: "https://kevinmoemyintmyat.github.io/favicon.png" }],
    meta: [
        { name: 'description', content: 'Here Comes the Sun by Kevin Moe Myint Myat' },
        {
            name: "keywords",
            content: `Kevin Moe Myint Myat,kevinmoemyintmyat,kevinmoemyintmyat.github.io,blog,poems, stories, software developer, artist, cat dad,fullstack,software,kevin,moe,myint,myat,kevn,Kevn Moe Myint Myat,KevinMoeMyintMyat, Kevin Moe Myint Myat, Github, art`,
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
            content: `https://kevinmoemyintmyat.github.io/poems/here-comes-the-sun`,
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
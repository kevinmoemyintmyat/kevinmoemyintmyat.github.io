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
            ဘာအဓိပယ်မှန်း မသိပေမယ့် ...
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
    </section>
</template>

<script setup>
const route = useRoute();
const shouldTranslate = computed(() => {
    return route.query?.language !== "English";
})

const originalState = {
    title: route.query.title,
    language: route.query.language,
    date: route.query.language_date,
};

const state = reactive({ ...originalState });

function toggleTranslations() {
    if (state.language !== "en") {
        state.title = route.query.title_en;
        state.date = `Written on ${route.query.date}`;
        state.language = "en";
        return;
    }
    state.title = originalState.title;
    state.language = originalState.language;
    state.date = originalState.date;
}

useHead({
    title: "Poems - " + route.query.title + " by Kevin Moe Myint Myat",
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    meta: [
        { name: 'description', content: 'My first trip to Bali by Kevin Moe Myint Myat' },
        {
            name: "description",
            content: "Kevin Moe Myint Myat - a cat dad, a developer & an artist",
        },
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
            content: `https://kevinmoemyintmyat.github.io`,
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

hr {
    margin: 16px 0px;
    width: 90%;
    color: grey;
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
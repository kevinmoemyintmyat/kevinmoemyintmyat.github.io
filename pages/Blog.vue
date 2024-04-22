<template>
    <div class="h-screen w-screen mt-20">
        <div class="mt-20">
            <div v-for="(row, index) in  blogData " :key="index"
                class="flex flex-col lg:flex-row justify-center items-center">
                <div v-for="blog in  row " :key="blog.title" class="gallery-card w-full">
                    <NuxtLink :to="constructPath(blog)">
                        <p>
                            "{{ blog.title }}"
                            <br />
                            <span>{{ blog.description }}</span>
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

<script>
export default {
    data() {
        //edit from top for latest blog data
        return {
            blogData: [[
                {
                    title: "The first solo trip to Bali",
                    description: "It was a great morning before the flight. I woke up fresh and...",
                    date: "30th March 2024",
                    route: "/blog/first-trip-to-bali",
                    category: "Travel",
                    language: "English"
                },
                {
                    title: "The second solo trip to Bali",
                    description: "One's just not enough when it comes to Bali. But this time, I'm..",
                    date: "11th April 2024",
                    route: "/blog/second-trip-to-bali",
                    category: "Travel",
                    language: "English"
                }],
            [
                {
                    title: "နေရောင်လာပြီ",
                    title_en: "Here Comes the Sun",
                    description: "မျှော်လင့်ချက်နှင့် ခွန်အားကို သရုပ်ဖော်ထားသော ကဗျာတစ်ပုဒ်",
                    description_en: "A poem written in Burmese language depicting hope and strength",
                    date: "22nd April 2024",
                    route: "/poems/here-comes-the-sun",
                    category: "Poem",
                    language: "Burmese",
                    language_date: "22nd April 2024 တွင်ရေးသားခဲ့သည်"
                },
                {
                    title: "နေရောင်လာပြီ",
                    title_en: "Here Comes the Sun",
                    description: "မျှော်လင့်ချက်နှင့် ခွန်အားကို သရုပ်ဖော်ထားသော ကဗျာတစ်ပုဒ်",
                    description_en: "A poem written in Burmese language depicting hope and strength",
                    date: "22nd April 2024",
                    route: "/poems/here-comes-the-sun",
                    category: "Poem",
                    language: "Burmese",
                    language_date: "22nd April 2024 တွင်ရေးသားခဲ့သည်"
                }
            ]
            ]
        }
    },
    methods: {
        constructPath(blog) {
            if (blog.language === "English") {
                return blog.route;
            }
            return {
                path: blog.route,
                query: {
                    title: blog.title,
                    title_en: blog.title_en,
                    language: blog.language,
                    language_date: blog.language_date,
                    date: blog.date
                }
            }
        }
    }
};
</script>

<style scoped>
p {
    font-size: 1.5em;
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
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

<script setup>
useHead({
    title: "Blogs, Poems and Articles by Kevin Moe Myint Myat"
})
</script>

<script>
import orderBy from "lodash/orderBy";
import format from "date-fns/format";

export default {
    data() {
        //must have odd number of blogs to take out latest release
        return {
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
                },
                {
                    title: "Rainy Day Reunion",
                    description: "Once upon a time, in a world where raindrops danced upon the rooftops...",
                    date: new Date("2024/04/22"),
                    route: "/blog/rainy-day-reunion",
                    category: "Story",
                    language: "English"
                },
                {
                    title: "Echoes of Tomorrow",
                    description: "The year was 2175, and the world had changed beyond recognition...",
                    date: new Date("2024/04/23"),
                    route: "/blog/echoes-of-tomorrow",
                    category: "Story",
                    language: "English"
                }
            ]
        }
    },
    computed: {
        blogData() {
            const blogData = [];
            let row = [];
            const sortedBlogs = orderBy(this.blogs, "date", "desc");
            sortedBlogs.forEach((blog) => {
                row.push({
                    ...blog,
                    date: format(blog.date, "do MMMM yyyy")
                });

                if (row.length === 2) {
                    blogData.push(row);
                    row = [];
                    return;
                }
            })
            return blogData;
        }
    },
    methods: {
        constructPath(blog) {
            if (blog.language === "English") {
                return {
                    path: blog.route,
                    query: {
                        title: blog.title,
                        date: blog.date
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
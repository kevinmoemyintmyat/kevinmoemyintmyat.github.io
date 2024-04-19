<template>
    <div class="h-screen w-screen mt-20">
        <div class="mt-20">
            <div v-for="(row, index) in blogData" :key="index"
                class="flex flex-col lg:flex-row justify-center items-center">
                <div v-for="blog in row" :key="blog.title" class="gallery-card w-full">
                    <NuxtLink :to="blog.route">
                        <p>
                            "{{ blog.title }}"
                            <br />
                            <span>{{ blog.description }}</span>
                        </p>
                        <span class="date">
                            {{ blog.date }}
                            <span class="read-more">
                                ...Read more
                            </span>
                        </span>
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
                    route: "/blog/first-trip-to-bali"
                },
                {
                    title: "The second solo trip to Bali",
                    description: "One's just not enough when it comes to Bali. But this time, I'm..",
                    date: "11th April 2024",
                    route: "/blog/second-trip-to-bali"
                }]
            ]
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
    position: absolute;
    right: 0px;
}

.gallery-card {
    width: auto;
}

.gallery-card:hover {
    width: auto;
}

a {
    cursor: pointer;
}
</style>
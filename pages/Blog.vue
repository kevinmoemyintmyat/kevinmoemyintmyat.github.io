<template>
    <div class="h-screen w-screen mt-20">
        <div class="mt-20">
            <div v-for="(row, index) in blogData" :key="index"
                class="flex flex-col lg:flex-row justify-center items-center">
                <div v-for="blog in row" :key="blog.title" class="gallery-card w-full">
                    <NuxtLink to="/blog/first-trip-to-bali">
                        <p>
                            "{{ blog.title }}"
                            <br />
                            <span>{{ blog.description }}</span>
                            <span class="read-more">
                                ...Read more
                            </span>
                        </p>
                        <span class="date">
                            {{ blog.date }}
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
                    date: "30th March 2024"
                }],
            []
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
}

.read-more {
    color: grey;
    text-decoration: underline;
    font-size: 15px;
    padding-left: 80px;
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
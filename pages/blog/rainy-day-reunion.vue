<template>
    <section class="mt-20 lg:pl-20 p-5" ref="startOfArticle">
        <h1>{{ $route.query.title }}</h1>
        <h2>Written on {{ $route.query.date }}</h2>
        <p class="pt-10">
            Once upon a time, in a world where raindrops danced upon the rooftops like tears from the heavens, there
            existed a death god. ☔️💀 He was ancient, immortal, and burdened with the solemn duty of guiding souls to
            the afterlife. Yet, despite his ageless existence, the death god was lonely, wandering the mortal realm
            unnoticed, unseen by those he watched over.
            <br /><br />
            👧🏻💔 Amidst the gray clouds and gentle pitter-patter of rain, there lived a girl named Lily. 🌧️🌸 She was
            kind-hearted and full of life, yet her soul carried a weight that even she couldn't comprehend. #LonelyHeart
            <br />
            One fateful rainy day, as droplets cascaded down the windowpanes in a symphony of melancholy, the death god
            felt an inexplicable pull towards the mortal world. It was as if the heavens themselves were guiding him to
            a chance encounter that would change both their lives forever. ☁️👁️‍🗨️
            <br />
            As the death god emerged from the shadows, his presence cloaked in an aura of mystery and solemnity, Lily's
            heart skipped a beat. She had never seen anyone quite like him, his eyes holding the wisdom of eons and the
            sorrow of a thousand lifetimes. #EternalGaze
            <img src="/blog/rainy-day-reunion/shinigami.png" class="blog-img" />
            <br /><br />
            Despite his fearsome reputation, the death god approached Lily with gentleness and warmth, drawn to the
            light that radiated from her soul. In her, he saw a flicker of hope amidst the darkness that shrouded his
            existence. 🕊️🖤
            <br />
            Through whispered conversations and shared moments under the gray skies, the bond between the death god and
            Lily blossomed like a delicate flower in the rain. 💧🌹 She taught him the beauty of mortal life, while he
            offered her solace in times of sorrow. Together, they found solace in each other's company, a refuge from
            the storms that raged within their hearts. #UnexpectedLove
            <br /><br />
            Yet, as the seasons changed and the rains gave way to sunshine, the inevitability of their circumstances
            loomed over them like a shadow. The death god knew that he could never truly belong in the mortal world,
            destined to remain an outsider to the end of time. #EternalWanderer
            <br />
            In their final moments together, as the rain fell in a curtain of tears, the death god made a solemn promise
            to Lily. He would watch over her from afar, his love eternal and unwavering, even as they existed worlds
            apart. #PromiseOfForever
            <br />
            And so, as the last droplets of rain kissed the earth, the death god bid farewell to the girl who had
            captured his heart. Though they could never be together, their souls would remain intertwined across the
            vast expanse of time, a testament to the power of love that transcended even death itself.
            #LoveBeyondTheGrave
            <br /><br />
            As the sun broke through the clouds and cast its warm rays upon the world once more, the death god vanished
            into the ether, his presence but a fleeting memory in the hearts of those who had been touched by his
            kindness. And though he may have faded into legend, his love for Lily would endure for eternity, a beacon of
            light in the darkness that surrounded them both. 🌧️🖤✨
        </p>
    </section>
</template>

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
    font-size: 100px;
    padding-bottom: 10px;
}

h2 {
    font-size: 30px;
    padding-bottom: 10px;
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
</style>
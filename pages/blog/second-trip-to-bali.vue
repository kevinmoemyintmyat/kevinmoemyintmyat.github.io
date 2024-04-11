<template>
    <section class="mt-20 lg:pl-20 p-5" ref="startOfArticle">
        <h1>My Second Solo Trip to Bali</h1>
        <h2>Written on 11th April 2024</h2>
        <p>
            One's just not enough when it comes to Bali.
            But this time, I'm going to go to the places that I haven't been able to go on
            <NuxtLink to="/blog/first-trip-to-bali">my first Bali trip.</NuxtLink>
        </p>
        <audio autoplay>
            <source
                src="https://t4.bcbits.com/stream/61755628abc686b4753d46defb32e8f7/mp3-128/3950065163?p=0&ts=1712911874&t=635572a1af28711f16cb3067a139b77d8004ff81&token=1712911874_457528656179103103e2f5714f1a2695d1d125bf"
                type="audio/mpeg">
        </audio>
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
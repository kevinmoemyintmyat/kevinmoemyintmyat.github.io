<template>
    <section class="mt-20 lg:pl-20 p-5" ref="startOfArticle">
        <h1>{{ $route.query.title }}</h1>
        <h2>Written on {{ $route.query.date }}</h2>

        <p class="pt-10">
            Chapter 1: The Last City
            <hr />
        <p>
            The year was 2175, and the world had changed beyond recognition. Humanity had built towering mega-cities
            that reached towards the sky, their gleaming spires a stark contrast to the desolate wastelands that lay
            beyond their borders. In the heart of one such city, Neo-Prime, the last remnants of civilization clung
            desperately to life.
            <br /><br />
            Amidst the neon-lit streets and throngs of people, two figures moved with purpose. One was Alex, a young
            engineer with a haunted look in his eyes, and the other was Maya, a fearless rebel fighting against the
            tyranny of the ruling elite. As they navigated the labyrinthine alleys of Neo-Prime, their conversation
            echoed through the crowded thoroughfares.
            <br /><br />
            Alex glanced over his shoulder, paranoia etched into his features. "We need to be careful, Maya. The
            authorities are cracking down harder than ever on dissent."
            <br />
            Maya nodded, her jaw set with determination. "I know, but we can't let fear dictate our actions. People need
            to know the truth about what's really happening in this city."
            <br />
            Their words were drowned out by the cacophony of noise around them, the constant hum of machinery and the
            distant wail of sirens a reminder of the oppressive regime that governed their lives.
            <br />
        </p>
        <p class="pt-10">
            Chapter 2: The Resistance
            <hr />
        <p>
            In a dimly lit warehouse on the outskirts of Neo-Prime, the resistance gathered in secret, their faces
            hidden behind masks and their voices hushed with caution. Maya stood before them, a beacon of hope amidst
            the darkness.
            <br /><br />
            "We can't keep living like this," she declared, her voice echoing off the walls. "We need to stand up
            against the tyranny of the ruling elite and fight for our freedom."
            <br />
            The gathered rebels nodded in agreement, their eyes shining with determination. Among them was Eli, a former
            soldier haunted by the atrocities he had witnessed in the name of the government.
            <br />
            "We need a plan," Eli said, his voice low and gravelly. "Something that will shake the foundations of their
            power and expose the truth to the people."
            <br /><br />
            As they spoke, the sound of approaching footsteps echoed through the warehouse, sending a ripple of tension
            through the room. The resistance tensed, ready for whatever might come next.
            <br />
        </p>
        </p>
        <br /><br />
        <p>
            Chapter 3: The Truth Unveiled
            <hr />
        <p>
            In the heart of Neo-Prime, Alex worked tirelessly in his makeshift laboratory, piecing together fragments of
            information in search of the truth. He had always been curious about the world beyond the city walls, but
            now his quest for knowledge had taken on a new urgency.
            <br />
            As he tinkered with his latest invention, a holographic display flickered to life before him, revealing
            shocking revelations about the true nature of the world they lived in. The ruling elite had been hoarding
            resources and manipulating the populace for their own gain, while the rest of humanity languished in poverty
            and despair.
            <br /><br />
            Alex's hands trembled as he absorbed the magnitude of what he had uncovered. "This changes everything," he
            whispered to himself, his mind racing with possibilities.
            <br />
            But before he could act on his newfound knowledge, a squad of government enforcers burst into his lab, their
            weapons drawn and their faces obscured by gas masks. Alex's heart pounded in his chest as he realized the
            danger he was in.
            <br />
        </p>
        </p>
        <br /><br />
        <p>
            Chapter 4: The Final Stand
            <hr />
        <p>
            In the streets of Neo-Prime, chaos reigned as the resistance clashed with the forces of the ruling elite.
            Maya led the charge, her voice ringing out above the din of battle as she rallied her comrades to fight for
            their freedom.
            <br /><br />
            Eli fought with a ferocity born of desperation, his fists pounding against the armor of their oppressors as
            he sought to protect his fellow rebels from harm. But despite their best efforts, the tide of battle began
            to turn against them.
            <br />
            As Alex watched from the sidelines, torn between his desire to join the fight and his fear of what might
            happen if he did, he knew that the time had come to take a stand. With a newfound resolve, he stepped
            forward, his voice ringing out in defiance.
            <br /><br />
            "We will not be silenced!" he cried, his words echoing through the streets. "We will fight for our freedom
            until our last breath!"
            <br /><br />
            In that moment, something shifted within the hearts of the people of Neo-Prime. They rallied to Alex's call,
            their voices raised in a chorus of defiance as they stood united against their oppressors.
            <br />
            And as the final battle raged on, amidst the smoke and the chaos, a glimmer of hope emerged in the darkness.
            For in the face of adversity, the people of Neo-Prime had found the strength to rise up and fight for a
            better tomorrow.
        </p>
        </p>
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
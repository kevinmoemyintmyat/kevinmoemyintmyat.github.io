<template>
    <div>
        <button class="relative group" @click="handleClick">
            <div
                class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-red-600 ring-0 ring-gray-300 hover:ring-8 ring-4 ring-opacity-30 duration-200 shadow-md">
                <burgerMenuIcon v-if="!closed" />
                <closeIcon v-if="closed" />
            </div>
        </button>
    </div>
</template>

<script>
import burgerMenuIcon from '~/assets/icons/burger-menu-icon.vue'
import closeIcon from '~/assets/icons/close-icon.vue'

export default {
    props: {
        closed: Boolean
    },
    components: {
        burgerMenuIcon,
        closeIcon
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
}
</script>

<style></style>
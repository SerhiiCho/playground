<script setup>
import { ref } from 'vue'

const posts = ref([
    { title: 'Learn JavaScript' },
    { title: 'Learn Vue' },
    { title: 'Build something awesome' },
])
</script>

<template>
    <ul>
        <li v-for="post in posts" :key="post.title">
            <h2>{{ post.title }}</h2>
        </li>
    </ul>
</template>

<style scoped>
</style>
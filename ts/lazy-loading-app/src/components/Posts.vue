<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const loading = ref(true)

onMounted(fetchPosts)

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(resp => posts.value = resp)
        .finally(() => loading.value = false)
}
</script>

<template>
    <h2 v-if="loading">Loading... Please wait...</h2>

    <div v-else class="wrap">
        <article v-for="post in posts" :key="post.title">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </article>
    </div>
</template>

<style scoped>
.wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
}

article {
    background-color: aliceblue;
    border: 1px solid #deedfb;
    padding: 1rem;
    border-radius: 10px;
}
</style>
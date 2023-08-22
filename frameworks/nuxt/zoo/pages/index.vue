<script setup lang="ts">
useHead({
    title: 'Home page',
    meta: [
        { name: 'description', content: 'Home page description' }
    ],
})

const posts = ref<any>([])

const resp = await fetch('https://admin.zoo-zoo-zoo.com.ua/api/v2/products?per_page=18&lang=ru&secret=DkLhygeaJlgFwVgt4o2ad8Nkx13DQMMR&token=ixGlXRhKK9CcFlriPCvNVnoEojUTuB4WaSBiF6OjrjUY1CTZfEIXwxYypo47gLneNRt7vIW109CzoVhn0pVYER2rWpI6Yl8TMVXCggqB46Y8VF0e8ESR5rhMksJPbz7IHFnDjv4hI1zCDIc2Sg6GheXXra3MdwO1QCKJnnuc71vfb2cnRO0LDzGRwBgStalJZR7UGdbHKIljeEeRe1Yi6pxdAANfD1E5HeVEGi5h8FPk6eRS07LGxSPSGG')
const json = await resp.json()

posts.value = json.data.data
</script>

<template>
    <div v-if="posts">
        <div v-for="post in posts" :key="post.id">
            <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
        </div>
    </div>
</template>
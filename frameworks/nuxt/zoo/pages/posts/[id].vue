<script setup lang="ts">
const route = useRoute()
const post = ref<any>(null)

const resp = await fetch(`https://admin.zoo-zoo-zoo.com.ua/api/v2/products/${route.params.id}?lang=ru&secret=DkLhygeaJlgFwVgt4o2ad8Nkx13DQMMR&token=ixGlXRhKK9CcFlriPCvNVnoEojUTuB4WaSBiF6OjrjUY1CTZfEIXwxYypo47gLneNRt7vIW109CzoVhn0pVYER2rWpI6Yl8TMVXCggqB46Y8VF0e8ESR5rhMksJPbz7IHFnDjv4hI1zCDIc2Sg6GheXXra3MdwO1QCKJnnuc71vfb2cnRO0LDzGRwBgStalJZR7UGdbHKIljeEeRe1Yi6pxdAANfD1E5HeVEGi5h8FPk6eRS07LGxSPSGG`)
const json = await resp.json()

post.value = json.data

useHead({
    title: post.value.title || 'no',
    meta: [
        { name: 'description', content: post.value.description || 'no' }
    ],
})
</script>

<template>
    <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
        <img :src="`https://admin.zoo-zoo-zoo.com.ua/${post.lg_image_uri}`" alt="">
    </div>
</template>
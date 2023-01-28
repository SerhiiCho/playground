<script setup lang="ts">
useHead({
    title: 'About me page',
    meta: [
        { name: 'description', content: 'About me descripiton' }
    ],
})
</script>

<template>
    <div>
        <h1>About page</h1>
        <NuxtLink to="/">To home</NuxtLink>
    </div>

    <Hello />
</template>
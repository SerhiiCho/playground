<script setup>
import { onMounted } from 'vue'

onMounted(() => initEcho())

function initEcho() {
    console.log('Component mounted.')
}
</script>

<template>
    <h1>It works!</h1>
</template>
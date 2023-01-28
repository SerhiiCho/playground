<script setup lang="ts">
import { ref } from 'vue'

const times = ref(0)
</script>

<template>
    <div>
        <h1>Hello world!</h1>
        <button @click="times++">Clicked {{ times }}</button>
    </div>
</template>
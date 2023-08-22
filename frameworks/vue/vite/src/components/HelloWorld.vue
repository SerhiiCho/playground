<script setup lang="ts">
import { count } from '../count'
</script>

<template>
    <button type="button" @click="count++">count is: {{ count }}</button>
</template>
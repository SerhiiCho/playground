<script setup lang="ts">
import { ref } from 'vue'

const name = ref<string>('')
name.value = ""

function nice(): void {
    //
}

</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

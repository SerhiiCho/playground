<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const errors = ref({})
const errorsFromServer = { name: 'Name is incorrect' }

errors.value = errorsFromServer
errors.value.name = 'Override error message'

console.log(errors.value.name) // prints 'Override error message'
</script>

<template>
    <HelloWorld />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

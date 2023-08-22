<template>
    <VuePdf src="https://www.orimi.com/pdf-test.pdf"></VuePdf>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const VuePdf = require('vue-pdf')

export default defineComponent({
    name: 'App',

    created() {
        //
    },

    components: {
        HelloWorld,
        VuePdf,
    },
})
</script>

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

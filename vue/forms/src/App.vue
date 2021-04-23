<template>
    <div class="container">
        <textarea v-model="text"></textarea>
        <h3>{{ text }}</h3>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const text = ref('')
        return { text }
    }
}
</script>

<style scoped>
.container {
    padding: 40px;
}
textarea {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #999;
    width: 500px;
    height: 100px;
    font-size: 1.5em;
}
</style>
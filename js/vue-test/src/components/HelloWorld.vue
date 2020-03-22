<template>
    <div class="hello">
        <h1>{{ title }}</h1>
        <input type="text" v-model="title">
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'This is a title here',
        }
    },
}
</script>
<script setup lang="ts">
type Props = {
    type: 'submit' | 'button'
    color: string
}

const { type, color } = defineProps<Props>()
</script>

<template>
    <button
        :type="type"
        class="w-full p-2 text-white rounded-md transition-colors"
        :class="color"
        @click="$emit('clicked')"
    >
        <slot />
    </button>
</template>
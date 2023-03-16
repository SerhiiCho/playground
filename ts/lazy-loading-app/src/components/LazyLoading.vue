<script setup>
import { onMounted, ref } from 'vue'
import AppearTransition from './Transitions/AppearTransition.vue'

const rootElement = ref(null)
const renderComponent = ref(false)

onMounted(() => {
    if (rootElement.value) {
        createIntersectionObserver().observe(rootElement.value)
    }
})

function createIntersectionObserver() {
    return new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                renderComponent.value = true
            }
        }
    })
}
</script>

<template>
    <div ref="rootElement">
        <AppearTransition>
            <slot v-if="renderComponent" />
        </AppearTransition>
    </div>
</template>
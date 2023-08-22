import { ref, watchEffect } from 'vue'

export const count = ref(0)

watchEffect(() => {
    console.log(count.value)
})
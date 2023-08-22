<script setup lang="ts">
import FormButton from './FormButton.vue'
import { ref } from 'vue'

type Emits = {
    (e: 'create', text: string): void
}

const emit = defineEmits<Emits>()

let text = ref('')

function createNote(): void {
    if (text.value === '') {
        return
    }

    emit('create', text.value)
    text.value = ''
}
</script>

<template>
    <form @submit.prevent="createNote" class="mt-5 w-[800px]">
        <textarea
            v-model="text"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md resize-none"
            placeholder="Start writing your note..."
        ></textarea>

        <div class="space-y-2">
            <FormButton type="submit" color="bg-green-600 hover:bg-green-700">
                Create new note
            </FormButton>

            <FormButton
                @clicked="$emit('delete-selected')"
                type="button"
                color="bg-blue-600 hover:bg-blue-700"
            >
                Delete selected notes
            </FormButton>

            <FormButton
                @clicked="$emit('delete-all')"
                type="button"
                color="bg-red-600 hover:bg-red-700"
            >
                Delete all
            </FormButton>
        </div>
    </form>
</template>
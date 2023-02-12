<script setup lang="ts">
import type { Note } from '../types'
import { ref, computed } from 'vue'

type Props = {
    note: Note
}

type Emits = {
    (e: 'delete', id: number): void
    (e: 'save', note: Note): void
}

const emit = defineEmits<Emits>()
const { note } = defineProps<Props>()

const checkedNote = computed<string>(() => note.checked ? 'opacity-40' : '')
const newContent = ref(note.content)

function saveNote(): void {
    if (newContent.value === '') {
        return
    }

    emit('save', {
        id: note.id,
        content: newContent.value,
    })
}
</script>

<template>
    <div
        class="bg-white p-3 pb-8 rounded-md shadow-md h-[120px] relative"
        :class="checkedNote"
    >
        <textarea
            v-model="newContent"
            @blur="saveNote"
            class="w-full h-full resize-none text-lg p-1"
        ></textarea>

        <input
            type="checkbox"
            class="absolute bottom-1 right-1 h-5 w-5"
            :checked="note.checked"
            @input="() => note.checked = !note.checked"
        />

        <button
            type=button
            class="pointer absolute -right-1 -top-1 flex items-center justify-center bg-red-500 transition-colors hover:bg-red-600 w-6 h-6 text-white rounded-full shadow-md"
            @click="emit('delete', note.id)"
        >
            x
        </button>
    </div>
</template>

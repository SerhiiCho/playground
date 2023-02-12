<script setup lang="ts">
import type { Note as NoteType } from '../types'
import Note from './Note.vue'

type Emits = {
    (e: 'delete', id: number): void
    (e: 'save', note: NoteType): void
}

const emit = defineEmits<Emits>()

type Props = {
    notes: NoteType[]
}

const { notes } = defineProps<Props>()
</script>

<template>
    <div class="bg-gray-100 p-10 rounded-md min-h-[1000px] space-y-4 w-full">
        <h3 v-if="notes.length > 0" class="text-gray-500 mb-7">
            Tip: Double click on note to start editing
        </h3>

        <p v-else class="text-center text-2xl">No notes yet</p>

        <Note
            v-for="note in notes"
            :key="note.id"
            :note="note"
            @delete="emit('delete', $event)"
            @save="emit('save', $event)"
        />
    </div>
</template>

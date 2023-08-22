<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Note } from './types'
import Notes from './components/Notes.vue'
import CreateForm from './components/CreateForm.vue'

const notes = ref<Note[]>([])
const notesAmount = computed<number>(() => notes.value.length)

function createNewNote(content: string): void {
    const newNote = {
        id: Math.floor(Math.random() * 1000000),
        content,
        checked: false,
    }

    notes.value.push(newNote)
}

function deleteCheckedNotes(): void {
    if (!confirm('Are you sure you want to delete all selected notes?')) {
        return
    }

    notes.value = notes.value.filter(note => !note.checked)
}

function deleteNote(id: number): void {
    console.log(id)
    notes.value = notes.value.filter(note => note.id !== id)
}

function deleteAll(): void {
    if (!confirm('Are you sure you want to delete all notes?')) {
        return
    }

    notes.value = []
}
</script>

<template>
    <main class="p-10 max-w-6xl">
        <h3 class="text-4xl">
            {{ notesAmount > 0 ? notesAmount : 'No' }}
            {{ notes.length === 1 ? 'note' : 'notes' }}
        </h3>

        <div class="flex gap-10">
            <CreateForm
                @create="createNewNote"
                @delete-selected="deleteCheckedNotes"
                @delete-all="deleteAll"
                @delete="deleteNote"
            />

            <Notes @delete="deleteNote" :notes="notes" />
        </div>
    </main>
</template>
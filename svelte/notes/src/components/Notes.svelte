<script lang="ts">
    import type { Note as NoteType } from '../types'
    import Note from './Note.svelte'

    export let notes: NoteType[]

    function deleteNote(e: CustomEvent): void {
        notes = notes.filter((note) => note.id !== e.detail)
    }

    function saveNote(e: CustomEvent): void {
        notes = notes.map(note => {
            if (note.id === e.detail.id) {
                note.content = e.detail.content
            }

            return note
        })
    }
</script>

<div class="bg-gray-100 p-10 rounded-md min-h-[1000px] space-y-4">
    {#each notes as note (note.id)}
        <Note {note} on:delete={deleteNote} on:save={saveNote} />
    {:else}
        <p class="text-center text-2xl">No notes yet</p>
    {/each}
</div>
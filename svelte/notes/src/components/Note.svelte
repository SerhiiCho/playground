<script lang="ts">
    import type { Note } from '../types'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let note: Note

    function deleteNote(): void {
        dispatch('delete', note.id)
    }
</script>

<div class="bg-white p-3 rounded-md shadow-md min-h-[100px] relative">
    <p>{note.content}</p>

    <button
        class="pointer absolute -right-1 -top-1 flex items-center justify-center bg-red-500 transition-colors hover:bg-red-600 w-6 h-6 text-white rounded-full shadow-md"
        on:click={deleteNote}
    >
        x
    </button>
</div>
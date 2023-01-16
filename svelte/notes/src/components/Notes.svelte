<script lang="ts">
    import type { Note as NoteType } from '../types'
    import Note from './Note.svelte'

    export let notes: NoteType[]
</script>

<div class="bg-gray-100 p-10 rounded-md min-h-[1000px] space-y-4">
    {#each notes as note}
        <Note {note} />
    {:else}
        <p class="text-center text-2xl">No notes yet</p>
    {/each}
</div>
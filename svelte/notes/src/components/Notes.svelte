<script lang="ts">
    import type { Note } from '../types'

    export let notes: Note[]
</script>

{#each notes as note}
    <div class="note">
        <p>{note.content}</p>
    </div>
{:else}
    <p class="text-center text-2xl">No notes yet</p>
{/each}
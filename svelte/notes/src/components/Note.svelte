<script lang="ts">
    import type { Note } from '../types'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let note: Note

    $: checkedNote = note.checked ? 'opacity-40' : ''

    let newContent = note.content

    function deleteNote(): void {
        dispatch('delete', note.id)
    }

    function saveNote(): void {
        if (newContent === '') {
            return
        }

        dispatch('save', { id: note.id, content: newContent })
        editMode = !editMode
    }
</script>

<div class="bg-white p-3 pb-8 rounded-md shadow-md h-[120px] relative {checkedNote}">
    <textarea
        bind:value={newContent}
        on:blur={saveNote}
        class="w-full h-full resize-none text-lg p-1"
    ></textarea>

    <input
        type="checkbox"
        class="absolute bottom-1 right-1 h-5 w-5"
        checked={note.checked}
        on:input={() => note.checked = !note.checked}
    />

    <button
        type=button
        class="pointer absolute -right-1 -top-1 flex items-center justify-center bg-red-500 transition-colors hover:bg-red-600 w-6 h-6 text-white rounded-full shadow-md"
        on:click={deleteNote}
    >
        x
    </button>
</div>
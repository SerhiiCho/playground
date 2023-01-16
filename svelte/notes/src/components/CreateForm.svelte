<script lang="ts">
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    let note = ''

    function createNote(): void {
        dispatch('create', note)
        note = ''
    }
</script>

<form on:submit|preventDefault={createNote} class="mt-5">
    <textarea
        bind:value={note}
        class="w-full p-3 mb-3 border border-gray-300 rounded-md resize-none"
        placeholder="Start writing your note..."
    ></textarea>

    <button
        type=submit
        class="w-full p-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
    >
        Create new note
    </button>
</form>
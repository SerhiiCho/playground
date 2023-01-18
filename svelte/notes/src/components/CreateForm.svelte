<script lang="ts">
    import {createEventDispatcher} from 'svelte'
    import FormButton from '../templates/FormButton.svelte'

    const dispatch = createEventDispatcher()

    let text = ''

    function createNote(): void {
        if (text === '') {
            return
        }

        dispatch('create', text)
        text = ''
    }
</script>

<form on:submit|preventDefault={createNote} class="mt-5">
    <textarea
        bind:value={text}
        class="w-full p-3 mb-3 border border-gray-300 rounded-md resize-none"
        placeholder="Start writing your note..."
    ></textarea>

    <div class="space-y-2">
        <FormButton type=submit color="bg-green-600 hover:bg-green-700">
            Create new note
        </FormButton>

        <FormButton
            on:clicked={() => dispatch('delete-all')}
            type=button
            color="bg-red-600 hover:bg-red-700"
        >
            Delete selected notes
        </FormButton>
    </div>
</form>
<script lang="ts">
    import type { Note } from './types'
    import Notes from './components/Notes.svelte'
    import CreateForm from './components/CreateForm.svelte'

    let notes: Note[] = [{checked: false, content: 'some'}]

    function createNewNote(e: CustomEvent): void {
        notes = [
            ...notes,
            {
                content: e.detail,
                checked: false,
            },
        ]
    }
</script>

<main class="p-10 max-w-5xl">
    <h3 class="text-4xl">Notes</h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <CreateForm on:create={createNewNote} />

        <Notes {notes} />
    </div>
</main>
<script lang="ts">
    import type { Note } from './types'
    import Notes from './components/Notes.svelte'
    import CreateForm from './components/CreateForm.svelte'

    let notes: Note[] = []

    $: notesAmount = notes.length

    function createNewNote(e: CustomEvent): void {
        notes = [
            ...notes,
            {
                id: Math.floor(Math.random() * 1000000),
                content: e.detail,
                checked: false,
            },
        ]
    }

    function deleteCheckedNotes(): void {
        if (!confirm('Are you sure you want to delete all selected notes?')) {
            return
        }

        notes = notes.filter((note) => !note.checked)
    }

    function deleteAll(): void {
        if (!confirm('Are you sure you want to delete all notes?')) {
            return
        }

        notes = []
    }
</script>

<main class="p-10 max-w-6xl">
    <h3 class="text-4xl">
        {notesAmount > 0 ? notesAmount : 'No'}
        {notes.length === 1 ? 'note' : 'notes'}
    </h3>

    <div class="flex gap-10">
        <CreateForm
            on:create={createNewNote}
            on:delete-selected={deleteCheckedNotes}
            on:delete-all={deleteAll}
        />

        <Notes {notes} />
    </div>
</main>
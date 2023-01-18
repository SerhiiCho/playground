<script lang="ts">
    import type { Note } from './types'
    import Notes from './components/Notes.svelte'
    import CreateForm from './components/CreateForm.svelte'

    let notes: Note[] = [
        {id: 1, content: 'Note 1 some text is here', checked: false},
        {id: 2, content: 'Note 2 some text is here', checked: false},
        {id: 3, content: 'Note 3 some text is here', checked: false},
    ]

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

<main class="p-10 max-w-5xl">
    <h3 class="text-4xl">
        {notesAmount > 0 ? notesAmount : 'No'}
        {notes.length === 1 ? 'note' : 'notes'}
    </h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <CreateForm
            on:create={createNewNote}
            on:delete-selected={deleteCheckedNotes}
            on:delete-all={deleteAll}
        />

        <Notes {notes} />
    </div>
</main>
<script lang="ts">
    import type { Note } from './types'
    import Notes from './components/Notes.svelte'
    import CreateForm from './components/CreateForm.svelte'

    let notes: Note[] = [
        { id: 1, checked: false, content: 'This is a first note'},
        { id: 2, checked: false, content: 'This is a second note'},
        { id: 3, checked: false, content: 'This is a third note'},
        { id: 4, checked: false, content: 'This is a fourth note'},
        { id: 5, checked: false, content: 'This is a fifth note'},
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

    function deleteNote(e: CustomEvent): void {
        notes = notes.filter((note) => note.id !== e.detail)
    }
</script>

<main class="p-10 max-w-5xl">
    <h3 class="text-4xl">Notes ({notesAmount})</h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <CreateForm on:create={createNewNote} />

        <Notes {notes} on:delete={deleteNote} />
    </div>
</main>
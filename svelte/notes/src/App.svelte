<script lang="ts">
    import type { Note } from './types'
    import Notes from './components/Notes.svelte'
    import CreateForm from './components/CreateForm.svelte'

    let notes: Note[] = []
</script>

<main class="p-10 max-w-5xl">
    <h3 class="text-4xl">Notes</h3>

    <div class="grid grid-cols-1 lg:grid-cols-2">
        <CreateForm />

        <Notes {notes} />
    </div>
</main>
<script lang=ts>
    import type { Note } from '../types'

    export let note: Note
</script>

<div class="bg-white p-3 rounded-md shadow-md min-h-[100px]">
    <p>{note.content}</p>
</div>
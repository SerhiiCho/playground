<script lang=ts>
    import {createEventDispatcher} from 'svelte'

    export let type: 'submit' | 'button'
    export let color: string

    const dispatch = createEventDispatcher()
</script>

<button
    type={type}
    class="w-full p-2 text-white rounded-md transition-colors {color}"
    on:click={() => dispatch('clicked')}
>
    <slot />
</button>
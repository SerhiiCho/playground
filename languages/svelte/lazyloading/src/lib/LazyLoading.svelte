<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    let rootElement = null
    let renderComponent = false

    onMount(() => {
        if (rootElement) {
            createIntersectionObserver().observe(rootElement)
        }
    })

    const createIntersectionObserver = () => {
        return new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    renderComponent = true
                }
            }
        })
    }
</script>

<div bind:this={rootElement}>
    {#if renderComponent}
        <div transition:fade>
            <slot></slot>
        </div>
    {/if}
</div>
<script>
    import { onMount } from 'svelte'

    let loading = false
    let users = []

    onMount(() => fetchUsers())

    const fetchUsers = () => {
        loading = true

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(resp => users = resp)
            .catch(e => console.error(e))
            .finally(() => loading = false)
    }
</script>

{#if loading}
    <h2>Loading... Please wait...</h2>
{:else}
    <ul>
        {#each users as user}
            <li>{user.name}</li>
        {/each}
    </ul>
{/if}
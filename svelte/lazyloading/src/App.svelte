<script>
    import Users from './lib/Users.svelte'
    import LazyLoading from './lib/LazyLoading.svelte'
</script>

<main>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>

    <LazyLoading>
        <Users />
    </LazyLoading>
</main>

<style>
    main {
        max-width: 900px;
        margin: auto;
        padding: 20px;
        font-size: 1.4rem;
    }
</style>
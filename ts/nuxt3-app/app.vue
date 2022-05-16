<template>
    <Header />
    <hr>
    <NuxtPage />
    <hr>
    <Footer />
</template>

<style>
.router-link-active {
    color: red;
}

.router-link-active:after {
    content: " <<";
    color: red;
}
</style>
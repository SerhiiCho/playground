<template>
    <transition name="smooth-appear">
        <slot />
    </transition>
</template>

<style scoped>
.smooth-appear-enter-active,
.smooth-appear-leave-active {
    transition: opacity .4s ease;
}

.smooth-appear-enter-from,
.smooth-appear-leave-to {
    opacity: 0;
}

.smooth-appear-enter-to,
.smooth-appear-leave-from {
    opacity: 1;
}
</style>
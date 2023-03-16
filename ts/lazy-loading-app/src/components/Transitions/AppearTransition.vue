<template>
    <transition name="smooth-appear">
        <slot />
    </transition>
</template>

<style lang="sass" scoped>
.smooth-appear
    &-enter-active,
    &-leave-active
        transition: opacity .4s ease

    &-enter-from,
    &-leave-to
        opacity: 0

    &-enter-to,
    &-leave-from
        opacity: 1
</style>
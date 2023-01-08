<template>
    <div>
        <p> Product details {{  id  }}</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quibusdam, assumenda soluta cumque facilis vero fugiat quis ut, consequuntur id suscipit est minima voluptatibus dolore, minus nisi aspernatur! Voluptate, repellat?</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
definePageMeta({
    layout: 'products'
})
</script>

<style lang="scss" scoped>

</style>
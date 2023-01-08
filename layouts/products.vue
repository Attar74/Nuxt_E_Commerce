<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/products">Nuxt</NuxtLink>                             
            </nav>
        </header>

        <!-- Output the page content -->
        <div>
            <slot />
        </div>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/products">Products</NuxtLink>
            </li>
        </ul>      
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>
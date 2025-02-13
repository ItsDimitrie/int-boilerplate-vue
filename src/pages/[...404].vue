<script lang="ts" setup>
    definePage({
        meta: {
            transitionKey: 'error',
        },
    });
</script>

<template>
    <h1>404</h1>

    <RouterLink :to="{ name: 'index' }">Home</RouterLink>
</template>

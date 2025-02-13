<script lang="ts" setup>
    import MainLayout from '@/layouts/MainLayout.vue';

    definePage({
        meta: {
            requiresAuth: true,
            transitionKey: 'main',
        },
        redirect: { name: 'index.dashboard' },
    });
</script>

<template>
    <MainLayout />
</template>

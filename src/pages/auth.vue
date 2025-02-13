<script lang="ts" setup>
    import AuthLayout from '@/layouts/AuthLayout.vue';

    definePage({
        redirect: { name: 'auth.login' },
        meta: {
            transitionKey: 'auth',
            requiresAuth: false,
        },
    });
</script>

<template>
    <AuthLayout />
</template>

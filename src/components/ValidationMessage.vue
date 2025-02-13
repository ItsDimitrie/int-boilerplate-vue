<script lang="ts" setup>
    import { Message } from 'primevue';

    defineProps<{
        errors?: string[];
    }>();
</script>

<template>
    <Message
        v-if="errors && errors.length"
        variant="simple"
        severity="error"
        size="small"
    >
        {{ errors.join('\n') }}
    </Message>
</template>

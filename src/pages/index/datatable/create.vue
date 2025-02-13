<script lang="ts" setup>
    import { defineBreadcrumbs } from '@/composables/breadcrumbs';

    defineBreadcrumbs([
        {
            label: 'Datatable',
            to: { name: 'index.datatable.index' },
        },
        {
            label: 'Create',
            to: { name: 'index.datatable.create' },
        },
    ]);
</script>

<template>
    <h1>Datatable Create</h1>
</template>

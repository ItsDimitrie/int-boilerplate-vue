<script lang="ts" setup generic="Item, Params extends { sort_by?: string }">
    const slots = defineSlots<{
        default?(): unknown;
    }>();

    const { row, field } = defineProps<{
        field?: keyof Item;
        header: string;
        row?: { data: Item; params: Params };
        sortField?: Params['sort_by'];
    }>();
</script>

<template>
    <td>
        <template v-if="field && !slots.default">
            {{ row && row.data[field] }}
        </template>
        <template v-else>
            <slot />
        </template>
    </td>
</template>

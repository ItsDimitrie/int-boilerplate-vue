<script lang="ts" setup generic="Item, SortField">
    import { computed } from 'vue';
    import { useI18n } from 'vue-i18n';

    import Icon from '@/components/Icon.vue';

    import * as Datatable from '@/components/datatable';

    const sortBy = defineModel<SortField>('sortBy');
    const sortDirection = defineModel<'asc' | 'desc' | undefined>(
        'sortDirection',
        {
            default: undefined,
        },
    );

    const props = defineProps<{
        columns?: Datatable.ColumnType<Item, SortField>[];
    }>();

    const { t } = useI18n();

    const handleSorting = (sortKey: SortField) => {
        if (sortBy.value !== sortKey) {
            sortBy.value = sortKey;
            sortDirection.value = 'asc';
            return;
        }

        if (sortDirection.value === undefined) {
            sortDirection.value = 'asc';
        } else if (sortDirection.value === 'asc') {
            sortDirection.value = 'desc';
        } else {
            sortBy.value = undefined;
            sortDirection.value = undefined;
        }
    };

    const enhancedColumns = computed(() => {
        return props.columns?.map((column) => ({
            ...column,
            isActiveSorting: column.sortField === sortBy.value,
        }));
    });
</script>

<template>
    <thead>
        <tr>
            <th v-for="column in enhancedColumns" :key="column.field">
                <button
                    v-if="column.sortField"
                    class="flex w-full items-center gap-1"
                    type="button"
                    :aria-label="
                        column.isActiveSorting && sortDirection !== 'asc'
                            ? t('common.sortDesc')
                            : t('common.sortAsc')
                    "
                    @click="handleSorting(column.sortField)"
                >
                    {{ column.header }}

                    <div
                        class="relative flex h-6 w-6 flex-col justify-center text-gray-300"
                    >
                        <Icon
                            :class="[
                                'translate-y-2.5 text-lg!',
                                {
                                    'text-gray-900':
                                        column.isActiveSorting &&
                                        sortDirection === 'desc',
                                },
                            ]"
                            icon="keyboard_arrow_up"
                        />
                        <Icon
                            :class="[
                                '-translate-y-2.5 text-lg!',
                                {
                                    'text-gray-900':
                                        column.isActiveSorting &&
                                        sortDirection === 'asc',
                                },
                            ]"
                            icon="keyboard_arrow_down"
                        />
                    </div>
                </button>
                <template v-else>
                    {{ column.header }}
                </template>
            </th>
        </tr>
    </thead>
</template>

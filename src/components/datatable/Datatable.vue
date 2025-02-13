<script lang="ts" generic="Item, Params extends { sort_by?: string }" setup>
    import { watchDebounced } from '@vueuse/core';
    import {
        Button,
        Drawer,
        IconField,
        InputIcon,
        InputText,
        Paginator,
        Select,
    } from 'primevue';
    import { ref, unref, VNode } from 'vue';
    import { useI18n } from 'vue-i18n';

    import { Icon } from '@/components';
    import { ColumnType, TableHead } from '@/components/datatable';
    import { theme } from '@/utils/tailwind';

    const page = defineModel<number>('page', {
        default: 1,
    });
    const perPage = defineModel<number>('perPage', {
        default: 25,
    });
    const search = defineModel<string | undefined>('search', {
        default: undefined,
    });
    const sortBy = defineModel<Params['sort_by']>('sortBy');
    const sortDirection = defineModel<'asc' | 'desc' | undefined>(
        'sortDirection',
        {
            default: undefined,
        },
    );

    const slots = defineSlots<{
        filters?(): unknown;
        default?(row?: { data: Item; params: Params }): unknown;
    }>();

    const {
        filterBadge = 0,
        isLoading = false,
        items,
        minWidth = '1000px',
        params,
        total,
    } = defineProps<{
        filterBadge?: number;
        isLoading?: boolean;
        items: Item[];
        minWidth?: string;
        params: Params;
        total?: number;
    }>();

    type Column = ColumnType<Item, Params['sort_by']>;

    const getColumnsFromSlotChildren = () => {
        const nodes = slots.default && (slots.default() as VNode[]);

        return nodes?.reduce((acc, node) => {
            if (node.props && Object.hasOwn(node.props, 'header')) {
                acc.push({
                    field: node.props.field ?? undefined,
                    header: node.props.header,
                    sortField: Object.hasOwn(node.props, 'sort-field')
                        ? node.props['sort-field']
                        : undefined,
                });
            }

            return acc;
        }, [] as Column[]);
    };

    const { t } = useI18n();
    const columns = getColumnsFromSlotChildren();
    const isFilterDrawerVisible = ref(false);
    const searchInput = ref(unref(search) ?? '');
    const perPageOptions = [10, 25, 50, 100, 250] as const;

    watchDebounced(
        searchInput,
        (value) => {
            search.value = value === '' ? undefined : value;
        },
        {
            debounce: 250,
        },
    );
</script>

<template>
    <div class="flex flex-wrap items-center gap-2 bg-gray-100 px-3 py-2">
        <Select
            v-model="perPage"
            option-label="label"
            option-value="value"
            :options="
                perPageOptions.map((option) => ({
                    label: option.toString(),
                    value: option,
                }))
            "
        />

        <div class="ml-auto flex items-center gap-2">
            <IconField>
                <InputIcon class="pi pi-search" />
                <InputText
                    v-model="searchInput"
                    :placeholder="t('common.search')"
                    fluid
                />
            </IconField>

            <Button
                v-if="slots.filters"
                class="flex-shrink-0"
                :label="t('common.filter', 2)"
                :dt="{
                    secondary: {
                        background: theme('--color-gray-200'),
                        border: {
                            color: theme('--color-gray-200'),
                        },
                    },
                }"
                icon="pi pi-filter"
                severity="secondary"
                badge-severity="primary"
                :badge="filterBadge > 0 ? filterBadge.toString() : undefined"
                @click="isFilterDrawerVisible = true"
            />
        </div>
    </div>

    <div class="mb-4 overflow-x-auto bg-white">
        <table class="datatable w-full table-fixed" :style="{ minWidth }">
            <TableHead
                v-model:sort-direction="sortDirection"
                v-model:sort-by="sortBy"
                :columns
            />

            <tbody :class="[{ 'activity-indicator': isLoading }]">
                <template v-if="items.length > 0">
                    <tr v-for="(data, index) in items" :key="index">
                        <slot :data :params />
                    </tr>
                </template>
                <template v-else-if="isLoading">
                    <tr v-for="index in perPage" :key="index">
                        <td v-for="column in columns" :key="column.field">
                            <span class="flex h-4 w-2/3 bg-gray-100" />
                        </td>
                    </tr>
                </template>
                <template v-else>
                    <tr>
                        <td :colspan="columns?.length">
                            {{ t('common.noResults') }}
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>

    <Paginator
        v-if="total !== undefined && total > 0"
        :first="(page - 1) * perPage"
        :rows="perPage"
        :total-records="total"
        :dt="{
            background: 'transparent',
        }"
        :template="{
            [theme('--breakpoint-lg')]: 'PrevPageLink NextPageLink',
            default: 'PrevPageLink PageLinks NextPageLink',
        }"
        @page="(event) => (page = event.page + 1)"
    />

    <Drawer
        v-if="slots.filters"
        v-model:visible="isFilterDrawerVisible"
        position="right"
    >
        <template #closeicon>
            <Icon icon="close" />
        </template>

        <slot name="filters" />
    </Drawer>
</template>

<style>
    @reference '@/styles/app.css';

    .datatable {
        th,
        td {
            @apply border-b border-gray-200 px-4 py-3;
        }

        th {
            @apply text-left font-semibold;
        }
    }
</style>

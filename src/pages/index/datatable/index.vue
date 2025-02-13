<script lang="ts" setup>
    import { useQuery } from '@tanstack/vue-query';
    import { Button } from 'primevue';

    import { api } from '@/api';
    import { ProductsIndexParams } from '@/api/client';
    import { Column, Datatable, useFilters } from '@/components/datatable';
    import { defineBreadcrumbs } from '@/composables/breadcrumbs';
    import { formatDate } from '@/utils/datetime';

    defineBreadcrumbs([
        {
            label: 'Datatable',
            to: { name: 'index.datatable.index' },
        },
    ]);

    const { params } = useFilters<ProductsIndexParams>([
        {
            key: 'page',
            defaultValue: 1,
        },
        {
            key: 'sort_by',
            defaultValue: undefined,
        },
        {
            key: 'sort_direction',
            defaultValue: undefined,
        },
        {
            key: 'per_page',
            defaultValue: 25,
        },
        {
            key: 'search',
            defaultValue: undefined,
        },
    ]);

    const queryKey = 'Datatable';

    const { data, isFetching } = useQuery({
        queryKey: [queryKey, params.value],
        queryFn: () => api.products.productsIndex(params.value),
        select: (response) => ({ ...response.data, items: response.data.data }),
    });
</script>

<template>
    <h1>Datatable Index</h1>

    <Datatable
        v-model:page="params.page"
        v-model:per-page="params.per_page"
        v-model:sort-by="params.sort_by"
        v-model:sort-direction="params.sort_direction"
        v-model:search="params.search"
        :items="data?.items ?? []"
        :total="data?.meta.total"
        :is-loading="isFetching"
        :filter-badge="0"
        :params
    >
        <template #filters>Filters</template>
        <template #default="row">
            <Column field="title" header="Title" sort-field="title" :row />
            <Column
                field="created_at"
                header="Created at"
                sort-field="created_at"
                :row
            >
                {{ formatDate(row?.data.created_at) }}
            </Column>
            <Column field="price" header="Test" :row>
                {{ row?.data.price?.amount }}
            </Column>
            <Column header="Actions">
                <Button icon="pi pi-pencil" />
            </Column>
        </template>
    </Datatable>
</template>

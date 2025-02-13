export { default as Column } from '@/components/datatable/partials/Column.vue';
export { default as Datatable } from '@/components/datatable/Datatable.vue';
export { default as TableHead } from '@/components/datatable/partials/TableHead.vue';
export { default as useFilters } from '@/components/datatable/composables/useFilters';

export interface ColumnType<Item, SortField> {
    field: keyof Item;
    header: string;
    sortField?: SortField;
}

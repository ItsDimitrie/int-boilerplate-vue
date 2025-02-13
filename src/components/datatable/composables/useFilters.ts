import { useStorage } from '@vueuse/core';
import queryString from 'query-string';
import { toRaw, watch } from 'vue';
import { useRoute } from 'vue-router';

export enum QueryParamKey {
    PaginationLink = 'pagination_link',
}

type Filters<FilterParams> = {
    defaultValue: FilterParams[keyof FilterParams];
    key: keyof FilterParams;
    label?: string;
};

export default <FilterParams extends { page?: number }>(
    filters: Filters<FilterParams>[],
    customStorageKey?: string,
) => {
    const route = useRoute();
    const storageKey = customStorageKey ?? route.path;

    const params = useStorage(
        `FilterParams_${storageKey}`,
        filters.reduce((acc, filter) => {
            return {
                ...acc,
                [filter.key]: filter.defaultValue,
            };
        }, {} as FilterParams),
        localStorage,
        {
            mergeDefaults: true,
        },
    );

    const resetToFirstPage = () => {
        params.value.page = 1;
    };

    // Making sure we start on the first page and overwrite the local stored value
    resetToFirstPage();

    const queryStringParams = queryString.parse(window.location.search, {
        parseBooleans: true,
        parseNumbers: true,
        arrayFormat: 'bracket',
    });

    // Overwrite params with query string params
    Object.entries(queryStringParams).forEach(([key, value]) => {
        const typedKey = key as keyof FilterParams;

        if (value === null) {
            return;
        }

        params.value[typedKey] = value as FilterParams[keyof FilterParams];
    });

    // Remove unsupported params
    Object.keys(params.value).forEach((paramKey) => {
        const isMatching = filters.find((filter) => filter.key === paramKey);

        if (isMatching) return;

        delete params.value[paramKey as keyof FilterParams];
    });

    watch(
        () => ({ ...params.value }),
        (newParams, oldParams) => {
            if (newParams.page !== oldParams.page) return;

            // Resets to the first page on param changes unless it's a page change
            resetToFirstPage();
        },
        { deep: true },
    );

    watch(
        params,
        (newParams) => {
            // Update the querystring when params are changing
            const query = Object.entries(newParams).reduce(
                (acc, [key, value]) => {
                    if (value === null || value == undefined) return acc;

                    return {
                        [key]: toRaw(value),
                        ...acc,
                    };
                },
                {},
            );

            history.replaceState(
                {},
                '',
                `${location.pathname}?${queryString.stringify(query, { arrayFormat: 'bracket' })}`,
            );
        },
        {
            deep: true,
            immediate: true,
        },
    );

    return {
        params,
    };
};

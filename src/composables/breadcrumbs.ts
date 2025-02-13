import { readonly, ref } from 'vue';
import { RouteLocationRaw } from 'vue-router';

import router from '@/config/router';

interface Breadcrumb {
    label: string;
    to: RouteLocationRaw;
}

const breadcrumbs = ref<Breadcrumb[]>([]);

// Reset the breadcrumbs before each route change
router.beforeEach((to, from) => {
    if (to.path === from.path) {
        return;
    }

    breadcrumbs.value = [];
});

export const defineBreadcrumbs = (items: Breadcrumb[]) => {
    breadcrumbs.value.push(...items);
};

export const useBreadcrumbs = () => {
    return {
        breadcrumbs: readonly(breadcrumbs),
    };
};

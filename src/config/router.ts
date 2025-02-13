import { createRouter, createWebHistory } from 'vue-router';
import { handleHotUpdate, routes } from 'vue-router/auto-routes';

import { AuthState, useAuth } from '@/composables/auth';

declare module 'vue-router' {
    interface RouteMeta {
        requiresAuth?: boolean;
        titleKey?: string;
        transitionKey?: string;
    }
}

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...routes,
        {
            path: '/.well-known/security.txt',
            redirect: () => {
                window.location.href =
                    'https://23g.nl/.well-known/security.txt';

                return '/.well-known/security.txt';
            },
        },
    ],
});

router.beforeEach(async (to) => {
    const { redirectedFrom, checkAuthState } = useAuth();

    const authState = await checkAuthState();

    if (
        authState === AuthState.Unauthenticated &&
        to.meta.requiresAuth === true
    ) {
        redirectedFrom.value = to.fullPath;

        return { name: 'auth' };
    }

    if (
        authState === AuthState.Authenticated &&
        to.meta.requiresAuth === false &&
        to.name !== 'auth.logout'
    ) {
        return { name: 'index' };
    }
});

if (import.meta.hot) {
    handleHotUpdate(router);
}

export default router;

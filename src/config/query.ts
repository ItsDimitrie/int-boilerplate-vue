import { QueryClientConfig, VueQueryPlugin } from '@tanstack/vue-query';
import { Plugin } from 'vue';

const queryClientConfig: QueryClientConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
    },
};

export default {
    install: (app) => {
        app.use(VueQueryPlugin, {
            enableDevtoolsV6Plugin: import.meta.env.DEV === true,
            queryClientConfig,
        });
    },
} as Plugin;

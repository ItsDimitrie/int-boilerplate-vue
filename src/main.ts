import '@/styles/app.css';
import '@/config/dayjs';

import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import { Config, ToastService } from 'primevue';
import { createApp } from 'vue';

import App from '@/App.vue';

import query from '@/config/query';
import router from '@/config/router';
import i18n from '@/plugins/i18n';
import { theme } from '@/utils/tailwind';

const app = createApp(App);

const CustomPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: theme('--color-primary-50'),
            100: theme('--color-primary-100'),
            200: theme('--color-primary-200'),
            300: theme('--color-primary-300'),
            400: theme('--color-primary-400'),
            500: theme('--color-primary-500'),
            600: theme('--color-primary-600'),
            700: theme('--color-primary-700'),
            800: theme('--color-primary-800'),
            900: theme('--color-primary-900'),
        },
    },
});

app.use(Config, {
    theme: {
        preset: CustomPreset,
        options: {
            darkModeSelector: false,
        },
    },
});

app.use(ToastService);
app.use(i18n);
app.use(router);
app.use(query);

app.mount('#app');

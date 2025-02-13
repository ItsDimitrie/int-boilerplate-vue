import eslintConfigVue from '@23g/eslint-config-vue';
import queryPlugin from '@tanstack/eslint-plugin-query';
import globals from 'globals';

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                definePage: 'readonly',
            },
        },
    },
    ...queryPlugin.configs['flat/recommended'],
    ...eslintConfigVue(),
];

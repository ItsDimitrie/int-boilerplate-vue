import path from 'path';
import eslint from '@nabla/vite-plugin-eslint';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        eslint(),
        tailwindcss(),
        VueRouter({
            exclude: [
                '**/_*', // files
                '**/_*/**', // folders
            ],
            getRouteName: (routeNode) => {
                let routeName = '';

                while (routeNode !== null && routeNode.parent) {
                    routeName = `${routeNode.value.rawSegment}${routeName ? '.' + routeName : ''}`;
                    routeNode = routeNode.parent ?? null;
                }

                return routeName;
            },
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.json', '.mjs', '.ts'],
    },
    test: {
        exclude: ['**/node_modules/**', '**/src/tests/**'],
    },
});

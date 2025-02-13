<script lang="ts" setup>
    import { RouteLocationRaw } from 'vue-router';

    const { to, title } = defineProps<{
        to: RouteLocationRaw;
        title: string;
    }>();
</script>

<template>
    <li>
        <RouterLink
            class="hover:text-primary relative block py-1 pl-12"
            :to
            exact-active-class="text-primary font-medium"
        >
            <span
                :class="[
                    'absolute bottom-3.5 left-5 block h-24 w-5 rounded-bl border-b border-l border-gray-300',
                ]"
                aria-hidden
            />
            {{ title }}
        </RouterLink>
    </li>
</template>

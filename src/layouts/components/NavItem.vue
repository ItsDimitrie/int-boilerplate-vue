<script lang="ts" setup>
    import { RouteLocationRaw } from 'vue-router';

    import { Icon } from '@/components';

    const { to, title, icon } = defineProps<{
        to: RouteLocationRaw;
        icon: string;
        title: string;
    }>();
</script>

<template>
    <li>
        <RouterLink
            class="hover:bg-primary-100 flex items-center gap-4 rounded p-2 transition-colors"
            :to
            exact-active-class="text-primary font-medium"
        >
            <Icon :icon />
            <span>{{ title }}</span>
        </RouterLink>
    </li>
</template>

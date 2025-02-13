<script lang="ts" setup>
    import { computed, ref, unref } from 'vue';
    import { useRoute } from 'vue-router';

    import { Icon } from '@/components';

    const { routeMatchPattern, title, icon } = defineProps<{
        routeMatchPattern: string;
        icon: string;
        title: string;
    }>();

    const route = useRoute();
    const isActive = computed(() => route.name.includes(routeMatchPattern));
    const isOpen = ref(unref(isActive));
</script>

<template>
    <button
        :class="[
            'hover:bg-primary-100 flex w-full items-center gap-4 rounded p-2 text-left transition-colors',
            { 'text-primary font-medium': isActive },
        ]"
        type="button"
        @click="isOpen = !isOpen"
    >
        <Icon :icon />
        <span class="flex-1">{{ title }}</span>
        <Icon
            :class="[
                'transition-200 text-gray-400 transition-transform',
                { '-scale-y-[1]': isOpen },
            ]"
            icon="keyboard_arrow_down"
        />
    </button>

    <ul
        :class="[
            'overflow-hidden transition-[height] duration-300',
            isOpen ? 'h-[calc-size(auto, size)]' : 'h-0',
        ]"
    >
        <slot />
    </ul>
</template>

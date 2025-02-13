<script lang="ts" setup>
    import { useWindowSize } from '@vueuse/core';
    import { computed } from 'vue';
    import { useI18n } from 'vue-i18n';

    import { Icon } from '@/components';
    import { useNav } from '@/composables/nav';
    import { theme } from '@/utils/tailwind';

    const { t } = useI18n();
    const { isCollapsedOnDesktop, isOpenOnMobile } = useNav();
    const { width: windowWidth } = useWindowSize();

    const isMobile = computed(
        () => windowWidth.value < parseInt(theme('--breakpoint-xl-nav')),
    );

    const handleClick = () => {
        if (isMobile.value) {
            isOpenOnMobile.value = !isOpenOnMobile.value;
            return;
        }

        isCollapsedOnDesktop.value = !isCollapsedOnDesktop.value;
    };

    const ariaLabel = computed(() => {
        if (isMobile.value) {
            return isOpenOnMobile.value
                ? t('common.mainNavClose')
                : t('common.mainNavOpen');
        }

        return isCollapsedOnDesktop.value
            ? t('common.mainNavOpen')
            : t('common.mainNavClose');
    });
</script>

<template>
    <button
        class="flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-gray-200"
        type="button"
        :aria-label
        @click="handleClick"
    >
        <Icon icon="menu" />
    </button>
</template>

<script lang="ts" setup>
    import { useI18n } from 'vue-i18n';

    import Icon from '@/components/Icon.vue';

    const { t } = useI18n();
</script>

<template>
    <RouterLink
        class="default-link mb-6 flex h-10 items-center gap-2"
        :to="{ name: 'auth.login' }"
    >
        <Icon icon="arrow_left_alt" />
        <span>{{ t('auth.backToLogin') }}</span>
    </RouterLink>
</template>

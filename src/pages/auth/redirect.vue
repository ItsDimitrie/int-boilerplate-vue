<script lang="ts" setup>
    import { ProgressSpinner } from 'primevue';
    import { onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useRouter } from 'vue-router';

    import { AuthState, useAuth } from '@/composables/auth';
    import checkForRedirect from '@/guards/checkForRedirect';

    definePage({
        beforeEnter: checkForRedirect,
    });

    const { t } = useI18n();
    const { authState, redirectedFrom } = useAuth();
    const router = useRouter();

    onMounted(() => {
        authState.value = AuthState.Authenticated;
        router.push(redirectedFrom.value ?? { name: 'index' });
    });
</script>

<template>
    <ProgressSpinner
        class="!h-12 !w-12"
        :aria-label="t('common.loading')"
        stroke-width="4"
    />
</template>

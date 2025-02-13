<script lang="ts" setup>
    import { useQueryClient } from '@tanstack/vue-query';
    import { ProgressSpinner } from 'primevue';
    import { onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useRouter } from 'vue-router';

    import { useLogout } from '@/api/composables/auth.api';
    import { AuthState, useAuth } from '@/composables/auth';

    const { t } = useI18n();
    const { mutate: logout } = useLogout();
    const { authState } = useAuth();
    const queryClient = useQueryClient();
    const router = useRouter();

    onMounted(() => {
        logout(undefined, {
            onSettled: () => {
                authState.value = AuthState.Unauthenticated;
                queryClient.clear();
                router.replace({ name: 'auth' });
            },
        });
    });
</script>

<template>
    <ProgressSpinner
        class="!h-12 !w-12"
        :aria-label="t('common.loading')"
        stroke-width="4"
    />
</template>

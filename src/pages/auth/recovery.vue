<script lang="ts" setup>
    import { Button, InputText } from 'primevue';
    import { ref } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useRouter } from 'vue-router';

    import BackToLogin from '@/pages/auth/_partials/BackToLogin.vue';

    import { useTwoFactorChallenge } from '@/api/composables/auth.api';
    import { Form, ValidationMessage } from '@/components';
    import checkForRedirect from '@/guards/checkForRedirect';

    definePage({
        beforeEnter: checkForRedirect,
    });

    const { t } = useI18n();
    const {
        mutate: verifyChallenge,
        errors,
        isPending,
    } = useTwoFactorChallenge();
    const router = useRouter();

    const code = ref('');

    const handleSubmit = () => {
        verifyChallenge(
            { recovery_code: code.value },
            {
                onSuccess: () => {
                    router.replace({ name: 'auth.redirect' });
                },
                onSettled: () => {
                    code.value = '';
                },
            },
        );
    };
</script>

<template>
    <BackToLogin />

    <h3>{{ t('auth.recoveryTitle') }}</h3>
    <p>{{ t('auth.recoveryDescription') }}</p>

    <Form class="flex flex-col gap-8" @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-2">
            <InputText v-model="code" data-testid="recoveryCodeInput" />
            <ValidationMessage :errors="errors?.recovery_code" />
        </div>

        <div class="flex items-center gap-4">
            <Button
                class="self-start"
                :loading="isPending"
                :label="t('common.continue')"
                type="submit"
            />
            <RouterLink
                class="default-link-primary"
                :to="{ name: 'auth.verify' }"
                replace
            >
                {{ t('auth.useAuthenticatorCode') }}
            </RouterLink>
        </div>
    </Form>
</template>

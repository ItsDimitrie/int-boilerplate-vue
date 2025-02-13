<script lang="ts" setup>
    import { Button, InputOtp } from 'primevue';
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
            { code: code.value },
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

    <h3>{{ t('auth.twoFactorTitle') }}</h3>
    <p>{{ t('auth.twoFactorDescription') }}</p>

    <Form class="flex flex-col gap-8" @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-2">
            <InputOtp
                v-model="code"
                integer-only
                size="large"
                :length="6"
                data-testid="codeInput"
            />
            <ValidationMessage :errors="errors?.code" />
        </div>

        <div class="flex items-center gap-4">
            <Button
                class="self-start"
                :loading="isPending"
                :label="t('common.continue')"
                type="submit"
                data-testid="submit"
            />
            <RouterLink
                class="default-link-primary"
                :to="{ name: 'auth.recovery' }"
                replace
                data-testid="recovery"
            >
                {{ t('auth.useRecoveryCode') }}
            </RouterLink>
        </div>
    </Form>
</template>

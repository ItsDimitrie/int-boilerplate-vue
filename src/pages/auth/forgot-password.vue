<script lang="ts" setup>
    import { Button, InputText } from 'primevue';
    import { reactive } from 'vue';
    import { useI18n } from 'vue-i18n';

    import BackToLogin from '@/pages/auth/_partials/BackToLogin.vue';

    import { useRequestPasswordReset } from '@/api/composables/auth.api';
    import { Form, ValidationMessage } from '@/components';

    definePage({
        path: '/forgot-password',
    });

    const { t } = useI18n();
    const {
        mutate: requestPasswordReset,
        errors,
        isSuccess,
        isPending,
    } = useRequestPasswordReset();

    const formData = reactive({
        email: '',
    });

    const handleSubmit = () => {
        requestPasswordReset(formData);
    };
</script>

<template>
    <BackToLogin />

    <template v-if="isSuccess">
        <h3>{{ t('passwords.forgotPasswordSuccessIntro') }}</h3>
        <p>{{ t('passwords.forgotPasswordSuccessDescription') }}</p>
    </template>
    <template v-else>
        <h3>{{ t('passwords.forgot') }}</h3>
        <p>{{ t('passwords.forgotIntro') }}</p>

        <Form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
            <div class="flex flex-col gap-2">
                <label for="forgot-email">{{ t('common.email') }}</label>
                <InputText
                    id="forgot-email"
                    v-model="formData.email"
                    type="email"
                    autocomplete="email"
                    required
                />
                <ValidationMessage :errors="errors?.email" />
            </div>

            <Button
                class="mt-6 self-start"
                :loading="isPending"
                :label="t('passwords.request')"
                type="submit"
            />
        </Form>
    </template>
</template>

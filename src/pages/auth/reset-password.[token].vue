<script lang="ts" setup>
    import { Button, InputText, Message, Password } from 'primevue';
    import { reactive } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useRoute } from 'vue-router';

    import BackToLogin from '@/pages/auth/_partials/BackToLogin.vue';

    import { useResetPassword } from '@/api/composables/auth.api';
    import { Form, ValidationMessage } from '@/components';

    definePage({
        path: '/reset-password/:token',
    });

    const { t } = useI18n();
    const { mutate, errors, isSuccess, isPending } = useResetPassword();
    const route = useRoute('auth.reset-password.[token]');

    const formData = reactive({
        email: '',
        password: '',
        password_confirmation: '',
        token: route.params.token,
    });

    const handleSubmit = () => {
        mutate(formData);
    };
</script>

<template>
    <BackToLogin />

    <h3>{{ t('passwords.request') }}</h3>
    <p>{{ t('passwords.requestIntro') }}</p>

    <Message v-if="isSuccess" severity="success" data-testid="resetSuccess">
        {{ t('passwords.resetSuccess') }}
    </Message>
    <Form v-else class="flex flex-col gap-4" @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-2">
            <label for="email">{{ t('common.email') }}</label>
            <InputText
                id="email"
                v-model="formData.email"
                type="email"
                autocomplete="email"
                required
            />
            <ValidationMessage :errors="errors?.email" />
        </div>

        <div class="flex flex-col gap-2">
            <label for="password">{{ t('passwords.newPassword') }}</label>
            <Password
                v-model="formData.password"
                :feedback="false"
                :input-props="{
                    autocomplete: 'current-password',
                    id: 'password',
                }"
                type="password"
                fluid
                toggle-mask
                required
            />
            <ValidationMessage :errors="errors?.password" />
        </div>

        <div class="flex flex-col gap-2">
            <label for="password-confirmation">
                {{ t('passwords.confirmNewPassword') }}
            </label>
            <Password
                v-model="formData.password_confirmation"
                :feedback="false"
                :input-props="{
                    autocomplete: 'current-password',
                    id: 'password-confirmation',
                }"
                type="password"
                fluid
                toggle-mask
                required
            />
            <ValidationMessage :errors="errors?.password_confirmation" />
        </div>

        <Button
            class="mt-6 self-start"
            :loading="isPending"
            :label="t('passwords.reset')"
            type="submit"
        />
    </Form>
</template>

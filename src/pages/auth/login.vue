<script lang="ts" setup>
    import { Button, Checkbox, InputText, Password } from 'primevue';
    import { reactive } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useRouter } from 'vue-router';

    import ValidationMessage from '@/components/ValidationMessage.vue';

    import { useLoginWithPassword } from '@/api/composables/auth.api';
    import { Form } from '@/components';
    import { useAuth } from '@/composables/auth';

    definePage({
        path: '/login',
    });

    const { t } = useI18n();
    const {
        mutate: loginWithPassword,
        errors,
        isPending,
    } = useLoginWithPassword();
    const router = useRouter();
    const { shouldRedirectToLogin } = useAuth();

    const formData = reactive({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = () => {
        loginWithPassword(formData, {
            onSuccess: (data) => {
                shouldRedirectToLogin.value = false;

                if (data.data.two_factor) {
                    router.push({ name: 'auth.verify' });
                    return;
                }

                router.replace({ name: 'auth.redirect' });
            },
            onError: () => {
                formData.password = '';
            },
        });
    };
</script>

<template>
    <h3>{{ t('auth.welcomeBack') }}</h3>
    <p>{{ t('auth.loginIntro') }}</p>

    <Form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
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
            <label for="password">{{ t('common.password') }}</label>
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

        <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
                <Checkbox
                    v-model="formData.remember"
                    input-id="remember"
                    binary
                />
                <label for="remember">{{ t('auth.rememberMe') }}</label>
            </div>

            <RouterLink
                class="default-link-primary"
                :to="{ name: 'auth.forgot-password' }"
            >
                {{ t('passwords.forgotYourPassword') }}
            </RouterLink>
        </div>

        <Button
            class="mt-6 self-start"
            :loading="isPending"
            :label="t('auth.login')"
            type="submit"
        />
    </Form>
</template>

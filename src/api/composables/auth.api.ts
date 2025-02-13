import { useMutation } from '@tanstack/vue-query';

import { api } from '@/api';
import { getValidationErrors } from '@/utils/errors';

export const useLoginWithPassword = () => {
    const mutation = useMutation({
        mutationFn: api.login.login,
    });

    return {
        ...mutation,
        errors: getValidationErrors(mutation.error),
    };
};

export const useLogout = () => {
    return useMutation({
        mutationFn: api.logout.logout,
    });
};

export const useRequestPasswordReset = () => {
    const mutation = useMutation({
        mutationFn: api.forgotPassword.passwordForgot,
    });

    return {
        ...mutation,
        errors: getValidationErrors(mutation.error),
    };
};

export const useResetPassword = () => {
    const mutation = useMutation({
        mutationFn: api.resetPassword.passwordReset,
    });

    return {
        ...mutation,
        errors: getValidationErrors(mutation.error),
    };
};

// TODO: replace with actual API call
export const useTwoFactorChallenge = () => {
    const mutation = useMutation({
        mutationFn: (params: { code?: string; recovery_code?: string }) =>
            api.instance.post('/two-factor-challenge', params),
    });

    return {
        ...mutation,
        errors: getValidationErrors(mutation.error),
    };
};

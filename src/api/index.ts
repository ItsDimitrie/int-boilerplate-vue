import { AxiosError, isCancel } from 'axios';

import { Api } from '@/api/client';
import { AuthState, useAuth } from '@/composables/auth';
import { useToast } from '@/composables/toast';
import i18n from '@/plugins/i18n';
import {
    isNotFoundError,
    isPageExpiredError,
    isRateLimitError,
    isUnauthorizedError,
    isValidationError,
} from '@/utils/errors';

export const api = new Api({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});
let isSessionRefreshInitiated = false;

// Accept-Language is automatically set from <html lang="...">
api.instance.defaults.headers.common['Accept'] = 'application/json';
api.instance.defaults.withCredentials = true;
api.instance.defaults.withXSRFToken = (config) =>
    config.method !== 'get' && config.method !== 'head';

const toast = useToast();

api.instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError | Error): Promise<AxiosError> => {
        if (!isPageExpiredError(error)) {
            isSessionRefreshInitiated = false;
        }

        if (isPageExpiredError(error)) {
            // Prevents getting stuck in a loop making infinite requests
            if (isSessionRefreshInitiated) {
                isSessionRefreshInitiated = false;

                toast.add({
                    severity: 'error',
                    summary: i18n.global.t('errors.generic'),
                });

                return Promise.reject(error);
            }

            isSessionRefreshInitiated = true;

            // Refresh csrf cookie and retry the request
            return api.sanctum.sanctumCsrfCookie().then(() => {
                return api.instance.request(error.config);
            });
        }

        if (isUnauthorizedError(error)) {
            const { authState } = useAuth();

            // Reload when you're not authenticated but the app thinks you are
            if (authState.value === AuthState.Authenticated) {
                window.location.reload();
            } else {
                authState.value = AuthState.Unauthenticated;
            }

            return Promise.reject(error);
        }

        if (
            isValidationError(error) ||
            isNotFoundError(error) ||
            isCancel(error)
        ) {
            // These errors should not show a generic toast error
            return Promise.reject(error);
        }

        if (isRateLimitError(error)) {
            toast.add({
                severity: 'error',
                summary: i18n.global.t('errors.rateLimited'),
            });

            return Promise.reject(error);
        }

        toast.add({
            severity: 'error',
            summary: i18n.global.t('errors.generic'),
        });

        return Promise.reject(error);
    },
);

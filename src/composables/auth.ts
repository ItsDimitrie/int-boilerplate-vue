import { reactive, toRefs } from 'vue';
import { RouteLocationRaw } from 'vue-router';

import { api } from '@/api';

export enum AuthState {
    Authenticated = 'authenticated',
    Unauthenticated = 'unauthenticated',
    // Other auth states e.g. mandatory onboarding
}

const state = reactive<{
    authState: AuthState | undefined;
    redirectedFrom: RouteLocationRaw | undefined;
    shouldRedirectToLogin: boolean;
}>({
    authState: undefined,
    redirectedFrom: undefined,
    shouldRedirectToLogin: true,
});

export const useAuth = () => {
    const checkAuthState = async (ignoreCache = false) => {
        if (state.authState !== undefined && ignoreCache === false) {
            return state.authState;
        }

        try {
            await api.user.userShow();

            state.authState = AuthState.Authenticated;

            return AuthState.Authenticated;
        } catch {
            state.authState = AuthState.Unauthenticated;

            return AuthState.Unauthenticated;
        }
    };

    return {
        ...toRefs(state),
        checkAuthState,
    };
};

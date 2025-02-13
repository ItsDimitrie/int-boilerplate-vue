import { RouteLocationRaw } from 'vue-router';

import { useAuth } from '@/composables/auth';

export default (): RouteLocationRaw | undefined => {
    const { shouldRedirectToLogin } = useAuth();

    if (shouldRedirectToLogin.value === true) {
        return { name: 'auth.login' };
    }
};

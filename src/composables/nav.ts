import { useStorage } from '@vueuse/core';
import { ref } from 'vue';

import router from '@/config/router';

const isCollapsedOnDesktop = useStorage('is-collapsed', false);
const isOpenOnMobile = ref(false);

router.beforeEach(() => {
    isOpenOnMobile.value = false;
});

export const useNav = () => {
    return {
        isCollapsedOnDesktop,
        isOpenOnMobile,
    };
};

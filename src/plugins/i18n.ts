import { createI18n } from 'vue-i18n';

import en from '@/lang/en';

export type MessageSchema = typeof en;

export default createI18n<[MessageSchema], 'en'>({
    warnHtmlMessage: false,
    fallbackLocale: 'en',
    globalInjection: true,
    legacy: false,
    locale: 'en',
    messages: {
        en,
    },
});

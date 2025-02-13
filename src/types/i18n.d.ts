import 'vue-i18n';

import { MessageSchema } from '@/plugins/i18n';

declare module 'vue-i18n' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface DefineLocaleMessage extends MessageSchema {}
}

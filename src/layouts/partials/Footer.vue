<script lang="ts" setup>
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
</script>

<template>
    <footer
        class="flex items-center gap-4 p-4 text-sm text-gray-700 xl:gap-6 xl:px-10 xl:py-6"
    >
        <span>
            &copy; {{ new Date().getFullYear() }}
            {{ t('common.copy') }}
        </span>

        <ul class="flex items-center gap-4 xl:gap-6">
            <li>
                <a
                    class="hover:text-primary"
                    :href="t('common.colofonUrl')"
                    target="_blank"
                >
                    {{ t('common.colofon') }}
                </a>
            </li>
            <li>
                <a
                    class="hover:text-primary"
                    :href="t('common.disclaimerUrl')"
                    target="_blank"
                >
                    {{ t('common.disclaimer') }}
                </a>
            </li>
        </ul>
    </footer>
</template>

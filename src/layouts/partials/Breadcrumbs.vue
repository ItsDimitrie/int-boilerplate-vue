<script lang="ts" setup>
    import { computed } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { RouteLocationRaw, useRoute } from 'vue-router';

    import { Icon } from '@/components';
    import { useBreadcrumbs } from '@/composables/breadcrumbs';

    const route = useRoute();
    const { breadcrumbs } = useBreadcrumbs();
    const { t } = useI18n();

    const mappedBreadcrumbs = computed(() => {
        let items = breadcrumbs.value;

        if (!breadcrumbs.value.length && route.meta.titleKey !== undefined) {
            items = [
                {
                    label: t(route.meta.titleKey),
                    to: { name: route.name },
                },
            ];
        }

        return items.map((item, index) => {
            const isLast = items.length - 1 === index;
            const isSecondToLast = items.length - 2 === index;

            return {
                ...item,
                isLast,
                isSecondToLast,
                to: item.to as RouteLocationRaw, // TODO: resolve ts error without casting
            };
        });
    });
</script>

<template>
    <Transition name="fade" mode="out-in">
        <nav
            :key="route.path"
            class="ml-[14px] flex h-6 items-center lg:gap-1"
            data-testid="breadcrumbs"
        >
            <template v-for="item in mappedBreadcrumbs" :key="item.label">
                <RouterLink
                    v-if="item.isSecondToLast"
                    class="hover:text-primary -mr-1 -ml-[14px] flex w-12 items-center justify-center lg:hidden"
                    :to="item.to"
                    aria-hidden
                >
                    <Icon icon="keyboard_arrow_left" />
                </RouterLink>

                <RouterLink
                    :class="[
                        'hover:text-primary text-sm lg:text-base',
                        item.isLast ? 'font-medium' : 'hidden lg:flex',
                    ]"
                    :to="item.to"
                >
                    {{ item.label }}
                </RouterLink>

                <Icon
                    v-if="!item.isLast"
                    class="hidden text-gray-500 lg:flex"
                    icon="keyboard_arrow_right"
                />
            </template>
        </nav>
    </Transition>
</template>

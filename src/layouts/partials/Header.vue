<script setup lang="ts">
    import { Avatar, OverlayBadge, Popover } from 'primevue';
    import { ref, useTemplateRef } from 'vue';
    import { useI18n } from 'vue-i18n';

    import Icon from '@/components/Icon.vue';
    import NavButton from '@/layouts/components/NavButton.vue';
    import Breadcrumbs from '@/layouts/partials/Breadcrumbs.vue';

    import { initials } from '@/utils/format';

    const { t } = useI18n();

    const arrowOffset = '1.4375rem';

    const popoverNotifications = useTemplateRef('popoverNotificationsRef');
    const popoverNotificationsIsVisible = ref(false);

    const popoverNotificationsToggle = (event: Event) => {
        if (
            popoverNotifications.value === null ||
            popoverNotifications.value === undefined
        ) {
            return;
        }

        popoverNotifications.value.toggle(event);
    };

    const popoverUser = useTemplateRef('popoverUserRef');
    const popoverUserIsVisible = ref(false);

    const popoverToggle = (event: Event) => {
        if (popoverUser.value === null || popoverUser.value === undefined) {
            return;
        }

        popoverUser.value.toggle(event);
    };
</script>

<template>
    <header class="flex flex-wrap bg-gray-100 p-4 xl:p-6">
        <div class="flex flex-1 items-center lg:order-1 lg:flex-grow-0">
            <NavButton />
        </div>

        <div class="flex items-center gap-4 lg:order-3 xl:gap-6">
            <button
                class="flex w-12 shrink-0 items-center justify-center hover:opacity-75"
                :aria-label="
                    popoverNotificationsIsVisible
                        ? t('common.notificationsClose')
                        : t('common.notificationsOpen')
                "
                type="button"
                @click="popoverNotificationsToggle"
            >
                <OverlayBadge class="flex" severity="danger">
                    <Icon icon="notifications" />
                </OverlayBadge>
            </button>

            <!-- TODO: make dynamic -->
            <Popover
                ref="popoverNotificationsRef"
                :dt="{
                    arrowOffset,
                }"
                @hide="popoverNotificationsIsVisible = false"
                @show="popoverNotificationsIsVisible = true"
            >
                <ul>
                    <li>Notification #1</li>
                    <li>Notification #2</li>
                </ul>
            </Popover>

            <button
                class="flex shrink-0 items-center gap-3 hover:opacity-75"
                :aria-label="
                    popoverUserIsVisible
                        ? t('common.userMenuClose')
                        : t('common.userMenuOpen')
                "
                type="button"
                @click="popoverToggle"
            >
                <Avatar
                    class="text-lg font-bold"
                    :dt="{
                        LgFontSize: 'text-sm',
                    }"
                    :label="initials('Henk de Vries')"
                    shape="circle"
                    size="large"
                />

                <div class="w hidden items-center gap-3 md:flex">
                    <div class="flex flex-col items-start">
                        <!-- TODO: make dynamic -->
                        <span class="font-medium">Henk de Vries</span>
                        <span class="text-sm text-gray-500">Administrator</span>
                    </div>

                    <Icon
                        :class="[
                            'transition-transform',
                            { '-scale-y-[1]': popoverUserIsVisible },
                        ]"
                        icon="keyboard_arrow_down"
                    />
                </div>
            </button>

            <!-- TODO: make dynamic -->
            <Popover
                ref="popoverUserRef"
                :dt="{
                    arrowOffset,
                }"
                @hide="popoverUserIsVisible = false"
                @show="popoverUserIsVisible = true"
            >
                <ul>
                    <li>{{ t('common.profile') }}</li>
                    <li>
                        <RouterLink :to="{ name: 'auth.logout' }">
                            {{ t('auth.logout') }}
                        </RouterLink>
                    </li>
                </ul>
            </Popover>
        </div>
        <div class="flex w-full items-center lg:order-2 lg:w-auto lg:flex-1">
            <Breadcrumbs />
        </div>
    </header>
</template>

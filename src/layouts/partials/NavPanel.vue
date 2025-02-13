<script lang="ts" setup>
    import { useI18n } from 'vue-i18n';

    import NavItem from '@/layouts/components/NavItem.vue';
    import NavSegment from '@/layouts/components/NavSegment.vue';
    import SubNav from '@/layouts/components/SubNav.vue';
    import SubNavItem from '@/layouts/components/SubNavItem.vue';

    import { useNav } from '@/composables/nav';

    const { isCollapsedOnDesktop, isOpenOnMobile } = useNav();
    const { t } = useI18n();
</script>

<template>
    <div
        :class="[
            'fixed top-0 bottom-0 z-50 flex h-screen w-(--nav-panel-width) flex-col bg-white transition-transform duration-300',
            isOpenOnMobile ? 'translate-x-0' : '-translate-x-full',
            !isCollapsedOnDesktop
                ? 'xl-nav:translate-x-0'
                : 'xl-nav:-translate-x-full',
        ]"
    >
        <div class="px-8 py-6">
            <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-500">
                <!-- Logo placeholder -->
            </div>
        </div>
        <nav
            class="flex flex-1 flex-col gap-7 overflow-x-hidden overflow-y-auto overscroll-contain px-8 py-6"
        >
            <NavSegment>
                <NavItem
                    :to="{ name: 'index.dashboard' }"
                    icon="home"
                    :title="t('common.dashboard')"
                />
            </NavSegment>
            <NavSegment title="Segment titel">
                <SubNav
                    route-match-pattern="index.datatable"
                    icon="home"
                    title="Datatable"
                >
                    <SubNavItem
                        :to="{ name: 'index.datatable.index' }"
                        title="Index"
                    />
                    <SubNavItem
                        :to="{ name: 'index.datatable.create' }"
                        title="Create"
                    />
                </SubNav>
            </NavSegment>
        </nav>
    </div>

    <button
        :class="[
            'xl-nav:hidden fixed top-0 left-0 z-40 h-full w-full bg-black/30 transition-opacity duration-300',
            isOpenOnMobile
                ? 'pointer-events-auto'
                : 'pointer-events-none opacity-0',
        ]"
        type="button"
        @click="isOpenOnMobile = false"
    />
</template>

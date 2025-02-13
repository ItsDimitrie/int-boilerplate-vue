<script lang="ts" setup>
    import Footer from '@/layouts/partials/Footer.vue';
    import Header from '@/layouts/partials/Header.vue';
    import NavPanel from '@/layouts/partials/NavPanel.vue';

    import { useNav } from '@/composables/nav';

    const { isCollapsedOnDesktop } = useNav();
</script>

<template>
    <NavPanel />

    <div
        :class="[
            'flex flex-1 flex-col transition-[margin-left] duration-300',
            isCollapsedOnDesktop
                ? 'xl-nav:ml-0'
                : 'xl-nav:ml-(--nav-panel-width)',
        ]"
    >
        <Header />

        <main class="flex-1 p-4 xl:p-10">
            <RouterView v-slot="routeProps">
                <Transition name="subtle-slide-fade" mode="out-in">
                    <div :key="routeProps.route.path">
                        <Component :is="routeProps.Component" />
                    </div>
                </Transition>
            </RouterView>
        </main>

        <Footer />
    </div>
</template>

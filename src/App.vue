<script lang="ts" setup>
    import { Toast } from 'primevue';

    import { Icon } from '@/components';
</script>

<template>
    <RouterView v-slot="router">
        <Transition name="fade" mode="out-in">
            <div
                :key="router.route.matched[0]?.meta.transitionKey"
                class="flex min-h-screen flex-1 flex-col"
            >
                <Component :is="router.Component" />
            </div>
        </Transition>
    </RouterView>

    <Toast
        :pt="{
            messageIcon: ({ props }) => ({
                class: [`is-${props.message?.severity}`],
            }),
        }"
    >
        <template #closeicon>
            <Icon icon="close" />
        </template>
        <template #messageicon="scope">
            <Icon v-if="scope.class.includes('is-success')" icon="check" />
            <Icon v-else-if="scope.class.includes('is-error')" icon="error" />
            <Icon
                v-else-if="scope.class.includes('is-warning')"
                icon="warning"
            />
            <Icon v-else icon="error" />
        </template>
    </Toast>
</template>

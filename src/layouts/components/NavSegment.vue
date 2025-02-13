<script lang="ts" setup>
    const { title } = defineProps<{ title?: string }>();
</script>

<template>
    <div class="group flex flex-col gap-2 text-gray-700">
        <span
            v-if="title"
            class="block text-xs font-bold text-gray-400 uppercase"
        >
            {{ title }}
        </span>
        <ul class="flex flex-col gap-2">
            <slot />
        </ul>
    </div>
</template>

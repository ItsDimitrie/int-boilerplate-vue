<script lang="ts" setup>
    interface Props {
        icon: string;
    }

    const { icon } = defineProps<Props>();
</script>

<template>
    <span class="material-symbols-rounded">
        {{ icon }}
    </span>
</template>

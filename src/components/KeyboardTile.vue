<script setup>
import { getTooltip } from '@/store/Tooltip';
const tooltip = getTooltip();

defineProps({
    char: {
        type: String,
    }
});

</script>

<template>
    <button class="tile" :class="{'grey': tooltip.crossedOut(char)}">{{ char.toUpperCase() }}</button>
</template>

<style scoped>
    .tile {
        background-color: white;
        border: 1px solid black;
        border-radius: 2px;
        font-size: 20px;
        aspect-ratio: 1/1;
        width: 50px;
    }
    
    .grey {
        color: white;
        background-color: grey;
    }

</style>
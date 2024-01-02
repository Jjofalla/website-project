<script setup>
import { getGameState } from '@/store/GameState';

defineProps({
    char: {
        type: String,
    }
});

</script>

<template>
    <button class="tile" :class="{'grey': getGameState().isDiscarded(char)}" tabindex="-1">{{ char.toUpperCase() }}</button>
</template>

<style scoped>
    .tile {
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        font-size: 20px;
        aspect-ratio: 1/1.3;
        width: 48px;
    }
    
    .grey {
        color: white;
        background-color: grey;
    }

</style>
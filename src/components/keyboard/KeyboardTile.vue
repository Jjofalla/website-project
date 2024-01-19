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
        color: darkslategray;
        border: 1px solid darkgrey;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        font-size: 25px;
        font-family: Tahoma, Verdana, sans-serif;
        aspect-ratio: 1/1.15;
        width: 55px;
    }
    
    .grey {
        color: white;
        background-color: lightgray;
    }

</style>
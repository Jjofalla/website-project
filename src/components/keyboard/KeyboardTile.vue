<script setup>
import { getGameState } from '@/store/GameState';

defineProps({
    char: {
        type: String,
    }
});

</script>

<template>
    <button 
        class="tile"
        :style="getGameState().trackKeyboardTile(char)"
        >{{ char.toUpperCase() }}
    </button>
</template>

<style scoped>
    .tile {
        border: none;
        border-radius: 8px;
        font-size: 25px;
        font-weight: bolder;
        font-family: 'Trebuchet MS', sans-serif;
        aspect-ratio: 1/1.15;
        width: 55px;
        transition: 0.2s ease;
    }

</style>
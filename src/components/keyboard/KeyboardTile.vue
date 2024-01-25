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
        border-radius: 0.3rem;
        font-size: 1.5rem;
        font-weight: bolder;
        font-family: 'Trebuchet MS', sans-serif;
        aspect-ratio: 1/1.15;
        width: 3.1rem;
        transition: 0.2s ease;
    }

</style>
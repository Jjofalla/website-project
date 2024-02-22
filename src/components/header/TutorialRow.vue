<script setup>

import { getGameState } from '@/store/GameState';


defineProps({
    word: {
        type: String,
    },
    code: {
        type: Array,
    },
    styleMap: {
        type: Array,
    }
});


</script>

<template>
    <div class="row">
        <div class="tiles">
            <div class="tile" v-for="(n, idx) in Array.from(word)" :key="idx" :style="styleMap[0] === idx ? getGameState().getStyle(styleMap[1]) : ''">{{ n }}</div>
        </div>
        <div class="hints">
            <div class="tutorial-hint" v-for="(cls, idx) in code" :key="idx" :class="cls"></div>
        </div>
    </div>
</template>

<style scoped>

.row {
    display: flex;
    height: max-content;
    max-width: fit-content;
    margin: 0 auto;
    padding: 0rem 0.5rem 0rem 0.5rem;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-evenly;
}

.tiles {
    display: flex;
    height: 4.5rem;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
}

.tile {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem;
    box-sizing: border-box;
    aspect-ratio: 1/1;
    width: 3.43rem;
    font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
    font-size: 1.9rem;
    font-weight: bolder;
    color: var(--text-dark);
    box-shadow: 0rem 0.25rem 0.25rem rgb(200,200,200);
}

.hints {
    display: flex;
    min-width: fit-content;
    gap: 0.2rem;
    align-items: center;
    justify-content: center;
}

</style>
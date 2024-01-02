<script setup>
import { getGameState } from '@/store/GameState';
import BoardRow from './BoardRow.vue';
import TheKeyboard from '../keyboard/TheKeyboard.vue';
const gameState = getGameState();
const gameData = gameState.gameData;

function getRow(row) {
    // zero-indexed to access array 
    return row - 1 < gameState.rowsToRender ? gameData.rows[row - 1] : '';
}

function determineActiveRow(row) {
    // last row is active for user input
    return !gameData.finished && row === gameState.rowsToRender;
}

</script>

<template>
    <div class="body">
        <TheKeyboard />
        <div class="table">
            <BoardRow 
                v-for="row in gameState.rowsToRender" 
                :key="row"
                :currentGuess="getRow(row)"
                :isActive="determineActiveRow(row)"
            />
        </div>
    </div>
</template>

<style scoped>
    .table {
        display: grid;
        grid-auto-flow: column;
        grid-template-rows: repeat(7, 1fr);
        grid-template-columns: 1fr, 1fr;
        border-radius: 5px;
        gap: 15px;
        padding: 2rem;
        width: 90%;
    }

    .body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
    }

</style>

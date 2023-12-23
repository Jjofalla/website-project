<script setup>
import { getGameState } from '@/store/GameState';
import BoardRow from './BoardRow.vue';
import TheKeyboard from './TheKeyboard.vue';
const gameState = getGameState();

function getRow(row) {
    // zero-indexed to access array 
    return row < gameState.rowsToRender ? gameState.rows[row] : '';
}

function determineActiveRow(row) {
    // last row is active for user input
    return !gameState.gameFinished && row === gameState.rowsToRender;
}

</script>

<template>
    <div class="body">
        <TheKeyboard />
        <div class="table">
            <BoardRow 
                v-for="row in gameState.rowsToRender" 
                :key="row"
                :currentGuess="getRow(row - 1)"
                :isActive="determineActiveRow(row)"
            />
        </div>
    </div>
</template>

<style scoped>
    .table {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
        border-radius: 5px;
        padding: 2em;
        padding-bottom: 50px;
        width: 1024px;
    }

    .body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px;
    }

</style>

<script setup>
import { getGameState } from '@/store/GameState';
import BoardRow from './BoardRow.vue';
const gameState = getGameState();

const getRow = (row) => {
    return row < gameState.numberOfRows ? gameState.rows[row] : '';
}

function determineActiveRow(row) {
    return !gameState.gameFinished && row === gameState.numberOfRows;
}

</script>

<template>
    <div class="body">
        <div class="table">
            <BoardRow 
                v-for="row in gameState.numberOfRows + 1" 
                :key="row"
                :currentGuess="getRow(row - 1)"
                :isActive="determineActiveRow(row - 1)"
            />
        </div>
    </div>
</template>

<style scoped>
    .table {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        border-radius: 5px;
        padding: 2em;
        padding-bottom: 50px;
        width: 1024px;
    }

    .body {
        display: flex;
        justify-content: center;
        padding: 10px;
    }

</style>

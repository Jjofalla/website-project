<script setup>
import { ref } from 'vue';
import BoardRow from './BoardRow.vue';

const numberOfRows = ref(1);
const numberOfTiles = 5;
const target = "finds";
const gameFinished = ref(false);

function addNewRow() {
    numberOfRows.value++;
}

function disableRows() {
    gameFinished.value = true;
}

function determineActiveRow(row) {
    if (gameFinished.value) {
        return false;
    }
    return row === numberOfRows.value;
}


</script>

<template>
    <div class="table">
        <BoardRow 
            v-for="row in numberOfRows" 
            :key="row"
            :numberOfTiles="numberOfTiles"
            :target="target"
            :isActive="determineActiveRow(row)"
            @add-new-row="addNewRow"
            @reveal-output="disableRows"
        />
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

</style>

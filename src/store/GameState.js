import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const getGameState = defineStore('gameState', () => {
    const gameFinished = ref(false);
    const rows = ref([]);
    const rowsToRender = ref(0);
    const target = "whole";
    const numberOfTiles = target.length;

    function updateRows() {
        if (!gameFinished.value) {
            rowsToRender.value = rows.value.length + 1;
        } else {
            rowsToRender.value = rows.value.length;
        }
    }
    
    function resetState() {
        gameFinished.value = false;
        rows.value = [];
        window.location.reload();
    }
 
    if (localStorage.getItem("rows")) {
        rows.value = JSON.parse(localStorage.getItem("rows"));
    }

    if (localStorage.getItem("gameFinished")) {
        gameFinished.value = JSON.parse(localStorage.getItem("gameFinished"));
    } else {
        console.log('Cannot find previous lol, reset');
    }

    watch(rows, (num) => {localStorage.setItem("rows", JSON.stringify(num));}, { deep: true });
    watch(gameFinished, (bool) => {localStorage.setItem("gameFinished", JSON.stringify(bool));}, { deep: true });

    updateRows();

    return { 
        gameFinished, 
        rows,
        rowsToRender,
        target,
        numberOfTiles,
        updateRows,
        resetState,
    }
}); 
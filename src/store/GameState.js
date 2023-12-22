import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const getGameState = defineStore('gameState', () => {
    const gameFinished = ref(false);
    const rows = ref([]);
    const numberOfRows = ref(0);
    const target = "whole";
    const numberOfTiles = target.length;

    function changeGameState() {
        gameFinished.value = false;
        numberOfRows.value = -1;
        rows.value = [];
        window.location.reload();
    }
 
    if (localStorage.getItem("rows")) {
        rows.value = JSON.parse(localStorage.getItem("rows"));
        numberOfRows.value = rows.value.length;
    }

    watch(
        rows,
        (rowsVal) => {
            localStorage.setItem("rows", JSON.stringify(rowsVal));
        },
        { deep: true }
    );

    return { 
        gameFinished, 
        rows,
        numberOfRows,
        target,
        numberOfTiles,
        changeGameState
    }
}); 
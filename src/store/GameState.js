import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const getGameState = defineStore('gameState', () => {
    const gameData = ref({
        rows: [],
        discardChars: new Set(),
        finished: false,
    });

    const rowsToRender = ref(0);
    const target = "links";
    const numberOfTiles = target.length;
    const maxGuesses = 14;

    function updateRows() {
        let numberOfRows = gameData.value.rows.length;
        if (!gameData.value.finished) {
            rowsToRender.value = numberOfRows + 1;
        } else {
            rowsToRender.value = numberOfRows;
        }
    }

    function isDiscarded(char) {
        return gameData.value.discardChars.has(char);
    }

    function toggleDiscard(char) {
        if (isDiscarded(char)) {
            gameData.value.discardChars.delete(char)
        } else {
            gameData.value.discardChars.add(char);
        }
    }
    
    function resetState() {
        gameData.value.finished = false;
        gameData.value.rows = [];
        gameData.value.discardChars = new Set();
        window.location.reload();
    }

    // replacer 
    const setToJson = (key, value) => {
        if (value instanceof Set) {
            return { __setType: 'Set', values: Array.from(value) };
        }
        return value;
    };
    
    // reviver
    const jsonToSet = (key, value) => {
        if (value && typeof value === 'object' && value.__setType === 'Set') {
            return new Set(value.values);
        }
        return value;
    };

    if (localStorage.getItem("gameData")) {
        gameData.value = JSON.parse(localStorage.getItem("gameData"), jsonToSet);
    } else {
        console.log('Cannot find previous lol, reset');
    }

    watch(gameData, (newData) => {
        localStorage.setItem("gameData", JSON.stringify(newData, setToJson));
    }, { deep: true });

    updateRows();

    return { 
        gameData,
        rowsToRender,
        target,
        numberOfTiles,
        maxGuesses,
        isDiscarded, 
        toggleDiscard,
        updateRows,
        resetState,
    }
}); 
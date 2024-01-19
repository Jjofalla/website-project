import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { targets } from '../assets/words';
import dayjs from 'dayjs';

function SeededPRNG(seed) {
    this.m = Math.pow(2, 31) - 1;
    this.a = 16807;
    this.seed = seed;
  
    this.next = function() {
        this.seed = (this.a * this.seed) % this.m;
        return ((this.seed - 1) / this.m);
    } 
};

function shuffleWordArray(seed) {
    const l = targets.length;
    const rng = new SeededPRNG(seed);
    for (let i = 0; i < l; i++) {
        let randomIdx = Math.ceil(rng.next() * l);
        let temp = targets[i];
        targets[i] = targets[randomIdx];
        targets[randomIdx] = temp;
    }
}

function retrieveLocalStorage(originDate, currentTargetIdx) {
    let prevGameData = null;
    
    // check existing local storage
    if (localStorage.getItem("gameData")) {
        prevGameData = JSON.parse(localStorage.getItem("gameData"));
    }

    // if the game is on the same day (and word), load in previous game data
    if (prevGameData !== null && currentTargetIdx === dayjs(prevGameData.dateLastPlayed).diff(originDate, 'days')) {
        prevGameData.dateLastPlayed = dayjs();
        return prevGameData;
    }

    return {
        rows: [],
        tileStyleMap: [Array(5).fill(0)],
        finished: false,
        dateLastPlayed: dayjs(),
    }
}

function getTileColours() {
    const cssCols = ['--tile-white', '--tile-lightgrey', '--tile-orange', '--tile-green'];
    const root = document.documentElement;
    return cssCols.map((x) => getComputedStyle(root).getPropertyValue(x));
}

export const getGameState = defineStore('gameState', () => {
    // get local time and calculate idx offset
    const originDate = dayjs('2024-01-01T00:00:00.000Z');
    const currentTargetIdx = dayjs().diff(originDate, 'days');

    const gameData = ref(retrieveLocalStorage(originDate, currentTargetIdx));
    const rowsToRender = ref(0);

    // shuffle words
    shuffleWordArray(43);
    updateRows();

    // assign constants
    const target = targets[currentTargetIdx % targets.length];
    const numberOfTiles = target.length;
    const maxGuesses = 12;

    function updateRows() {
        let numberOfRows = gameData.value.rows.length;
        if (!gameData.value.finished) {
            rowsToRender.value = numberOfRows + 1;
        } else {
            rowsToRender.value = numberOfRows;
        }
    }

    // tile styles
    const tileColours = getTileColours();

    function addStyleRow() {
        gameData.value.tileStyleMap.push(Array(numberOfTiles).fill(0));
    }

    function updateStyle(rowNumber, tileId) {
        let curr = gameData.value.tileStyleMap[rowNumber][tileId];
        gameData.value.tileStyleMap[rowNumber][tileId] = (curr + 1) % 4;
    }

    function readStyle(rowNumber, tileId) {
        let idx = gameData.value.tileStyleMap[rowNumber][tileId];
        if (typeof idx === 'undefined' || idx < 0 || idx > 3) {
            idx = 0;
        }
        return getStyle(idx);
    }

    function getStyle(idx) {
        return {
            'background-color': tileColours[idx],
            'color': idx === 0 ? 'rgb(110, 110, 110)' : 'white',
            'box-shadow': '0rem 0.25rem 0.25rem ' + (idx === 0 ? 'rgb(200,200,200)' : tileColours[idx] + '90'),
        }
    }

    function clearStyleRow(rowNumber) {
        for (let i = 0; i < numberOfTiles; i++) {
            gameData.value.tileStyleMap[rowNumber][i] = 0;
        }
    }

    function trackKeyboardTile(char) {
        let charStyles = [];
        gameData.value.rows.forEach((word, i) => {
            Array.from(word).forEach((ch, j) => {
                if (ch === char) {
                    charStyles.push(gameData.value.tileStyleMap[i][j]);
                }
            })
        });

        if (charStyles.length === 0) {
            return getStyle(0);
        } 

        return getStyle(Math.max(...charStyles));
    }

    watch(gameData, (newData) => {
        localStorage.setItem("gameData", JSON.stringify(newData));
    }, { deep: true });

    console.log(target);

    return { 
        gameData,
        rowsToRender,
        target,
        numberOfTiles,
        maxGuesses,
        tileColours,
        updateRows,
        addStyleRow,
        updateStyle,
        readStyle,
        clearStyleRow,
        trackKeyboardTile,
    }
}); 
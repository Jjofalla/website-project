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

// reviver
// const jsonToSet = (key, value) => {
//     if (value && typeof value === 'object' && value.__setType === 'Set') {
//         return new Set(value.values);
//     }
//     return value;
// };

// // replacer 
// const setToJson = (key, value) => {
//     if (value instanceof Set) {
//         return { __setType: 'Set', values: Array.from(value) };
//     }
//     return value;
// };


export const getGameState = defineStore('gameState', () => {
    const gameData = ref({
        rows: [],
        tileStyleMap: [Array(5).fill(0)],
        finished: false,
        dateLastPlayed: null,
    });

    // get local time and calculate idx offset
    const originDate = dayjs('2024-01-01T00:00:00.000Z');
    const currentDate = dayjs();
    const currentTargetIdx = currentDate.diff(originDate, 'days');
    let prevGameData = null;
    let prevDate = gameData.value.dateLastPlayed;
    
    // check existing local storage
    if (localStorage.getItem("gameData")) {
        prevGameData = JSON.parse(localStorage.getItem("gameData"));
        prevDate = prevGameData.dateLastPlayed;
    }

    // if the game is on the same day (and word), load in previous game data
    if (prevDate !== null && currentTargetIdx === dayjs(prevDate).diff(originDate, 'days')) {
        console.log('Previous Game Data Found! Same Day');
        gameData.value = prevGameData;
    }

    // set previous date
    gameData.value.dateLastPlayed = currentDate;

    // shuffle words
    shuffleWordArray(43);
    
    // assign constants
    const rowsToRender = ref(0);
    const target = targets[currentTargetIdx % targets.length];
    const numberOfTiles = target.length;
    const maxGuesses = 12;

    function updateRows() {
        let numberOfRows = gameData.value.rows.length;
        if (!gameData.value.finished) {
            // add row of styles
            rowsToRender.value = numberOfRows + 1;
        } else {
            rowsToRender.value = numberOfRows;
        }
    }

    // if (!gameData.value.tileStyleMap || gameData.value.tileStyleMap.length !== rowsToRender.value) {
    //     gameData.value.tileStyleMap = Array.from({length: rowsToRender.value}, () => Array(rowsToRender.value).fill(0));
    // }

    // tile styles
    const tileColours = ['white', '#d3d3d3', '#ffa500', '#6B8E23'];

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
            'box-shadow': '0px 4px 4px ' + (idx === 0 ? 'rgb(200,200,200)' : tileColours[idx] + '90'),
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

    updateRows();
    console.log(target);

    return { 
        gameData,
        rowsToRender,
        target,
        numberOfTiles,
        maxGuesses,
        updateRows,
        addStyleRow,
        updateStyle,
        readStyle,
        clearStyleRow,
        trackKeyboardTile,
    }
}); 
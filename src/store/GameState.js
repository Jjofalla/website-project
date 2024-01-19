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
const jsonToSet = (key, value) => {
    if (value && typeof value === 'object' && value.__setType === 'Set') {
        return new Set(value.values);
    }
    return value;
};

// replacer 
const setToJson = (key, value) => {
    if (value instanceof Set) {
        return { __setType: 'Set', values: Array.from(value) };
    }
    return value;
};


export const getGameState = defineStore('gameState', () => {
    const gameData = ref({
        rows: [],
        discardChars: new Set(),
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
        prevGameData = JSON.parse(localStorage.getItem("gameData"), jsonToSet);
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
    console.log(target);
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
    }
}); 
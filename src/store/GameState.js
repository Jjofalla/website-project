import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { targets } from '../assets/words';
import { tileColours } from './ManagerStyle';
import dayjs from 'dayjs';

const TIME = 120;

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
        status: 'IN_PROGRESS',
        dateLastPlayed: dayjs(),
        mmodeTime: TIME,
    }
}

export const getGameState = defineStore('gameState', () => {
    // get local time and calculate idx offset
    const originDate = dayjs('2024-01-01T00:00:00.000Z');
    let targetIdx = dayjs().diff(originDate, 'days');
    const currentTargetIdx = targetIdx >= 0 ? targetIdx : 0;

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
        if (gameData.value.status === 'IN_PROGRESS') {
            rowsToRender.value = numberOfRows + 1;
        } else {
            rowsToRender.value = numberOfRows;
        }
    }


    // mmode
    let timer;
    let timerActive = false;
    function startTimer() {
        if (!timerActive) {
            timer = setInterval(function() {
                gameData.value.mmodeTime--;
            }, 1000);
            timerActive = true;
        }
    }

    function endTimer() {
        clearInterval(timer);
        gameData.value.mmodeTime = TIME;
    }

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
        return tileColours.value.getStyle(idx);
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
            return tileColours.value.getStyle(0);
        } 

        return tileColours.value.getStyle(Math.max(...charStyles));
    }

    watch(gameData, (newData) => {
        localStorage.setItem("gameData", JSON.stringify(newData));
    }, { deep: true });

    return { 
        gameData,
        rowsToRender,
        target,
        numberOfTiles,
        maxGuesses,
        currentTargetIdx,
        startTimer,
        endTimer,
        updateRows,
        addStyleRow,
        updateStyle,
        readStyle,
        clearStyleRow,
        trackKeyboardTile,
    }
}); 
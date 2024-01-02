<script setup>
import { ref, watch } from 'vue';
import { getGameState } from '@/store/GameState';

const gameState = getGameState();
const gameData = gameState.gameData;
const target = gameState.target;
const numberOfTiles = gameState.numberOfTiles;

const props = defineProps({
    currentGuess: {
        type: String,
    }
});

const hints = ref(calculateHints(props.currentGuess));
const blanks = ref(getBlankHints());

watch(() => props.currentGuess, newGuess => {
    // update hint tiles
    hints.value = calculateHints(newGuess);
    blanks.value = getBlankHints();
    gameData.rows.push(newGuess);

    // user gets it completely wrong (idiot)
    if (blanks.value === numberOfTiles) {
        Array.from(newGuess).forEach(ch => {
            gameData.discardChars.add(ch);
        });
    }

    // user guessed correct word
    if (hints.value[0] === numberOfTiles || gameState.rowsToRender >= gameState.maxGuesses) {
        gameData.finished = true;
    } 
    // update store
    gameState.updateRows();

});

function calculateHints(newGuess) {
    let near = 0, correct = 0;
    const uniqueChars = new Set(newGuess);

    for (const ch of uniqueChars) {
        near += Math.min(countOccurrences(ch, newGuess), countOccurrences(ch, target));

        for (let i = 0; i < newGuess.length; i++) {
            if (ch === newGuess[i] && ch === target[i]) {
                near -= 1;
                correct += 1;
            }
        }
    }
    return [correct, near];
}

function countOccurrences(ch, str) {
    return str.split(ch).length - 1;
}

function getBlankHints() {
    return numberOfTiles - (hints.value[0] + hints.value[1]);
}

</script>

<template>
    <div class="hints">
        <div 
            class="hint correct"
            v-for="i in hints[0]" 
            :key="i">
        </div>
        <div 
            class="hint near"
            v-for="i in hints[1]"
            :key="i">
        </div>
        <div
            class="hint"
            v-for="i in blanks"
            :key="i">
        </div>
    </div>
</template>

<style scoped>
    .hints {
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }

    .hint {
        box-sizing: border-box;
        border-radius: 2px;
        border: 1px solid black;
        height: 45px;
        width: 45px;
    }

    .correct {
        background-color: green;
    }

    .near {
        background-color: orange;
    }

</style>
<script setup>
import { ref, watch } from 'vue';
import { getGameState } from '@/store/GameState';
import { getStatsStore } from '@/store/UserStats';

const stats = getStatsStore().stats;
const gameState = getGameState();
const gameData = gameState.gameData;
const target = gameState.target;
const numberOfTiles = gameState.numberOfTiles;

const emit = defineEmits(['game-finished'])
const props = defineProps({
    currentGuess: {
        type: String,
    }
});

const hintColours = ['#6B8E23', 'orange', 'lightgray'];
const hints = ref(props.currentGuess === '     ' ? [0, 0, 0] : calculateHints(props.currentGuess));

watch(() => props.currentGuess, newGuess => {
    // update hint tiles
    const rows = gameState.rowsToRender;
    hints.value = calculateHints(newGuess);
    gameData.rows.push(newGuess);

    const isCorrectGuess = hints.value[0] === numberOfTiles;
    const isMaxGuessesReached = rows >= gameState.maxGuesses;

    if (isCorrectGuess || isMaxGuessesReached) {
        stats.totalPlayed++;
        gameData.finished = true;
        emit('game-finished');
    }

    if (isCorrectGuess) {
        stats.guessDistribution[rows]++;
        getStatsStore().calculateAvg();
    }

    gameState.addStyleRow();

    // update store after hint animation reveal
    setTimeout(() => {
        gameState.updateRows();
    }, 800);

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
    return [correct, near + correct, numberOfTiles];
}

function countOccurrences(ch, str) {
    return str.split(ch).length - 1;
}

function handleStyle(key) {
    if (props.currentGuess === '     ') {
        return {backgroundColor: 'white', border: '1px solid lightgrey'}
    }
    for (let i = 0; i < hints.value.length; i++) {
        if (key <= hints.value[i]) {
            return {
                backgroundColor: hintColours[i],
                border: '1px solid ' + hintColours[i],
                transitionDelay: 0.1 * key + 's',
            };
        }
    }
}

</script>

<template>
    <div class="hints">
        <div
            class="hint"
            v-for="i in numberOfTiles"
            :key="i"
            :style="handleStyle(i)">
        </div>
    </div>
</template>
        
<style scoped>
    .hints {
        overflow: hidden;
        display: flex;
        min-width: fit-content;
        gap: 5px;
        align-items: center;
        justify-content: center;
    }

    .hint {
        border-radius: 5px;
        aspect-ratio: 1/1;
        width: 42px;
        min-width: 42px;
        transition: 0.4s ease;
    }

    .reveal-enter-from {
        opacity: 0;
    }

    .reveal-enter-active {
        transition: all 0.5s ease;
    }

</style>
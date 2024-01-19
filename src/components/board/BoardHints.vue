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

const blanks = ref(numberOfTiles);
const hints = ref(calculateHints(props.currentGuess));

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

    // update store after hint animation reveal
    setTimeout(() => {
        gameState.updateRows();
    }, 800);

});

function calculateHints(newGuess) {
    if (newGuess === '     ') {
        return [0, 0, 0];
    }

    blanks.value = 0;
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
    for (let i = 0; i < hints.value.length; i++) {
        if (key <= hints.value[i]) {
            const delay = 0.2 * key;
            return hintStyles(hintColours[i], delay);
        }
    }
}

const hintColours = ['#6B8E23', 'orange', 'lightgray']
const hintStyles = (colour, delay) => {
    return {
        backgroundColor: colour,
        border: '1px solid ' + colour,
        transitionDelay: delay,
    }
}

const beforeEnter = (el) => {
    const delayIndex = el.getAttribute('delay-index');
    el.style.transitionDelay = delayIndex * 0.1 + 's';
}

</script>

<template>
    <div class="hints">
        <TransitionGroup name="reveal" @before-enter="beforeEnter">
            <div 
                class="hint"
                v-for="i in hints[2]" 
                :key="i"
                :delay-index="i"
                :style="handleStyle(i)">
            </div>
        </TransitionGroup>
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
        min-width: fit-content;
        gap: 5px;
        align-items: center;
        justify-content: center;
    }

    .hint {
        box-sizing: border-box;
        border-radius: 5px;
        border: 1.5px solid lightgrey;
        aspect-ratio: 1/1;
        width: 42px;
        min-width: 42px;
    }

    .reveal-enter-from {
        opacity: 0;
    }

    .reveal-enter-active {
        transition: all 0.5s ease;
    }

</style>
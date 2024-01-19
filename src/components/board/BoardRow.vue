<script setup>
import { ref, watch } from 'vue';
import BoardTiles from './BoardTiles.vue';
import BoardHints from './BoardHints.vue';
import { getGameState } from '@/store/GameState';

const map = getGameState().gameData.tileStyleMap;

const emit = defineEmits(['on-alert', 'game-finished', 'animate-table']);
const props = defineProps({
    rowNumber: {
        type: Number
    },
    currentGuess: {
        type: String,
    },
    isActive: {
        type: Boolean,
    }
});

const guess = ref(props.currentGuess);
const showClearButton = ref(checkEmptyRow(map[props.rowNumber - 1]));

watch(map[props.rowNumber - 1], (newArr) => {
    showClearButton.value = checkEmptyRow(newArr);
});

function handleClick(rowNumber) {
    getGameState().clearStyleRow(rowNumber);
}

function checkEmptyRow(arr) {
    if (arr.some(x => x !== 0)) {
        return true;
    } 
    return false;
}

function handleEnter(word) {
    guess.value = word;
}

function onAlert(msg) {
    emit('on-alert', msg);
}

if (props.rowNumber <= 6) {
    emit('animate-table', 'height', 4 + (5.2 * props.rowNumber) + 'rem');
} 

if (props.rowNumber === 7) {
    emit('animate-table', 'width', '100%');
} 


</script>

<template>
    <div class="button-row">
        <div class="placeholder">
            <Transition name="show-button">
                <button 
                    v-show="!getGameState().gameData.finished && showClearButton" 
                    @click="handleClick(rowNumber - 1)" 
                    class="button">
                        <font-awesome-icon icon="fa-solid fa-eraser" size="xl"/>
                </button>
            </Transition>
        </div>
            
        <div class="row">
            <BoardTiles
                :rowNumber="rowNumber"
                :currentGuess="guess"
                :isActive="isActive"
                @on-enter="handleEnter"
                @on-alert="onAlert"
            />
            <BoardHints 
                :currentGuess="guess"
                @game-finished="$emit('game-finished')"
            />
        </div>
    </div>
</template>

<style scoped>

    .button-row {
        display: flex;
        margin-left: -1.5rem;
        align-items: center;
    }

    .placeholder {
        height: inherit;
        width: 3.43rem;
    }

    .row {
        display: flex;
        height: max-content;
        max-width: fit-content;
        gap: 2.5rem;
        align-items: center;
        justify-content: space-evenly;
        padding: 0.3rem 2rem 0.3rem 0;
    }

    .button {
        border: none;
        background-color: white;
        color: var(--text-light);  
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .button:hover {
        color: grey;
    }

    .show-button-enter-from,
    .show-button-leave-to {
        opacity: 0;
        transform: translateX(0.25rem);
    }

    .show-button-enter-active,
    .show-button-leave-active {
        transition: all 0.3s ease-in;
    }

    
</style>
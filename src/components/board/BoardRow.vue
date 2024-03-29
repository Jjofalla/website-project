<script setup>
import { ref, watch } from 'vue';
import BoardTiles from './BoardTiles.vue';
import BoardHints from './BoardHints.vue';
import { getGameState } from '@/store/GameState';

const map = getGameState().gameData.tileStyleMap;

defineEmits(['game-finished']);
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

</script>

<template>
    <div class="parent-row">
        <div class="placeholder">
            <Transition name="show-button">
                <button 
                    v-show="getGameState().gameData.status === 'IN_PROGRESS' && showClearButton" 
                    @click="handleClick(rowNumber - 1)" 
                    tabindex="-1"
                    class="button">
                        <font-awesome-icon icon="fa-solid fa-eraser"/>
                </button>
            </Transition>
        </div>
            
        <div class="row">
            <BoardTiles
                :rowNumber="rowNumber"
                :currentGuess="guess"
                :isActive="isActive"
                @on-enter="handleEnter"
            />
            <BoardHints 
                :currentGuess="guess"
                @game-finished="$emit('game-finished')"
            />
        </div>
    </div>
</template>

<style scoped>
    .parent-row {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-left: -3rem;
    }

    .placeholder {
        display: flex;
        width: 3rem;
    }

    .row {
        display: flex;
        gap: 2.5rem;
        align-items: center;
        justify-content: space-evenly;
        padding: 0.2rem 0;
    }

    .button {
        border: none;
        height: min-content;
        font-size: 1.5rem;
        background-color: transparent;
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

    @media only screen and (max-width: 850px) {
        .row {
            gap: 2.0rem;
        }
    }

    @media only screen and (max-width: 450px) {
        .row {
            gap: 1rem;
        }
        .parent-row {
            margin-left: -3.5rem;
        }

        .placeholder {
            width: 3.5rem;
        }

        .button {
            font-size: 1.2rem;
        }
    }

    
</style>
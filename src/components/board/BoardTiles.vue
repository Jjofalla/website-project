<script setup>
/**
 * 
 */
import BoardTile from './BoardTile.vue';
import { ref } from 'vue';
import { getGameState } from '@/store/GameState';
import { allowableGuesses } from '@/assets/words';

const numberOfTiles = getGameState().numberOfTiles;
const emit = defineEmits(['on-enter', 'on-click', 'on-alert']);
const props = defineProps({
    rowNumber: {
        type: Number,
    },
    currentGuess: {
        type: String,
    },
    isActive: {
        type: Boolean,
    }
});

const chars = ref(Array.from(props.currentGuess));
const targetIdx = ref(0);
const handled = ref(new Set());

function onKeyDown(key, tileId) {
    if (handled.value.has(key)) {
        return;
    }
    handled.value.add(key);

    // check for input of alphabet character
    if (/^[a-zA-Z]$/.test(key)) {
        chars.value[tileId] = key;
        shiftRight();
    
    } else if (key === 'Backspace' || key === 'Delete') {
        if (chars.value[tileId] === ' ') {
            shiftLeft();
        }
        chars.value[tileId] = ' ';

    } else if (key === 'Enter') {
        handleEnter(chars.value);
    
    } else if (key === 'Tab' || key === 'ArrowRight') {
        shiftRight();

    } else if (key === 'ArrowLeft') {
        shiftLeft();
    }
}

function shiftRight() {
    if (targetIdx.value >= numberOfTiles - 1) {
        return;
    }
    targetIdx.value++;
}

function shiftLeft() {
    targetIdx.value = targetIdx.value <= 0 ? targetIdx.value : targetIdx.value - 1; 
}

function onFocus(tileId) {
    targetIdx.value = tileId;
}

function onKeyUp(key) {
    handled.value.delete(key);
}

function handleEnter(chars) {
    // check that word is valid
    if (chars.some(x => x === ' ')) {
        emit('on-alert', 'Not Enough Letters');
        return;
    } 

    const word = chars.join('').toLowerCase();
    if (!isValidWord(word)) {
        emit('on-alert', 'Not in Wordlist');
        return;
    }    

    emit('on-enter', word)
}

function isValidWord(word) {
    const numberOfWords = allowableGuesses.length;
    let left = 0, right = numberOfWords - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if (allowableGuesses[mid] === word) {
            return true;
        }

        if (allowableGuesses[mid] < word) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

</script>

<template>
    <div class="tiles">
        <BoardTile
            v-for="tile in numberOfTiles"
            :key="tile"
            :rowNumber="rowNumber"
            :tileId="tile-1"
            :char="chars[tile-1]" 
            :focused="targetIdx === tile-1"
            :isActive="isActive"
            @on-key-down="onKeyDown"
            @on-key-up="onKeyUp"
            @on-focus="onFocus"
        />
    </div>
</template>

<style scoped>
    .tiles {
        display: flex;
        height: 73px;
        align-items: center;
        justify-content: center;
        user-select: none;
        gap: 8px;
    }
</style>

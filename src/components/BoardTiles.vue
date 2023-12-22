<script setup>
/**
 * 
 */
import BoardTile from './BoardTile.vue';
import { ref } from 'vue';
import { getGameState } from '@/store/GameState';
const numberOfTiles = getGameState().numberOfTiles;

const emit = defineEmits(['on-enter', 'on-click']);

const props = defineProps({
    currentGuess: {
        type: String,
    },
    isActive: {
        type: Boolean,
    }
});

const chars = ref(createCharArray(props.currentGuess));
const targetIdx = ref(0);
const handled = ref(new Set());

function createCharArray(guess) {
    return guess ? Array.from(guess) : Array.from({length: numberOfTiles}, () => '');
}

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
        if (chars.value[tileId] === '') {
            shiftLeft();
        }
        chars.value[tileId] = '';

    } else if (key === 'Enter') {
        handleEnter(chars.value);
    
    } else if (key === 'Tab' || key === 'ArrowRight') {
        shiftRight();

    } else if (key === 'ArrowLeft') {
        shiftLeft();
    }
}

function shiftRight() {
    if (targetIdx.value < numberOfTiles - 1) {
        targetIdx.value++;
    }
}

function shiftLeft() {
    if (targetIdx.value > 0) {
        targetIdx.value--;
    }
}

function onFocus(tileId) {
    targetIdx.value = tileId;
}

function onKeyUp(key) {
    handled.value.delete(key);
}

function handleEnter(chars) {
    if (!chars.some(x => x === '')) {
        emit('on-enter', chars.join(''))
    } 
}

</script>

<template>
    <div class="tiles">
        <BoardTile
            v-for="tile in numberOfTiles"
            :key="tile"
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
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        user-select: none;
        gap: 12px;
    }
    
</style>
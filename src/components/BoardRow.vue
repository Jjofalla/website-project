<script setup>
/**
 * 
 */
import BoardTile from './BoardTile.vue';
import { ref } from 'vue';

const numberOfTiles = 4;
const chars = ref(['', '', '', '']);
const targetIdx = ref(0);
const handled = ref(new Set());

const emit = defineEmits(['on-enter']);

function onKeyDown(event, tileId) {
    event.preventDefault();

    if (handled.value.has(event.key)) {
        return;
    }
    handled.value.add(event.key);

    // check for input of alphabet character
    if (/^[a-zA-Z]$/.test(event.key)) {
        chars.value[tileId] = event.key;
        shiftRight();
    
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
        if (chars.value[tileId] === '') {
            shiftLeft();
        }
        chars.value[tileId] = '';

    } else if (event.key === 'Enter') {
        handleEnter(chars.value);
    
    } else if (event.key === 'Tab' || event.key === 'ArrowRight') {
        shiftRight();

    } else if (event.key === 'ArrowLeft') {
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

function onKeyUp(event) {
    handled.value.delete(event.key);
}

function handleEnter(chars) {
    if (chars.some(x => x === '')) {
        console.log('Invalid')
    } else {
        emit('on-enter', chars.join(''))
    }
}


</script>

<template>
    <div class="row">
        <BoardTile
            v-for="tile in numberOfTiles"
            :key="tile"
            :tileId="tile-1"
            :char="chars[tile-1]" 
            :focused="targetIdx === tile-1"
            @on-key-down="onKeyDown"
            @on-focus="onFocus"
            @on-key-up="onKeyUp"
        />
    </div>
</template>

<style scoped>
    .row {
        user-select: none;
        width: 45%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }
    
</style>
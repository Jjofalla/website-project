<script setup>
/**
 * 
 */
import Tile from './NewBoardTile.vue';
import { ref } from 'vue';

const numberOfTiles = 4;
const chars = ref(['', '', '', '']);
const targetIdx = ref(0);
const handled = ref(new Set());

function onKeyDown(event, tileId) {
    event.preventDefault();
    if (handled.value.has(event.key)) {
        return;
    }
    handled.value.add(event.key);

    if (/^[a-zA-Z]$/.test(event.key)) {
        if (targetIdx.value < numberOfTiles - 1) {
            targetIdx.value++;
        }
        chars.value[tileId] = event.key;
        
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
        if (chars.value[tileId] == '' && targetIdx.value > 0) {
            --targetIdx.value;
        }
        chars.value[tileId] = '';

    } else if (event.key === 'Enter') {
        handleSubmit()

    } else if (event.key === 'Tab' || event.key === 'ArrowRight') {
        targetIdx.value++;

    } else if (event.key === 'ArrowLeft') {
        targetIdx.value--;
    }
}

function onFocus(tileId) {
    targetIdx.value = tileId;
}

function onKeyUp(event) {
    handled.value.delete(event.key);
}

function handleSubmit() {
    if (chars.value.some(x => x === '')) {
        console.log('Invalid')
    } else {
        console.log(chars.value.join(''))
    }
}

</script>

<template>
    <div class="row">
        <Tile
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
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        /* border: 2px solid red; */
    }
    
</style>
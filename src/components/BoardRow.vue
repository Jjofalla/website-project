<script setup>
/**
 * 
 */

import { ref } from 'vue';
import Tile from './BoardTile.vue';
const number_of_tiles = 4;
const target_idx = ref(0);
const chars = ref(['', '', '', ''])
const handled = ref(new Set());

function handleKeyDown(event) {
    if (handled.value.has(event.key)) {
        return;
    }
    handled.value.add(event.key);

    if (target_idx.value < number_of_tiles && /^[a-zA-Z]$/.test(event.key)) {
        chars.value[target_idx.value] = event.key;
        target_idx.value++;

    } else if (event.key === 'Delete' || event.key === 'Backspace') {
        if (target_idx.value > 0) {
            target_idx.value--;
            chars.value[target_idx.value] = '';
        }

    } else if (event.key === 'Enter') {
        ;
    }

}

function handleKeyUp(event) {
    handled.value.delete(event.key);
}

// function add_char(event) {
//     if (target_idx.value < number_of_tiles && /^[a-zA-Z]$/.test(event.key)) {
//         chars.value[target_idx.value++] = event.key;
//     }
// };

// function remove_char() {
//     if (target_idx.value > 0) {
//         chars.value[--target_idx.value] = '';
//     }
// };

const is_highlight = (key) => key === target_idx.value;

</script>

<template>
    <div class="row" tabindex="0" @keydown="handleKeyDown($event)" @keyup="handleKeyUp($event)">
        <Tile v-for="tile in number_of_tiles" :key="tile" :highlight="is_highlight(tile - 1)" :char="chars[tile - 1]"/>
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
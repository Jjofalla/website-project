<script setup>
import { ref } from 'vue';
import BoardRow from './BoardRow.vue';
import BoardGuess from './BoardGuess.vue';

const numberOfRows = ref(1);
const numberOfTiles = 4;
const word = ref('')
const target = "pole";

function handleEnter(guess) {
    word.value = guess;
}

function notifyUser() {
    console.log("wow, your not as sumb as your look")
}

</script>

<template>
    <div class="table">
        <div class="row" v-for="row in numberOfRows" :key="row">
            <BoardRow
                @on-enter="handleEnter"
            />
            <BoardGuess
                :guess="word"
                :target="target"
                :numberOfTiles="numberOfTiles"
                @reveal-output="notifyUser"
            />
        </div>
    </div>
</template>

<style scoped>
    .table {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        border: 3px solid black;
    }
    .row {
        display: flex;
        padding: 2em;
        width: 1024px;
        /* border: 5px solid green; */
    }
</style>

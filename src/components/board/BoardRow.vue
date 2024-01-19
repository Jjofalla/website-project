<script setup>
import { ref } from 'vue';
import BoardTiles from './BoardTiles.vue';
import BoardHints from './BoardHints.vue';

const emit = defineEmits(['on-alert', 'game-finished']);
const props = defineProps({
    currentGuess: {
        type: String,
    },
    isActive: {
        type: Boolean,
    }
});

const guess = ref(props.currentGuess);

function handleEnter(word) {
    guess.value = word;
}

function onAlert(msg) {
    emit('on-alert', msg);
}

</script>

<template>
    <div class="row">
        <BoardTiles
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
</template>

<style scoped>
    .row {
        margin: auto;
        padding: 5px 30px 5px 30px;
        display: flex;
        flex-direction: row;
        height: max-content;
        max-width: fit-content;
        gap: 40px;
        align-items: center;
        justify-content: space-evenly;
    }
</style>
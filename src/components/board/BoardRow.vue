<script setup>
import { ref } from 'vue';
import BoardTiles from './BoardTiles.vue';
import BoardHints from './BoardHints.vue';

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

</script>

<template>
    <div class="row">
        <BoardTiles
            :currentGuess="guess"
            :isActive="isActive"
            @on-enter="handleEnter"
        />
        <BoardHints 
            :currentGuess="guess"
        />
    </div>
</template>

<style scoped>
    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }
</style>
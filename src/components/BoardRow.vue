<script setup>
import { ref } from 'vue';
import BoardTiles from './BoardTiles.vue';
import BoardHints from './BoardHints.vue';

defineProps({
    numberOfTiles: {
        type: Number,
    },
    target: {
        type: String,
    },
    isActive: {
        type: Boolean,
    }
});

const guess = ref('')

function handleEnter(word) {
    guess.value = word;
}

</script>

<template>
    <div class="row">
        <BoardTiles
            :isActive="isActive"
            :numberOfTiles="numberOfTiles"
            @on-enter="handleEnter"
        />
        <BoardHints 
            :guess="guess"
            :target="target"
            :numberOfTiles="numberOfTiles"
            @reveal-output="$emit('reveal-output')"
            @add-new-row="$emit('add-new-row')"
        />
    </div>
</template>

<style scoped>
    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }
</style>
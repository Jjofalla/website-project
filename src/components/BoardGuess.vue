<script setup>
import { ref, watch } from 'vue';

const hints = ref([0, 0])
const blanks = ref(4);

const props = defineProps({
    guess: {
        type: String,
        default: '',
    },
    target: {
        type: String,
        required: true
    },
    numberOfTiles: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['reveal-output'])

watch(() => props.guess, newGuess => {
    let res = calculateHints(newGuess);
    // update hint tiles
    hints.value = res;
    blanks.value = getBlankHints();

    if (hints.value[0] === props.numberOfTiles) {
        emit('reveal-output');
    } 
});

function calculateHints(newGuess) {
    let near = 0, correct = 0;
    const uniqueChars = new Set(newGuess);

    for (const ch of uniqueChars) {
        near += Math.min(countOccurrences(ch, newGuess), countOccurrences(ch, props.target));

        for (let i = 0; i < newGuess.length; i++) {
            if (ch === newGuess[i] && ch === props.target[i]) {
                near -= 1;
                correct += 1;
            }
        }
    }
    return [correct, near];
}

function countOccurrences(ch, str) {
    return str.split(ch).length - 1;
}

function getBlankHints() {
    return 4 - (hints.value[0] + hints.value[1]);
}

</script>

<template>
    <div class="row">
        <div 
            class="hint correct"
            v-for="i in hints[0]" 
            :key="i">
        </div>
        <div 
            class="hint near"
            v-for="i in hints[1]"
            :key="i">
        </div>
        <div
            class="hint"
            v-for="i in blanks"
            :key="i">
        </div>
    </div>
</template>

<style scoped>
    .row {
        overflow: hidden;
        width: 45%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }

    .hint {
        box-sizing: border-box;
        border-radius: 2px;
        border: 1px solid black;
        height: 50px;
        width: 50px;
    }

    .correct {
        background-color: green;
    }

    .near {
        background-color: orange;
    }

</style>
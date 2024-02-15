<script setup>
import { getGameState } from '@/store/GameState';
import { ref, watch } from 'vue';

const remainingGuesses = ref(12 - getGameState().gameData.rows.length);
const effort = [['VERY EASILY!', 10], ['AMAZING JOB!', 8], ['GREAT JOB!', 5], ['GOOD JOB!', 1], ['CLOSE ONE!', 0]];

function getEffort(remainingGuesses) {
    for (let i = 0; i < effort.length; i++) {
        if (remainingGuesses >= effort[i][1]) {
            return 'YOU SOLVED IT, ' + effort[i][0];
        }
    }
}

watch(() => getGameState().gameData.rows.length, (newTotal) => {
    remainingGuesses.value = 12 - newTotal;
});

</script>

<template>
    <Transition mode="out-in" name="flip">
        <div class="countdown" v-if="!getGameState().gameData.finished">
            <Transition mode="out-in" name="flip">
                <div class="number" 
                    :key="remainingGuesses"
                    :style="{'text-align': remainingGuesses < 10 ? 'center' : 'right'}"
                >
                {{ remainingGuesses }}
                </div>
            </Transition>
        {{ (remainingGuesses === 1 ? 'GUESS' : 'GUESSES') + ' REMAINING' }} 
        </div>
        <div v-else-if="remainingGuesses <= 0 && getGameState().gameData.rows[11] !== getGameState().target" class="countdown">
            BAD LUCK, IT IS HARDLE!
        </div>
        <div v-else class="countdown grats" :style="{'color': 'transparent'}">
            <div class="msg">{{ getEffort(remainingGuesses) }}</div>
            PLACEHOLDER
        </div>
    </Transition>
</template>

<style scoped>
@import url('../../assets/main.css');
.countdown {
    position: relative;
    width: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    gap: 1rem;
    font-size: 1.7rem;
    letter-spacing: 0.4rem;
    font-weight: lighter;
    font-family: 'Trebuchet MS', sans-serif;
    color: var(--text-light);
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
}

.number {
    display: flex;
    flex-direction: row;
    color: var(--text-dark);
}

.flip-enter-before {
    transition-delay: 1s;
}

.flip-enter-from {
    opacity: 0;
    transform: translateY(-1.2rem);
}

.flip-leave-to {
    opacity: 0;
    transform: translateY(1.2rem);
}

.flip-enter-active, 
.flip-leave-active {
    transition: all 0.4s ease;
}

.grats {
    background: linear-gradient(
        to right, 
        var(--tile-green) 0%, var(--tile-green) 25%, 
        var(--tile-orange) 25%, var(--tile-orange) 50%,
        var(--tile-lightgrey) 50%, var(--tile-lightgrey) 75%,
        var(--tile-white), var(--tile-white) 100%);
    background-size: 700%;
    background-position: right;
    animation: extend 2s ease-out 0.3s 1 normal forwards, expand 1s ease 0.8s;
}

.msg {
    background-color: white;
    font-weight: bolder;
    color: black;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 105%;
    width: 103%;
    mix-blend-mode: screen;
}

@keyframes extend {
    0% {
        background-position: right;
    }
    100% {
        background-position: left;
    }
}

@keyframes expand {
    0% {
        transform: scale(1);
    }
    40%, 60% {
        transform: scale(1.3);
    }
    100% {
        transform: scale(1);
    }
}

@media only screen and (max-width: 850px) {
    .countdown {
        max-height: 53vh;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
}

@media only screen and (max-width: 450px) {
    .countdown {
        font-size: 1.5rem;
    }
}

</style>
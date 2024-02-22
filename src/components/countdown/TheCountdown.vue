<script setup>
import { ref, watch } from 'vue';
import { getGameState } from '@/store/GameState';
import { getSettingsManager } from '@/store/ManagerSettings';
import CounterTime from './CounterTime.vue';
import CounterGuess from './CounterGuess.vue';

const sm = getSettingsManager();
const gs = getGameState();
const target = gs.target;
const remainingGuesses = ref(12 - gs.gameData.rows.length);
const effort = [['VERY EASILY!', 10], ['AMAZING JOB!', 8], ['GREAT JOB!', 5], ['GOOD JOB!', 1], ['CLOSE ONE!', 0]];

function getEffort(remainingGuesses) {
    for (let i = 0; i < effort.length; i++) {
        if (remainingGuesses >= effort[i][1]) {
            return 'YOU SOLVED IT, ' + effort[i][0];
        }
    }
}

watch(() => gs.gameData.rows.length, (newTotal) => {
    remainingGuesses.value = 12 - newTotal;
});

</script>

<template>
    <div class="countdown-wrapper">
        <Transition mode="out-in" name="flip">
            <div class="countdown c" v-if="!gs.gameData.finished">
                <CounterGuess :remaining="remainingGuesses" :enable-timer="sm.settings['mmode'][0]"/>
                <CounterTime :enable-timer="sm.settings['mmode'][0]" @game-finished="$emit('game-finished')"/>
            </div>
            <div 
                v-else-if="gs.gameData.rows.slice(-1)[0] === target" 
                class="countdown grats" 
                :style="{'color': 'transparent'}"
            >
                    <div class="msg">{{ getEffort(remainingGuesses) }}</div>
                PLACEHOLDER
            </div>
            <div v-else class="countdown">
                BAD LUCK, THE WORD IS
                <div class="target">{{ target.toUpperCase() }}</div>
            </div>
            
        </Transition>
    </div>
</template>

<style>
@import url('../../assets/main.css');

.countdown-wrapper {
    position: relative;
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.countdown {
    width: 40rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    cursor: default;
    font-size: 1.7rem;
    letter-spacing: 0.4rem;
    color: var(--text-light);
    transition: width 0.4s ease;
}

.c {
    position: relative;
    width: 32rem;
    min-width: 32rem;
}

.number {
    display: flex;
    flex-direction: row;
    color: var(--text-dark);
}

.target {
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
    transition: transform 0.4s ease, opacity 0.4s ease;
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
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
}

@media only screen and (max-width: 450px) {
    .countdown {
        font-size: 1.4rem;
        letter-spacing: 0.2rem;
    }

    .c {
        min-width: 23rem;
        width: 23rem;
    }
}

</style>
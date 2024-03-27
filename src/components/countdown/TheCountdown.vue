<script setup>
import { ref, watch } from 'vue';
import { getGameState } from '@/store/GameState';
import { getSettingsManager } from '@/store/ManagerSettings';
import CounterTime from './CounterTime.vue';
import CounterGuess from './CounterGuess.vue';

const gs = getGameState();
const sm = getSettingsManager();
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
    <div class="countdown-wrapper" :style="{'color': sm.settings.dark ? 'var(--text-dark)' : 'var(--text-light)'}">
        <Transition mode="out-in" name="flip">
            <div class="countdown c" v-if="gs.gameData.status === 'IN_PROGRESS'">
                <CounterGuess :remaining="remainingGuesses" :enable-timer="sm.settings.mmode"/>
                <CounterTime :enable-timer="sm.settings.mmode" @game-finished="$emit('game-finished')"/>
            </div>
            <div 
                v-else-if="gs.gameData.status === 'WON'" 
                class="countdown" 
                :class="sm.settings.dark ? 'grats-dark': 'grats-light'"
                :style="{'color': 'transparent'}"
            >
                    <div class="msg" :class="sm.settings.dark ? 'msg-dark' : 'msg-light'">{{ getEffort(remainingGuesses) }}</div>
                PLACEHOLDER
            </div>
            <div v-else class="countdown">
                BAD LUCK, THE WORD IS
                <div class="target" :style="{'color': sm.settings.dark ? 'var(--text-light)' : 'var(--text-dark)'}">{{ target.toUpperCase() }}</div>
            </div>
            
        </Transition>
    </div>
</template>

<style>
@import url('../../assets/main.css');

.countdown-wrapper {
    position: relative;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.countdown {
    width: 40rem;
    min-width: 40rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    cursor: default;
    font-size: 1.7rem;
    letter-spacing: 0.4rem;
    transition: width 0.4s ease;
}

.c {
    position: relative;
    width: 31.5rem;
    min-width: 31.5rem;
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

.grats-light {
    background: linear-gradient(
        to right, 
        var(--tile-green) 0%, var(--tile-green) 25%, 
        var(--tile-orange) 25%, var(--tile-orange) 50%,
        var(--tile-lightgrey) 50%, var(--tile-lightgrey) 75%,
        var(--tile-white) 75%, var(--tile-white) 100%);
    background-size: 700%;
    background-position: right;
    animation: extend 2s linear 0.3s 1 normal forwards, expand 1s ease 1.1s 1 normal forwards;
}

.grats-dark {
    background: linear-gradient(
        to right, 
        var(--tile-dark-green) 0%, var(--tile-dark-green) 25%, 
        var(--tile-dark-orange) 25%, var(--tile-dark-orange) 50%,
        var(--tile-dark-lightgrey) 50%, var(--tile-dark-lightgrey) 75%,
        #121212 75%, #121212 100%);
    background-size: 700%;
    background-position: right;
    animation: extend 2s linear 0.3s 1 normal forwards, expand 1s ease 1.1s 1 normal forwards;
}

.msg {
    transition: border 0.5s ease;
    font-weight: bolder;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
}

.msg-light {
    mix-blend-mode: screen;
    background-color: white;
    border: 3px solid white;
    color: black;
}

.msg-dark {
    mix-blend-mode: darken;
    background-color: #121212;
    border: 3px solid #121212;
    color: rgb(210,210,210);
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

@media only screen and (max-width: 450px) {
    .countdown-wrapper {
        margin-bottom: 0.9rem;
    }

    .countdown {
        width: 90vw;
        min-width: 90vw;
        font-size: 1.4rem;
        letter-spacing: 0.2rem;
    }

    .c {
        min-width: 24.5rem;
        width: 24.5rem;
    }
}

</style>
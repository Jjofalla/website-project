<script setup>
import { getGameState } from '@/store/GameState';
import { ref, watch } from 'vue';

const remainingGuesses = ref(12 - getGameState().gameData.rows.length);
const effort = [['VERY EASILY!', 10], ['FANTASTIC JOB!', 8], ['GREAT JOB!', 5], ['GOOD JOB!', 1], ['CLOSE ONE!', 0]];

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
.countdown {
    position: relative;
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    gap: 15px;
    font-size: 27px;
    letter-spacing: 5px;
    font-weight: lighter;
    font-family: 'Trebuchet MS', sans-serif;
    color: rgb(180,180,180);
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
}

.number {
    display: flex;
    flex-direction: row;
    color: rgb(110, 110, 110);
}

.flip-enter-before {
    transition-delay: 1s;
}

.flip-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.flip-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.flip-enter-active, 
.flip-leave-active {
    transition: all 0.4s ease;
}

.grats {
    background: linear-gradient(
        to right, 
        #6B8E23 0%, #6B8E23 25%, 
        orange 25%, orange 50%,
        rgb(180,180,180) 50%, rgba(180,180,180) 75%,
        white 75%, white 100%);
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
    height: 103%;
    width: 100%;
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

</style>
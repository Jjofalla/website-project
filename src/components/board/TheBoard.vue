<script setup>
import { ref } from 'vue';
import BoardRow from './BoardRow.vue';
import TheOverlay from '../header/TheOverlay.vue';
import TheCountdown from './TheCountdown.vue';
import TheKeyboard from '../keyboard/TheKeyboard.vue';
import { getOverlayManager } from '@/store/OverlayManager';
import { getGameState } from '@/store/GameState';
import { getStatsStore } from '@/store/UserStats';

const gameState = getGameState();
const gameData = gameState.gameData;
const om = getOverlayManager();

const showAlert = ref(false);
const message = ref("");
const alertTimer = ref();
const tableStyle = ref({'width': '715px', 'height': '80px'})

function getRow(row) {
    // zero-indexed to access array 
    return row - 1 < gameData.rows.length ? gameData.rows[row - 1] : '     ';
}

function determineActiveRow(row) {
    // last row is active for user input
    return !gameData.finished && row === gameState.rowsToRender;
}

function handleAlert(msg) {
    if (showAlert.value) {
        let alert = document.querySelector('.alert');
        clearTimeout(alertTimer.value);
        alert.classList.add('shake');
        alert.addEventListener('animationend', () => {
            alert.classList.remove('shake');
        }, { once: true });
    } else {
        showAlert.value = true;
    }
    alertTimer.value = resetAlert();
    message.value = msg;
}

function resetAlert() {
    return setTimeout(() => {
        showAlert.value = false;
    }, 2000);
}

function handleGameFinishEvent() {
    setTimeout(() => {
        if (!om.overlayEnabled) {
            om.toggleOverlay('stats');
        }
    }, 3200);
}

if (getStatsStore().stats.totalPlayed <= 0) {
    setTimeout(() => {
        om.toggleOverlay('tutorial');
    }, 100);
}
</script>

<template>
    <div id="board" @mousedown.prevent>

        <Transition name="alert">
            <div class="alert" v-show="showAlert">
                <h1>{{ message }}</h1>
            </div>
        </Transition>

        <Transition name="overlay">
            <TheOverlay v-show="om.overlayEnabled"/>
        </Transition>

        <div class="table" :style="tableStyle">
            <div class="rows fst" :style="{'margin-right': gameState.rowsToRender > 6 ? '10px' : 'auto'}">
                <TransitionGroup name="add-row">
                    <BoardRow 
                        v-for="row in Math.min(6, gameState.rowsToRender)" 
                        :key="row"
                        :rowNumber="row"
                        :currentGuess="getRow(row)"
                        :isActive="determineActiveRow(row)"
                        @on-alert="handleAlert"
                        @game-finished="handleGameFinishEvent"
                        @animate-table="(k, v) => tableStyle[k] = v"
                    />
                </TransitionGroup>
            </div>

            <template v-if="gameState.rowsToRender > 6">
                <div class="rows snd">
                    <TransitionGroup name="add-row">
                        <BoardRow 
                            v-for="row in Math.min(6, gameState.rowsToRender - 6)" 
                            :key="row"
                            :rowNumber="row + 6"
                            :currentGuess="getRow(row + 6)"
                            :isActive="determineActiveRow(row + 6)"
                            @on-alert="handleAlert"
                            @game-finished="handleGameFinishEvent"
                            @animate-table="(k, v) => tableStyle[k] = v"
                        />
                    </TransitionGroup>
                </div>
            </template>
        </div>
        <TheCountdown />
        <TheKeyboard />
    </div>
</template>

<style scoped>
    #board {
        position: absolute;
        height: 90vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .table {
        display: flex;
        flex-direction: row;
        transition: width 2s ease, height 0.4s ease;
        min-width: 715px;
        margin: 0 auto;
    }

    .rows {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        height: min-content;
        width: min-content;
        padding: 2em 0em 1.5em 0em;
    }

    .fst {
        margin-left: auto;
        margin-right: auto;
    }

    .snd {
        margin-left: 10px;
        margin-right: auto;
    }

    .alert {
        position: absolute;
        justify-content: center;
        height: max-content;
        top: -1%;
        padding: 10px 20px 10px 20px;
        background-color: darkslategray;
        border: 1px solid;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    .alert h1 {
        color: white;
        letter-spacing: 1px;
        font-size: 20px;
        font-family: 'Trebuchet MS', sans-serif;
    }

    .shake {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 100%;
        }
        100% {
            opacity: 0%;
        }
    }

    @keyframes shake {
        10%, 90% {
            transform: translate(-1px, 0);
        }
        
        20%, 80% {
            transform: translate(2px, 0);
        }

        30%, 50%, 70% {
            transform: translate(-4px, 0);
        }

        40%, 60% {
            transform: translate(4px, 0);
        }
    }

    .alert-enter-active {
        animation: fadeIn 0.1s ease;
    }

    .alert-leave-active {
        animation: fadeOut 0.2s ease;
    }

    .add-row-enter-from {
        transform: translateX(-15px);
        opacity: 0;
    }

    .add-row-enter-active {
        transition: all 0.5s ease-in;
    }
   
    .overlay-enter-active {
        animation: fadeIn 0.4s ease;
        background: rgba(0, 0, 0, .2)
    }

    .overlay-leave-active {
        animation: fadeOut 0.3s ease;
        background: rgba(0, 0, 0, 0)
    }

</style>
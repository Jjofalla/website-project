<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BoardRow from './BoardRow.vue';
import TheCountdown from './TheCountdown.vue';
import TheKeyboard from '../keyboard/TheKeyboard.vue';
import { getOverlayManager } from '@/store/OverlayManager';
import { getGameState } from '@/store/GameState';
import { getStatsStore } from '@/store/UserStats';

const gameState = getGameState();
const gameData = gameState.gameData;
const om = getOverlayManager();

const windowWidth = ref(window.innerWidth);
const onWidthChange = () => windowWidth.value = window.innerWidth;
onMounted(() => window.addEventListener('resize', onWidthChange));
onUnmounted(() => window.removeEventListener('resize', onWidthChange));

const showAlert = ref(false);
const message = ref("");
const alertTimer = ref();

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
    <div id="board">

        <Transition name="alert">
            <div class="alert" v-show="showAlert">
                <h1>{{ message }}</h1>
            </div>
        </Transition>

        <template v-if="windowWidth > 850">

            <div class="table" :style="{
                'display': 'flex',
                'margin': '0 auto',
                'transition': 'width 2s ease, height 0.4s ease',
                'height': Math.min(35, 5 + (5 * gameState.rowsToRender)) + 'rem',
                'width': gameState.rowsToRender > 6 ? '100vw' : '46vw'
            }">

                <div class="rows fst" :style="{'margin-right': gameState.rowsToRender > 6 ? '0.7rem' : 'auto'}">
                    <TransitionGroup name="add-row">
                        <BoardRow 
                            v-for="row in Math.min(6, gameState.rowsToRender)" 
                            :key="row"
                            :rowNumber="row"
                            :currentGuess="getRow(row)"
                            :isActive="determineActiveRow(row)"
                            @on-alert="handleAlert"
                            @game-finished="handleGameFinishEvent"
                        />
                    </TransitionGroup>
                </div>

                <div class="rows snd" v-if="gameState.rowsToRender > 6">
                    <TransitionGroup name="add-row">
                        <BoardRow 
                            v-for="row in Math.min(6, gameState.rowsToRender - 6)" 
                            :key="row"
                            :rowNumber="row + 6"
                            :currentGuess="getRow(row + 6)"
                            :isActive="determineActiveRow(row + 6)"
                            @on-alert="handleAlert"
                            @game-finished="handleGameFinishEvent"
                        />
                    </TransitionGroup>
                </div>
            </div>
        
        </template>

        <template v-else>
            <div class="table" :style="{
                'display': 'flex',
                'flex-direction': 'column',
                'transition-property': 'height',
                'transition-duration': '0.4s',
                'height': '40vh',
                'width': '100vw',
                'margin': '0 auto',
                'overflow-y': 'scroll',
                'overflow-x': 'hidden',
                'overscroll-behavior': 'contain',
            }">

                <div class="rows">
                    <TransitionGroup name="add-row">
                        <BoardRow 
                            v-for="row in gameState.rowsToRender" 
                            :key="row"
                            :rowNumber="row"
                            :currentGuess="getRow(row)"
                            :isActive="determineActiveRow(row)"
                            @on-alert="handleAlert"
                            @game-finished="handleGameFinishEvent"
                        />
                    </TransitionGroup>
                </div>
            </div>
        </template>
        
        <div id="footer">
            <TheCountdown />
            <TheKeyboard />
        </div>
    </div>
</template>

<style scoped>
    #board {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw; 
        padding-bottom: 2rem;   
        overflow-x: hidden;
    }

    .rows {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        height: min-content;
        width: min-content;
        padding: 1.5rem 0rem 1.5rem 0rem;
        margin: 0 auto;
        gap: 0.3rem;
    }

    .fst {
        margin-left: auto;
        margin-right: auto;
    }

    .snd {
        margin-left: 0.7rem;
        margin-right: auto;
    }

    .alert {
        position: fixed;
        justify-content: center;
        height: max-content;
        top: 10%;
        padding: 0.8rem 1.2rem 0.8rem 1.2rem;
        background-color: darkslategray;
        border: 1px solid darkslategray;
        border-radius: 0.3rem;
        box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    .alert h1 {
        color: white;
        letter-spacing: 1px;
        font-size: 1.2rem;
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
            transform: translate(0.125rem, 0);
        }

        30%, 50%, 70% {
            transform: translate(-0.25rem, 0);
        }

        40%, 60% {
            transform: translate(0.25rem, 0);
        }
    }

    .alert-enter-active {
        animation: fadeIn 0.1s ease;
    }

    .alert-leave-active {
        animation: fadeOut 0.2s ease;
    }

    .add-row-enter-from {
        transform: translateX(-1rem);
        opacity: 0;
    }

    .add-row-enter-active {
        transition: all 0.5s ease-in;
    }
   
    @media only screen and (max-width: 850px) {
        #board {
            padding-bottom: 0;
        }

        .table {
            align-items: center;
            flex-direction: column;
            transition-property: height;
            transition-duration: 0.4s;
            border: 1px solid;
            border-image-slice: 1;
            border-image-source: linear-gradient(to right, white, darkslategray, white);
            border-left: 0;
            border-right: 0;
            border-top: 0;
            overflow-x: hidden;
        }

        .rows {
            padding: 1rem 0;
        }

        #footer {
            display: flex;
            width: 100vw;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

</style>

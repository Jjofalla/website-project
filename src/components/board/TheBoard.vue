<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import BoardRow from './BoardRow.vue';
import TheCountdown from '../countdown/TheCountdown.vue';
import TheKeyboard from '../keyboard/TheKeyboard.vue';
import { getOverlayManager } from '@/store/ManagerOverlay';
import { getGameState } from '@/store/GameState';
import { getStatsStore } from '@/store/UserStats';

const gameState = getGameState();
const gameData = gameState.gameData;
const om = getOverlayManager();

const windowWidth = ref(window.innerWidth);
const onWidthChange = () => windowWidth.value = window.innerWidth;
onMounted(() => window.addEventListener('resize', onWidthChange));
onUnmounted(() => window.removeEventListener('resize', onWidthChange));

const scrollTable = ref(null);

watch(() => gameState.rowsToRender, () => {
    if (scrollTable.value === null) {
        return;
    }
    setTimeout(() => {
        scrollTable.value.scrollTo({
            top: scrollTable.value.scrollHeight,
            behaviour: 'smooth',
        });
    }, 0);
});

function getRow(row) {
    // zero-indexed to access array 
    return row - 1 < gameData.rows.length ? gameData.rows[row - 1] : '     ';
}

function determineActiveRow(row) {
    // last row is active for user input
    return !gameData.finished && row === gameState.rowsToRender;
}

function handleGameFinishEvent() {
    gameData.finished = true;
    setTimeout(() => {
        if (!om.overlayEnabled) {
            om.toggleOverlay('stats');
        }
    }, 3200);
}

if (getStatsStore().stats.totalPlayed <= 0) {
    setTimeout(() => {
        om.toggleOverlay('tutorial');
    }, 200);
}

</script>

<template>
    <div id="board">
        <template v-if="windowWidth > 850">

            <div class="table" :style="{
                'transition': 'width 2s ease, height 0.4s ease',
                'height': Math.min(35, 5 + (5 * gameState.rowsToRender)) + 'rem',
                'width': gameState.rowsToRender > 6 ? '88rem' : '42rem'
            }">

                <div class="rows fst" :style="{'margin-right': gameState.rowsToRender > 6 ? '2.5rem' : 'auto'}">
                    <TransitionGroup name="add-row">
                        <BoardRow 
                            v-for="row in Math.min(6, gameState.rowsToRender)" 
                            :key="row"
                            :rowNumber="row"
                            :currentGuess="getRow(row)"
                            :isActive="determineActiveRow(row)"
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
                            @game-finished="handleGameFinishEvent"
                        />
                    </TransitionGroup>
                </div>
            </div>
        
        </template>

        <template v-else>
            <div ref="scrollTable" class="table mobile linebreak">
                <div class="rows">
                    <TransitionGroup name="add-row">
                        <BoardRow 
                            v-for="row in gameState.rowsToRender" 
                            :key="row"
                            :rowNumber="row"
                            :currentGuess="getRow(row)"
                            :isActive="determineActiveRow(row)"
                            @game-finished="handleGameFinishEvent"
                        />
                    </TransitionGroup>
                </div>
            </div>
        </template>
        
        <div id="footer">
            <TheCountdown @game-finished="handleGameFinishEvent"/>
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

    .table {
        display: flex;
        margin: 0 auto;
    }

    .mobile {
        height: 40vh;
        width: 100vw;
        align-items: center;
        flex-direction: column;
        transition: none;
        overflow-y: auto;
        overflow-x: hidden;
        overscroll-behavior: contain;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .linebreak {
        border: 1px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(to right, white, darkslategray, white);
        border-left: 0;
        border-right: 0;
        border-top: 0;
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
        margin-left: 2.5rem;
        margin-right: auto;
    }

    .add-row-enter-from {
        transform: translateX(-1rem);
        opacity: 0;
    }

    .add-row-enter-active {
        transition: all 0.5s ease-in;
    }

    #footer {
        display: flex;
        width: 100vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
   
    @media only screen and (max-width: 850px) {
        #board {
            padding-bottom: 0;
        }

        .table::-webkit-scrollbar {
            display: none;
        }

        .rows {
            padding: 1rem 0rem;
        }

    }

</style>

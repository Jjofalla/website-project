<script setup>
import { getGameState } from '@/store/GameState';
import { getStatsStore } from '@/store/UserStats';
import { getSettingsManager } from '@/store/ManagerSettings';
const sm = getSettingsManager();
const userStats = getStatsStore();
const stats = userStats.stats;
const pixelSpan = userStats.getPixelSpan();
let modeAssigned = false;

const highlight = sm.settings.dark ? 'rgb(110,110,110)' : 'rgb(180,180,180)';
const faded = sm.settings.dark ? 'rgb(180,180,180)' : 'rgb(110,110,110)';

 
function toString(value) {
    return value ? value : '-';
}

function assignColour(n, idx) {
    if (modeAssigned) {
        return highlight;
    }

    if (getGameState().gameData.status === 'WON') {
        if (idx + 1 === getGameState().gameData.rows.length) {
            modeAssigned = true;
            return faded;
        }
        return highlight;
    }

    if (n >= 84) {
        modeAssigned = true;
        return faded;
    }
    return highlight;
}

</script>

<template>
    <div class="stats">
        <div class="title">Statistics</div>
        <div class="stat-grid">
            <div class="stat">
                <h1>{{ toString(stats.totalPlayed) }}</h1>
            PLAYED </div>
            <div class="stat">
                <h1>{{ toString(userStats.winRate) }}</h1>
            WIN %</div>
            <div class="stat">
                <h1>{{ toString(userStats.avg) }}</h1>
            AVERAGE GUESS</div>
        </div>
        <div class="guess">GUESS DISTRIBUTION</div>
        <div class="bars">
            <div class="bar" v-for="(n, index) in pixelSpan" :key="index">
                <div class="label"> {{ index + 1 }}</div>
                <div class="tally" :style="{width: n + '%', 'min-width': '1.5rem', backgroundColor: assignColour(n, index)}">
                    <h1 class="number">{{ Object.values(stats.guessDistribution)[index] }}</h1>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
    .stats {
        font-size: 1.1rem;
        margin: 2.5rem 1.5rem 2.5rem 2rem;
    }

    .title {
        display: block;
        font-size: 2.1rem;
        font-weight: lighter;
        letter-spacing: 0.125rem;
        padding-left: 0.2em;
    }

    .stat-grid {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-left: 0.5rem;
    }

    .stat {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: right;
        margin: 1.2rem 1rem 1.5rem 0rem;
        letter-spacing: 0.4rem;
        color: var(--text-light);
        text-indent: 0.5rem;
    }

    .stat h1 {
        color: var(--text-dark);
        margin: 0.5rem auto;
        font-size: 3rem;
        text-indent: 0px;
    }

    .guess {
        margin-left: 0.4rem;
        padding-top: 1.4rem;
        letter-spacing: 0.2rem;
        color: rgb(150,150,150);
    }

    .bars {
        padding-top: 1rem;
        height: max-content;
        display: flex;
        flex-direction: column;
    }

    .bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: 'Courier New', Courier, monospace;
        height: min-content;
        padding: 0.125rem 0;
    }

    .tally {
        display: flex;
        background-color: darkslategray;
        justify-content: right;
        min-width: min-content;
    }

    .number {
        color: white;
        margin-top: 0.2rem;
        margin-bottom: 0.125rem;
        padding-right: 0.45rem;
        font-size: 1rem;
    }

    .label {
        width: 1.5rem;
        font-weight: bolder;
        padding-right: 0.5rem;
        text-align: right;
        color: var(--text-dark);
    }
 
</style>
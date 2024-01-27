<script setup>
import { getStatsStore } from '@/store/UserStats';
const userStats = getStatsStore();
const stats = userStats.stats;

const pixelSpan = () => {
    const vals = Object.values(stats.guessDistribution);
    const mode = Math.max(...vals);
    return vals.map((x) => 20 + (x ? (x / mode) * 400 : 0));
}

function toString(value) {
    return value ? value : '-';
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
            <div class="bar" v-for="(n, idx) in pixelSpan()" :key="idx">
                <div class="label"> {{ idx + 1 }}</div>
                <div class="tally" :style="{width: n + 'px', backgroundColor: n === 420 ? 'rgb(110,110,110' : 'rgb(180,180,180)'}">
                    <h1 class="number">{{ Object.values(stats.guessDistribution)[idx] }}</h1>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
    .stats {
        font-size: 18px;
        margin: 2.5rem 1.5rem 3rem 2rem;
        font-family: 'Trebuchet MS', sans-serif;
    }

    .title {
        display: block;
        font-size: 36px;
        font-weight: lighter;
        letter-spacing: 2px;
        padding-left: 0.2em;
    }

    .stat-grid {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .stat {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: right;
        margin: 1.2rem 1rem 1.5rem 0rem;
        letter-spacing: 5px;
        color: rgb(180, 180, 180);
        text-indent: 7.5px;
    }

    .stat h1 {
        color: rgb(110, 110, 110);
        margin: 0.5rem auto;
        font-size: 48px;
        text-indent: 0px;
    }

    .guess {
        margin-left: 0.4rem;
        padding-top: 20px;
        letter-spacing: 3px;
        color: rgb(150,150,150);
    }

    .bars {
        padding-top: 15px;
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
        padding: 2px 0;
    }

    .tally {
        display: flex;
        background-color: darkslategray;
        justify-content: right;
        min-width: min-content;
    }

    .number {
        color: white;
        margin-top: 3px;
        margin-bottom: 2px;
        padding-right: 5px;
        font-size: 16px;
    }

    .label {
        width: 25px;
        font-weight: bolder;
        padding-right: 0.5rem;
        text-align: right;
        color: rgb(110,110,110);
    }
    
</style>
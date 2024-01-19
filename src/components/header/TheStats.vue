<script setup>
import { getStatsStore } from '@/store/UserStats';
const userStats = getStatsStore();
const stats = userStats.stats;

const pixelSpan = () => {
    const vals = Object.values(stats.guessDistribution);
    const mode = Math.max(...vals);
    return vals.map((x) => 15 + (x ? (x / mode) * 200 : 0));
}

function toString(value) {
    return value ? value : '-';
}

</script>

<template>
    <div class="stats">
        <div class="title">Stats</div>
        <div class="grid-container">
            <div class="grid-item grid-col">Played</div>
            <div class="grid-item grid-col">Win %</div>
            <div class="grid-item grid-col">Avg. Guess</div>
            <div class="grid-item grid-row">{{ toString(stats.totalPlayed) }}</div>
            <div class="grid-item grid-row">{{ toString(userStats.winRate) }}</div>
            <div class="grid-item grid-row">{{ toString(userStats.avg) }}</div>
        </div>
        <div class="bars">
            <div class="tally" v-for="(n, idx) in pixelSpan()" :key="idx" :style="{height: n + 'px'}">
                <h1 class="number">{{ Object.values(stats.guessDistribution)[idx] }}</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .stats {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 70vh;
        width: 100%;
    }

    .title {
        display: flex;
        padding: 20px 0px 20px 0px;
        width: 75%;
        font-size: 40px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        letter-spacing: 5px;
        justify-content: left;
    }

    .grid-container {
        display: grid;
        text-align: center;
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(2, 1fr);
    }

    .grid-item {
        margin: auto;
        padding: 0px 40px 0px 40px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .grid-col {
        font-size: 20px;
    }

    .grid-row {
        text-decoration-color: green;
        font-size: 40px;
    }

    .bars {
        padding-top: 30px;
        height: max-content;
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    .tally {
        align-self: flex-end;
        justify-content: center;
        background-color: darkslategray;
        padding: 0.5rem;
        width: min-content;
        max-width: 25px;
    }

    .number {
        display: flex;
        justify-content: center;
        margin: auto;
        color: white;
        font-family: 'Courier New', Courier, monospace;
        font-size: 16px;
    }
</style>
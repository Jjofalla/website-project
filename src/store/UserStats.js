import { defineStore } from 'pinia';
import { ref, watch } from 'vue'
import { getGameState } from './GameState';

const guessMap = (maxGuesses) => {
    const result = {}
    for (let i = 1; i <= maxGuesses; i++) {
        result[i] = 0;
    }
    return result;
}

export const getStatsStore = defineStore('userStats', () => {
    const stats = ref({
        totalPlayed: 0,
        guessDistribution: guessMap(getGameState().maxGuesses),
    });

    const winRate = ref(0);
    const avg = ref(0);

    if (localStorage.getItem("userStats")) {
        stats.value = JSON.parse(localStorage.getItem("userStats"));
    }

    function calculateAvg() {
        const guessMap = stats.value.guessDistribution;
        const { wonTotal, guessSum } = Object.values(guessMap).reduce(
            (acc, value, idx) => ({
                wonTotal: acc.wonTotal + value,
                guessSum: acc.guessSum + value * (idx + 1),
            }),
            {wonTotal: 0, guessSum: 0}
        );

        if (wonTotal) {
            stats.value.totalPlayed = wonTotal > stats.value.totalPlayed ? wonTotal : stats.value.totalPlayed;
            winRate.value = wonTotal < stats.value.totalPlayed ? Math.round((wonTotal / stats.value.totalPlayed) * 100): 100;
            avg.value = (guessSum / wonTotal).toFixed(1);
        } 
    }

    watch(stats, (newStats) => {
        localStorage.setItem("userStats", JSON.stringify(newStats));
    }, { deep: true });

    calculateAvg();

    return {
        stats,
        avg,
        winRate,
        calculateAvg
    }
});


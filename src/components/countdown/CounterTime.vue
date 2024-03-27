<script setup>
import { watch } from 'vue';
import { getGameState } from '@/store/GameState';
import { getSettingsManager } from '@/store/ManagerSettings';
const sm = getSettingsManager();
const gs = getGameState();

const emit = defineEmits(['game-finished']);
const props = defineProps({
    enableTimer: {
        type: Boolean,
    }
});

watch(() => props.enableTimer, () => {
    if (!props.enableTimer) {
        gs.endTimer();
    }
});

watch(() => gs.gameData.rows.length, () => {
    if (props.enableTimer) {
        gs.startTimer();
    }
});

watch(() => gs.gameData.mmodeTime, (newTime) => {
    if (newTime <= 0) {
        gs.gameData.status = 'LOST';
        emit('game-finished');
    }
});

if (gs.gameData.mmodeTime != 120 && props.enableTimer && gs.gameData.status === 'IN_PROGRESS') {
    gs.startTimer();
}

</script>

<template>
    <Transition mode="out-in" name="flip">
        <div id="timer" v-if="enableTimer" :style="{'color': sm.settings.dark ? 'var(--text-light)' : 'var(--text-dark)'}">
            {{ gs.gameData.mmodeTime }}
        </div>
    </Transition>
</template>

<style scoped>
    #timer {  
        position: absolute;
        right: 0rem;
    }
</style>
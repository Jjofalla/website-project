<script setup>
import { watch } from 'vue';
import { getGameState } from '@/store/GameState';
import { getSettingsManager } from '@/store/ManagerSettings';
const sm = getSettingsManager();

const emit = defineEmits(['game-finished']);
const props = defineProps({
    enableTimer: {
        type: Boolean,
    }
});

watch(() => props.enableTimer, () => {
    if (!props.enableTimer) {
        sm.endTimer();
    }
});

watch(() => getGameState().gameData.rows.length, () => {
    if (props.enableTimer) {
        sm.startTimer();
    }
});

watch(() => sm.settings['mmode'][1], (newTime) => {
    if (newTime === 0) {
        emit('game-finished');
        sm.endTimer();
    }
});

</script>

<template>
    <Transition mode="out-in" name="flip">
        <div id="timer" v-if="enableTimer">
            {{ sm.settings['mmode'][1] }}
        </div>
    </Transition>
</template>

<style scoped>
    #timer {  
        position: absolute;
        right: 0.5rem;
        color: var(--text-dark);
    }
</style>
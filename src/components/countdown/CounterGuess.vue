<script setup>
import { getSettingsManager } from '@/store/ManagerSettings';
const sm = getSettingsManager()

defineProps({
    remaining: {
        type: Number,
    },
    enableTimer: {
        type: Boolean,
    }
});
</script>

<template>
    <div id="countdown-guess" :style="{'transform': enableTimer ? 'translateX(-3rem)' : 'translateX(0rem)'}">
        <Transition mode="out-in" name="flip">
            <div class="number" 
                :key="remaining"
                :style="{'text-align': remaining < 10 ? 'center' : 'right', 'color': sm.settings.dark ? 'var(--text-light)' : 'var(--text-dark)'}"
            >
            {{ remaining }}
            </div>
        </Transition>
    {{ (remaining === 1 ? 'GUESS' : 'GUESSES') + ' REMAINING' }}
    </div>
</template>

<style scoped>
    #countdown-guess {
        text-indent: 0.2rem;
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        transition: transform 0.4s;
    }
</style>
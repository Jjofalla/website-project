<script setup>
import { getOverlayManager } from '@/store/ManagerOverlay';
import { getSettingsManager } from '@/store/ManagerSettings';
const sm = getSettingsManager();

defineProps({
    overlay: {
        type: String,
    },
    icon: {
        type: String,
    },
});

function enableOverlay(id) {
    if (id === '') {
        return
    }
    getOverlayManager().toggleOverlay(id);
}

</script>

<template>
    <button class="button" tabindex="-1" @click="enableOverlay(overlay)" :style="{'color': sm.settings.dark ? 'white' : 'black'}">
        <font-awesome-icon :icon="'fa-solid fa-' + icon"/>
    </button>
</template>

<style scoped>
.button {
    border: none;
    padding: 1rem 0.5rem;
    font-size: max(2.3vw, 25px);
    background-color: transparent;
    opacity: 65%;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.button:hover {
    opacity: 80%;
    transform: scale(1.1);
}
</style>
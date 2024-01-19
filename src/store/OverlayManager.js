import { defineStore } from "pinia";
import { ref } from 'vue';

export const getOverlayManager = defineStore('overlayManager', () => {
    const overlayId = ref("");
    const overlayEnabled = ref(false);
    const isBeingToggled = ref(false);

    const toggleOverlay = (id) => {
        overlayId.value = id;
        overlayEnabled.value = !overlayEnabled.value;
    }

    function handleOverlayClick() {
        if (!isBeingToggled.value) {
            isBeingToggled.value = true;
            toggleOverlay("");
            setTimeout(() => {
                isBeingToggled.value = false;
            }, 500);
        }
    }

    return {
        overlayId,
        overlayEnabled,
        toggleOverlay,
        handleOverlayClick,
    }

});
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { tileColours } from "./ManagerStyle";

export const getSettingsManager = defineStore('settings', () => {
    const settings = ref({
        mmode: false,
        dark: false,
    });

    if (localStorage.getItem("settings")) {
        settings.value = JSON.parse(localStorage.getItem("settings"));
    }

    function toggleMMode() {
        settings.value.mmode = !settings.value.mmode;
    }

    function toggleDarkMode() {
        settings.value.dark = !settings.value.dark;
        tileColours.value.setTileColours(settings.value.dark);
    }

    watch(settings, (newSettings) => {
        localStorage.setItem("settings", JSON.stringify(newSettings));
    }, { deep: true });

    tileColours.value.setTileColours(settings.value.dark);

    return {
        settings,
        toggleMMode,
        toggleDarkMode,
    }
});

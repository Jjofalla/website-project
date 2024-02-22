import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const getSettingsManager = defineStore('settings', () => {
    const TIME = 120;
    const settings = ref({
        'mmode': [false, TIME],
    });

    if (localStorage.getItem("settings")) {
        settings.value = JSON.parse(localStorage.getItem("settings"));
    }

    function enableSetting(key) {
        settings.value[key][0] = !settings.value[key][0];
    }

    let timer;
    let timerActive = false;
    function startTimer() {
        if (!timerActive) {
            timer = setInterval(function() {
                settings.value['mmode'][1]--;
            }, 1000);
            timerActive = true;
        }
    }

    function endTimer() {
        clearInterval(timer);
        settings.value['mmode'][1] = TIME;
    }

    watch(settings, (newSettings) => {
        localStorage.setItem("settings", JSON.stringify(newSettings));
    }, { deep: true });

    return {
        settings,
        enableSetting,
        startTimer,
        endTimer,
    }
});

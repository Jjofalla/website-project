import { defineStore } from 'pinia';
import { ref } from 'vue';

export const getAlertManager = defineStore('alert', () => {
    const alertEnabled = ref(false);
    const message = ref("");
    const alertTimer = ref();

    function handleAlert(msg) {
        if (alertEnabled.value) {
            clearTimeout(alertTimer.value);

            if (msg === message.value) {
                let alert = document.querySelector('#alert');
                alert.classList.add('shake');
                alert.addEventListener('animationend', () => {
                    alert.classList.remove('shake');
                }, { once: true });
            }
            
        } else {
            alertEnabled.value = true;
        }
        alertTimer.value = resetAlert();
        message.value = msg;
    }
    
    function resetAlert() {
        return setTimeout(() => {
            alertEnabled.value = false;
        }, 2000);
    }

    return {
        alertEnabled,
        message,
        handleAlert
    }
});
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const getTooltip = defineStore('crossout', () => {
    const chars = ref(new Set());

    function crossOutChar(char) {
        if (chars.value.has(char)) {
            chars.value.delete(char);
        } else {
            chars.value.add(char);
        }
    }

    function crossedOut(char) {
        if (chars.value.has(char)) {
            return true;
        } else {
            return false;
        }
    }
    return { crossedOut, crossOutChar }
});

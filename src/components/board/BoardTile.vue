<script setup>
import { ref, watch, watchEffect } from 'vue';
import { getGameState } from '@/store/GameState';
import { getOverlayManager } from '@/store/OverlayManager';
const om = getOverlayManager();
const gameState = getGameState();

const props = defineProps({
    rowNumber: {
        type: Number,
    },
    tileId: {
        type: Number
    },
    char: {
        type: String
    },
    focused: {
        type: Boolean
    },
    isActive: {
        type: Boolean
    }
});

const emit = defineEmits(['on-key-down', 'on-focus', 'on-key-up'])
const tileRef = ref(null);

watchEffect(() => {
    focusOnInput();
});

watch(() => gameState.gameData.rows.length, () => {
    endInfiniteLoop();
});

function focusOnInput() {
    if (!tileRef.value) {
        return;
    } 
    
    if (gameState.gameData.finished) {
        tileRef.value.blur();
        return;
    }

    if (props.focused && props.isActive) {
        if (!om.overlayEnabled) {
            tileRef.value.style.animationPlayState = 'running';
            tileRef.value.focus();
        } else {
            tileRef.value.style.animationPlayState = 'paused';
        }
    }
}

function endInfiniteLoop() {
    if (props.isActive && props.focused && tileRef.value) {
        tileRef.value.blur();
        // tileRef.value.addEventListener('animationiteration', () => {
        //     tileRef.value.style.animation = 'none';
        //     tileRef.value.blur();
        // });
    }
}
 
const handleEvent = (event, eventType) => {
    if (props.isActive) {
        if (eventType === 'focus' && event.which === 1) {
            tileRef.value.focus();
            emit('on-focus', props.tileId);
            return;
        }
        event.preventDefault();
        if (eventType === 'keydown') {
            emit('on-key-down', event.key, props.tileId);
        } else if (eventType === 'keyup') {
            emit('on-key-up', event.key);
        } 
        
    } else if (eventType === 'focus' && event.which === 1) {
        event.preventDefault();
        if (!gameState.gameData.finished) {
            // flip colour
            gameState.updateStyle(props.rowNumber - 1, props.tileId);
        }
    }
}

</script>

<template>
    <input
        :id="rowNumber + ',' + tileId"
        ref="tileRef"
        class="tile"
        :class="{'inactive': !isActive}"
        :style="[gameState.readStyle(rowNumber - 1, tileId), {'cursor': gameState.gameData.finished ? 'default' : 'pointer'}]"
        maxlength="1"
        :tabindex="isActive ? null : -1"
        readonly
        :value="char.toUpperCase()"
        @keydown="handleEvent($event, 'keydown')"
        @keyup="handleEvent($event, 'keyup')"
        @mousedown="handleEvent($event, 'focus')"
    >
</template>

<style scoped>
    .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4.6rem;
        width: 4.4rem;
        border-radius: 0.3rem;
        cursor: default;
        border: none;
        user-select: none;
        box-sizing: border-box;
        text-align: center;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 2.3rem;
        font-weight: bolder;
        -webkit-appearance: none;
        appearance: none;
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    .tile:focus {
        outline: none;
        border: 1px solid lightgrey;
        animation-name: flash;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes flash {
        0%, 100% {
            box-shadow: 0rem 0.25rem 0.25rem rgb(180,180,180);
            border-color: white;
        }
        50% {
            box-shadow: 0rem 0.25rem 0.45rem darkslategrey;
            border-color: lightgray;
        }
    }

    .tile::selection {
        color: black;
    }

    .grey {
        color: white;
        background-color: lightgray;
        outline: none;
        border: none;
    }

    .grey::selection {
        color: white;
    }

    .inactive {
        box-shadow: 0rem 0.25rem 0.25rem lightgrey;
        cursor: default;
    }

    @media only screen and (max-width: 1000px) {
        .tile {
            height: 4.2rem;
            width: 3.9rem;
        }
    }

    @media only screen and (max-width: 450px) {
        .tile {
            height: 3.4rem;
            width: 3.2rem;
            font-size: 1.5rem;
        }
    }

</style>
<script setup>
import { ref, watchEffect } from 'vue';
import { getGameState } from '@/store/GameState';
import { getOverlayManager } from '@/store/OverlayManager';

const om = getOverlayManager();
const gameState = getGameState();
const props = defineProps({
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
 
const handleEvent = (event, eventType) => {
    if (props.isActive) {
        if (eventType === 'focus') {
            emit('on-focus', props.tileId);
            return;
        }
        event.preventDefault();
        if (eventType === 'keydown') {
            emit('on-key-down', event.key, props.tileId);
        } else if (eventType === 'keyup') {
            emit('on-key-up', event.key);
        } 
        
    } else if (eventType === 'focus') {
        event.preventDefault();
        if (!gameState.gameData.finished) {
            gameState.toggleDiscard(props.char);
        }
    }
}

</script>

<template>
    <div class="tile">
        <input 
            ref="tileRef"
            class="text"
            :class="{'grey': gameState.isDiscarded(char), 'inactive': !isActive}"
            maxlength="1"
            :tabindex="isActive ? null : -1"
            readonly
            :value="char.toUpperCase()"
            @keydown="handleEvent($event, 'keydown')"
            @keyup="handleEvent($event, 'keyup')"
            @mousedown="handleEvent($event, 'focus')"
        >
    </div>
</template>

<style scoped>
    .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        aspect-ratio: 1/1;
        width: 70px;
    }

    @media (max-width: 900px) {
        .tile {
            width: 65px;
        }
    }

    .text {
        height: 100%;
        width: 100%;
        color: darkslategray;
        border: 1.5px solid lightgrey;
        box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        box-sizing: border-box;
        cursor: default;
        overflow: hidden;
        text-align: center;
        font-family: Tahoma, Verdana, sans-serif;
        font-size: 38px;
    }

    .text:focus {
        border: none;
        border-radius: 5px;
        outline: 1.5px solid lightgrey;
        animation-name: flash;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes flash {
        50% {
            box-shadow: 0px 5px 8px black;
        }
        0%, 100% {
            box-shadow: 0px 5px 5px lightgrey;
        }
    }

    .text:hover {
        cursor: pointer;
    }

    .text::selection {
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
        cursor: default;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    }

</style>
<script setup>
import { ref, watchEffect } from 'vue';
import { getGameState } from '@/store/GameState';

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
    if (props.isActive && props.focused && tileRef.value) {
        tileRef.value.focus();
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
            @blur="focusOnInput"
        >
    </div>
</template>

<style scoped>
    .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        width: 60px;
        border: none;
    }

    .text {
        height: 100%;
        width: 100%;
        border: 1px solid black;
        box-sizing: border-box;
        cursor: default;
        overflow: hidden;
        text-align: center;
        font-family: Tahoma, Verdana, sans-serif;
        font-size: 38px;
    }

    .text:focus {
        border-radius: 2px;
        outline: 1.4px solid black;
        animation-name: flash;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes flash {
        50% {border-color: transparent;}
        0%, 100% {border-color: black;}
    }

    .text:hover {
        cursor: pointer;
    }

    .text::selection {
        color: black;
    }

    .grey {
        color: white;
        background-color: grey;
    }

    .grey::selection {
        color: white;
    }

    .inactive {
        cursor: default;
        opacity: 70%;
    }



</style>
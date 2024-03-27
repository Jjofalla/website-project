<script setup>

import BoardTile from './BoardTile.vue';
import { ref, watch, onMounted } from 'vue';
import { getGameState } from '@/store/GameState';
import { getAlertManager } from '@/store/ManagerAlert';
import { getOverlayManager } from '@/store/ManagerOverlay';
import { keyPress } from '@/store/KeyPress';
import { allowableGuesses } from '@/assets/words';
const am = getAlertManager();

const numberOfTiles = getGameState().numberOfTiles;
const emit = defineEmits(['on-enter', 'on-click']);
const props = defineProps({
    rowNumber: {
        type: Number,
    },
    currentGuess: {
        type: String,
    },
    isActive: {
        type: Boolean,
    }
});

const tilesRef = ref(null);
const chars = ref(Array.from(props.currentGuess));
const targetIdx = ref(0);
const handled = ref(new Set());


onMounted(() => {
    if (props.rowNumber === getGameState().rowsToRender) {
        tilesRef.value.focus();
    }
});

watch(() => getGameState().gameData.status, (newStatus) => {
    if (newStatus != 'IN_PROGRESS') {
        tilesRef.value.blur();
    }
});

watch(() => getOverlayManager().isBeingToggled, (bool) => {
    if (bool && props.isActive) {
        tilesRef.value.focus();
    }
});

watch(() => keyPress.value.isClicked, () => {
    if (props.isActive && document.activeElement === tilesRef.value) {
        onKeyDown(keyPress.value.char);
        onKeyUp(keyPress.value.char);
    }
});

function onKeyDown(key, event=null) {
    if (getOverlayManager().overlayEnabled || !props.isActive || handled.value.has(key)) {
        return;
    }
    handled.value.add(key);

    if (event !== null) {
        event.preventDefault();
    }
    
    // check for input of alphabet character
    if (/^[a-zA-Z]$/.test(key)) {
        chars.value[targetIdx.value] = key;
        shiftRight();
    
    } else if (/^[1-5]$/.test(key)) {
        onFocus(key - 1);
    
    } else if (key === 'Backspace' || key === 'Delete') {
        if (chars.value[targetIdx.value] === ' ') {
            shiftLeft();
        }
        chars.value[targetIdx.value] = ' ';

    } else if (key === 'Enter') {
        handleEnter(chars.value);
    
    } else if (key === 'Tab' || key === 'ArrowRight') {
        shiftRight();

    } else if (key === 'ArrowLeft') {
        shiftLeft();
    }
}

function shiftRight() {
    if (targetIdx.value >= numberOfTiles - 1) {
        return;
    }
    targetIdx.value++;
}

function shiftLeft() {
    targetIdx.value = targetIdx.value <= 0 ? targetIdx.value : targetIdx.value - 1; 
}

function onFocus(tileId) {
    targetIdx.value = tileId;
}

function onKeyUp(key) {
    handled.value.delete(key);
}

function handleEnter(chars) {
    // check that word is valid
    if (chars.some(x => x === ' ')) {
        am.handleAlert('Not Enough Letters');
        return;
    } 

    const word = chars.join('').toLowerCase();
    if (!isValidWord(word)) {
        am.handleAlert('Not in Wordlist');
        return;
    }    
    
    targetIdx.value = -1;
    tilesRef.value.blur();
    tilesRef.value.removeAttribute('tabindex');
    emit('on-enter', word)
}

function isValidWord(word) {
    const numberOfWords = allowableGuesses.length;
    let left = 0, right = numberOfWords - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if (allowableGuesses[mid] === word) {
            return true;
        }

        if (allowableGuesses[mid] < word) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

</script>

<template>
    <div 
        ref="tilesRef"
        class="tiles"
        :tabindex="isActive ? 1 : -1"
        @keydown="onKeyDown($event.key, $event)"
        @keyup="onKeyUp($event.key)"
    >
        <BoardTile
            v-for="tile in numberOfTiles"
            :key="tile"
            :rowNumber="rowNumber"
            :tileId="tile-1"
            :char="chars[tile-1]" 
            :focused="targetIdx === tile-1"
            :isActive="isActive"
            @on-focus="onFocus"
        />

    </div>
</template>

<style scoped>
    .tiles {
        display: flex;
        height: 4.5rem;
        align-items: center;
        justify-content: center;
        user-select: none;
        gap: 0.5rem;
    }

    .tiles:focus {
        outline: none;
    }

    @media only screen and (max-width: 1000px) {
        .tiles {
            height: 4.2rem;
            gap: 0.4rem;
        }
    }

    @media only screen and (max-width: 450px) {
        .tiles {
            height: min-content;
        }
    }
</style>

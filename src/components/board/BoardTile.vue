<script setup>
import { getGameState } from '@/store/GameState';
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
        type: Boolean,
    }
});

const emit = defineEmits(['on-focus'])
 
function handleClick(event) {
    if (event.which !== 1) {
        return;
    }

    if (props.isActive) {
        emit('on-focus', props.tileId);

    } else if (!gameState.gameData.finished) {
        gameState.updateStyle(props.rowNumber - 1, props.tileId);
    }
}

</script>

<template>
    <div
        class="tile"
        :class="{'flash': focused && isActive}"
        :style="[
            gameState.readStyle(rowNumber - 1, tileId), 
            {'cursor': gameState.gameData.finished ? 'default' : 'pointer'}
        ]"
        maxlength="1"
        readonly
        @mousedown="handleClick($event)"
    >
    {{ char.toUpperCase() }}
    </div>
</template>

<style scoped>
    .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4.6rem;
        width: 4.4rem;
        border-radius: 0.3rem;
        border: none;
        user-select: none;
        box-sizing: border-box;
        font-size: 2.3rem;
        font-weight: bolder;
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    .flash {
        animation-name: flash;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes flash {
        0%, 100% {
            box-shadow: 0rem 0.25rem 0.25rem rgb(180,180,180);
            border: 1px solid;
            border-color: white;
        }
        50% {
            box-shadow: 0rem 0.25rem 0.45rem darkslategrey;
            border: 1px solid;
            border-color: lightgray;
        }
    }

    .tile::selection {
        color: black;
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
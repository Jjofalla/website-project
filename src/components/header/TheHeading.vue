<script setup>
import { ref } from 'vue';
import { getGameState } from '@/store/GameState';
import OverlayHelp from './OverlayHelp.vue';

const enableOverlay = ref(false);

const toggleOverlay = () => {
    enableOverlay.value = !enableOverlay.value;
}

</script>

<template>
    <div class="heading">
        <h1 class="title">Wordle</h1>
        <OverlayHelp v-show="enableOverlay" @toggle-overlay="toggleOverlay"/>
        <div class="buttons">
            <button class="button" @click="toggleOverlay">
                <font-awesome-icon icon="fa-solid fa-question" size="2x"/>
            </button>
            <button class="button" @click="getGameState().resetState()">Reset</button>
        </div>
    </div>
</template>

<style scoped>

@media (min-width: 1024px) {
    .heading {
        display: flex;
        position: relative;
        align-items: center;
        text-align: center;
        justify-content: center;
        border-bottom: 1px solid black;
        height: 100px;
    }
}

.title {
    font-family: Tahoma, Verdana, sans-serif;
    font-size: 45px;
    font-weight: lighter;
    cursor: default;
}

.buttons {
    display: flex;
    position: absolute;
    gap: 12px;
    padding: 5px;
    top: 0;
    right: 0;
}

.button {
    width: 70px;
    aspect-ratio: 7/5;
    border: none;
    color: none;
    cursor: pointer;
}

.button:hover {
    background-color: white;
}

</style>
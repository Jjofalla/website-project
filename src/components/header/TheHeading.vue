<script setup>
import { getOverlayManager } from '@/store/OverlayManager';
import TheOverlay from './TheOverlay.vue';
const om = getOverlayManager();
</script>

<template>
    <div id="heading-wrapper" @mousedown.prevent>
        <div id="heading">
            <button class="button left" @click="om.toggleOverlay('stats')">
                <font-awesome-icon icon="fa-solid fa-chart-simple"/>
            </button>
            <div class="title">HARDLE</div>
            <Transition>
                <TheOverlay v-show="om.overlayEnabled"/>
            </Transition>
            <button class="button right" @click="om.toggleOverlay('tutorial')">
                <font-awesome-icon icon="fa-solid fa-question"/>
            </button>
        </div>
    </div>
</template>

<style scoped>

#heading-wrapper {
    display: inline-block;
    width: 100vw;   
    top: 0;
}

#heading {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 45vw;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, white, darkslategray, white);
    border-left: 0;
    border-right: 0;
    border-top: 0;
}

.title {
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 2.9rem;
    font-weight: bolder;
    text-align: center;
    letter-spacing: 0.5rem;
    width: min-content;
    color: darkslategray;
    cursor: default;
}

.button {
    font-size: 2.3vw;
    background-color: white;
    color: darkslategray;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.button:hover {
    color: black;
    transform: scale(1.1);
}

.v-enter-active {
  animation: fadeIn 0.2s ease;
  background: rgba(0, 0, 0, 0.2);
}

.v-leave-active {
  animation: fadeOut 0.2s ease;
  background: rgba(0, 0, 0, .0)
}


@keyframes fadeIn {
    0% {
        background: rgba(0, 0, 0, .0);
    }
    100% {
        background: rgba(0, 0, 0, 0.2);
    }
}

@keyframes fadeOut {
    0% {
        background-color: rgba(0, 0, 0, 0.2);
    }
    100% {
        background-color: rgba(0, 0, 0, .0);
    }
}



</style>
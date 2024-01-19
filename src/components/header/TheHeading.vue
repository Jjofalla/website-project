<script setup>
import { getOverlayManager } from '@/store/OverlayManager';
import TheOverlay from './TheOverlay.vue';
const om = getOverlayManager();
</script>

<template>
    <div id="heading-wrapper" @mousedown.prevent>
        <div id="heading">
            <button class="button" @click="om.toggleOverlay('stats')">
                <font-awesome-icon icon="fa-solid fa-chart-simple" size="2x"/>
            </button>
            <h1 class="title">HARDLE</h1>
            <Transition>
                <TheOverlay v-show="om.overlayEnabled"/>
            </Transition>
            <button class="button" @click="om.toggleOverlay('tutorial')">
                <font-awesome-icon icon="fa-solid fa-question" size="2x"/>
            </button>
        </div>
    </div>
</template>

<style scoped>

#heading-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    height: 9%;
    width: 100%;    
}

#heading {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 35%;
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, white, darkslategray, white);
    border-left: 0;
    border-right: 0;
    border-top: 0;
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

.title {
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 2.7rem;
    font-weight: bolder;
    text-align: center;
    letter-spacing: 7px;
    color: darkslategray;
    cursor: default;
}

.button {
    height: max-content;
    aspect-ratio: 7/5;
    border: none;
    background-color: white;
    color: darkslategray;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.button:hover {
    color: black;
    transform: scale(1.1);
}

</style>
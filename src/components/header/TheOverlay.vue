<script setup>
import { getOverlayManager } from '@/store/OverlayManager';
import TheStats from './TheStats.vue';
import TheTutorial from './TheTutorial.vue';
const om = getOverlayManager();
</script>

<template>
    <div class="overlay-wrapper" @click.self="om.handleOverlayClick()">
        <div class="overlay" :class="{'out': !om.overlayEnabled}">
            <button class="close" @click.stop="om.handleOverlayClick()">
                <font-awesome-icon icon="fa-solid fa-x" size="2x"/>
            </button>
            <TheStats v-show="om.overlayId === 'stats'"/>
            <TheTutorial v-show="om.overlayId === 'tutorial'"/>
        </div>
    </div>
</template>

<style scoped>
    .overlay-wrapper {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .overlay {
        position: fixed;
        margin: auto;
        width: 37.5rem;
        max-width: 37.5rem;
        cursor: default;
        background-color: white;
        border: none;
        border-radius: 0.7rem;
        animation: scaleUp 0.4s ease-in-out;
    }

    .out {
        opacity: 0;
    }

    @keyframes scaleUp {
        0% {
            transform: scale(.8) translateY(30%);
        }
        100% {
            transform: scale(1) translateY(0);
        }
    }

    .close {
        position: absolute;
        z-index: 1;
        margin: 2rem;
        right: 0;
        background-color: white;
        border: none;
        opacity: 60%;
    }

    .close:hover {
        cursor: pointer;
        opacity: 100%;
    }

</style>
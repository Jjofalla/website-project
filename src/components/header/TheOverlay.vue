<script setup>
import { getOverlayManager } from '@/store/OverlayManager';
import TheStats from './TheStats.vue';
import TheTutorial from './TheTutorial.vue';
const om = getOverlayManager();
</script>

<template>
    <div id="overlay-wrapper" @click.self="om.handleOverlayClick()">
        <div id="overlay" :class="{'out': !om.overlayEnabled}">
            <button class="close" @click.stop="om.handleOverlayClick()">
                <font-awesome-icon icon="fa-solid fa-x" />
            </button>
            <TheStats v-if="om.overlayId === 'stats'"/>
            <TheTutorial v-if="om.overlayId === 'tutorial'"/>
        </div>
    </div>
</template>

<style scoped>
    #overlay-wrapper {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.2);
    }

    #overlay {
        position: fixed;
        overflow-y: scroll;
        overscroll-behavior: contain;
        margin: auto;
        width: max(36vw, 400px);
        cursor: default;
        background-color: white;
        border: none;
        border-radius: 0.7rem;
        animation: scaleUp 0.3s ease-in-out;
    }

    #overlay::-webkit-scrollbar {
        width: 0.3rem;
    }
        
    /* #overlay::-webkit-scrollbar-track {
        margin-right: 0.3rem;
        border-radius: 2rem;
    }
         */
    #overlay::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 1rem;
    }

    .out {
        opacity: 0;
    }

    @keyframes scaleUp {
        0% {
            transform: scale(.9) translateY(10%);
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
        font-size: 2rem;
    }

    .close:hover {
        cursor: pointer;
        opacity: 100%;
    }

</style>
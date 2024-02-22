<script setup>
import { getOverlayManager } from '@/store/ManagerOverlay';
import TheStats from './TheStats.vue';
import TheTutorial from './TheTutorial.vue';
import TheSettings from './TheSettings.vue';
const om = getOverlayManager();
</script>

<template>
    <div id="overlay-wrapper" @click.self="om.handleOverlayClick()">
        <div id="overlay" :class="{'out': !om.overlayEnabled}">
            <button class="close" tabindex="-1" @click.stop="om.handleOverlayClick()">
                <font-awesome-icon icon="fa-solid fa-x" />
            </button>
            <TheStats v-if="om.overlayId === 'stats'"/>
            <TheTutorial v-if="om.overlayId === 'tutorial'"/>
            <TheSettings v-if="om.overlayId === 'settings'"/>
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
        width: min(40rem, 100vw);
        cursor: default;
        background-color: white;
        border: none;
        border-radius: 0.7rem;
        animation: scaleUp 0.3s ease-in-out;
    }

    #overlay::-webkit-scrollbar {
        width: 0.3rem;
    }
        
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
        margin: 2rem 1.5rem;
        right: 0;
        background-color: white;
        color: darkslategrey;
        border: none;
        opacity: 60%;
        font-size: 2rem;
    }

    .close:hover {
        cursor: pointer;
        opacity: 100%;
    }

    .closer:active {
        color: black;
    }

    @media only screen and (max-width: 450px) {
        #overlay {
            top: 9vh;
            max-height: 80vh;
        }
        .close {
            margin-right: 0.7rem;
        }
    }

</style>@/store/ManagerOverlay
<script setup>
import { getOverlayManager } from '@/store/ManagerOverlay';
import ButtonShare from './ButtonShare.vue';
const om = getOverlayManager();
</script>

<template>
    <div id="heading-wrapper" @mousedown.prevent>
        <div id="heading" class="linebreak">
            <div class="buttons">
                <button class="button" tabindex="-1" @click="om.toggleOverlay('settings')">
                    <font-awesome-icon icon="fa-solid fa-gear"/>
                </button>
                <button class="button" tabindex="-1" @click="om.toggleOverlay('stats')">
                    <font-awesome-icon icon="fa-solid fa-chart-simple"/>
                </button>
            </div>  
            <div class="title" readonly>HARDLE</div>
            <div class="buttons">
                <button class="button" tabindex="-1" @click="om.toggleOverlay('tutorial')">
                    <font-awesome-icon icon="fa-solid fa-circle-info"/>
                </button>
                <ButtonShare />
            </div>
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 45vw;
    height: 6.5vh;
    margin: 0 auto;
    padding: 1rem;
}

.linebreak {
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, white, darkslategray, white);
    border-left: 0;
    border-right: 0;
    border-top: 0;
}

.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
    font-size: max(2.5vw, 32px);
    font-weight: bolder;
    letter-spacing: 0.5rem;
    width: min-content;
    color: darkslategray;
    cursor: default;
    text-indent: 0.5rem;
    padding: 0 2rem;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: min-content;
}

.button {
    border: none;
    padding: 1rem 0.5rem;
    font-size: max(2.3vw, 25px);
    background-color: transparent;
    color: darkslategray;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.button:hover {
    color: black;
    transform: scale(1.1);
}

@media only screen and (max-width: 850px) {
    #heading {
        min-width: 70vw;
        border: none;
    }

    .title {
        padding: 0 3rem;
    }
 
    #heading-wrapper {
        border: 1px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(to right, white, darkslategray, white);
        border-left: 0;
        border-right: 0;
        border-top: 0;
    }
}
@media only screen and (max-width: 450px) {
    #heading {
        justify-content: space-between;
        min-width: 90vw;
    }

    .title {
        padding: 0 1rem;
    }

    .button {
        font-size: 2.0rem;
    }
}

</style>@/store/ManagerOverlay
<script setup>
import { getOverlayManager } from '@/store/OverlayManager';
const om = getOverlayManager();
</script>

<template>
    <div id="heading-wrapper" @mousedown.prevent>
        <div id="heading">
            <button class="button left" @click="om.toggleOverlay('stats')">
                <font-awesome-icon icon="fa-solid fa-chart-simple"/>
            </button>
            <div class="title">HARDLE</div>
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
    height: 7vh;
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
    font-size: max(2.5vw, 32px);
    font-weight: bolder;
    letter-spacing: 0.5rem;
    width: min-content;
    color: darkslategray;
    cursor: default;
    text-indent: 0.5rem;
}

.button {
    border: none;
    width: 5rem;
    padding: 1rem;
    aspect-ratio: 1/1;
    font-size: max(2.3vw, 25px);
    background-color: transparent;
    color: darkslategray;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.right {
    padding: 1rem 1rem 1rem 0;
}

.button:hover {
    color: black;
    transform: scale(1.1);
}

@media only screen and (max-width: 850px) {
    #heading {
        min-width: min-content;
        border: none;
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
        min-width: 90vw;
    }
}

</style>
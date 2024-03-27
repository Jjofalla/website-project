<script setup>
import ButtonShare from './ButtonShare.vue';
import ButtonHeading from './ButtonHeading.vue';
import { getSettingsManager } from '@/store/ManagerSettings';
const sm = getSettingsManager();
</script>

<template>
    <div 
      id="heading-wrapper" 
      @mousedown.prevent 
      :style="{'border-image-source': sm.settings.dark ? 'linear-gradient(to right, rgb(10,10,10), rgb(210,210,210), rgb(10,10,10))' : 'linear-gradient(to right, white, darkslategray, white)'}">
        <div id="heading" class="linebreak" :class="{'line-dark': sm.settings.dark}" >
            <div class="buttons">
                <ButtonHeading :overlay="'settings'" :icon="'gear'" />
                <ButtonHeading :overlay="'stats'" :icon="'chart-simple'" />
            </div>  
            <div class="title" :style="{'color': sm.settings.dark ? 'rgb(210,210,210)' : 'darkslategrey'}" readonly>DIFFIKLE</div>
            <div class="buttons">
                <ButtonHeading :overlay="'tutorial'" :icon="'circle-info'" />
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

.line-dark {
    border-image-source: linear-gradient(to right, rgb(10,10,10), rgb(210,210,210), rgb(10,10,10));
}

.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
    font-size: max(2.2vw, 25px);
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

</style>

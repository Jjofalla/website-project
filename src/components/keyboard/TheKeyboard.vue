<script setup>
import KeyboardRow from './KeyboardRow.vue';
import { keyPress } from '@/store/KeyPress';
import { tileColours } from '@/store/ManagerStyle';

</script>

<template>
    <div id="keyboard" tabindex="-1">
        <KeyboardRow chars="qwertyuiop" />
        <KeyboardRow chars="asdfghjkl" />
        <div class="key-row">
            <button 
                class="key-tile tool" 
                readonly 
                tabindex='-1'
                :style="tileColours.getStyle(0)"
                @click="keyPress.setChar('Backspace')">
                <font-awesome-icon icon="fa-solid fa-delete-left"/>
            </button>
            <KeyboardRow chars="zxcvbnm" />
            <button class="key-tile tool enter" readonly tabindex='-1' @click="keyPress.setChar('Enter')" :style="tileColours.getStyle(0)">
                ENTER
            </button>
        </div>
    </div>
</template>

<style>
    #keyboard {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        padding-bottom: 0.5rem;
    }

    .key-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
    }

    .key-tile {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 5px;
        font-size: 1.3rem;
        font-weight: bolder;
        font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
        user-select: none;
        width: 3rem;
        height: 4rem;
        transition: 0.2s ease;
        -webkit-tap-highlight-color: grey;
    }

    .key-tile:active {
        transform: scale(0.9);
    }

    .tool {
        width: 5rem;
        font-size: 1.5rem;
    }

    .enter {
        font-size: 1.3rem;
    }

    @media only screen and (max-width: 850px) {
        .key-tile {
            font-size: min(2rem, 4vw);
            width: min(4rem, calc(100vw/11.4));
            height: 9vh;
        }

        .tool {
            height: 9vh;
            width: min(8rem, calc(100vw/7));
        }
    }

</style>
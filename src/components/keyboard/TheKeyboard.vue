<script setup>
import KeyboardRow from './KeyboardRow.vue';
import { keyPress } from '@/store/KeyPress';

</script>

<template>
    <div id="keyboard" tabindex="-1">
        <KeyboardRow chars="qwertyuiop" />
        <KeyboardRow chars="asdfghjkl" />
        <div class="key-row">
            <button class="key-tile tool" @click="keyPress.setChar('Backspace')">
                <font-awesome-icon icon="fa-solid fa-delete-left"/>
            </button>
            <KeyboardRow chars="zxcvbnm" />
            <button class="key-tile tool enter" @click="keyPress.setChar('Enter')">
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
        font-family: 'Trebuchet MS', sans-serif;
        width: 3rem;
        height: 4rem;
        transition: 0.2s ease;
    }

    .key-tile:active {
        transform: scale(0.9);
    }

    .tool {
        background-color: white;
        color: rgb(110, 110, 110);
        box-shadow: 0rem 0.25rem 0.25rem rgb(200,200,200);
        width: 5rem;
        font-size: 1.5rem;
    }

    .enter {
        font-size: 1.3rem;
    }

    @media only screen and (max-width: 850px) {
        .key-tile {
            font-size: 4vw;
            width: calc(100vw/11);
            height: 10vh;
        }

        .tool {
            height: 10vh;
            width: calc(100vw/7);
        }
    }

</style>
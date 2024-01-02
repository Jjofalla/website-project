<script setup>

</script>

<template>
    <div class="overlay-wrapper" @click.self="$emit('toggle-overlay')">
        <div class="overlay">
            <button class="close" @click.stop="$emit('toggle-overlay')">
                <font-awesome-icon icon="fa-solid fa-x" size="2x"/>
            </button>
            <h1>How To Play</h1>
            <div>
                <ul class="hints">
                    <li><div class="hint"></div> indicates a letter is not in the word</li>
                    <li><div class="hint near"></div> indicates a letter is in the word, but in the wrong place</li>
                    <li><div class="hint correct"></div> indicates a letter is in the word, and in the correct place</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .overlay-wrapper {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: rgba(255, 255, 255, 0.7);
    }
    .overlay {
        cursor: default;
        position: absolute;
        height: 85%;
        width: 40%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -45%);
        background-color: white;
        border: 1px solid black;
        border-radius: 10px;
    }

    .close {
        position: absolute;
        top: 5%;
        right: 5%;
        background-color: white;
        border: none;
        opacity: 60%;
    }

    .close:hover {
        cursor: pointer;
        opacity: 100%;
    }

    .hints {
        text-align: left;
        list-style: none;
        
    }

    li {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        font-size: 24px;
        margin: 2rem auto;
    }

    .hint {
        box-sizing: border-box;
        border-radius: 2px;
        border: 1px solid black;
        height: 45px;
        width: 45px;
    }

    .correct {
        background-color: green;
    }

    .near {
        background-color: orange;
    }
</style>
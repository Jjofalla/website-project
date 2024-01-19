<script setup>
</script>

<template>
    <div class="tutorial">
        <div class="intro">
            <h1>How To Play</h1>
            <p>
                Played <a href="https://www.nytimes.com/games/wordle">Wordle</a>? This game is a lot harder!
                You have 12 attempts to guess the word, and each attempt will reveal an <i>ordered</i> colour code,
                from green to grey:
            </p>
        </div>
        <div class="examples">
            <span>
                <div class="hint correct"></div>
                <p>One of the letters is in the word, and in the correct place</p>
            </span>
            <span>
                <div class="hint near"></div>
                <p>One of the letters is in the word, but not in the right place</p>
            </span>
            <span>
                <div class="hint incorrect"></div>
                <p>One of the letters is <b>not</b> in the word</p>
            </span>
        </div>
        <div class="controls">
            <p>Use the Arrow Keys or Click on a tile to enter a letter in a certain position</p>
        </div>
    </div>
</template>

<style scoped>
    .tutorial {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        margin: 2rem;
    }

    .intro {
        display: block;
        height: 105px;
    }

    .intro h1 {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: lighter;
        letter-spacing: 2px;
    }

    .intro p {
        position: relative;
        top: -15px;
        align-content: center;
        text-align: left;
        font-size: 16px;
    }

    .examples {
        display: block;
        margin: 0.5rem;
    }

    .examples span {
        gap: 15px;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .hint {
        display: inline-block;
        border-radius: 2px;
        aspect-ratio: 1/1;
        height: 30px;
    }

    .correct {
        background-color: #6B8E23;
        border: #6B8E23;
    }

    .near {
        background-color: orange;
        border: orange;
    }

    .incorrect {
        background-color: lightgray;
        border: lightgray;
    }

</style>
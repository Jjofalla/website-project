<script setup>
</script>

<template>
    <div id="tutorial">
        <div class="intro">
            <h1>How To Play</h1>
            <p>
                Played <a href="https://www.nytimes.com/games/wordle">Wordle</a>? This game is a lot harder!
                You have 12 attempts to guess the word, and each attempt will reveal an <i>ordered</i> colour code,
                from green to grey. 
            </p>
        </div>
        <div class="examples">
            <span>
                <div class="hint correct"></div>
                <p>A green square means one of the letters is in the word, and in the correct position.</p>
            </span>
            <span>
                <div class="hint near"></div>
                <p>An orange square means one of the letters is in the word, but not in the right position.</p>
            </span>
            <span>
                <div class="hint incorrect"></div>
                <p>A grey square means one of the letters is <b>not</b> in the word.</p>
            </span>
        </div>
        <div class="row">
            <div class="tiles">
                <div class="tile" v-for="(n, idx) in Array.from('BOARD')" :key="idx">{{ n }}</div>
            </div>
            <div class="hints">
                <div class="hint" v-for="(cls, idx) in ['correct', 'near', 'near', 'incorrect', 'incorrect']" :key="idx" :class="cls"></div>
            </div>
        </div>
        <p>Significantly, the colour code <b>does not <i>necessarily</i> correspond</b> to the position of the letters in a guess. For example, having entered "board", 
            it is revealed that one of the letters is in the right place, and two of the letters are in the word but not in the right position.</p>
        <div class="controls">
            <span>
                <div class="hint rotate">H</div>
                <div class="pointer">
                    <font-awesome-icon 
                        class="icon" 
                        icon="fa-regular fa-border fa-hand-pointer" 
                        size="2x"/>
                </div>

                <svg width="0" height="0">
                    <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
                        <path d="M0.19,0.2 L0.2,0.11 L0.21,0.1 L0.22,0.08 L0.25,0.05 L0.3,0.02 L0.34,0.03 L0.39,0.04 L0.42,0.06 L0.44,0.08 L0.5,0.33 L1.1,0.37 L1,1 L0.35,1 L0.03,0.69 L0.03,0.6 L0.07,0.55 L0.1,0.54 L0.12,0.53 L0.15,0.53 L0.16,0.53 L0.27,0.6 Z"></path>
                    </clipPath>
                </svg>

                <p>To help you progress, click on the tiles of your previous guesses to mark them with a colour.
                   Click once to make a tile grey, twice for orange, and three times for green.
                </p>
            </span>
        </div>
    </div>
</template>

<style scoped>
@import url('../../assets/main.css');
    #tutorial {
        font-family: 'Lucida Grande', sans-serif;
        font-size: 18px;
        margin: 2.5rem 2.5rem 3rem 2rem;
    }

    .intro {
        display: block;
        height: 105px;
        padding-bottom: 1.5em;
    }

    .intro h1 {
        font-size: 36px;
        font-family: 'Trebuchet MS', sans-serif;
        font-weight: lighter;
        letter-spacing: 2px;
    }

    .intro p {
        position: relative;
        top: -15px;
        align-content: center;
        text-align: left;
        font-size: 18px;
    }

    .examples {
        display: block;
    }

    span {
        position: relative;
        gap: 15px;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 17px;
    }

    .row {
        display: flex;
        height: max-content;
        max-width: fit-content;
        padding: 1rem 0.5rem 0 0.5rem;
        gap: 25px;
        align-items: center;
        justify-content: space-evenly;
    }

    .tiles {
        display: flex;
        height: 73px;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        aspect-ratio: 1/1;
        width: 55px;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 30px;
        font-weight: bolder;
        color: var(--text-dark);
        box-shadow: 0px 4px 4px rgb(200,200,200);
    }

    .hints {
        overflow: hidden;
        display: flex;
        min-width: fit-content;
        gap: 5px;
        align-items: center;
        justify-content: center;
    }

    .controls {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    }

    .controls span {
        font-size: 18px;
        gap: 10px;
    }

    .icon {
        color: black;
        transform: rotate(350deg);
    }

    .hint {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        aspect-ratio: 1/1;
        height: 30px;
    }

    .correct {
        background-color: var(--tile-green);
        border: var(--tile-green);
    }

    .near {
        background-color: var(--tile-orange);
        border: var(--tile-orange);
    }

    .incorrect {
        background-color: var(--tile-lightgrey);
        border: var(--tile-lightgrey);
    }
    
    .rotate {
        height: 70px;
        border-radius: 5px;
        text-align: center;
        font-size: 38px;
        font-family: 'Trebuchet MS', sans-serif;
        font-weight: bolder;
        animation-name: rotate-color;
        animation-duration: 8s;
        animation-iteration-count: infinite;
    }

    @keyframes rotate-color {
        from, to {}
        0%, 20%, 100% {
            background-color: white;
            color: var(--text-dark);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        }
        25%, 45% {
            background-color: var(--tile-lightgrey);
            color: white;
            box-shadow: 0px 4px 4px var(--tile-lightgrey-shadow);
        }
        50%, 70% {
            background-color: var(--tile-orange);
            color: white;
            box-shadow: 0px 4px 4px var(--tile-orange-shadow);
        }
        75%, 95% {
            background-color: var(--tile-green);
            color: white;
            box-shadow: 0px 4px 4px var(--tile-green-shadow);
        }
    }
    .pointer {
        position: absolute;
        bottom: -35%;
        left: 9%;
        background-color: white;
        clip-path: url(#clipPath);
        animation-name: click;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-delay: 0.1s;
    }

    @keyframes click {
        from, to {}
        0%, 75% {
            transform: scale(1.0);
        }
        76%, 100% {
            transform: scale(0.9);
        }
    }

</style>
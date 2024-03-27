<script setup>
import { ref, onMounted } from 'vue';
import TutorialRow from './TutorialRow.vue'
import { tileColours } from '@/store/ManagerStyle';
import { getSettingsManager } from '@/store/ManagerSettings';
import { gsap } from 'gsap'
const sm = getSettingsManager();

const rotateRef = ref(null);

onMounted(() => {
    gsap.to(rotateRef.value, {
        keyframes: {
            "0%": tileColours.value.getStyle(0),
            "22%": tileColours.value.getStyle(0),
            "25%": tileColours.value.getStyle(1),
            "47%": tileColours.value.getStyle(1),
            "50%": tileColours.value.getStyle(2),
            "72%": tileColours.value.getStyle(2),
            "75%": tileColours.value.getStyle(3),
            "97%": tileColours.value.getStyle(3),
            "100%": tileColours.value.getStyle(0),
            easeEach: 'power4.out',
        },
        duration: 8,
        repeat: -1,
    });
});
</script>

<template>
    <div id="tutorial">
        <div id="intro">
            <h1>How To Play</h1>
            <p>
                Played <a href="https://www.nytimes.com/games/wordle" tabindex="-1" :style="{'color': sm.settings.dark ? '#6495ED' : 'blue'}">Wordle</a>? This game is a lot harder!
                You have 12 attempts to guess the word, and each attempt will reveal five squares, marked with a 
                certain colour. 
            </p>
        </div>

        <div id="squares">
            <span>
                <div class="tutorial-hint" :style="{'background-color': tileColours.curr[3]}"></div>
                <p>A green square means one of the letters is in the word, and in the correct position.</p>
            </span>
            <span>
                <div class="tutorial-hint" :style="{'background-color': tileColours.curr[2]}"></div>
                <p>An orange square means one of the letters is in the word, but not in the correct position.</p>
            </span>
            <span>
                <div class="tutorial-hint" :style="{'background-color': tileColours.curr[1]}"></div>
                <p>A grey square means one of the letters is <b>not</b> in the word.</p>
            </span>
        </div>

        <p id="order" class="linebreak" :style="{'border-image-source': sm.settings.dark ? 'linear-gradient(to right, rgb(10,10,10), rgb(210,210,210), rgb(10,10,10))': 'linear-gradient(to right, white, darkslategray, white)'}">
            However, the squares are always presented in the same order: first green, then orange, then grey. 
            Therefore, the position of the squares <b>does not <i>necessarily</i> correspond</b> to the position of the letters in a guess.
        </p>
        <p class="subtitle">Controls</p>

        <div id="controls" class="linebreak" :style="{'border-image-source': sm.settings.dark ? 'linear-gradient(to right, rgb(10,10,10), rgb(210,210,210), rgb(10,10,10))': 'linear-gradient(to right, white, darkslategray, white)'}">
            <span>
                <div class="left-align">
                    <font-awesome-icon class="caret" icon="fa-solid fa-square-caret-left" size="2x"></font-awesome-icon>
                    <font-awesome-icon class="caret" icon="fa-solid fa-square-caret-right" size="2x"></font-awesome-icon>
                </div>
                <p>
                    Use the arrow keys or click on a tile to enter a letter in a certain position. 
                    Press Return to submit a guess.
                </p>
            </span>
            <span>
                <div class="left-align">
                    <div ref="rotateRef" class="tutorial-hint rotate">H</div>
                    <div id="pointer">
                        <font-awesome-icon class="icon" :style="{'color': sm.settings.dark ? 'rgb(210,210,210)' : 'black'}" icon="fa-regular fa-border fa-hand-pointer" size="2x"/>
                    </div>
                </div>
                <p>Click on the tiles of your previous guesses to mark them with a colour.
                   Click once to make a tile grey, twice for orange, and three times for green.
                </p>
            </span>
            <span>
                <div class="left-align">
                    <font-awesome-icon style="color:var(--text-light)" icon="fa-solid fa-eraser" size="2x"/>
                </div>
                <p>
                    Click the eraser at the left of each guess to remove all marks from the tiles on that guess.
                </p>
            </span>
        </div>

        <div id="example">
            <p class="subtitle">An Example</p>
            <TutorialRow 
                :word="'SHARE'" 
                :code="[3, 2, 2, 1, 1]" 
                :styleMap="[3, 3]"/>
            <TutorialRow 
                :word="'SHAPE'" 
                :code="[2, 2, 1, 1, 1]"
                :styleMap="[3, 1]"/>
            <p id="logic">
                Since R is the only letter that has changed in the second guess, R must be in the word, and in the correct place, so it can be marked green.
                Conversely, as R was swapped for P, P cannot be in the word, and can be marked grey.
            </p>
        </div>

        
    </div>
</template>

<style>
@import url('../../assets/main.css');
    #tutorial {
        display: block;
        font-family: 'Lucida Grande', sans-serif;
        margin: 2.5rem 2rem 3rem 2rem;
        height: 85vh;
    }

    .subtitle {
        margin: 1.5rem 0 0.5rem 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
    }

    .linebreak {
        padding-bottom: 1.8rem;
        border: 1px solid;
        border-image-slice: 1;
        border-left: 0;
        border-right: 0;
        border-top: 0;
    }

    #intro {
        display: block;
        height: 6.5rem;
        padding-bottom: 1.5rem;
    }

    #intro h1 {
        font-size: 2.1rem;
        font-family: 'Trebuchet MS', sans-serif;
        font-weight: lighter;
        letter-spacing: 0.125rem;
    }

    #intro p {
        position: relative;
        top: -1rem;
        align-content: center;
        text-align: left;
        font-size: 1.1rem;
    }

    #squares {
        display: block;
    }

    #squares span {
        margin-left: 0.5rem;
        gap: 1rem;
        height: 3.15rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1rem;
    }

    #order {
        font-size: 1.1rem;
    }

    #controls {
        display: block;
        margin-top: -0.5rem;
    }

    #controls span {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.1rem;
        margin-bottom: -0.8rem;
    }

    .left-align {
        gap: 0.5rem;
        min-width: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #controls span p {
        margin-left: 1rem;
    }

    .caret {
        color: darkslategray;
    }

    #pointer {
        position: absolute;
        bottom: 3%;
        left: 10%;
        background-color: transparent;
        animation-name: click;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-delay: 0.1s;
    }

    .icon {
        transform: rotate(350deg);
    }

    #logic {
        font-size: 1.1rem;
        padding-bottom: 2rem;
    }

    .tutorial-hint {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        aspect-ratio: 1/1;
        height: 2rem;
    }

    .rotate {
        height: 4.32rem;
        border-radius: 0.4rem;
        text-align: center;
        font-size: 2.1rem;
        font-family: 'Trebuchet MS', sans-serif;
        font-weight: bolder;
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
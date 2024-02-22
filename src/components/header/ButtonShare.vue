<script setup>
import { getAlertManager } from '@/store/ManagerAlert';
import { getGameState } from '@/store/GameState';
const gs = getGameState();
const { target, numberOfTiles } = getGameState();

async function webShare() {
    const shareBoxes = getShareBoxes();
    const remaining = gs.gameData.finished && gs.gameData.rows.slice(-1)[0] === gs.target ? gs.gameData.rows.length : 'X';
    const result = {
        title: 'Hardle Result',
        text: 'Hardle ' + gs.currentTargetIdx + ' ' + remaining + '/12\n\n' + shareBoxes,
    }

    if (navigator.share) {
        try {
            await navigator.share(result);
        } catch (err) {
            console.error('error: ', err.message);
        }
    } else if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(result.text);
            getAlertManager().handleAlert('Copied Result To Clipboard');
        } catch (err) {
            console.error('error: ', err.message);
        }
    } else {
        getAlertManager().handleAlert("Error: Couldn't Share");
    }
}

function getShareBoxes() {
    const rows = getGameState().gameData.rows;
    const colours = ['\u{1F7E9}', '\u{1F7E8}', '\u{2B1C}'];
    let shareBoxes = [];

    for (let i = 0; i < rows.length; i++) {
        let row = [];
        let hints = calculateHints(rows[i]);
        
        for (let j = 0; j < numberOfTiles; j++) {
            for (let k = 0; k < hints.length; k++) {
                if (j < hints[k]) {
                    row.push(colours[k]);
                    break;
                } 
            }
        }
        shareBoxes.push(row.join(''))
    }
    return shareBoxes.join('\n');
}

function calculateHints(newGuess) {
    let near = 0, correct = 0;
    const uniqueChars = new Set(newGuess);

    for (const ch of uniqueChars) {
        near += Math.min(countOccurrences(ch, newGuess), countOccurrences(ch, target));

        for (let i = 0; i < newGuess.length; i++) {
            if (ch === newGuess[i] && ch === target[i]) {
                near -= 1;
                correct += 1;
            }
        }
    }
    return [correct, near + correct, numberOfTiles];
}

function countOccurrences(ch, str) {
    return str.split(ch).length - 1;
}

</script>

<template>
    <button class="button" tabindex="-1" @click="webShare">
        <font-awesome-icon icon="fa-solid fa-share-nodes"/>
    </button>
</template>

<style scoped>
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
</style>@/store/ManagerAlert
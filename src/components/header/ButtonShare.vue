<script setup>
import ButtonHeading from './ButtonHeading.vue';
import { getAlertManager } from '@/store/ManagerAlert';
import { getGameState } from '@/store/GameState';
const gs = getGameState();
const { target, numberOfTiles } = getGameState();

async function webShare() {
    const shareBoxes = getShareBoxes();
    const remaining = gs.gameData.status === 'WON' ? gs.gameData.rows.length : 'X';
    const result = {
        title: 'Diffikle Result',
        text: 'Diffikle ' + gs.currentTargetIdx + ' ' + remaining + '/12\n\n' + shareBoxes + '\n\n',
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

    if (gs.gameData.status === 'IN_PROGRESS') {
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

    } else {
        for (let i = 0; i < rows.length; i++) {
            let hints = calculateWordleHint(rows[i]);
            shareBoxes.push(hints.join(''))
        }
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

function calculateWordleHint(newGuess) {
    let hints = [];
    const uniqueChars = new Set(newGuess);

    for (const ch of uniqueChars) {
        let near = Math.min(countOccurrences(ch, newGuess), countOccurrences(ch, target));
        
        for (let i = 0; i < newGuess.length; i++) {
            if (ch === newGuess[i] && ch === target[i]) {
                near -= 1;
            }
        }

        for (let i = 0; i < newGuess.length; i++) {
            if (ch === newGuess[i]) {
                if (ch === target[i]) {
                    hints[i] = '\u{1F7E9}';
                } else if (near > 0) {
                    hints[i] = '\u{1F7E8}';
                    near--;
                } else {
                    hints[i] = '\u{2B1C}';
                }
            } 
        }
    }
    return hints;
}

function countOccurrences(ch, str) {
    return str.split(ch).length - 1;
}

</script>

<template>
    <ButtonHeading :overlay="''" :icon="'share-nodes'" @click="webShare"/>
</template>

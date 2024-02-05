<script setup>
import { getGameState } from '@/store/GameState';
import { keyPress } from '@/store/KeyPress';

defineProps({
    char: {
        type: String,
    }
});

</script>

<template>
    <button 
        class="key-tile"
        :style="getGameState().trackKeyboardTile(char)"
        @click="keyPress.setChar(char)"
        readonly
        tabindex="-1"
        >{{ char.toUpperCase() }}
    </button>
</template>

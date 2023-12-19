<script setup>
import { ref, watchEffect } from 'vue';

const tileRef = ref(null);

const props = defineProps({
    tileId: {
        type: Number
    },
    char: {
        type: String
    },
    focused: {
        type: Boolean
    }
});

watchEffect(() => {
    if (props.focused && tileRef.value) {
        tileRef.value.focus();
    }
});

</script>

<template>
    <div class="tile">
        <input 
            ref="tileRef"
            class="text"
            maxlength="1"
            readonly
            :value="char.toUpperCase()"
            @keydown="$emit('on-key-down', $event, tileId)"
            @focus="$emit('on-focus', tileId)"
            @keyup="$emit('on-key-up', $event)"
        >
    </div>
</template>

<style scoped>
    .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
        border: none;
    }

    .text {
        height: 100%;
        width: 100%;
        border: 1px solid black;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 200%;
    }

    .text::selection {
        color: black;
    }


</style>
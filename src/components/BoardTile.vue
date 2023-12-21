<script setup>
import { ref, watchEffect } from 'vue';
import { useStore } from '../store';

const store = useStore();
const props = defineProps({
    tileId: {
        type: Number
    },
    char: {
        type: String
    },
    focused: {
        type: Boolean
    },
    isActive: {
        type: Boolean
    }
});

const emit = defineEmits(['on-key-down', 'on-focus', 'on-key-up'])

const tileRef = ref(null);

watchEffect(() => {
    if (props.focused && tileRef.value) {
        tileRef.value.focus();
    }
});

const handleEvent = (event, eventType='') => {
    if (props.isActive) {
        event.preventDefault();
        if (eventType === 'keydown') {
            emit('on-key-down', event.key, props.tileId)
        } else if (eventType === 'keyup') {
            emit('on-key-up', event.key);
        } 
    } else if (!eventType) {
        store.crossOutChar(props.char);
    }
    
}

</script>

<template>
    <div class="tile">
        <input 
            ref="tileRef"
            class="text"
            :class="{'grey': store.crossedOut(char), 'inactive': !isActive}"
            maxlength="1"
            readonly
            :value="char.toUpperCase()"
            @keydown="handleEvent($event, 'keydown')"
            @keyup="handleEvent($event, 'keyup')"
            @focus="$emit('on-focus', tileId)"
            @click="handleEvent($event)"
        >
    </div>
</template>

<style scoped>
    .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        width: 60px;
        border: none;
    }

    .text {
        height: 100%;
        width: 100%;
        border: 1px solid black;
        border-radius: 2px;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        font-family: Tahoma, Verdana, sans-serif;
        font-size: 38px;
    }

    .text:focus {
        border-radius: 2px;
        outline: 1px solid black;
    }

    .text::selection {
        color: black;
    }

    .grey {
        color: white;
        background-color: grey;
    }

    .grey::selection {
        color: white;
    }

    .inactive {
        opacity: 50%;
    }



</style>
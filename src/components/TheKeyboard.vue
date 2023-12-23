<script setup>
import KeyboardRow from './KeyboardRow.vue';
</script>

<template>
    <div class="keyboard">
        <KeyboardRow chars="qwertyuiop" />
        <KeyboardRow chars="asdfghjkl" />
        <KeyboardRow chars="zxcvbnm" />
    </div>
</template>

<style scoped>
    .keyboard {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
    }
</style>
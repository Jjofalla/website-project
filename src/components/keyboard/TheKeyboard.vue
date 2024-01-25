<script setup>
import KeyboardRow from './KeyboardRow.vue';
</script>

<template>
    <div id="keyboard" tabindex="-1">
        <KeyboardRow chars="qwertyuiop" />
        <KeyboardRow chars="asdfghjkl" />
        <KeyboardRow chars="zxcvbnm" />
    </div>
</template>

<style scoped>
    #keyboard {
        width: 100%;
        padding-bottom: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7px;
    }
</style>
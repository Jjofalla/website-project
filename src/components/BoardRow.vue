<script setup>
import GuessBox from './GuessBox.vue';
import OutputBox from './OutputBox.vue';
</script>

<template>
    <div class="row">
        <OutputBox />
        <GuessBox />
    </div>
</template>

<style scoped>
    .row {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border: 2px solid red;
    }
    
</style>
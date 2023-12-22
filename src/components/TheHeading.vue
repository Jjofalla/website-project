<script setup>
import { getGameState } from '@/store/GameState';

</script>

<template>
    <div class="heading">
        <h1 class="title">Wordle</h1>
        <button class="btn" @click="getGameState().changeGameState()">Reset</button>
    </div>
</template>

<style scoped>

@media (min-width: 1024px) {
    .heading {
        display: flex;
        position: relative;
        align-items: center;
        text-align: center;
        justify-content: center;
        border-bottom: 1px solid black;
        height: 100px;
    }
}

.title {
    font-family: Tahoma, Verdana, sans-serif;
    font-size: 45px;
    font-weight: lighter;
}

.btn {
    position: absolute;
    aspect-ratio: 7/5;
    top: 0;
    right: 0;
}

</style>
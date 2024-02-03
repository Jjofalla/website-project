<script setup>
import TheHeading from './components/header/TheHeading.vue'
import TheBoard from './components/board/TheBoard.vue'
</script>

<template>
  <div id="body" @mousedown.prevent>
    <TheHeading />
    <TheBoard />
  </div>
</template>

<style scoped>
  #body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }
</style>

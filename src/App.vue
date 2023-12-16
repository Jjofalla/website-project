<script setup>
import TheHeading from './components/TheHeading.vue'
import TheBoard from './components/TheBoard.vue'
</script>

<template>
  <div class="heading">
    <TheHeading />
  </div>
  <div class="body">
    <TheBoard />
  </div>
</template>

<style scoped>

@media (min-width: 1024px) {
  .heading {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid black;
  }

  .body {
    display: flex;
    justify-content: center;
    padding: 5em;
    border: 5px dotted dodgerblue
  }
}
</style>

<script setup>

defineProps({
  highlight: {
    type: Boolean
  },
  char: {
    type: String
  },
});

</script>

<template>
    <div :class="{'bold': highlight, 'tile': true}">
        <h1 class="text">{{ char.toUpperCase() }}</h1>
        <!-- <input class="input" maxlength="1"> -->
    </div>
</template>

<style scoped>
    .tile {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 50px;
      border: 2px solid black;
    }

    .bold {
      border: 5px solid blue;
    }

    .text {
      /* overflow: hidden; */
      /* border: 2px solid black; */
      /* width: 100%;
      height: 100%; */
      text-align: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 200%;
    }
    
</style>
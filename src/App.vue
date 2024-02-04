<script setup>
import TheHeading from './components/header/TheHeading.vue'
import TheBoard from './components/board/TheBoard.vue'
import TheOverlay from './components/header/TheOverlay.vue';
import { getOverlayManager } from '@/store/OverlayManager';
</script>

<template>
  <div id="body" @mousedown.prevent>
    <TheHeading />
    <TheBoard />
    <Transition name="overlay">
        <TheOverlay v-show="getOverlayManager().overlayEnabled"/>
    </Transition>
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

  .overlay-enter-active {
      animation: fadeIn 0.4s ease;
      background: rgba(0, 0, 0, .2)
  }

  .overlay-leave-active {
      animation: fadeOut 0.3s ease;
      background: rgba(0, 0, 0, .0)
  }

  @keyframes fadeIn {
    0% {
        background: rgba(0, 0, 0, .0);
    }
    100% {
        background: rgba(0, 0, 0, 0.2);
    }
  }

  @keyframes fadeOut {
    0% {
        background-color: rgba(0, 0, 0, 0.2);
    }
    100% {
        background-color: rgba(0, 0, 0, .0);
    }
  }
  
</style>

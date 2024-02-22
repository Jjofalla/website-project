<script setup>
import TheHeading from './components/header/TheHeading.vue'
import TheBoard from './components/board/TheBoard.vue'
import TheOverlay from './components/header/TheOverlay.vue';
import BoardAlert from './components/board/BoardAlert.vue';
import { getOverlayManager } from '@/store/ManagerOverlay';
import { getAlertManager } from '@/store/ManagerAlert';
</script>

<template>
  <div id="wrapper" @mousedown.prevent>
    <div id="body">
      <TheHeading />
      <TheBoard />
      <Transition name="overlay">
          <TheOverlay v-show="getOverlayManager().overlayEnabled"/>
      </Transition>
      <Transition name="alert">
        <BoardAlert v-show="getAlertManager().alertEnabled"/>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
#wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
}

#body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
}


.dark {
    background-color: rgb(40, 40, 40);
    color: rgb(180, 180, 180);
}


.overlay-enter-active {
    animation: overlayFadeIn 0.4s ease;
    background: rgba(0, 0, 0, .2)
}

.overlay-leave-active {
    animation: overlayFadeOut 0.3s ease;
    background: rgba(0, 0, 0, .0)
}

.alert-enter-active {
    animation: alertFadeIn 0.1s ease;
}

.alert-leave-active {
    animation: alertFadeOut 0.2s ease;
}

@keyframes overlayFadeIn {
  0% {
      background: rgba(0, 0, 0, .0);
  }
  100% {
      background: rgba(0, 0, 0, 0.2);
  }
}

@keyframes overlayFadeOut {
  0% {
      background-color: rgba(0, 0, 0, 0.2);
  }
  100% {
      background-color: rgba(0, 0, 0, .0);
  }
}

@keyframes alertFadeIn {
    0% {
        opacity: 0%;
    }
    100% {
        opacity: 100%;
    }
}

@keyframes alertFadeOut {
    0% {
        opacity: 100%;
    }
    100% {
        opacity: 0%;
    }
}
  
</style>

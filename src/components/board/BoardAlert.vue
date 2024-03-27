<script setup>
import { getAlertManager } from '@/store/ManagerAlert';
</script>

<template>
    <div id="alert">
        <h1>{{ getAlertManager().message }}</h1>
    </div>
</template>

<style>
    #alert {
        position: fixed;
        justify-content: center;
        height: max-content;
        top: 8vh;
        padding: 0.8rem 1.2rem 0.8rem 1.2rem;
        background-color: darkslategray;
        border: 1px solid darkslategray;
        border-radius: 0.3rem;
        box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
        z-index: 10;
    }

    #alert h1 {
        color: white;
        letter-spacing: 1px;
        font-size: 1.2rem;
    }

    .shake {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    }

    @keyframes shake {
        10%, 90% {
            transform: translate(-1px, 0);
        }
        
        20%, 80% {
            transform: translate(0.125rem, 0);
        }

        30%, 50%, 70% {
            transform: translate(-0.25rem, 0);
        }

        40%, 60% {
            transform: translate(0.25rem, 0);
        }
    }

</style>

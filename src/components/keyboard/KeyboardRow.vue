<script setup>
import KeyboardTile from './KeyboardTile.vue'

defineProps({
    chars: {
        type: String,
    }
});

</script>

<template>
    <div class="row">
        <KeyboardTile v-for="(ch, idx) in Array.from(chars)" :key="idx" :char="ch"/>
    </div>
</template>

<style scoped>
    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
    }

</style>
<script setup>
import KeyboardTile from './KeyboardTile.vue'

defineProps({
    chars: {
        type: String,
    }
});

</script>

<template>
    <div class="key-row">
        <KeyboardTile v-for="(ch, idx) in Array.from(chars)" :key="idx" :char="ch"/>
    </div>
</template>

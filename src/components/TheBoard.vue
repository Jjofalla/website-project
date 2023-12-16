<script setup>
import BoardRow from './BoardRow.vue';
</script>

<template>
    <div class="table">
        <BoardRow />
        <BoardRow />
        <BoardRow />
        <BoardRow />
        <BoardRow />
    </div>
</template>

<style scoped>
    .table {
        padding: 3em;
        width: 1024px;
        border: 5px solid green;
    }
</style>
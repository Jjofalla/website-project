<script setup>
import BoardRow from './BoardRow.vue';
</script>

<template>
    <div class="table">
        <BoardRow />
    </div>
</template>

<style scoped>
    .table {
        margin-top: 5%;
        height: 50%;
        border: 5px solid black;
        justify-content: space-evenly;
        padding: 2em;
        width: 1024px;
        /* border: 5px solid green; */
    }
</style>

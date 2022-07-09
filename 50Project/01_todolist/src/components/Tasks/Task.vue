<template>
    <div class="taskList" >
        <p @click="$emit('changeCondition')">
            {{ input }}
        </p>
        <div>
            <i @click="$emit('showFunc')" class="icon1"></i>
        </div>
    </div>
</template>

<script src="./Task.js"></script>
<style src="./Task.css" scoped></style>
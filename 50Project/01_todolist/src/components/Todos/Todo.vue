<template>
    <div class="container">
        <div class="todo">
            <div>
                <i></i>
                <h1>To Do List</h1>
            </div>
            <ul>
                <li>All</li>
                <li>Done</li>
                <li>Undone</li>
            </ul>
        </div>
        <div class="input-container">
            <input type="text" v-model="inputArticle" placeholder="Add a new task">
            <button class="btn" @click="add">Add</button>
            <!-- <button class="btn">Edit</button> -->
        </div>
        <div class="task">
            <Task v-for="(val ,index) in todoList" :key='index' :input='val'/>
        </div>
    </div>
    
</template>

<script src="./Todo.js"></script>

<style src="./Todo.css"></style>

<template>
    <div class="container">
        <div class="todo">
            <div>
                <i></i>
                <h1>To Do List</h1>
            </div>
            <ul>
                <li @click="filter = 'all'" class="active">All</li>
                <li @click="filter = 'done'">Done</li>
                <li @click="filter = 'undone'">Undone</li>
            </ul>
        </div>
        <div class="input-container">
            <input
                type="text"
                v-model="inputArticle"
                placeholder="Add a new task"
            />
            <button class="btn" @click="add">Add</button>
            <!-- <button class="btn">Edit</button> -->
        </div>
        <div class="task">
            <Task v-for="(val, index) in todoList" 
            :key="index" 
            :input="val.todo"
            :condition="val.isTodo"
            
            @changeCondition="editTodo(index)"
            @showFunc='todoList.splice(index, 1)'
            v-show="filter === 'all' ? true : (filter === 'done' ? !val.isTodo : val.isTodo)"/>
        </div>
    </div>
</template>

<script src="./Todo.js"></script>

<style src="./Todo.css"></style>

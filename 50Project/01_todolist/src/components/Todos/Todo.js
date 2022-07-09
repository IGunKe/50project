import Task from "../Tasks/Task.vue";

export default {
    name: 'Todo',
    components: {
        Task
    },
    data() {
        return {
            filter: 'all',
            inputArticle: '',
            todoList: []
        }
    },
    methods: {
        add() {
            //alert(this.inputArticle);
            this.todoList.push({ todo: this.inputArticle , isTodo: false});
            this.inputArticle = '';
        },
        editTodo(index) {
            
            this.todoList[index].isTodo = !this.todoList[index].isTodo;
        }
    }
}
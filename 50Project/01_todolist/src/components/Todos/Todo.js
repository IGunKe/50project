import Task from "../Tasks/Task.vue";

export default {
    name: 'Todo',
    components: {
        Task
    },
    data() {
        return {
            inputArticle: '',
            todoList: []
        }
    },
    methods: {
        add() {
            //alert(this.inputArticle);
            this.todoList.push(this.inputArticle);
            this.inputArticle = '';
        }
    }
}
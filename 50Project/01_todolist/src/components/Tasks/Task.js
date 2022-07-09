import Button from '../Buttons/Button'

export default {
    name: 'Task',
    components: {
        Button
    },
    props: {
        input: String,
        condition: Boolean
    },
    watch: {
        condition: function() {
            //console.log(this);
            // console.log(this.$el.firstChild);
            if (this.condition === true) {
                this.$el.firstChild.classList.add('active');
            } else {
                this.$el.firstChild.classList.remove('active');
            }
        }
    }
};
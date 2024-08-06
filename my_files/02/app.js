const App = {
    data() {
        return {
            placeholder: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value;
        },

        addNewNote() {
            if (!this.inputValue) {
                return;
            }
            this.notes.push(this.inputValue);
            this.inputValue = '';
        },

        removeNote(idx) {
            this.notes.splice(idx, 1);
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')
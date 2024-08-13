// import './assets/main.css'
//
// import { createApp } from 'vue'
// import App from './App.vue'
//
// createApp(App).mount('#app')

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
            if (this.inputValue === '') {
                return;
            }
            this.notes.push(this.inputValue);
            this.inputValue = '';
        },

        toUpperCase(string) {
            return string.toUpperCase();
        },

        removeNote(idx) {
            this.notes.splice(idx, 1);
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2;
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
            console.log('input Value changed', value);
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')
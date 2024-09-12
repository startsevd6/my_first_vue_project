const h = Vue.h
let currentStep = 1

const app = Vue.createApp({
    data() {
        return {
            currentStep: 1,
            title: 'План по изучению Vue.js',
            description: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем ' +
                'реактивное приложение, в процессе разработки которого разберём всю базу фреймворка.'
        }
    },
    render() {
        let h1 = h('h1', {}, this.title)

        let p = h('p', {}, this.description)

        const descriptionsOfChildrenElements = ['Основы', 'Компоненты', 'Роутер', 'Vuex', 'Composition']
        const children = []
        for (let i = 0; i < descriptionsOfChildrenElements.length; i++) {
            children.push(
                h('a', {
                    style: 'display: flex; align-items: center; gap:10px;'
                }, [
                    h('div', {
                        class: 'circle',
                        style: 'background: #CCC;'
                    }, i + 1),
                    h('span', {
                        class: 'a',
                        style: 'color: #333;'
                    }, descriptionsOfChildrenElements[i])
                ])
            );
        }
        let divWithStagesOfLearning = h('div', {
            style: 'width: calc(100% - 1rem); display: flex; justify-content: space-between; gap:30px;'
        }, children)

        let backButton = h('button', {
            class: {
                'btn': 1===1,
                disabled: currentStep < 2
            },
            onclick: () => {
                this.moveToPreviousStep()
            }
        }, 'Назад')
        let forwardButton = h('button', {
            class: 'btn primary',
            onclick: () => {
                this.moveToNextStep()
            }
        }, 'Вперёд')
        let buttons = h('div', {
            style: 'padding-top: 20px'
        }, [backButton, forwardButton])

        return h('div', {
            class: 'container'
        }, [h1, p, divWithStagesOfLearning, buttons])
    },
    methods: {
        moveToNextStep() {
            currentStep++

            if (currentStep > 1) {
                this.$forceUpdate()
            }
            if (currentStep > 5) {
                alert('Поздравляем вы изучили основные темы Vue')
            }

            console.log(currentStep)
        },

        moveToPreviousStep() {
            currentStep--

            if (currentStep < 2) {
                this.$forceUpdate()
            }
            if (currentStep < 1) {
                currentStep = 1
                alert('До основ нет этапов.')
            }

            console.log(currentStep)
        }
    }
})

app.mount('#app')
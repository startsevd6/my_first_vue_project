const h = Vue.h
let currentStep = 1

const app = Vue.createApp({
    data() {
        return {
            currentStep: 1,
            title: 'План по изучению Vue.js',
            description: [
                'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберём всю базу фреймворка.',
                'Один из самых важных блоков в курсе, где вы узнаете всё о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.',
                'В данном блоке вы узнаете всё о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.',
                'В блоке вы узнаете все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Всё на практике.',
                'Одним из наиболее важных обновлений во Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете всё, чтобы полностью пользоваться данным синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'
            ]
        }
    },
    render() {
        let h1 = h('h1', {}, this.title)

        let p = h('p', {}, this.description[currentStep - 1])

        const descriptionsOfChildrenElements = ['Основы', 'Компоненты', 'Роутер', 'Vuex', 'Composition']
        const children = []
        for (let i = 0; i < descriptionsOfChildrenElements.length; i++) {
            children.push(
                h('a', {
                    style: 'display: flex; align-items: center; gap:10px;'
                }, [
                    h('div', {
                        class: {
                            'circle': 1===1,
                            'passed': currentStep >= i + 1,
                            'active': currentStep === i + 1
                        }
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

            this.$forceUpdate()
            if (currentStep > 5) {
                alert('Поздравляем вы изучили основные темы Vue')
            }

            console.log(currentStep)
        },

        moveToPreviousStep() {
            currentStep--

            this.$forceUpdate()
            if (currentStep < 1) {
                currentStep = 1
                alert('До основ нет этапов.')
            }

            console.log(currentStep)
        }
    }
})

app.mount('#app')
const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title: 'План по изучению Vue.js',
            description: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем ' +
                'реактивное приложение, в процессе разработки которого разберём всю базу фреймворка.'
        }
    },
    render() {
        const descriptionsOfChildrenElements = ['Основы', 'Компоненты', 'Роутер', 'Vuex', 'Composition']
        const children = []
        for (let i = 0; i < descriptionsOfChildrenElements.length; i++) {
            children.push(
                h('a', {}, [
                    h('div', {
                        class: 'circle primary'
                    }, i),
                    h('span', {
                        class: 'a'
                    }, descriptionsOfChildrenElements[i])
                ])
            );
        }
        return h('div', {
            class: 'card'
        }, children)
    }
})

app.mount('#app')
<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="toggle">{{ isOpenLocal ? 'Закрыть' : 'Открыть' }}</button>
    <div v-if="isOpenLocal">
      <hr />
      <p v-if="isOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores autem consequuntur debitis dicta dolore doloremque dolores, earum exercitationem id impedit molestiae non, nostrum optio placeat quam quasi reprehenderit repudiandae sit, soluta ullam veniam voluptates!</p>
      <button class="btn primary" @click="mark" v-if="!wasRead">Прочесть новость</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      wasRead: Boolean,
      title: {
        type: String,
        required: true
      },
      emits: {
        'open-news': null,
        'read-news'(id) {
          if (id) {
            return true
          }
          console.warn('Нет параметра id для emit read-news')
          return false
        }
      },
      id: {
        type: Number,
        required: true
      },
      isOpen: {
        type: Boolean,
        required: false,
        default: false,
        validator(value) {
          console.log(value)
          return true
        }
      }
    },
    data() {
      return {
        isOpenLocal: this.isOpen
      }
    },
    watch: {
      isOpen(newVal) {
        this.isOpenLocal = newVal
      }
    },
    methods: {
      toggle() {
        this.isOpenLocal = !this.isOpenLocal;
        this.$emit('update:isOpen', this.isOpenLocal);
        if (this.isOpenLocal) {
          this.$emit('open-news')
        }
      },
      mark() {
        this.isOpenLocal = false
        this.$emit('read-news', this.id)
      }
    }
  }
</script>
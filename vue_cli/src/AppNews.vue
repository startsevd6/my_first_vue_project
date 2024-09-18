<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="toggle">{{ isOpenLocal ? 'Закрыть' : 'Открыть' }}</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores autem consequuntur debitis dicta dolore doloremque dolores, earum exercitationem id impedit molestiae non, nostrum optio placeat quam quasi reprehenderit repudiandae sit, soluta ullam veniam voluptates!</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
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
      }
    }
  }
</script>
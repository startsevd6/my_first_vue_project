<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: {{ openRate }}</span>
    </div>
  </div>

  <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      v-on:open-news="openRate++"
      v-model:isOpen="item.isOpen"
  ></app-news>
</template>

<script>

import appNews from "@/AppNews.vue";

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate : 0,
      isOpen: false,
      news: [
        {
          title: 'Выборы в США 5.10.24',
          id: 1,
          isOpen: false
        },
        {
          title: 'Vue 4 ещё не вышел',
          id: 2,
          isOpen: false
        }
      ]
    }
  },
  components: {
    'app-news': appNews
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

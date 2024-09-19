<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
    </div>
  </div>

  <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      @open-news="openNews"
      @read-news="readNews"
      v-model:isOpen="item.isOpen"
      :was-read="item.wasRead"
  ></app-news>
</template>

<script>

import appNews from "@/AppNews.vue";

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate : 0,
      readRate : 0,
      isOpen: false,
      news: [
        {
          title: 'Выборы в США 5.10.24',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Vue 4 ещё не вышел',
          id: 2,
          isOpen: false,
          wasRead: false
        }
      ]
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
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

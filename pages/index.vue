<template>
  <div>
    <section />
    <ArticlesList :articles="loadedArticles" />
  </div>
</template>

<script>
import ArticlesList from '@/components/Articles/ArticlesList'
export default {
  components: {
    ArticlesList
  },
  computed: {
    loadedArticles() {
      return this.$store.getters.loadedArticles
    }
  }
}
</script>

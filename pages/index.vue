<template>
  <div>
    <section />
    <ArticlesList :articles="loadedArticles" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedArticles() {
      return this.$store.getters.loadedArticles
    }
  }
}
</script>

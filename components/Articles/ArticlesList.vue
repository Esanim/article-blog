<template>
  <section class="lg:flex lg:flex-wrap lg:justify-around">
    <ArticlePreview v-for="article in articles"
                    :key="article.id"
                    :id="article.id"
                    :is-admin="isAdmin"
                    :thumbnail="article.thumbnail"
                    :title="article.title"
                    :preview-text="article.previewText"
                    class="block mb-8" />
  </section>
</template>

<script>
import ArticlePreview from '@/components/Articles/ArticlePreview'
export default {
  components: {
    ArticlePreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>

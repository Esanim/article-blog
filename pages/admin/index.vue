<template>
  <div>
    <section>
      <AppButton class="btn-main--big float-right mt-1 lg:mt-0" @click="$router.push('admin/new-article')">+ Create Article</AppButton>
    </section>
    <section class="clearfix">
      <h1 class="text-2xl lg:text-3xl pb-4 text-purple">Existing articles</h1>
      <ArticleList :articles="loadedArticles" is-admin />
    </section>
  </div>
</template>

<script>
import ArticleList from '@/components/Articles/ArticlesList'
import AppButton from '@/components/UI/AppButton'
export default {
  layout: 'admin',
  components: {
    ArticleList,
    AppButton
  },
  computed: {
    loadedArticles() {
      return this.$store.getters.loadedArticles
    }
  }
}
</script>

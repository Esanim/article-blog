<template>
  <div>
    <section>
      <AdminArticleForm :article="loadedArticle" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminArticleForm from '@/components/Admin/AdminArticleForm'
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminArticleForm
  },
  async asyncData(context) {
    let data = await context.app.$axios.$get(
      process.env.baseUrl + '/articles/' + context.params.articleId + '.json'
    )
    return {loadedArticle: {...data, id: context.params.articleId}}
  },
  methods: {
    onSubmitted(editedArticle) {
      this.$store
        .dispatch('editArticle', editedArticle)
        .then(() => this.$router.push('/admin'))
    }
  }
}
</script>

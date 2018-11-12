<template>
  <div>
    <section>
      <AdminArticleForm :article="loadedArticle" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminArticleForm from '@/components/Admin/AdminArticleForm'
import axios from 'axios'
export default {
  layout: 'admin',
  components: {
    AdminArticleForm
  },
  async asyncData(context) {
    let {data} = await axios.get(
      'https://nuxt-blog-a71f9.firebaseio.com/articles/' +
        context.params.articleId +
        '.json'
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

<template>
  <div>
    <section >
      <AdminArticleForm @submit="onSubmitted" />
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
  methods: {
    onSubmitted(articleData) {
      this.$store
        .dispatch('addArticle', articleData)
        .then(() => this.$router.push('/admin'))
    }
  }
}
</script>

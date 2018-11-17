<template>
  <div>
    <section >
      <AdminArticleForm @submit="onSubmitted" />
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
  methods: {
    onSubmitted(articleData) {
      this.$store
        .dispatch('addArticle', articleData)
        .then(() => this.$router.push('/admin'))
    }
  }
}
</script>

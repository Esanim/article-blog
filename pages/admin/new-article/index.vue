<template>
  <div class="admin-new-article-page">
    <section class="new-article-form">
      <AdminArticleForm />
    </section>
  </div>
</template>

<script>
import AdminArticleForm from '@/components/Admin/AdminArticleForm'
export default {
  layout: 'admin',
  components: {
    AdminArticleForm
  }
}
</script>

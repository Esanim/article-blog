<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminArticleForm :post="loadedArticle"/>
    </section>
  </div>
</template>

<script>
import AdminArticleForm from '@/components/Admin/AdminArticleForm'
export default {
  layout: 'admin',
  components: {
    AdminArticleForm
  },
  data() {
    return {
      loadedArticle: {
        author: 'Minase',
        title: 'My article',
        content: 'Super smth',
        thumbnailLink:
          'https://images.unsplash.com/photo-1541569580307-49bed34d7d48?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3719b19051bfa736f3a8301f78e13db8&auto=format&fit=crop&w=1567&q=80'
      }
    }
  }
}
</script>

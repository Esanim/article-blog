<template>
  <div>
    <section>
      <AppButton class="btn-main--big float-right mt-1 lg:mt-0" @click="$router.push('admin/new-article')">+ Create Article</AppButton>
      <AppButton class="btn-main clear float-right block mt-1 lg:mt-2" @click="onLogout">Logout</AppButton>
    </section>
    <section>
      <h1 class="clear text-2xl lg:text-3xl pt-3 lg:pt-0 pb-4 text-purple">Existing articles</h1>
      <ArticlesList :articles="loadedArticles" is-admin />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedArticles() {
      return this.$store.getters.loadedArticles
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>

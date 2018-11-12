<template>
  <div class="single-article-page">
    <section class="article">
      <h1 class="article-title">{{ loadedArticle.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedArticle.updatedDate | date }}</div>
        <div class="post-detail">Written by {{ loadedArticle.author }}</div>
      </div>
      <p class="post-content">{{ loadedArticle.content }}</p>
    </section>
    <section class="article-feedback">
      <p>Let me know what you think about the article, send a mail to <a href="meme@meme" /> meme </p>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const data = await context.app.$axios.$get(
      process.env.baseUrl + '/articles/' + context.params.id + '.json'
    )
    return {loadedArticle: data}
  }
}
</script>

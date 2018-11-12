<template>
  <div class="single-article-page">
    <section class="article">
      <h1 class="article-title">{{ loadedArticle.title }}</h1>
      <div class="article-details">
        <div class="article-detail">{{ loadedArticle.previewText }}</div>
        <div class="article-detail">{{ loadedArticle.author }}</div>
      </div>
      <p>{{ loadedArticle.content }}</p>
    </section>
    <section class="article-feedback">
      <p>Let me know what you think about the article, send a mail to <a href="meme@meme" /> meme </p>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData(context) {
    const {data} = await axios.get(
      'https://nuxt-blog-a71f9.firebaseio.com/articles/' +
        context.params.id +
        '.json'
    )
    return {loadedArticle: data}
  }
}
</script>

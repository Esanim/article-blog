<template>
  <div class="bg-white border-purple-lightest border-2 p-6">
    <section>
      <h1 class="text-3xl opacity-75 text-purple-dark">{{ loadedArticle.title }}</h1>
      <div class="flex flex-col md:flex-row justify-between pt-2 pb-10 text-sm text-grey-darker">
        <div>Last updated on {{ loadedArticle.updatedDate | date }}</div>
        <div class="leading-loose md:leading-none">Written by {{ loadedArticle.author }}</div>
      </div>
      <p class="px-2">{{ loadedArticle.content }}</p>
    </section>
    <section class="mt-6 text-sm text-grey-darker">
      <p>Let me know what you think about the article, send a mail to <a href="test@test" /> test@test </p>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    if (context.payload) {
      // only when static generated
      return {
        loadedArticle: context.payload.articleData
      }
    }
    const data = await context.app.$axios.$get(
      process.env.baseUrl + '/articles/' + context.params.id + '.json'
    )
    return {loadedArticle: data}
  }
}
</script>

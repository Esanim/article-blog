<template>
  <nuxt-link :to="articleLink" class="lg:m-8 lg:flex">
    <div :style="{backgroundImage: 'url(' + thumbnail + ')'}"
         class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
         title="Woman holding a mug"/>
    <div class="lg:w-64 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-black font-bold text-xl mb-2 text-purple">{{ title }}</div>
        <p class="text-grey-darker text-base">{{ previewText }}</p>
      </div>
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4"
             src="https://avatarfiles.alphacoders.com/115/115265.png" alt="Avatar of Minase">
        <div class="text-sm">
          <p class="text-black leading-none">Minase</p>
          <p class="text-grey-dark">Nov 18</p>
        </div>
      </div>
    </div>
  </nuxt-link>


</template>

<script>
export default {
  name: 'ArticlePreview',
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    articleLink() {
      return this.isAdmin ? '/admin/' + this.id : '/articles/' + this.id
    }
  }
}
</script>

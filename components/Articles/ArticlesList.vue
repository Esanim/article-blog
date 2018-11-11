<template>
  <section class="lg:flex lg:flex-wrap lg:justify-around">
    <ArticlePreview id="1"
                    :is-admin="isAdmin"
                    class="block mb-8"
                    thumbnail="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-the-red-flowers-arun-sivaprasad.jpg"
                    title="First article!"
                    preview-text="this is the first artciel" />
    <ArticlePreview id="2"
                    :is-admin="isAdmin"
                    class="block mb-8"
                    thumbnail="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-the-red-flowers-arun-sivaprasad.jpg"
                    title="Second article!"
                    preview-text="this is the second artciel" />
    <ArticlePreview id="3"
                    :is-admin="isAdmin"
                    class="block mb-8"
                    thumbnail="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-the-red-flowers-arun-sivaprasad.jpg"
                    title="Third artiFcle!"
                    preview-text="this is the third artciel111111111111111111" />
    <ArticlePreview id="4"
                    :is-admin="isAdmin"
                    class="block mb-8"
                    thumbnail="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-the-red-flowers-arun-sivaprasad.jpg"
                    title="Fourth article!"
                    preview-text="this is the fourth artciel" />
    <ArticlePreview id="5"
                    :is-admin="isAdmin"
                    class="block mb-8"
                    thumbnail="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-the-red-flowers-arun-sivaprasad.jpg"
                    title="Fifth article!"
                    preview-text="this is the fifth artciel" />
  </section>
</template>

<script>
import ArticlePreview from '@/components/Articles/ArticlePreview'
export default {
  components: {
    ArticlePreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <form class="mt-8" @submit.prevent="onSave">
    <AppControlInput v-model="editedArticle.author">Author Name</AppControlInput>

    <AppControlInput v-model="editedArticle.title">Title</AppControlInput>

    <AppControlInput v-model="editedArticle.thumbnailLink">Thumbnail Link</AppControlInput>

    <AppControlInput
      v-model="editedArticle.content"
      control-type="textarea">Content</AppControlInput>

    <AppButton class="float-right" type="submit">Save</AppButton>

    <AppButton
      type="button"
      class="float-left md:float-right mr-6"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    article: {
      type: Object,
      required: false,
      default: Object
    }
  },
  data() {
    return {
      editedArticle: this.article
        ? {...this.article}
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: ''
          }
    }
  },
  methods: {
    onSave() {},
    onCancel() {
      this.$router.push('/admin')
    }
  }
}
</script>

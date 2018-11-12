<template>
  <form class="mt-8" @submit.prevent="onSave">
    <AppControlInput v-model="editedArticle.author">Author Name</AppControlInput>

    <AppControlInput v-model="editedArticle.title">Title</AppControlInput>

    <AppControlInput v-model="editedArticle.thumbnail">Thumbnail Link</AppControlInput>

    <AppControlInput
      v-model="editedArticle.content"
      control-type="textarea">Content</AppControlInput>

    <AppControlInput
      v-model="editedArticle.previewText"
      control-type="textarea">Preview</AppControlInput>

    <AppButton class="float-right" type="submit">Save</AppButton>

    <AppButton
      type="button"
      class="float-left md:float-right mr-6"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: false,
      default: Object
    }
  },
  data() {
    console.log(this.article)
    return {
      editedArticle: this.article
        ? {...this.article}
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: ''
          }
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedArticle)
    },
    onCancel() {
      this.$router.push('/admin')
    }
  }
}
</script>

<template>
  <form class="w-full md:max-w-xl">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          <slot />
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          v-if="controlType === 'input'"
          v-bind="$attrs"
          :value="value"
          class="input-text"
          @input="$emit('input', $event.target.value)" >
        <textarea
          v-if="controlType === 'textarea'"
          :value="value"
          class="input-text"
          rows="10"
          @input="$emit('input', $event.target.value)"/>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

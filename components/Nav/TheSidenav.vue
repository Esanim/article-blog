<template>
  <div class="w-full h-full">
    <div
      v-if="show"
      class="fixed w-full h-full bg-black opacity-75 z-50 pin-l pin-t border-box"
      @click="$emit('close')"/>
    <transition name="slide-side">
      <div
        v-if="show"
        class="h-full w-64 bg-white z-50 fixed pin-t pin-l p-12">
        <ul
          class="list-reset m-0"
          @click="$emit('close')">
          <li class="mx-12"><nuxt-link class="no-underline text-black text-2xl hover:text-red focus:text-red" to="/articles">Blog</nuxt-link></li>
          <li class="mx-12"><nuxt-link class="no-underline text-black text-2xl hover:text-red focus:text-red" to="/contact">About</nuxt-link></li>
          <li class="mx-12"><nuxt-link class="no-underline text-black text-2xl hover:text-red focus:text-red" to="/admin">Admin</nuxt-link></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheSidenav',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>

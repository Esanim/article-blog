<template>
  <nav class="flex items-center justify-between flex-wrap bg-white py-6 px-10 w-full fixed pin-t h-32 bg-purple-dark z-50 theheader">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="flex items-center flex-no-shrink text-white mr-6 cursor-pointer" @click="goToHomePage()">
      <svg class="fill-current h-8 w-8 mr-2" width="54"
           height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
      <ul class="text-lg lg:flex-grow">
        <li class="nav-link mr-4">
          <nuxt-link class="nav-link-a" to="/articles">Blog</nuxt-link>
        </li>
        <li class="nav-link mr-4">
          <nuxt-link class="nav-link-a" to="/contact">About</nuxt-link>
        </li>
        <li class="nav-link">
          <nuxt-link class="nav-link-a" to="/admin">Admin</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import TheSideNavToggle from '@/components/Nav/TheSideNavToggle'

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle
  },
  methods: {
    onToggle() {
      $emit('sidenavToggle')
    },
    goToHomePage() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.theheader {
  transition: 0.4s;
}
</style>

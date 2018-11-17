<template>
  <div class="container flex flex-col">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSideNav :show="displaySidenav"
                @close="displaySidenav = false"/>
    <div class="mt-32 pt-12" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Nav/TheHeader'
import TheSideNav from '@/components/Nav/TheSideNav'
export default {
  components: {
    TheHeader,
    TheSideNav
  },
  data() {
    return {
      displaySidenav: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.throttle(this.handleScroll, 100))
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.throttle(this.handleScroll, 100))
  },
  methods: {
    handleScroll() {
      const header = document.getElementsByClassName('theheader')[0]
      if (header === undefined) {
        return
      }
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        header.style.height = '4rem'
      } else {
        header.style.height = '8rem'
      }
    },
    throttle(func, ms) {
      let isThrottled = false,
        savedArgs,
        savedThis

      function wrapper() {
        if (isThrottled) {
          savedArgs = arguments
          savedThis = this
          return
        }

        func.apply(this, arguments)

        isThrottled = true

        setTimeout(function() {
          isThrottled = false
          if (savedArgs) {
            wrapper.apply(savedThis, savedArgs)
            savedArgs = savedThis = null
          }
        }, ms)
      }

      return wrapper
    }
  }
}
</script>

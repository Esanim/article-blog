importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06a13e2e2412870339de.js",
    "revision": "7184480c8ec6132c5cac1cddd271a1c3"
  },
  {
    "url": "/_nuxt/2cd88d434ded3f1fbc5b.js",
    "revision": "265e8bf3dfc71a41356131d77f3553b0"
  },
  {
    "url": "/_nuxt/3bcfc6d3783f2d1b0120.js",
    "revision": "cce0017639357ee4b0bdbbf21b6c245b"
  },
  {
    "url": "/_nuxt/464c4359f7bab77e8309.js",
    "revision": "63307b5a7666f3e7f19c65f01bb701bc"
  },
  {
    "url": "/_nuxt/46d0353c60685842ffad.js",
    "revision": "dee85f72e646c238afeb66cb6d834845"
  },
  {
    "url": "/_nuxt/593aea804f3ed727f0ef.js",
    "revision": "062a40bb37a3ee737f420e9d5f5b16a8"
  },
  {
    "url": "/_nuxt/63aa5860bb72ef569d47.js",
    "revision": "2fbd86e6602c8d7c156d84d2040a5202"
  },
  {
    "url": "/_nuxt/7ab537b59a58d8376da9.js",
    "revision": "45376f9f00a32f8685c95411afba09ff"
  },
  {
    "url": "/_nuxt/c8dca9a744648e1d73f5.js",
    "revision": "84c6f948d72c510838f950f7316b73c2"
  },
  {
    "url": "/_nuxt/f409f0b586fc371b3255.js",
    "revision": "8436c0414e017544f6607aa7011e16bb"
  },
  {
    "url": "/_nuxt/f7a9880c0c63b13b408a.js",
    "revision": "841bd93f9b31e2f87c27bb6216f736a9"
  }
], {
  "cacheId": "custom-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.googleapis.com/css?family=Playfair+Display'), workbox.strategies.cacheFirst({}), 'GET')






importScripts('/_nuxt/workbox.4c4f5ca6.js', 'custom-sw.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/74fc766600b39c3843e1.js",
    "revision": "c8ed1f0ca3c91d772bef8181832dbc37"
  },
  {
    "url": "/_nuxt/7efc7565a35a544efd16.js",
    "revision": "57248070751803c723f8bed5ef3b8023"
  },
  {
    "url": "/_nuxt/815c961ff754d550b1f2.js",
    "revision": "d52e6370b4973417e6820ec17c4b93f3"
  },
  {
    "url": "/_nuxt/8fab7e8195e38ca2fc4e.js",
    "revision": "d51f2b523a1ece28c43b2500ff1ce6b1"
  },
  {
    "url": "/_nuxt/9aa80602bf2f3414d4bc.js",
    "revision": "d423acd007a77ec8b50b2d071e3aba3f"
  },
  {
    "url": "/_nuxt/a80aac7fec26faaded68.js",
    "revision": "657cab9490f99565011ad050f93e16dd"
  },
  {
    "url": "/_nuxt/bfb1c5f9a8f03f69ff7e.js",
    "revision": "1fc4a2d48e344c4b1a910049a360b2d7"
  },
  {
    "url": "/_nuxt/c8ac03b277ec5d48d8a5.js",
    "revision": "0f79b16972f132a2accbdc0ebaca53eb"
  },
  {
    "url": "/_nuxt/ccda0ae7ce2780cd64e5.js",
    "revision": "03b481d1d750f91e3b606099498ef492"
  },
  {
    "url": "/_nuxt/de176d7414562a938d6f.js",
    "revision": "6949b0895209a7ed7d491660e7a56555"
  },
  {
    "url": "/_nuxt/fe23f31ec42568c26002.js",
    "revision": "12b64e054208ce0addf45cf71393c6e5"
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






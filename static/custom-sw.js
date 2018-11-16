self.addEventListener('install', function(event) {
  console.log('sw installed')
  event.waitUntil(
    caches.open('static').then(function(cache) {
      cache.addAll(['/'])
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(res) {
      if (res) {
        return res
      } else {
        return fetch(event.request)
      }
    })
  )
})

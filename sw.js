self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('sennin-chat-v1').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/socket.io/socket.io.js',
        '/icon-192.png',
        '/icon-512.png'
      ])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});

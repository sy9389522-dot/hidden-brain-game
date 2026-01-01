const CACHE_NAME = 'hidden-brain-cache-v1';
const PRECACHE_ASSETS = [
  'index.html',
  'style.css',
  'script.js'
  // Agar images hai to unke paths bhi add kar do, jaise 'assets/icon.png'
];

// Install event: pre-cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Fetch event: Cache-first strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});

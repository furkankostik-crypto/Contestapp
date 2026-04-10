const CACHE_NAME = 'contestapp-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Service Worker yüklendiğinde cache'i kur
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.log('Cache başarısız:', err);
      })
  );
  self.skipWaiting();
});

// Aktif olmayan eski cache'leri temizle
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// İstekleri cache'den sun, eğer offline ise
self.addEventListener('fetch', (event) => {
  // GET istekleri için cache-first strateji
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request)
            .then((response) => {
              // Başarılı yanıtları cache'le
              if (!response || response.status !== 200 || response.type === 'error') {
                return response;
              }
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              return response;
            })
            .catch(() => {
              // Offline ise cache'ten dön
              return caches.match(event.request);
            });
        })
    );
  }
});

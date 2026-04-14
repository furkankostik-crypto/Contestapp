const CACHE_NAME = 'contestapp-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './style.css'
];

// Service Worker yüklendiğinde cache'i kur
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .catch(() => {
        // Offline ise cache'ten dön
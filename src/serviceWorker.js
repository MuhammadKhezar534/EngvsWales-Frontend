/* eslint-disable */

const CACHE_NAME = "my-pwa-cache-v1";

const serviceWorkerSelf = self;

serviceWorkerSelf.addEventListener("install", (event) => {
  console.log({ event });
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["/"]);
    })
  );
});

serviceWorkerSelf.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

serviceWorkerSelf.addEventListener("activate", (event) => {
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
});

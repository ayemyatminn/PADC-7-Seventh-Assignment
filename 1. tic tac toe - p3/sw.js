
const version = "0.6.11";
const cacheName = `airhorner-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/testing.html`,
        `/spec/testSpec.js`,
        `/js/controller/gameController.js`,
        `/js/model/gameModel.js`,
        `/js/model/Player.js`,
        `/js/view/gameView.js`,
        `/js/view/registerView.js`,
        `/js/app.js`,
        `/images/logo.png`,
        `/images/touch/logo_144.png`,
        `/images/touch/logo_192.png`,
        `/css/game.scss`,
        `/css/game.css.map`,
        `/css/game.css`      ])
        .then(() => self.skipWaiting());
    })
  );  
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

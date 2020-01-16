importScripts("/precache-manifest.9069183f54aa47d745261fb965c8b4e0.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}


workbox.routing.registerRoute(/\.js$/, new workbox.strategies.StaleWhileRevalidate());
workbox.routing.registerRoute(/\.css$/, new workbox.strategies.StaleWhileRevalidate({ cacheName: 'css-cache' }));

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/, new workbox.strategies.CacheFirst({
  cacheName: 'image-cache',
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 20,
      maxAgeSeconds: 7 * 24 * 60 * 60,
    })
  ],
}));

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

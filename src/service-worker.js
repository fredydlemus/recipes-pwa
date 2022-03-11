/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

// ...
// eslint-disable-next-line no-restricted-globals
const ignored = self.__WB_MANIFEST;

// Your custom service worker code goes here.
// eslint-disable-next-line
self.__precacheManifest = [].concat(self.__precacheManifest || [])

// eslint-disable-next-line
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
workbox.routing.registerRoute('/index.html', new workbox.strategies.NetworkFirst(), 'GET');
workbox.googleAnalytics.initialize();
//This not change
workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, new workbox.strategies.CacheFirst(
    {
        cacheName: 'google-fonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 30 * 24 * 60 * 60,
            })
        ]
    }
), 'GET');

//default cache strategy
workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst(), 'GET');



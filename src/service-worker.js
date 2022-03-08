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


importScripts('./node_modules/workbox-sw/build/workbox-sw.js');

const staticAssests = [
  './',
  './css/main.css',
  './css/fonts.css',
  './fonts/floorlight-webfont.woff',
  './fonts/floorlight-webfont.woff2',
  './assets/updates.txt',
  './js/updatescroll.js',
  './js/switch.js',
  './app.js'
];


workbox.precaching.precacheAndRoute(staticAssests);

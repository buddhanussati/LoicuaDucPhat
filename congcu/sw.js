const CACHE_NAME = 'hanhgia-app-v4';
// Danh sách các file cần lưu để chạy offline
const ASSETS = [
  './',
  './nhatky-hanhgia.html',
  './css/css.css',
  './js/chart.js',
  './js/nh.js',
  './images/1vi.png',
  './images/2vi.png',
  './webfonts/fa-brands-400.woff2',
  './webfonts/fa-regular-400.woff2',
  './webfonts/fa-solid-900.woff2',
  './webfonts/fa-v4compatibility.woff2',
  './images/icon-192.png',   
  './images/icon-512.png'
];

// 1. Cài đặt Service Worker và lưu cache
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Ép service worker mới kích hoạt ngay
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Kích hoạt và xóa cache cũ nếu có cập nhật
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// 3. Chặn request để trả về file từ cache khi offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
const CACHE_NAME = 'hocthuocpatimokkha-app-v1';
// Danh sách các file cần lưu để chạy offline
const ASSETS = [
  './',
  './patimokkha-hoc-thuoc-long.html',
  './js/jquery-1.10.2.min.js',
  './js/dpd_i2h.js',
  './js/dpd_ebts.js',
  './js/dpd_deconstructor.js',
  './images/icon-192-patimokkha.png',   
  './images/icon-512-patimokkha.png'
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
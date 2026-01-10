const CACHE_NAME = 'hanhgia-app-v1';
// Danh sách các file cần lưu để chạy offline
const ASSETS = [
  './',
  './nhatky-hanhgia.html',
  './css/css.css',
  './css/css2.css',
  './js/chart.js',
  './js/nh.js',
  './images/icon-192.png', 
  './images/icon-512.png'
];

// 1. Cài đặt Service Worker và lưu cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Đang lưu cache...');
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
// सर्विस वर्कर का नाम और वर्जन कंट्रोल
const CACHE_NAME = 'fbd-map-v1';
const ASSETS_TO_CACHE = [
  '/index.html',
  '/manifest.json'
];

// 1. इंस्टॉल इवेंट - जरूरी फाइलों को ब्राउज़र के कैश में डालना
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// 2. एक्टिवेट इवेंट - पुराना कैश साफ़ करना
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cache) {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// 3. फेच इवेंट - वेबसाइट को ऑफलाइन या तेज़ चलाने के लिए (PWA के लिए अनिवार्य)
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // अगर कैश में फ़ाइल मिल जाए तो वहीं से दें, नहीं तो नेटवर्क से लाएं
            return response || fetch(event.request);
        }).catch(function() {
            // अगर नेटवर्क भी न हो और कैश भी खाली हो
            return caches.match('/index.html');
        })
    );
});

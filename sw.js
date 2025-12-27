// Minimal Service Worker for PWA Installation only
const CACHE_NAME = 'cell-smar-install-cache';

self.addEventListener('install', (event) => {
    // No cacheamos nada pesado para evitar problemas con datos en tiempo real
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Pass-through fetch handler (required for PWA installation)
    // No cache logic here to ensure real-time data is always fresh
    return;
});

/**
 * Minimal stub — satisfies GET /sw.js (avoids 404 noise when a stale client or
 * tooling probes this path). Does not cache; passes network requests through.
 */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});

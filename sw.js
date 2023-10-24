// Define a cache name
var CACHE_NAME = "my-cache";

// Define an array of files to cache, including your offline page file
var FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/main.js",
//   "/logo.png",
  "/no-internet.html" // your offline page file
];

// Listen for the install event
self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    // Open the cache
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Add the files to cache
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

// Listen for the activate event
self.addEventListener("activate", function(event) {
  // Perform activate steps
  event.waitUntil(
    // Get all the cache keys
    caches.keys()
      .then(function(cacheNames) {
        return Promise.all(
          // Delete any old caches that are not in the current cache name
          cacheNames.filter(function(cacheName) {
            return cacheName !== CACHE_NAME;
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
  );
});

// Listen for the fetch event
self.addEventListener("fetch", function(event) {
  // Intercept and handle network requests
  event.respondWith(
    // Try to fetch from the cache
    caches.match(event.request)
      .then(function(response) {
        // If there is a cached response, return it
        if (response) {
          return response;
        }

        // Otherwise, fetch from the network
        return fetch(event.request)
          .catch(function(error) {
            // If there is an error, return the offline page file
            return caches.match("/offline.html");
          });
      })
  );
});

const CACHE_NAME='math-universe-complete-edition-v3';
const ASSETS=['./','./index.html','./manifest.json','./icon.svg','./assets/ui/hero_complete_edition.png','./assets/infographic/development_story.png','./assets/infographic/user_guide.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));
});

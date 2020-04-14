const staticCacheName = 'site-static-v';
const assets = [
   '/',
   '/index.html',
   '/css/style.css',
   '/img/icons/favicon.ico',
   '/js/app.js',
   '/js/typed.min.js',
   'img/sprite.svg',
   'img/sprite-capabilities.svg',
   '/img/Joshua Folorunsho desktop.webp',
   '/img/Joshua Folorunsho mobile.webp',
   '/img/Joshua folorunsho.webp',
   '/img/Joshua Folorunsho 1.webp',
   '/img/gerrit.webp',
   'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
   'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2',
   'https://www.googletagmanager.com/gtag/js?id=UA-161890254-1',
];
//Install event
self.addEventListener('install', event => {
   event.waitUntil(
      caches.open(staticCacheName)
         .then(cache => {
           cache.addAll(assets);
         })
   );
})


//Activate event
self.addEventListener('activate', event => {
   event.waitUntil( 
      caches.keys().then(keys => {
         return Promise.all(keys
            .filter(key => key !== staticCacheName)
            .map(key => caches.delete(key)))
      })
   )
})

// Fetch event
self.addEventListener('fetch', event => {
   event.respondWith(
      caches.match(event.request).then(cacheRes => {
         return cacheRes || fetch(event.request);
      })
   )
})
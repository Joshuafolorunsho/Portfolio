const staticCacheName = 'site-static-v1.6';
const dynamicCacheName = 'site-dynamic-v1';

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
	'/img/random.png',
	'/img/todo.png',
	'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
	'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2',
	'https://www.googletagmanager.com/gtag/js?id=UA-161890254-1',
	'/fallback.html',
];


// cache size limit function
const limitCacheSize = (name, size) => {
	caches.open(name).then((cache) => {
		cache.keys().then((keys) => {
			if (keys.length > size) {
				cache.delete(keys[0]).then(limitCacheSize(name, size));
			}
		});
	});
};

//Install event
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			cache.addAll(assets);
		})
	);
});

//Activate event
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(
				keys
					.filter((key) => key !== staticCacheName && key !== dynamicCacheName)
					.map((key) => caches.delete(key))
			);
		})
	);
});

// Fetch event
self.addEventListener('fetch', (event) => {
	event.respondWith(
		// responding with our cached file if there is
		caches
			.match(event.request)
			.then((cacheRes) => {
				return (
					cacheRes ||
					fetch(event.request)
						// dynamic cache
						.then((fetchRes) => {
							return caches.open(dynamicCacheName).then((cache) => {
								cache.put(event.request.url, fetchRes.clone());
								limitCacheSize(dynamicCacheName, 15);
								return fetchRes;
							});
						})
				);
			})
			.catch(() => {
				//conditionally return
				if (event.request.url.indexOf('.html') > -1) {
					return caches.match('/fallback.html');
				}
			})
	);
});

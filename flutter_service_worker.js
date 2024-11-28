'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bdac7a69626b8cb33d2903188c0a5995",
"version.json": "700b5839576f28098bc2cd8facbcc69c",
"index.html": "2d52f82c943f2efd10c8bad28bff9dbf",
"/": "2d52f82c943f2efd10c8bad28bff9dbf",
"main.dart.js": "9e8ce7b52ca5148123a1a7ddab0048ff",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8ad66165c90b8b1aa6247e6220c4dfcd",
"ants.png": "c1461f85230aeb8ab55ea30fff33a2e5",
"assets/AssetManifest.json": "e372a7c1fc5d71778563bb0551a14413",
"assets/NOTICES": "d67573136bd725e3e37286ac9fc82f25",
"assets/FontManifest.json": "7f5791d1ead6f88f29333c0ac9ddbe89",
"assets/AssetManifest.bin.json": "9d9d3ab69d038b04e5ec0c28aa7bc65c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7a3e139c8a01b37e2e1b2207eebf5058",
"assets/fonts/NunitoSans_7pt-Medium.ttf": "d7b72fa3e5f4ea251a8eb27381f60049",
"assets/fonts/NunitoSans_7pt-SemiBold.ttf": "35d5db5e910116b1f7c27d10d1c354ef",
"assets/fonts/MaterialIcons-Regular.otf": "e2e05cbb1f5f54e7a6c235816569cf59",
"assets/fonts/NunitoSans_7pt-Regular.ttf": "b31d295edf1de6be9a475411bd8d07fe",
"assets/fonts/NunitoSans_7pt-Bold.ttf": "5eca7f02cd39e97bdb62f4fd6221c4ce",
"assets/assets/ads.png": "0a817f3ec8192a047e521fe9af6ba9ce",
"assets/assets/images/game_pad.png": "a93619bfecd8920a15c48c8b32a07ba4",
"assets/assets/images/level_2.png": "8089db412cda7cc560010cc5b2996b29",
"assets/assets/images/level_3.png": "e208549a230094a1bb59119bfd520733",
"assets/assets/images/check.png": "ac5590ff783b4da468bb9c07cfad37b2",
"assets/assets/images/level_1.png": "be63762f0c21e7d991a7fc9dbece8564",
"assets/assets/images/wallet.png": "d85c3196328a164787f80efde65f3932",
"assets/assets/images/telegram_icon.png": "90ccfddad5bc2c55fc6d5cc1b3d1c487",
"assets/assets/images/calender.png": "c4c47c7abfddb4f36887321a8dde5b49",
"assets/assets/images/star_symbol.png": "3bd289ba436f063ed7c36a2dfe9795e4",
"assets/assets/images/leader.png": "7274e447476297794f4de610a03fcd55",
"assets/assets/images/all.png": "21073572b24c66de06ef4e5b6b249763",
"assets/assets/images/dollar.png": "7bec390f94d011ff729728655582c10b",
"assets/assets/images/home.png": "36415954a70136f28f99b445df218457",
"assets/assets/images/task.png": "dc0717d8c38335f4c870de598601a6f0",
"assets/assets/images/friends.png": "b446858bba773a126d7053ce5eaa029d",
"assets/assets/images/share.png": "413d30c2f4867e7bf53aea8f9ebe008d",
"assets/assets/images/star.png": "471a56576cb8d1414a202fa5ef448c32",
"assets/assets/images/ants.png": "c56a56144c3b5c5b00be21986b82b3da",
"assets/assets/images/slant_arrow.png": "9b87bf540d4d7bc02fe85046f85fe777",
"assets/assets/images/admin.png": "46245b001ab9d4c7259917515e69fcb3",
"assets/assets/images/scan.png": "a9adb70fb60a1be03c1d270bd1c2659e",
"assets/assets/images/copy.png": "e166d4fd019e694d93d2d7f15f36ad21",
"assets/assets/images/dollar_symbol.png": "db862730780c90e7c6bb74576e483c98",
"assets/assets/boost.png": "2af99ee525355dd0c47a36e20d1affb0",
"assets/assets/task.png": "8f3a01aca67438a76d32edbdde7595cd",
"assets/assets/giff/file_data.gif": "bab1524fbc0c0b16bc1537ebc3b05154",
"assets/assets/giff/%2520enw_fire.gif": "331d613f1a657ef4dff0b81785a4a006",
"assets/assets/giff/image.gif": "d546dad874db0088846b1cbb33a84b1a",
"assets/assets/giff/image_data.gif": "9c8cfb23d4c7ebed4f309399f03507f3",
"assets/assets/giff/image_new.gif": "e5199b396fad1e13db1b7290389ba7ab",
"assets/assets/giff/burst.gif": "0af70ced2966e8e802e608192927a37e",
"assets/assets/star.png": "d029275d06b4806eabcc66323c19dc9c",
"assets/assets/ant.gif": "a7f7f0c62f665b24c9738e1751621d39",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

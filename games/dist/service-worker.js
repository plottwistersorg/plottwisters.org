"use strict";var precacheConfig=[["/games/dist/check-mark-256.png","f92062f20f7631ec4fffe5178791d2d3"],["/games/dist/fontawesome-webfont.152c194f.ttf","b06871f281fee6b241d60582ae9369b9"],["/games/dist/fontawesome-webfont.4a2277d0.eot","674f50d287a8c48dc19ba404d20fe713"],["/games/dist/fontawesome-webfont.4e039e70.woff","fee66e712a8a08eef5805a46892932ad"],["/games/dist/fontawesome-webfont.80db1567.eot","674f50d287a8c48dc19ba404d20fe713"],["/games/dist/fontawesome-webfont.9ab71dbb.svg","912ec66d7572ff821749319396470bde"],["/games/dist/fontawesome-webfont.9fb3877d.woff2","af7ae505a9eed503f8b8e6982036873e"],["/games/dist/fontawesome-webfont.a9acc805.svg","912ec66d7572ff821749319396470bde"],["/games/dist/fontawesome-webfont.c3cf7ef2.woff","fee66e712a8a08eef5805a46892932ad"],["/games/dist/fontawesome-webfont.cda54bb3.woff2","af7ae505a9eed503f8b8e6982036873e"],["/games/dist/fontawesome-webfont.cf80d36a.ttf","b06871f281fee6b241d60582ae9369b9"],["/games/dist/index.html","dce523f91e3f14a1ee8d0bfdf595028b"],["/games/dist/src.051ec7ba.js","3fd2692fa302080c4d78478422b9ba93"],["/games/dist/src.63e56bf7.css","cbb875c984adeb47a9e74b737a2bf1a7"],["/games/dist/src.94599484.css","92b872bd2a1d79e6e4c3e07b438c08bc"],["/games/dist/src.e31bb0bc.css","f2eaabae691d57f09606cac876ea441d"],["/games/dist/src.ebbb5c0d.css","5c915f34ea22dd7adb0dff531a006119"],["/games/dist/styles.c86c3119.css","46ca46b176461528e4ac627943fc69ef"],["/games/dist/styles.d25a5498.css","3b19816c10c760f02d9f8ef3a0d1d2db"],["/games/dist/trash-2-256.png","87fb86ca7b8c1ded2493dd59bc613d14"]],cacheName="sw-precache-v3-games-plottwister-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/games/dist/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});const isLocalhost=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));export default function register(){if("production"===process.env.NODE_ENV&&"serviceWorker"in navigator){if(new URL(process.env.PUBLIC_URL,window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e=`${process.env.PUBLIC_URL}/service-worker.js`;isLocalhost?checkValidServiceWorker(e):registerValidSW(e)})}};function registerValidSW(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})})}).catch(e=>{console.error("Error during service worker registration:",e)})}function checkValidServiceWorker(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):registerValidSW(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}export function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})};
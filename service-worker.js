"use strict";var precacheConfig=[["/index.html","4148984f8d5c5c4b1fc20aaa60b23255"],["/static/css/main.0fb6d6f0.css","34a396b4ed67b6385826874d10ee67d0"],["/static/js/main.9839a0b9.js","dd496aba092c2b8422db480119363309"],["/static/media/R.4722d50a.png","4722d50a4e700e1eaee22264ca894152"],["/static/media/cabin-sketch-latin-400.40eb57a7.woff","40eb57a79ada9c4c15a22888cee41986"],["/static/media/cabin-sketch-latin-400.518e5a78.woff2","518e5a78cde92f93a0d93a319a634be5"],["/static/media/cabin-sketch-latin-700.1447dc60.woff2","1447dc6069e29c70314c76a7cc902b8f"],["/static/media/cabin-sketch-latin-700.f9277372.woff","f92773720067b1278e5dfa5560f8f25b"],["/static/media/cpp.2dff5ee9.png","2dff5ee907a40bc057ca14d73ad4e1f3"],["/static/media/dotNet.ae415869.png","ae415869b8d5d019fe15a917e7f42c1b"],["/static/media/dotnetCore.52d94469.png","52d94469f0e16fd13303345897b3f993"],["/static/media/goLang.d1c2749d.png","d1c2749d181f48c1eee42f0d33f9f06f"],["/static/media/ios.8e107e26.png","8e107e269446ed212ccedc61fca50e3f"],["/static/media/jenkins.62c38a30.png","62c38a300ec97d401ea7fd1a4d948c18"],["/static/media/mongoDB.a6c07915.jpg","a6c079155c468a04712ffcedb6bd7a27"],["/static/media/objective-c.25281f9b.png","25281f9b7ba10567ff69b5540c4d46e6"],["/static/media/oracle.52bb6aa4.png","52bb6aa4afa35f5831d87208eac90e4f"],["/static/media/react.6e8f68df.png","6e8f68df1509ab98bffab08b6f001c56"],["/static/media/sql-server.abf31ee1.png","abf31ee15e87ccec330bf9bdb895f877"],["/static/media/typescript.90c36498.png","90c36498a8d182bfe3026158e0516d99"],["/static/media/zeromq.67e1db61.png","67e1db6160d2f90c60ccf9e67d865e72"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
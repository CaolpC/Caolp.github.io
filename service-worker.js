"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},precacheConfig=[["/404.html","da7d866393db372dd079881f7863d245"],["/about/index.html","fa574b98c6efe3aa9ddad3c877587e41"],["/archives/2020/12/index.html","3114060dc419c93ee4dd5bc2b9223682"],["/archives/2020/index.html","7f6c7ebd1d30f3dd81e4d5fc787434a0"],["/archives/index.html","f64d8c36489ccf97bb84aee443981c8d"],["/categories/Hexo/index.html","4c0d9d630754f698c7865a8a24687754"],["/categories/index.html","3e3d4a2c4db848d2afa8a76e4e1b86c3"],["/categories/分类测试/index.html","679e31b6680dddba93f2ddd8e3477c6d"],["/css/background.css","cffb560728e851b0c01aa3f06a0e0ee8"],["/css/index.css","f7d24a7b853b4b5b1c17ee275e5e10e7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/cat.png","198b4ddae919cfbd05adce49badbdaa0"],["/images/mountent.jpg","fe950e1dbaf4ba88282d190ab5888a8b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ab22382f29cdecfe48c2996dd6b06820"],["/js/main.js","38e7b4c7a9068aa96a5b1cf9e4bdd5f3"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","85fa762bf3f4973e29d8a6a409ffc510"],["/posts/4a17b156/index.html","062369ec45ff2b9945acae2fbcffa866"],["/posts/ab21860c/index.html","d76a644b0acf46aa37c32e1fa78e6ba9"],["/posts/c4fe5b8b/index.html","5d98bbc3f58d16142a78d9b913a88b92"],["/posts/c9eafdcf/index.html","8b991571e826236cfa97568832ddc060"],["/posts/ee4a3a15/index.html","807fe38de6883f8e34fd48f74bd09a48"],["/tags/Hexo-Install/index.html","0602bc8e5549091143b839416b988e59"],["/tags/Hexo/index.html","bf82d52e6000108da3b5aedca9cf3792"],["/tags/index.html","a67516658f26e092ef208e798c3e3657"],["/tags/标签测试/index.html","74d590f7251998d92b12d549a15104d2"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){e=new URL(e);return r&&e.pathname.match(r)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,!1);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e,r;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))}),function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}(function(){return function r(o,a,c){function i(n,e){if(!a[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(s)return s(n,!0);t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t=a[n]={exports:{}};o[n][0].call(t.exports,function(e){var t=o[n][1][e];return i(t||e)},t,t.exports,r,o,a,c)}return a[n].exports}for(var s="function"==typeof require&&require,e=0;e<c.length;e++)i(c[e]);return i}({1:[function(e,t,n){function i(e,t){((t=t||{}).debug||c.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||c.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var a,c=e("./options"),s=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(n,r){var t=(r=r||{}).successResponses||c.successResponses;return fetch(n.clone()).then(function(e){return"GET"===n.method&&t.test(e.status)&&o(r).then(function(t){t.put(n,e).then(function(){var e=r.cache||c.cache;(e.maxEntries||e.maxAgeSeconds)&&e.name&&(e=function(e,t,n){var r=e.url,o=n.maxAgeSeconds,a=n.maxEntries,n=n.name,c=Date.now();return i("Updating LRU order for "+r+". Max entries is "+a+", max age is "+o),s.getDb(n).then(function(e){return s.setTimestampForUrl(e,r,c)}).then(function(e){return s.expireEntries(e,a,o,c)}).then(function(e){i("Successfully updated IDB.");e=e.map(function(e){return t.delete(e)});return Promise.all(e).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,n,t,e=e),a=a?a.then(e):e())})}),e.clone()})},openCache:o,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return o(e).then(function(e){return e.add(t)})},uncache:function(t,e){return o(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),c.preCacheItems=c.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){e=e.headers.get("date");if(e)if(new Date(e).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var o="sw-toolbox-",a=1,u="store",f="url",h="timestamp",c={};t.exports={getDb:function(e){return e in c||(c[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(o+r,a);n.onupgradeneeded=function(){n.result.createObjectStore(u,{keyPath:f}).createIndex(h,h,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),c[e];var r},setTimestampForUrl:function(r,o,a){return new Promise(function(e,t){var n=r.transaction(u,"readwrite");n.objectStore(u).put({url:o,timestamp:a}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return c=e,s=r,((i=t)?new Promise(function(e,t){var n=1e3*i,r=[],o=c.transaction(u,"readwrite"),a=o.objectStore(u);a.index(h).openCursor().onsuccess=function(e){var t=e.target.result;t&&s-n>t.value[h]&&(e=t.value[f],r.push(e),a.delete(e),t.continue())},o.oncomplete=function(){e(r)},o.onabort=t}):Promise.resolve([])).then(function(t){return i=e,((s=n)?new Promise(function(e,t){var r=[],n=i.transaction(u,"readwrite"),o=n.objectStore(u),a=o.index(h),c=a.count();a.count().onsuccess=function(){var n=c.result;s<n&&(a.openCursor().onsuccess=function(e){var t=e.target.result;t&&(e=t.value[f],r.push(e),o.delete(e),n-r.length>s&&t.continue())})},n.oncomplete=function(){e(r)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var i,s});var c,i,s}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(t){return Promise.all(c.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(e){return o.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href;t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var o=new URL("./",self.location).pathname,a=e("path-to-regexp"),e=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=r,this.handler=n};e.prototype.makeHandler=function(e){var n,r;return this.regexp&&(n=this.regexp.exec(e),r={},this.keys.forEach(function(e,t){r[e.name]=n[t+1]})),function(e){return this.handler(e,r,this.options)}.bind(this)},t.exports=e},{"path-to-regexp":15}],6:[function(e,t,n){function a(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;)new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next();return o}function o(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var c=e("./route"),i=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){o.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),o.prototype.add=function(e,t,n,r){r=r||{},o=t instanceof RegExp?RegExp:(o=r.origin||self.location.origin)instanceof RegExp?o.source:o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();r=new c(e,t,n,r);this.routes.has(o)||this.routes.set(o,new Map);var o=this.routes.get(o);o.has(e)||o.set(e,new Map);o=o.get(e),e=r.regexp||r.fullUrlRegExp;o.has(e.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),o.set(e.source,r)},o.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,n=n.pathname;return this._match(e,a(this.routes,r),n)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],o=o&&o.get(e.toLowerCase());if(o){o=a(o,n);if(0<o.length)return o[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(r,e,o){return o=o||{},c.debug("Strategy: cache first ["+r.url+"]",o),c.openCache(o).then(function(e){return e.match(r).then(function(e){var t=o.cache||a.cache,n=Date.now();return c.isResponseFresh(e,t.maxAgeSeconds,n)?e:c.fetchAndCache(r,o)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var o=e("../options"),a=e("../helpers");t.exports=function(t,e,r){return r=r||{},a.debug("Strategy: cache only ["+t.url+"]",r),a.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||o.cache,n=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var u=e("../helpers"),f=e("./cacheOnly");t.exports=function(c,i,s){return u.debug("Strategy: fastest ["+c.url+"]",s),new Promise(function(t,n){function r(e){a.push(e.toString()),o?n(new Error('Both cache and network failed: "'+a.join('", "')+'"')):o=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var o=!1,a=[];u.fetchAndCache(c.clone(),s).then(e,r),f(c,i,s).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var u=e("../options"),f=e("../helpers");t.exports=function(a,e,c){var i=(c=c||{}).successResponses||u.successResponses,s=c.networkTimeoutSeconds||u.networkTimeoutSeconds;return f.debug("Strategy: network first ["+a.url+"]",c),f.openCache(c).then(function(e){var t,n,r=[];s&&(o=new Promise(function(r){t=setTimeout(function(){e.match(a).then(function(e){var t=c.cache||u.cache,n=Date.now(),t=t.maxAgeSeconds;f.isResponseFresh(e,t,n)&&r(e)})},1e3*s)}),r.push(o));var o=f.fetchAndCache(a,c).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw f.debug("Response was an HTTP error: "+e.statusText,c),n=e,new Error("Bad response")}).catch(function(t){return f.debug("Network or response error, fallback to cache ["+a.url+"]",c),e.match(a).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(o),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),c=e("./strategies"),e=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",e.installListener),self.addEventListener("activate",e.activateListener),self.addEventListener("fetch",e.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n=[],r=0,o=0,a="",c=t&&t.delimiter||"/";null!=(h=b.exec(e));){var i,s,u,f,h,l,p=h[0],d=h[1],m=h.index;a+=e.slice(o,m),o=m+p.length,d?a+=d[1]:(f=e[o],i=h[2],s=h[3],u=h[4],l=h[5],m=h[6],p=h[7],a&&(n.push(a),a=""),d=null!=i&&null!=f&&f!==i,f="+"===m||"*"===m,m="?"===m||"*"===m,h=h[2]||c,l=u||l,n.push({name:s||r++,prefix:i||"",delimiter:h,optional:m,repeat:f,partial:d,asterisk:!!p,pattern:l?l.replace(/([=!:$\/()])/g,"\\$1"):p?".*":"[^"+g(h)+"]+?"}))}return o<e.length&&(a+=e.substr(o)),a&&n.push(a),n}function l(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(f){for(var h=new Array(f.length),e=0;e<f.length;e++)"object"==_typeof(f[e])&&(h[e]=new RegExp("^(?:"+f[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},o=(t||{}).pretty?l:encodeURIComponent,a=0;a<f.length;a++){var c=f[a];if("string"!=typeof c){var i,s=r[c.name];if(null==s){if(c.optional){c.partial&&(n+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(m(s)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var u=0;u<s.length;u++){if(i=o(s[u]),!h[a].test(i))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(i)+"`");n+=(0===u?c.prefix:c.delimiter)+i}}else{if(i=c.asterisk?encodeURI(s).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):o(s),!h[a].test(i))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+i+'"');n+=c.prefix+i}}else n+=c}return n}}function g(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function p(e,t){return e.keys=t,e}function d(e){return e.sensitive?"":"i"}function a(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",c=0;c<e.length;c++){var i,s,u=e[c];"string"==typeof u?a+=g(u):(i=g(u.prefix),s="(?:"+u.pattern+")",t.push(u),u.repeat&&(s+="(?:"+i+s+")*"),a+=s=u.optional?u.partial?i+"("+s+")?":"(?:"+i+"("+s+"))?":i+"("+s+")")}var f=g(n.delimiter||"/"),h=a.slice(-f.length)===f;return r||(a=(h?a.slice(0,-f.length):a)+"(?:"+f+"(?=$))?"),a+=o?"$":r&&h?"":"(?="+f+"|$)",p(new RegExp("^"+a,d(n)),t)}function c(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(e,t)}(e,t):m(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(c(e[o],t,n).source);return p(new RegExp("(?:"+r.join("|")+")",d(n)),t)}(e,t,n):(t=t,a(r(e,n=n),t,n))}var m=e("isarray");t.exports=c,t.exports.parse=r,t.exports.compile=function(e,t){return o(r(e,t))},t.exports.tokensToFunction=o,t.exports.tokensToRegExp=a;var b=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){var r,o,a,c;a=Cache.prototype.addAll,(c=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/))&&(r=c[1],o=parseInt(c[2])),a&&(!c||"Firefox"===r&&46<=o||"Chrome"===r&&50<=o)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var o=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return o.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:null});
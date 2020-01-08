importScripts("/_nuxt/workbox.4c4f5ca6.js");

workbox.precaching.precacheAndRoute(
  [
    {
      url: "/_nuxt/032e08718d9aa9c2a82a.js",
      revision: "736a4961e974f24c31dabc51278b3fb3"
    },
    {
      url: "/_nuxt/0763be75b8f76aca4e54.js",
      revision: "ced2ce797f2f5caeb457464d0f79a404"
    },
    {
      url: "/_nuxt/10ff45c8439a5464e705.js",
      revision: "6607d8b813cee66aca21e0282fb90ad0"
    },
    {
      url: "/_nuxt/1aea5933ae52b4f82fba.js",
      revision: "bfc0f14b668bc27e2b281ac0fbbe11e0"
    },
    {
      url: "/_nuxt/2177f059e10dafe84172.js",
      revision: "66f28703ad61f13de6169d85f8c2225e"
    },
    {
      url: "/_nuxt/25e26cc3ae693b25127d.js",
      revision: "f4305c5818ce62e406d437872433f00d"
    },
    {
      url: "/_nuxt/2e98206d9e9050978b38.js",
      revision: "a7e4d65e6964634aa70d40b3a1f342af"
    },
    {
      url: "/_nuxt/47c7a970690e7b2542d1.js",
      revision: "0736325d14eed4d3fe9923e669d53e68"
    },
    {
      url: "/_nuxt/4a4bc1c8b94b0e1f0147.js",
      revision: "957cfdc3568c89c526042c7b7e6f9f51"
    },
    {
      url: "/_nuxt/5467000d435558adb432.js",
      revision: "2d60566602d30e676cffe5ed040e3e3d"
    },
    {
      url: "/_nuxt/54bd703afa4d825aa237.js",
      revision: "620f57d9286337e6d3c8aef4f36f165f"
    },
    {
      url: "/_nuxt/554ce818e59748a83c97.js",
      revision: "4578431b1071e115e16893ff2ea3e8c3"
    },
    {
      url: "/_nuxt/5999d2fbbf50e1a03117.js",
      revision: "30a3dba71fda42eddf5df2640763c303"
    },
    {
      url: "/_nuxt/5dbc10900c7a5581efb3.js",
      revision: "876b0c426bf9e4a6417af70fbd866fb6"
    },
    {
      url: "/_nuxt/6bf23b59f0ac2d90c9fc.js",
      revision: "1b2f7965300442dea600a6113a6aabf9"
    },
    {
      url: "/_nuxt/78e01cfe586c9be6fef2.js",
      revision: "b52dd98d3752712ab0cd1ca631e82963"
    },
    {
      url: "/_nuxt/94ca2e50ec8752bbc3a3.js",
      revision: "d5ff98da440accaf3137df727b4fb1e7"
    },
    {
      url: "/_nuxt/95a9ec6b194c129a7a32.js",
      revision: "40cc7812fa115ac369155b054ec52e5e"
    },
    {
      url: "/_nuxt/95ffe71c8bdd568517de.js",
      revision: "1894cb2ed1bce3a7bfaba7313f75bb84"
    },
    {
      url: "/_nuxt/9bdefbbb81d43b856128.js",
      revision: "aaeee36368218f8e570cd9c296789c2d"
    },
    {
      url: "/_nuxt/9ee1697ef98a07cd0eeb.js",
      revision: "d3bf48bae1eb03e9bbd4476f80752ed1"
    },
    {
      url: "/_nuxt/ae7ab04658d4d0f865aa.js",
      revision: "9f0b15fcf659178a77afb7ff6e441dd6"
    },
    {
      url: "/_nuxt/b5b61399484c395e7df1.js",
      revision: "32bc69ef17c3af856ea55dd3fb70896f"
    },
    {
      url: "/_nuxt/c6bb6e529918bf003785.js",
      revision: "181be2f495e1604d038634ebd76ccc3b"
    },
    {
      url: "/_nuxt/c8ff3955ca69884b4ead.js",
      revision: "724291a33d7593598d8f12af4d20e797"
    },
    {
      url: "/_nuxt/da0114c83bd6cafedea7.js",
      revision: "aecb3810d8d9fa8247591bc924b27229"
    },
    {
      url: "/_nuxt/e2005f73c590c886f9e3.js",
      revision: "600a5f3a918b207593efa0c8478b1ac9"
    },
    {
      url: "/_nuxt/e2d5335c685bcbaefba7.js",
      revision: "5b919f8b71931262fa4406ed2168b9a8"
    },
    {
      url: "/_nuxt/e473153ca690e6bb7831.js",
      revision: "1d0c241f94ff336d9c23143d4e0ededf"
    },
    {
      url: "/_nuxt/e4a092722eebf2ca2aa3.js",
      revision: "8b80f87aee8b670677dfdc2935481fdf"
    },
    {
      url: "/_nuxt/ec3bb59f37f2355826f6.js",
      revision: "15245305f31b9dca9da49bfb526ce8f5"
    },
    {
      url: "/_nuxt/f21d2e6d36c2333a3e31.js",
      revision: "82e8f88504efd268820d8128ffe6dbfc"
    },
    {
      url: "/_nuxt/f4f483ec5c5cdf8becee.js",
      revision: "c2fa73f67699054e24f6d1e128ce609c"
    },
    {
      url: "/_nuxt/f847a10cee0cc749c338.js",
      revision: "47c484e4c070e620867c1df8d8c3a71e"
    }
  ],
  {
    cacheId: "nuxt",
    directoryIndex: "/",
    cleanUrls: false
  }
);

workbox.clientsClaim();
workbox.skipWaiting();

workbox.routing.registerRoute(
  new RegExp("/_nuxt/.*"),
  workbox.strategies.cacheFirst({}),
  "GET"
);

workbox.routing.registerRoute(
  new RegExp("/.*"),
  workbox.strategies.networkFirst({}),
  "GET"
);

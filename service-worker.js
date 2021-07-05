/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "11c498d7e7525744a0da101aa9d18312"
  },
  {
    "url": "about/index.html",
    "revision": "35563362838d97992a65d78b5e4f03b0"
  },
  {
    "url": "assets/css/0.styles.5a970d84.css",
    "revision": "13290e9133ef99234862324b206929df"
  },
  {
    "url": "assets/js/1.2d847ae7.js",
    "revision": "31471852d603572169ed30924909f0d3"
  },
  {
    "url": "assets/js/10.99cdbd09.js",
    "revision": "1790552f0354bdb2a8851864bc3195e1"
  },
  {
    "url": "assets/js/11.a985ac5c.js",
    "revision": "371a90bb40957cb402f9a99038055279"
  },
  {
    "url": "assets/js/12.5418e84a.js",
    "revision": "9575d8f62c0e949890769ea4be665619"
  },
  {
    "url": "assets/js/13.140a09fe.js",
    "revision": "8d9ee1dde5c9a0507395c2a0b39c657e"
  },
  {
    "url": "assets/js/14.9a3b39e0.js",
    "revision": "d6f2b4b77fc14bd6aa0131c37002a045"
  },
  {
    "url": "assets/js/15.83623934.js",
    "revision": "ceb22944dbf41f11e7cb466b1c4f0118"
  },
  {
    "url": "assets/js/16.07be0de5.js",
    "revision": "0b6977a82bd749546c157f96ce69e720"
  },
  {
    "url": "assets/js/17.743eb7a0.js",
    "revision": "2f95dd38373cc5c65a98905616ee38c2"
  },
  {
    "url": "assets/js/18.9829d932.js",
    "revision": "bbae41d13bcf2623767148b77925ee34"
  },
  {
    "url": "assets/js/19.c49fb747.js",
    "revision": "1e3c74081115833789bb76bde406a1f4"
  },
  {
    "url": "assets/js/20.70bd1ce9.js",
    "revision": "b500f1b566768296e207c018ae6d1f88"
  },
  {
    "url": "assets/js/21.8cf9bdd7.js",
    "revision": "3951a6643b581a38e4a5cbe8324c7fcd"
  },
  {
    "url": "assets/js/22.40ff964d.js",
    "revision": "ff213f63a869cfa5341dcaee599ab92a"
  },
  {
    "url": "assets/js/23.0d5f6084.js",
    "revision": "1244132715468a8c6fd30ad627aaa48f"
  },
  {
    "url": "assets/js/24.38076f4d.js",
    "revision": "c588302424ea723a27e59d1f48ebd872"
  },
  {
    "url": "assets/js/25.81db81bf.js",
    "revision": "5bee6a2d03921db6811439a2bca626ce"
  },
  {
    "url": "assets/js/26.b48a7352.js",
    "revision": "39dca9bade27fd940c65347ed7fc6469"
  },
  {
    "url": "assets/js/27.127c9ff4.js",
    "revision": "083579120c0b645686380562475ba35e"
  },
  {
    "url": "assets/js/28.f64d1036.js",
    "revision": "ccf5eb9f6047cf6812bc227884401316"
  },
  {
    "url": "assets/js/3.7e03030a.js",
    "revision": "fae587d6aa76d3df3843cc5b4a41eb82"
  },
  {
    "url": "assets/js/4.18db1c1f.js",
    "revision": "c8c7b4b3a7e5154550238eb4eb6ad933"
  },
  {
    "url": "assets/js/5.ea7d25d4.js",
    "revision": "7ca799956b8282ff24a5bd85abe32f3a"
  },
  {
    "url": "assets/js/6.07b169d5.js",
    "revision": "9839e17445245736a89ced0c12cf841c"
  },
  {
    "url": "assets/js/7.6f7c840d.js",
    "revision": "6ef56ca474d75ad0e8a6d128d901de72"
  },
  {
    "url": "assets/js/8.91101b3a.js",
    "revision": "3293b00f12ef3f068e6d2558af168d5d"
  },
  {
    "url": "assets/js/9.e599357a.js",
    "revision": "8f79ff2ae9c6bde71f3afe3d109479f0"
  },
  {
    "url": "assets/js/app.7a2b8961.js",
    "revision": "2ace93a238629241467f6368f4ab3a16"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/docs/java/示例一.html",
    "revision": "fd93f4b01d489aae77eda06d8ee2a8c8"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "9946136daef46b4b86717bd3f1cbfef1"
  },
  {
    "url": "blogs/story/2016/121501.html",
    "revision": "d0698be9f2569bfd92d29463264b8656"
  },
  {
    "url": "blogs/tec/2017/092101.html",
    "revision": "eaab701369fd9a4a6c45c992d46ce89a"
  },
  {
    "url": "blogs/tec/2017/092102.html",
    "revision": "35c3751afa63dc2ccc7624a5cb5490ca"
  },
  {
    "url": "blogs/tec/2018/121501.html",
    "revision": "8f52f10dca33f41ffe709dd26231c3e3"
  },
  {
    "url": "blogs/tec/2019/092101.html",
    "revision": "b41f8c621a7beca6e6c975cf282ec68a"
  },
  {
    "url": "blogs/tec/2021/test 1.html",
    "revision": "1adc1705ec2beeda8508583501481a2a"
  },
  {
    "url": "blogs/tec/2021/test 2.html",
    "revision": "b2b1a1a8599a077d2ccf9b57ae6cceb6"
  },
  {
    "url": "blogs/tec/2021/test 3.html",
    "revision": "4ae6c6a1eb11476c6046d8ab909ab292"
  },
  {
    "url": "blogs/tec/2021/test 44.html",
    "revision": "40bad35fae9b4db5c90429b0d40e0da3"
  },
  {
    "url": "blogs/tec/2021/test.html",
    "revision": "0102d0d5e19a4add2fe574fa14b04b99"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "67cdf466b8259e614f2c9459a745ed81"
  },
  {
    "url": "categories/心情物语/index.html",
    "revision": "e4f46187da80a863dc265cba80c64bed"
  },
  {
    "url": "categories/杂谈游记/index.html",
    "revision": "d0c71f3106bd925e7b342a66519bf3cc"
  },
  {
    "url": "categories/index.html",
    "revision": "6d6f2c37a5ae8927f97a102705b1d852"
  },
  {
    "url": "favicon.png",
    "revision": "471ac174ec600107ee24c09fdc5b1d6e"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "307816967f04b4f4ab28b48e1bc95ff0"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "tag/产品设计/index.html",
    "revision": "6b3ac03ff134a4eb94eb3c51c6d74bdf"
  },
  {
    "url": "tag/改编测试/index.html",
    "revision": "985be4aaaed8059e943eea9630db7c2e"
  },
  {
    "url": "tag/局座/index.html",
    "revision": "41b5f8b072ba019f240a631844daed2b"
  },
  {
    "url": "tag/军事/index.html",
    "revision": "1798e17d82eb0787e04c47bb48d2af70"
  },
  {
    "url": "tag/消息系统/index.html",
    "revision": "b5f4578332971e7cd9e2a2626c06304d"
  },
  {
    "url": "tag/战忽局/index.html",
    "revision": "06a2d97d6f2a5e7f2247e3c8073d1349"
  },
  {
    "url": "tag/族谱系统/index.html",
    "revision": "c94359f616eedcc355532e8a1a6f48a5"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "3ed8a1ae13c1e679d58045bddcc18294"
  },
  {
    "url": "tag/index.html",
    "revision": "336d740aa948bfc9cd15f0fcf412c541"
  },
  {
    "url": "tag/java/index.html",
    "revision": "5d6dd4065afe3652348e9d1fb27d97e3"
  },
  {
    "url": "tag/mongo/index.html",
    "revision": "9122c76f3e6b932759c23f725e99a682"
  },
  {
    "url": "tag/spring boot/index.html",
    "revision": "a71b173d967311b39afba44dbc7acbac"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "dfd183d4f2674bdd24fe1e4a76217011"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5ac928d524145af4c5155f69a4b51f60"
  },
  {
    "url": "timeline/index.html",
    "revision": "8f5cc19ba9cf3bd477e708d321c19955"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

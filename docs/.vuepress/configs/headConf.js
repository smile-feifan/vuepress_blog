module.exports = [
  [
    "link",
    {
      "rel": "icon",
      // "href": "https://pan.zealsay.com/blog/favicon.ico"
      "href": "favicon.png"
    }
  ],
  [
    "meta",
    {
      "name": "viewport",
      "content": "width=device-width,initial-scale=1,user-scalable=no"
    }
  ],
  ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `], //百度统计
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', {
    name: 'apple-mobile-web-app-capable',
    content: 'yes'
  }],
  ['meta', {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black'
  }],
  ['link', {
    rel: 'apple-touch-icon',
    href: '/icons/apple-touch-icon-152x152.png'
  }],
  ['link', {
    rel: 'mask-icon',
    href: '/icons/safari-pinned-tab.svg',
    color: '#3eaf7c'
  }],
  ['meta', {
    name: 'msapplication-TileImage',
    content: '/icons/msapplication-icon-144x144.png'
  }],
  ['meta', {
    name: 'msapplication-TileColor',
    content: '#000000'
  }]

]
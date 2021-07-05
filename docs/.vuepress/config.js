const headConf=require("./configs/headConf");
const navConf=require('./configs/navConf');
const mottosConf=require('./configs/mottosConf');
const covers=require('./configs/coversConf');
const friendLink=require('./configs/friendLinkConf');
const socials=require('./configs/socialsConf');
const valineConfig=require('./configs/valineConf');
const blogConf=require('./configs/blogConf');
const pluginsConf=require('./configs/pluginsConf');

module.exports = {
  "title": "尽头的另一个我",
  "description": "满怀希望就会所向披靡",
  "dest": "dist",
  "base": '/vuepress_blog/',
  "head":headConf,
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav":navConf,
    "type": "blog",
    "sidebar": false,
    "blogConfig":blogConf,
    "friendLink": friendLink,
    "valineConfig": valineConfig,
    "logo": "/favicon.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最新更新时间",
    "author": "尽头的另一个我",
    "authorAvatar": "favicon.png",
    "record": "你的备案号 ", //icp备案
    "startYear": "2021",
    "info": "没有谁的生活会一直完美，但无论什么时候，都要看向前方，满怀希望就会所向披靡",
    "socials":socials,
    "mottos":mottosConf,
    "covers": covers,
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
  plugins: pluginsConf
}
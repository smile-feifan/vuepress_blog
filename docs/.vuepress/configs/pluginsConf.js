// const secret=require('./configs/secret');
module.exports={
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新的功能可用",
      buttonText: "刷新"
    }
  },
  '@vuepress/google-analytics':
  {
    'ga': 'UA-201220432-2' // UA-00000000-0
  },
  // "vuepress-plugin-auto-sidebar": {
  //   // nav:true
  // }
  
}
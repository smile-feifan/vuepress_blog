const secret=require('./configs/secret');
module.exports={
  "appId": secret.appId,// your appId
  "appKey": secret.appKey, // your appKey
  "avatar": "", //
  "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
  "requiredFields": ['nick', 'mail'], //设置必填项
}
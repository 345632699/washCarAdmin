import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://dj.mqphp.com/'
// const apiMall = 'http://localhost:8080/'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");
const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");

//測試連接
const getOpenId = (params) => wxRequest(params, apiMall + "/api/v1/sample/openid");
const decrypt = (params) => wxRequest(params, apiMall + "/api/v1/sample/decrypt");

const getUnionId = (params) => wxRequest(params, apiMall + "getUnionId");


module.exports = {
  getDiscoverList,
  wxJsCode2Session,
  user2session,
  getOpenId,
  getUnionId,
  decrypt,
}

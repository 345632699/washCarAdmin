import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://wx.cy1993.cn/cy1993_app/'
// const apiMall = 'http://localhost:8080/'

const login = (params) => wxRequest(params, apiMall + "cy1993_app");


module.exports = {
  login,
}

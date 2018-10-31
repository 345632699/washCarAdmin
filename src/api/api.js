import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
// const api = 'https://wx.cy1993.cn/cy1993_app/'
// const apiMall = 'https://wx.cy1993.cn/cy1993_app/merchant/'
const api = 'https://test.cy1993.cn/cy1993_app/'
const apiMall = 'https://test.cy1993.cn/cy1993_app/merchant/'
//appid = "wx234f1e50c0aeb853"
//secret = "64336a6964d9f53d6dc31c26fdea970c"
const login = (params) => wxRequest(params, api + "login/");
const getorderoverview = (params) => wxRequest(params, apiMall + "getorderoverview/");
//获取订单列表
const getorderlist = (params) => wxRequest(params, apiMall + "getorderlist/");
//获取员工列表
const getuserlist = (params) => wxRequest(params, apiMall + "getuserlist/");
//获取订单详情
const getorderdetails = (params) => wxRequest(params, apiMall + "getorderdetails/");
//上传图片
const uploadcarimage = (params) => wxRequest(params, apiMall + "uploadcarimage/");
//获取会员等级列表
const getviplevel = (params) => wxRequest(params, apiMall + "getviplevel/");
//更新会员等级
const updateviplevel = (params) => wxRequest(params, apiMall + "updateviplevel/");
//更新会员余额
const updatebalance = (params) => wxRequest(params, apiMall + "updatebalance/");
//获取员工列表
const getstafflist = (params) => wxRequest(params, apiMall + "getstafflist/");
//获取员工信息
const getstaffinfo = (params) => wxRequest(params, apiMall + "getstaffinfo/");
//员工发起认证
const updatestaffinfo = (params) => wxRequest(params, apiMall + "updatestaffinfo/");
//获取员工审核列表
const getstaffauthlist = (params) => wxRequest(params, apiMall + "getstaffauthlist/");
//更新员工审核情况
const updatestaffauth = (params) => wxRequest(params, apiMall + "updatestaffauth/");
//更新员工职位
const updatestaffposition = (params) => wxRequest(params, apiMall + "updatestaffposition/");
//获取商户列表
const getbranchlist = (params) => wxRequest(params, api + "getbranchlist/");
//更新订单状态
const updateorderstatus = (params) => wxRequest(params, apiMall + "updateorderstatus/");
//完成洗车
const servicedone = (params) => wxRequest(params, api + "servicedone/");
//取消订单
const cancelorder = (params) => wxRequest(params, api + "cancelorder/");
//数据分析首页
const getanalysismainpage = (params) => wxRequest(params, api + "getanalysismainpage/");
//分析详情
const getanalysisdetails = (params) => wxRequest(params, api + "getanalysisdetails/");




module.exports = {
  login,
  getorderoverview,
  getorderlist,
  getuserlist,
  getviplevel,
  getorderdetails,
  uploadcarimage,
  getstafflist,
  getstaffinfo,
  updatestaffinfo,
  updatebalance,
  updateviplevel,
  getstaffauthlist,
  updatestaffauth,
  getbranchlist,
  updateorderstatus,
  servicedone,
  cancelorder,
  getanalysismainpage,
  getanalysisdetails
}

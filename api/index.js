/*
 * @Author: your name
 * @Date: 2021-06-28 11:36:37
 * @LastEditTime: 2021-06-30 14:01:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \answer\api\index.js
 */
import fly from "../utils/instance";
export default {
  // 登录获取登录token
  wx_mini_login(params) {
    return fly({
      url: `wx_mini_login`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
  getUserInfo(params) {
    return fly({
      url: `getUserInfo`,
      method: "get",
      params,
      loading: false,
      isThree: false,
    });
  },
  ckeckToken(params) {
    return fly({
      url: `checkToken`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
  getBookClass(params) {
    return fly({
      url: `getBookClass`,
      method: "get",
      params,
      loading: false,
      isThree: false,
    });
  },
  getBook(params) {
    return fly({
      url: `getBook`,
      method: "get",
      params,
      loading: false,
      isThree: false,
    });
  },
  getBookDetails(params) {
    return fly({
      url: `getBookDetails`,
      method: "get",
      params,
      loading: false,
      isThree: false,
    });
  },
  getCollectLog(params) {
    return fly({
      url: `getCollectLog`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },

};

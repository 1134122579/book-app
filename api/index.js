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
      loading: true,
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
  addCollect(params) {
    return fly({
      url: `addCollect`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
  cancelCollect(params) {
    return fly({
      url: `cancelCollect`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
  zanBook(params) {
    return fly({
      url: `zanBook`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
  payRentBookOrder(params) {
    return fly({
      url: `payRentBookOrder`,
      method: "post",
      params,
      loading: true,
      isThree: false,
    });
  },
  getUserOrder(params) {
    return fly({
      url: `getUserOrder`,
      method: "post",
      params,
      loading: true,
      isThree: false,
    });
  },
  getNewBookList(params) {
    return fly({
      url: `getNewBookList`,
      method: "get",
      params,
      loading: true,
      isThree: false,
    });
  },
  getHotBookList(params) {
    return fly({
      url: `getHotBookList`,
      method: "get",
      params,
      loading: true,
      isThree: false,
    });
  },
  getTuiBookList(params) {
    return fly({
      url: `getTuiBookList`,
      method: "get",
      params,
      loading: true,
      isThree: false,
    });
  },
  authUserInfo(params) {
    return fly({
      url: `authUserInfo`,
      method: "post",
      params,
      loading: true,
      isThree: false,
    });
  },
  rechargeOrder(params) {
    return fly({
      url: `rechargeOrder`,
      method: "post",
      params,
      loading: true,
      isThree: false,
    });
  },
  scanQrcode(params) {
    return fly({
      url: `scanQrcode`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
  cancelZanBook(params) {
    return fly({
      url: `cancelZanBook`,
      method: "post",
      params,
      loading: true,
      isThree: false,
    });
  },
  setBookPv(params) {
    return fly({
      url: `setBookPv`,
      method: "get",
      params,
      loading: true,
      isThree: false,
    });
  },
  comment_book(params) {
    return fly({
      url: `comment_book`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
  getBookComment(params) {
    return fly({
      url: `getBookComment`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
  zanBookComment(params) {
    return fly({
      url: `zanBookComment`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
    
  },
  getUserRentOrder(params) {
    return fly({
      url: `getUserRentOrder`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
  rentBook(params) {
    return fly({
      url: `rentBook`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
  getsearchBook(params) {
    return fly({
      url: `getsearchBook`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
  returnBook(params) {
    return fly({
      url: `returnBook`,
      method: "post",
      params,
      loading: false,
      isThree: false,
    });
  },
};

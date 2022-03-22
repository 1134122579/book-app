// pages/bookdetail/bookdetail.js
import { formatTime } from "../../utils/util";
import Api from "../../api/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isbookorder:false,
    value: 4,
    bookdetail: {},
    book_id: "", //
  },
  getlist() {
    let { book_id: id } = this.data;
    Api.getBookDetails({ id }).then((res) => {
      this.setData({
        bookdetail: res,
      });
    });
  },
  oncollect() {
    let { is_collect, id: book_id } = this.data.bookdetail;
    if (is_collect != 1) {
      Api.addCollect({ book_id }).then((res) => {
        wx.showToast({
          title: "收藏成功",
          icon: "none",
          duration:3000
        });
        this.getlist();
      });
    } else {
      Api.cancelCollect({ book_id }).then((res) => {
        wx.showToast({
          title: "取消收藏",
          icon: "none",
          duration:3000
        });
        this.getlist();
      });
    }
  },
  payRentBookOrder() {
    let {isbookorder}=this.data
    let {class_id,table_no=10,id:book_id}=this.data.bookdetail
    Api.payRentBookOrder({class_id,table_no,book_id}).then((res) => {
      wx.showToast({
        title: "已申请借书，请稍等",
        icon: "noen",
        duration: 3000,
      });
      this.setData({isbookorder:true})
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { id: book_id } = options;
    this.setData({
      book_id,
    });
    this.getlist();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(formatTime(new Date()));
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});

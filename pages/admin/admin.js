// pages/admin/admin.js
import Api from "../../api/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 1,
    isnulllist: false,
  },
  //  获取图书列表/
  async getlist() {
    let { page, list } = this.data;
    let res = await Api.getUserRentOrder({ page });
    this.setData({
      isnulllist: res.length <= 0,
    });
    if (page == 1) {
      this.setData({
        list: res,
      });
    } else {
      this.setData({
        list: list.concat(res),
      });
    }
  },
  onpull() {
    this.data.page++;
    this.getlist();
  },
  onpush(event) {
    console.log(event, "出书成功");
    wx.showToast({
      title: "出书成功",
      icon: "none",
    });
    this.setData({
      page: 1,
    });
    this.getlist();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getlist();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

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
  onReachBottom: function () {
    this.onpull();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});

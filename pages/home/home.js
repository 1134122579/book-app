// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active:'home',
    tabbarList: [
      {
        id:1,
        name: "首页",
        icon:'/assets/icon/home.png',
        active_icon:'/assets/icon/homeac.png',
        to:"home"
      },
      {
        id:2,
        name: "借阅",
        icon:'/assets/icon/jy.png',
        active_icon:'/assets/icon/jyac.png',
        to:"class"
      },
      {
        id:3,
        name: "订单",
        icon:'/assets/icon/order.png',
        active_icon:'/assets/icon/orderac.png',
        to:"newspaper"
      },  {
        id:4,
        name: "我的",
        icon:'/assets/icon/my1.png',
        active_icon:'/assets/icon/myac1.png',
        to:"friends"
      },
    ],
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});

// pages/collect/collect.js
import Api from "../../api/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    list: [],
    ismore:false
  },
  getCollectLog() {
    let { page, list } = this.data;
    Api.getCollectLog({ page }).then((res) => {
      this.setData({
        ismore:res.length<=0
      })
      if (page == 1) {
        this.setData({
          list: res,
        });
      } else {
        this.setData({
          list: list.conccat(res),
        });
      }
    });
  },
  onpull(){
    this.data.page++
    this.getCollectLog()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCollectLog();
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
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.onpull()
  },


});

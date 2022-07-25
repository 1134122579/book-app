// pages/searchpage/searchpage.js
import Api from "../../api/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchValue: "",
    page: 1,
    book_name: "",
    ismore: false,
    list: [],
  },
  onClick() {
    let {  book_name } = this.data;
    if(!book_name){
      wx.showToast({
        title: '请输入书名',
        icon:'none'
      })
      return
    }
    this.getCollectLog();
  },
  onChange(event) {
    console.log(event.detail);
    let value = event.detail;
    this.setData({
      book_name: value.trim(),
    });
    if (value.trim()) {
      this.getCollectLog();
    }
  },
  getCollectLog() {
    let { page, list, book_name } = this.data;
    if (!book_name.trim()) return;
    Api.getsearchBook({ book_name, page }).then((res) => {
      this.setData({
        ismore: res.length <= 0,
      });
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
  onpull() {
    this.data.page++;
    this.getCollectLog();
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
  onReachBottom: function () {
    this.onpull();
  },

  /**
   * 用户点击右上角分享
   */
});

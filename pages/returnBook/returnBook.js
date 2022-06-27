// pages/returnBook/returnBook.js
import Api from "../../api/index";
import storage from "../../utils/cache";
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  returnBook() {
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        let { result } = res;
        let { user_id } = storage.getUserInfo();
        Api.returnBook({
          book_code: result,
          user_id
        }).then((res) => {
          wx.showToast({
            title: "归还成功",
          });
        });
      },
      fail(res) {
        wx.showToast({
          title: "请从新扫码",
          icon: "none",
        });
      },
    });
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

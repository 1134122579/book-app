// pages/recharge/recharge.js
import Api from "../../api/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [10, 20, 50, 100, 200],
    recharge_price: null,
  },
  pricereido(event) {
    console.log(event);
    let { peice: recharge_price } = event.currentTarget.dataset;
    this.setData({
      recharge_price,
    });
  },
  onprice() {
    let { recharge_price } = this.data;
    if (!recharge_price) {
      wx.showToast({
        title: "请输入金额",
        icon: "none",
      });
      return;
    }
    Api.rechargeOrder({
      recharge_price,
    }).then((res) => {
      let {
        nonceStr,
        paySign,
        signType,
        timeStamp,
        out_trade_no
      } = res;
      wx.requestPayment({
        nonceStr,
        signType,
        package: res.package,
        paySign,
        timeStamp,
        success(data) {
        },
        complete(){
          wx.hideLoading()
          Api.queryCertOrder({
            out_trade_no,
          }).then((res) => {
            App.getUserinfoFn(() => {
              that.setUserinfo()
              wx.hideLoading()
              wx.showToast({
                title: '支付成功，1.5秒自动返回',
                icon: "none",
                mask: true,
              })
              setTimeout(() => {
                wx.navigateBack({
                  delta: 1,
                })
              }, 1500);
            })
          });
        }
      });
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

});

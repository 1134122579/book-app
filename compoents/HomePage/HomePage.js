// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value:4,
    searchValue:'',
    list: [
      {
        id:1,
        title: "流浪地球",
        cover:'http://mfyfile.greatorange.cn/CityBook/20220311161723/472/1430136292-1_w_2.jpg',
        desc:"暂无作者信息"
      },
      {
        id:2,
        title: "流浪地球",
        cover:'http://mfyfile.greatorange.cn/CityBook/20220311161723/472/1430136292-1_w_2.jpg',
        desc:"暂无作者信息"
      },
      {
        id:3,
        title: "流浪地球",
        cover:'http://mfyfile.greatorange.cn/CityBook/20220311161723/472/1430136292-1_w_2.jpg',
        desc:"暂无作者信息"
      },  {
        id:4,
        title: "流浪地球",
        cover:'http://mfyfile.greatorange.cn/CityBook/20220311161723/472/1430136292-1_w_2.jpg',
        desc:"暂无作者信息"
      },
      {
        id:4,
        title: "流浪地球",
        cover:'http://mfyfile.greatorange.cn/CityBook/20220311161723/472/1430136292-1_w_2.jpg',
        desc:"暂无作者信息"
      },  {
        id:4,
        title: "流浪地球",
        cover:'http://mfyfile.greatorange.cn/CityBook/20220311161723/472/1430136292-1_w_2.jpg',
        desc:"暂无作者信息"
      },  {
        id:4,
        title: "流浪地球",
        cover:'http://mfyfile.greatorange.cn/CityBook/20220311161723/472/1430136292-1_w_2.jpg',
        desc:"暂无作者信息"
      },  {
        id:4,
        title: "流浪地球",
        cover:'http://mfyfile.greatorange.cn/CityBook/20220311161723/472/1430136292-1_w_2.jpg',
        desc:"暂无作者信息"
      },
    ],
  },
  gomore(){
    wx.navigateTo({
      url: '/pages/bookclass/bookclass',
    })
  },
  nogo(){

  },

  gosearch(){
    wx.navigateTo({
      url: '/pages/searchpage/searchpage',
    })
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  onReachBotdescm: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});

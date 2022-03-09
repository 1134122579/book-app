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
        cover:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp240054435.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649314442&t=55a8d14477bf6078c45d7f6c026900c6',
        desc:"暂无作者信息"
      },
      {
        id:2,
        title: "流浪地球",
        cover:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp240054435.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649314442&t=55a8d14477bf6078c45d7f6c026900c6',
        desc:"暂无作者信息"
      },
      {
        id:3,
        title: "流浪地球",
        cover:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp240054435.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649314442&t=55a8d14477bf6078c45d7f6c026900c6',
        desc:"暂无作者信息"
      },  {
        id:4,
        title: "流浪地球",
        cover:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp240054435.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649314442&t=55a8d14477bf6078c45d7f6c026900c6',
        desc:"暂无作者信息"
      },
      {
        id:4,
        title: "流浪地球",
        cover:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp240054435.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649314442&t=55a8d14477bf6078c45d7f6c026900c6',
        desc:"暂无作者信息"
      },  {
        id:4,
        title: "流浪地球",
        cover:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp240054435.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649314442&t=55a8d14477bf6078c45d7f6c026900c6',
        desc:"暂无作者信息"
      },  {
        id:4,
        title: "流浪地球",
        cover:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp240054435.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649314442&t=55a8d14477bf6078c45d7f6c026900c6',
        desc:"暂无作者信息"
      },  {
        id:4,
        title: "流浪地球",
        cover:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp240054435.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649314442&t=55a8d14477bf6078c45d7f6c026900c6',
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
  onReachBotdescm: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});

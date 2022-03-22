// pages/booklist/booklist.js
import Api from "../../api/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    class_id: "",
    typelist: [],
    list: [],
    page:1,
    isnulllist:false
  },
  //  获取图书分类/
  async getBookClass() {
    let res = await Api.getBookClass();
    this.setData({
      typelist: res,
    });
  },
  //  获取图书列表/
  async getBook() {
    let { class_id ,page,list} = this.data;
    let res = await Api.getBook({ class_id ,page});
    this.setData({
      isnulllist:res.length<=0
    });
    if(page==1){
      this.setData({
        list: res.concat(res),
      });
    }else{
      this.setData({
        list: res.concat(res),
      });
    }
  
  },
  tabchange(event) {
    console.log(event);
    let { name, index, title } = event.detail;
    this.setData({
      class_id: name,
    });
    this.getBook()
  },
  onpull(){
    this.data.page++
    this.getBook()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { class_id } = options;
    this.setData({
      class_id:Number(class_id),
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getBookClass();
    this.getBook();
    this.selectComponent("#tabs").resize();
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
  onReachBottom: function () {
    this.onpull()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});

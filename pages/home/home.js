// pages/home/home.js
import storage from "../../utils/cache";
import Api from "../../api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: "home",
    tabbarList: [
      {
        id: 1,
        name: "首页",
        icon: "/assets/icon/home.png",
        active_icon: "/assets/icon/homeac.png",
        to: "home",
      },
      {
        id: 2,
        name: "借阅",
        icon: "/assets/icon/jy.png",
        active_icon: "/assets/icon/jyac.png",
        to: "class",
      },
      {
        id: 3,
        name: "订单",
        icon: "/assets/icon/order.png",
        active_icon: "/assets/icon/orderac.png",
        to: "order",
      },
      {
        id: 4,
        name: "我的",
        icon: "/assets/icon/my1.png",
        active_icon: "/assets/icon/myac1.png",
        to: "friends",
      },
    ],
    order_active: "",
    ordertypelist: [
      {
        id: 1,
        name: "在借",
      },
      {
        id: 2,
        name: "已还",
      },
    ],
    listQuery: {
      page: 1,
      status: 1,
    },
    HotBookList: [],
    NewBookList: [],
    userInfo: {},
  },
  // 切换
  onChange(event) {
    if (storage.getToken()) {
      switch (event.detail) {
        case "order":
          this.getUserOrder();
          break;
        case "friends":
          this.getUserInfo();
          break;
        default:
          break;
      }
      this.setData({ active: event.detail });
    } else {
      wx.reLaunch({
        url: "/pages/login/login",
      });
    }
  },
  orderChange(event) {
    console.log(event, 123456);
    this.setData({
      "listQuery.status": event.detail.name,
    });
    this.getUserOrder();
  },
  //获取用户信息
  getUserInfo() {
    Api.getUserInfo().then((res) => {
      this.setData({
        userInfo: res,
      });
      storage.setUserInfo(res);
    });
  },

  //  还书
  stillclick() {
    console.log("还书 扫码");
    wx.showToast({
      title: '暂未开发',
    })
    return
    wx.scanCode({
      onlyFromCamera: true,
      success: (result) => {
        console.log("还书 扫码", result);
      },
      fail: (res) => {},
      complete: (res) => {},
    });
  },
  //  借书
  borrwclick() {
    console.log("借书 扫码");
    if(!storage.getToken()){
        wx.navigateTo({
          url: '/pages/login/login',
        })
        return
    }
    wx.scanCode({
      onlyFromCamera: true,
      success: (data) => {
        console.log("借书 扫码", data);
        let {result}=data
      let {user_id}=  storage.getUserInfo()
        Api.scanQrcode({user_id,result}).then(res=>{
          wx.showToast({
            title: '借阅成功',
          })
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '请从新扫码',
          icon:'none'
        })
      },
      complete: (res) => {},
    });
  },
  onorderpull(){
   this.data.listQuery.page++
   this.getUserOrder()
  },
  //  获取订单
  getUserOrder() {
    let { listQuery ,orderList} = this.data;
    Api.getUserOrder(listQuery).then((res) => {
      this.setData({
        isordermore:res.length>0
      })
      if(listQuery.page==1){
        this.setData({
          orderList: res,
        });
      }else{
        this.setData({
          orderList:orderList.concat(res) ,
        });
      }
      this.selectComponent("#ordertabs").resize();
    });
  },
  //  获取图书分类/
  getBookClass() {
    Api.getBookClass().then((res) => {
      console.log(res);
    });
  },
  // 热门
  getHotBookList() {
    Api.getHotBookList().then((res) => {
      res=res.slice(0,5)
      res=res.map(item=>{
        item['create_time']=''
        return item
      })
      this.setData({
        HotBookList: res,
      });
    });
  },
  // 最新
  getNewBookList() {
    Api.getNewBookList().then((res) => {
      this.setData({
        NewBookList: res,
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBookClass();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getHotBookList();
    this.getNewBookList();
    if (storage.getToken()) {
      this.getUserInfo();
    }
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
    let {active}=this.data
    if(active=='order'){
      this.onorderpull()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});

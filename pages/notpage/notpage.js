// pages/newpage/newpage.js
import Api from "../../api/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    tabsList: [
      {
        id: "top",
        name: "推荐",
      },
      {
        id: "pl_num",
        name: "热评",
      },
      {
        id: "pv_num",
        name: "浏览",
      },
      {
        id: "rent_num",
        name: "借阅",
      },
    ],
    list: [],
    activeTab:'top'
  },
  ontabChange(event) {
    console.log(event.detail);
    let { name } = event.detail;
    this.setData({
      page: 1,
      activeTab:name,
    });
    if (name == "top") {
      this.getList();
    } else {
      this.getBookRankList(name);
    }
  },
  // 排行
  getBookRankList(order_field) {
    let { page, list } = this.data;
    Api.getBookRankList({ order_field, page }).then(res => {
      // res = res.slice(0, 5);
      res = res.map(item => {
        item["create_time"] = "";
        return item;
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
    });
  },
  getList() {
    let { page, list } = this.data;
    Api.getHotBookList({ page }).then(res => {
      res = res.map(item => {
        item["create_time"] = "";
        return item;
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
    });
  },
  onCollect(event) {
    console.log(event);
    this.getList();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
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
    console.log("上拉")
    let { activeTab,page } = this.data
   this.data.page++
   console.log(this.data.page)
    if (activeTab == "top") {
      this.getList();
    } else {
      this.getBookRankList(activeTab);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});

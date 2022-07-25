// pages/home/home.js
Component({
  /**
   * 组件的初始数据
   */
  /**
   * 组件的属性列表
   */
  properties: {
    activetab:"top",
    msg: {
      type: String,
    },
    HotBookList: {
      type: Array,
      value: [],
      observer(newVal, oldVal, changePath) {},
    },
    NewBookList: {
      type: Array,
      value: [],
      observer(newVal, oldVal, changePath) {},
    },
    bookclasslist: {
      type: Array,
      value: [],
      observer(newVal, oldVal, changePath) {},
    },
  },
  data: {
  
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
    columnnum: 3,
    value: 4,
    searchValue: "",
    cover: [
      "http://mfyfile.greatorange.cn/CityBook/20220323101349/927/伊人.webp",
      "http://mfyfile.greatorange.cn/CityBook/20220323101317/391/马可波罗行纪.webp",
      "http://mfyfile.greatorange.cn/CityBook/20220322105808/659/book.webp",
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ontabChange(event) {
      console.log(event.detail);
      this.triggerEvent("onTabChange", event.detail);
    },
    golist(event) {
      console.log(event);
      let { item } = event.currentTarget.dataset;
      wx.navigateTo({
        url: "/pages/booklist/booklist?class_id=" + item.id,
      });
    },
    gomore() {
      wx.showLoading({
        title: "加载中..",
      });
      wx.navigateTo({
        url: "/pages/bookclass/bookclass",
      });
    },
    goNew() {
      wx.showLoading({
        title: "加载中..",
      });
      wx.navigateTo({
        url: "/pages/newpage/newpage",
      });
    },

    gonot() {
      wx.showLoading({
        title: "加载中..",
      });
      wx.navigateTo({
        url: "/pages/notpage/notpage",
      });
    },
    nogo() {},

    gosearch() {
      wx.showLoading({
        title: "加载中..",
      });
      wx.navigateTo({
        url: "/pages/searchpage/searchpage",
      });
    },
    gobookdetail(event) {
      console.log(event);
      let { item } = event.currentTarget.dataset;
      wx.showLoading({
        title: "加载中..",
      });
      wx.navigateTo({
        url: `/pages/bookdetail/bookdetail?id=${item.id}`,
      });
    },
    onChange(event) {
      this.setData({ active: event.detail });
    },
  },
});

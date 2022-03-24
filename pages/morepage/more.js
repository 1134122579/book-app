var appInst = getApp();

Component({
  properties: {
    userInfo: {
      type: Object,
      value: {},
      observer(newV, oldV) {
        console.log(newV)
        if (newV.is_admin == 1) {
          powerlist.push("admin");
          this.setData({
            powerlist,
          });
        }
      },
    },
  },
  /**
   * 页面的初始数据
   */
  data: {
    powerlist: ["user", "admin"],
    navHeight: appInst.globalData.navHeight,
    list: [
      {
        title: "店长管理",
        icon: "shield-o",
        to: "../../pages/admin/admin",
        linktype: "navigateTo",
        value: "",
        isborder: false,
        marginTop: "marginTop",
        is_power: "admin",
        isLink: false,
        isbutton: false,
      },
      {
        title: "客流统计",
        icon: "shield-o",
        to: "../../pages/shopCount/shopCount",
        linktype: "navigateTo",
        value: "",
        isborder: false,
        marginTop: "",
        is_power: "admin",
        isLink: false,
        isbutton: false,
      },
      {
        title: "收藏记录",
        icon: "coupon-o",
        to: "../../pages/collect/collect",
        linktype: "navigateTo",
        value: "",
        isborder: false,
        marginTop: "marginTop",
        is_power: "user", //权限
        isLink: false,
        isbutton: false,
      },
      // {
      //   title: "认证",
      //   icon: "award-o",
      //   to: "../../pages/authpage/authpage",
      //   linktype: "navigateTo",
      //   value: "",
      //   isborder: false,
      //   marginTop: "",
      //   is_power: "user",
      //   isLink: false,
      //   isbutton: false,
      // },
      {
        title: "充值中心",
        icon: "vip-card-o",
        to: "../../pages/recharge/recharge",
        linktype: "navigateTo",
        value: "",
        isborder: false,
        marginTop: "",
        is_power: "user",
        isLink: false,
        isbutton: false,
      },
      {
        title: "充值记录",
        icon: "orders-o",
        to: "../../pages/businesslist/businesslist",
        linktype: "navigateTo",
        value: "",
        isborder: false,
        marginTop: "",
        is_power: "user",
        isLink: false,
        isbutton: false,
      },
      // {
      //   title: "会员协议",
      //   icon: "records",
      //   to: "../../pages/setting/setting",
      //   linktype: "navigateTo",
      //   value: "",
      //   isborder: false,
      //   marginTop: "marginTop",
      //   is_power: "user",
      //   isLink: false,
      //   isbutton: false,
      // },
    ],
  },

  methods: {
    goVip() {
      wx.navigateTo({
        url: "/pages/vipdetail/vipdetail",
      });
    },
    onuserInfo() {
      wx.navigateTo({
        url: "/pages/userInfo/userInfo",
      });
    },
  },
});

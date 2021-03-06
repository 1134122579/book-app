var appInst = getApp();

Component({
  properties: {
    userInfo: {
      type: Object,
      value: {},
      observer(newV, oldV) {
        if (newV.is_admin == 1) {
          let powerlist = this.data.powerlist.concat("admin");
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
    powerlist: ["user"],
    navHeight: appInst.globalData.navHeight,
    list: [
      {
        title: "客户订单",
        icon: "shield-o",
        to: "../../pages/admin/admin",
        linktype: "navigateTo",
        value: "",
        isborder: true,
        marginTop: "marginTop",
        is_power: "admin",
        isLink: false,
        isbutton: false,
      },
      {
        title: "客户还书",
        icon: "shield-o",
        to: "../../pages/returnBook/returnBook",
        linktype: "navigateTo",
        value: "",
        isborder: true,
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
        isborder: true,
        marginTop: "",
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
        title: "个人中心",
        icon: "manager-o",
        to: "../../pages/userInfo/userInfo",
        linktype: "navigateTo",
        value: "",
        isborder: true,
        marginTop: "",
        is_power: "user",
        isLink: false,
        isbutton: false,
      },
      {
        title: "充值中心",
        icon: "refund-o",
        to: "../../pages/recharge/recharge",
        linktype: "navigateTo",
        value: "",
        isborder: true,
        marginTop: "",
        is_power: "user",
        isLink: false,
        isbutton: false,
      },
      {
        title: "充值记录",
        icon: "records",
        to: "../../pages/rechargelist/rechargelist",
        linktype: "navigateTo",
        value: "",
        isborder: true,
        marginTop: "",
        is_power: "user",
        isLink: false,
        isbutton: false,
      },
      {
        title: "用户协议",
        icon: "description",
        to: "../../pages/setting/setting",
        linktype: "navigateTo",
        value: "",
        isborder: false,
        marginTop: "",
        is_power: "user",
        isLink: false,
        isbutton: false,
      },
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

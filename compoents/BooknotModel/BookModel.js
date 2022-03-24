// compoents/BookModel/BookModel.js
import storage from "../../utils/cache";
import Api from "../../api/index"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: {
      type: Object,
      value: {},
      observer(newVal, oldVal, changePath) {
        newVal["title"] = newVal?.title || newVal?.book_name;
        newVal["id"] = newVal?.id || newVal?.book_id;
        this.setData({
          bookinfo: newVal,
        });
      },
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: 3,
    bookinfo: {},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    catchtap(){

    },
    gobookdetail() {
      let { bookinfo } = this.data;
      wx.showLoading({
        title: "加载中..",
      });
      if (!storage.getToken()) {
        wx.reLaunch({
          url: "/pages/login/login",
        });
        retuen;
      }
      wx.navigateTo({
        url: "/pages/bookdetail/bookdetail?id=" + bookinfo.id,
      });
    },
    oncollect() {
      let { id: book_id,is_collect } = this.data.bookinfo;
      if (is_collect != 1) {
        Api.addCollect({
          book_id,
        }).then((res) => {
          wx.showToast({
            title: "收藏成功",
            icon: "none",
            duration: 3000,
          });
          this.triggerEvent('onCollect',res)
        });
      } else {
        Api.cancelCollect({
          book_id,
        }).then((res) => {
          wx.showToast({
            title: "取消收藏",
            icon: "none",
            duration: 3000,
          });
          this.triggerEvent('onCollect',res)
        });
      }
    },
  },
});

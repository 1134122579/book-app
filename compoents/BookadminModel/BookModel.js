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
    onpush(){
      let {book}=this.data
      let that=this
      wx.scanCode({
        onlyFromCamera: true,
        success(res){
          book['brcode']=res.result
          console.log(book)
          Api.rentBook(book).then(res=>{
            that.triggerEvent('onpush',res)
          })
        }
      })
    }
  },
});

// compoents/BookModel/BookModel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book:{
      type:Object,
      value:{},
      observer(newVal, oldVal, changePath){
        newVal['title']=newVal['title']||newVal['book_name']
        this.setData({
          bookinfo:newVal
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:3,
    bookinfo:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gobookdetail(){
      let {book}=this.data
      wx.navigateTo({
        url: '/pages/bookdetail/bookdetail?id='+book.id,
      })
        },
  }
})

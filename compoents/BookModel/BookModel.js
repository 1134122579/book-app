// compoents/BookModel/BookModel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:3
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

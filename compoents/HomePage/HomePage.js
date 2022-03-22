// pages/home/home.js
Component({
  /**
   * 组件的初始数据
   */
    /**
   * 组件的属性列表
   */
  properties: {
    HotBookList:{
      type:Array,
      value:[],
      observer(newVal, oldVal, changePath){
    
      }
    },
    NewBookList:{
      type:Array,
      value:[],
      observer(newVal, oldVal, changePath){
    
      }
    }
  },
  data: {
    value:4,
    searchValue:'',
  },
 
  /**
   * 组件的方法列表
   */
  methods:{
    gomore(){
      wx.navigateTo({
        url: '/pages/bookclass/bookclass',
      })
    },
    nogo(){
  
    },
    gosearch(){
      wx.navigateTo({
        url: '/pages/searchpage/searchpage',
      })
    },
    gobookdetail(event){
      console.log(event)
      let {item}=event.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/bookdetail/bookdetail?id=${item.id}`,
      })

    },
    onChange(event) {
      this.setData({ active: event.detail });
    },
  }
});

// pages/home/home.js
Component({
  /**
   * 组件的初始数据
   */
    /**
   * 组件的属性列表
   */
  properties: {
    msg:{
      type:String,
    },
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
    },
    bookclasslist:{
      type:Array,
      value:[],
      observer(newVal, oldVal, changePath){
    
      }
    }

  },
  data: {
    columnnum:3,
    value:4,
    searchValue:'',
    cover:['http://mfyfile.greatorange.cn/CityBook/20220323101349/927/伊人.webp','http://mfyfile.greatorange.cn/CityBook/20220323101317/391/马可波罗行纪.webp','http://mfyfile.greatorange.cn/CityBook/20220322105808/659/book.webp']
  },
 
  /**
   * 组件的方法列表
   */
  methods:{
    golist(event){
      console.log(event)
      let {item}=event.currentTarget.dataset
      wx.navigateTo({
        url: '/pages/booklist/booklist?class_id='+item.id,
      })
    },
    gomore(){
      wx.showLoading({
        title: '加载中..',
      })
      wx.navigateTo({
        url: '/pages/bookclass/bookclass',
      })
    },
    goNew(){
      wx.showLoading({
        title: '加载中..',
      })
      wx.navigateTo({
        url: '/pages/newpage/newpage',
      })
    },

    gonot(){
      wx.showLoading({
        title: '加载中..',
      })
      wx.navigateTo({
        url: '/pages/notpage/notpage',
      })
    },
    nogo(){
  
    },
  
    gosearch(){
      wx.showLoading({
        title: '加载中..',
      })
      wx.navigateTo({
        url: '/pages/searchpage/searchpage',
      })
    },
    gobookdetail(event){
      console.log(event)
      let {item}=event.currentTarget.dataset
         wx.showLoading({
        title: '加载中..',
      })
      wx.navigateTo({
        url: `/pages/bookdetail/bookdetail?id=${item.id}`,
      })

    },
    onChange(event) {
      this.setData({ active: event.detail });
    },
  }
});

// pages/bookdetail/bookdetail.js
import { formatTime } from "../../utils/util";
import Api from "../../api/index";
import storage from '../../utils/cache'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ismorelist:false,
    autosize:{ maxHeight: 140, minHeight: 100 },
    isbookorder: false,
    iscommentshow: false,
    value: 4,
    bookdetail: {},
    book_id: "", //
    page:1,
    commentcontent:'',
    commentlist:[]
  },
  zanBookComment(event){
    console.log(event)
    let {id:comment_id,is_zan}=event.currentTarget.dataset.comment
    if(is_zan==1){
      wx.showToast({
        title: '已点赞',
        icon:'none'
      })
      return
    }
    Api.zanBookComment({comment_id}).then(res=>{
      wx.showToast({
        title: '点赞成功',
      })
      this.setData({
        page:1,
      })
      this.getBookComment()
    })

  },
  onpushmkcomment(){
    let {commentcontent:content,book_id}=this.data
    let {is_auth }=storage.getUserInfo()
    if(is_auth!=1){
      wx.showToast({
        title: '请到个人中心，认证！',
        icon:'none'
      })
      return
    }
    if(!content){
      wx.showToast({
        title: '请输入评论',
        icon:'none'
      })
      return
    }
    Api.comment_book({book_id,content}).then(res=>{
      wx.showToast({
        title: '评论成功',
        icon:'none'
      })
      this.setData({
        page:1,
        iscommentshow:false
      })
      this.getBookComment()
    })
  },
  onpull(){
    this.data.page++
    this.getBookComment()
  },
  getBookComment(){
    let {book_id,page,commentlist}=this.data
    Api.getBookComment({book_id,page}).then(res=>{
      this.setData({
        ismorelist:res.length<=0
      })
      if(page==1){
        this.setData({
      commentlist:res
        })
      }else{
        this.setData({
          commentlist:commentlist.concat(res)
            })
      }
    })
  },
  onClose(){
    this.setData({
      iscommentshow: false,
    });
  },
  oncomment() {
    this.setData({
      iscommentshow: true,
    });
  },
  getlist() {
    let { book_id: id } = this.data;
    Api.getBookDetails({
      id,
    }).then((res) => {
      this.setData({
        bookdetail: res,
      });
    });
  },
  onlike() {
    let { is_like, id: book_id } = this.data.bookdetail;
    if (is_like != 1) {
      Api.zanBook({
        book_id,
      }).then((res) => {
        wx.showToast({
          title: "点赞成功",
          icon: "none",
          duration: 3000,
        });
        this.getlist();
      });
    } else {
      Api.cancelZanBook({
        book_id,
      }).then((res) => {
        wx.showToast({
          title: "取消点赞",
          icon: "none",
          duration: 3000,
        });
        this.getlist();
      });
    }
  },
  oncollect() {
    let { is_collect, id: book_id } = this.data.bookdetail;
    if (is_collect != 1) {
      Api.addCollect({
        book_id,
      }).then((res) => {
        wx.showToast({
          title: "收藏成功",
          icon: "none",
          duration: 3000,
        });
        this.getlist();
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
        this.getlist();
      });
    }
  },
  payRentBookOrder() {
    let { isbookorder } = this.data;
    let { class_id,  id: book_id,unit_price:price } = this.data.bookdetail;
    let {table_no}=getApp().globalData
    let {is_auth }=storage.getUserInfo()
    if(is_auth!=1){
      wx.showToast({
        title: '请到个人中心，认证！',
        icon:'none'
      })
      return
    }
    wx.requestSubscribeMessage({
      tmplIds: ['YUsAd1OMja7NlNFKKhg8TEhdNO147PvDc3ANHrVLLeQ'],
      success (res) { },
      complete(){
        Api.payRentBookOrder({
          class_id,
          table_no,
          book_id,
          price
        }).then((res) => {
          wx.showToast({
            title: "已申请借书，请稍等",
            icon: "noen",
            duration: 3000,
          });
          this.setData({
            isbookorder: true,
          });
        });
      }
    })
  
  },
  setBookPv() {
    let { book_id } = this.data;
    Api.setBookPv({ book_id }).then((res) => {
      console.log("浏览数");
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { id: book_id } = options;
    this.setData({
      book_id,
      page:1
    });
    this.getlist();
    this.getBookComment()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(formatTime(new Date()));
    // 浏览数
    this.setBookPv();
  },

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
    this.onpull()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});

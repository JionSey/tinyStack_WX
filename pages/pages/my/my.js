/**
 * 我的
 * author：iWgang
 * email:  iwgang@163.com
 * time:   2016-10-11
 * github：https://github.com/iwgang/GankCamp-WechatAPP
 */
Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    wx.login({
      success: res => {
        wx.getUserInfo({
          success: res => {
            this.setData({
              userInfo: res.userInfo
            })
            console.log(res);
          }
        })
      }
    })
  },
  onPullDownRefresh: function() {
    console.log('下拉刷新...')
  },
  collectionTap: function (e) {
    var item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '../shop_detaile/shop_detaile?detaileModel=' + JSON.stringify(item),
      success: function (res) {
      }
    })
    console.log(item);
  },
  likeTeaTap: function (e) {
    var item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '../shop_detaile/shop_detaile?detaileModel=' + JSON.stringify(item),
      success: function (res) {
      }
    })
    console.log(item);
  },
  shareTap: function (e) {
    var item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '../shop_detaile/shop_detaile?detaileModel=' + JSON.stringify(item),
      success: function (res) {
      }
    })
    console.log(item);
  },
  relationTap: function (e) {
    wx.navigateTo({
      url: '../shop_detaile/shop_detaile?detaileModel=' + JSON.stringify(item),
      success: function (res) {
      }
    })
    console.log(item);
  }
})
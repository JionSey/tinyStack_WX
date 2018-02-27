const app = getApp()
Page({
  data: {
    imagePath:"",
    detaileModel:{
    },
    detaileShopModel:{
    }
  },
  onLoad: function (options) {
    this.setImagePath();
    this.setData({
      type: options.type,
      detaileModel: JSON.parse(options.detaileModel)
    });
    wx.setNavigationBarTitle({title: this.data.detaileModel.title});
    this.requestShopListData();
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
    this.requestShopListData();
  },
  setImagePath:function(e){
    this.setData({
      imagePath:getApp().globalData.kNetworkPath
    });
  },
  // 获取首页各个模块数据
  requestShopListData:function(e){
    var THIS = this;
    wx.request({
      url: getApp().globalData.kNetworkPath + "/home/shop/detaile",
      data: {
        shop_id: THIS.data.detaileModel.id
      },
      method: "GET",  
      success: function (res) {
        var data = res.data;
        var listArray = data.result;
        console.log(listArray);
        THIS.setData({
          detaileShopModel: listArray[0]
        });        
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
      },
      complete: function (res) {
        wx.stopPullDownRefresh();
      }
    });
  },
  brewingTap: function(e) {
    console.log(this.data.detaileShopModel);
    wx.navigateTo({
      url: '../brewing/brewing?detaileShopModel=' + JSON.stringify(this.data.detaileShopModel),
      success: function (res) {
      }
    })
  }
})

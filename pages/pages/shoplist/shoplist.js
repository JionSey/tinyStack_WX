const app = getApp()
Page({
  data: {
    imagePath:"",
    type:"",
    detaileModel:{
    },
    dataArray:[]
  },
  onLoad: function (options) {
    this.setImagePath();
    this.setData({
      type: options.type,
      detaileModel: JSON.parse(options.detaileModel)
    });
    wx.setNavigationBarTitle({ title: this.data.detaileModel.title});
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
      url: getApp().globalData.kNetworkPath + "/home/shop/list",
      data: {
        type: THIS.data.type,
        list_id: THIS.data.detaileModel.id
      },
      method: "GET",  
      success: function (res) {
        var data = res.data;
        var listArray = data.result;
        THIS.setData({
          dataArray: listArray
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
  shopListTap: function (e) {
    var item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '../shop_detaile/shop_detaile?detaileModel=' + JSON.stringify(item),
      success: function (res) {
      }
    })
    console.log(item);
  }
})

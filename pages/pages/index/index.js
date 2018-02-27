const app = getApp()
Page({
  data: {
    imagePath:"",
    bannerArray:[],
    efficacyList:[],
    typeList:[],
    rankList:[],
    efficacyHeadTitle:"功效类型",
    typeHeadTitle: "种类类型",
    rankHeadTitle: "排行列表"
  },
  onLoad: function () {
    this.setImagePath();
    this.requestHomeData();
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
    this.requestHomeData();
  },
  setImagePath:function(e){
    this.setData({
      imagePath:getApp().globalData.kNetworkPath
    });
  },
  // 获取首页各个模块数据
  requestHomeData:function(e){
    var THIS = this;
    wx.request({
      url: getApp().globalData.kNetworkPath + "/home/index/homedata",
      data: {},
      success: function (res) {
        var data = res.data;
        var allHomeData = data.result.home_data;
        console.log(allHomeData);
        for (var i = 0; i < allHomeData.length; i++) {
          var itemData = allHomeData[i];
          var itemType = itemData.item_type;
          if(itemType == "1"){
            THIS.setData({
              bannerArray: itemData.banner
            });
          } else if(itemType == "2"){
            THIS.setData({
              efficacyList: itemData.efficacy_list
            });
          } else if (itemType == "3") {
            THIS.setData({
              typeList: itemData.type_list
            });
          } else if (itemType == "4") {
            THIS.setData({
              rankList: itemData.rank_list
            });
          }
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        };
      },
      fail: function (res) {
      },
      complete: function (res) {
        wx.stopPullDownRefresh();
      }
    });
  },
  searchTap:function(e){
    wx.navigateTo({
      url: '../search/search',
      success: function (res) {
      }
    })
  },
  bannerTap:function(e){
    var item = e.currentTarget.dataset.item;
    console.log(item);
  },
  efficacyTap: function (e) {
    var item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '../shoplist/shoplist?type=1&detaileModel=' + JSON.stringify(item),
      success: function (res) {
      }
    })
    console.log(item);
  },
  typeTap: function (e) {
    var item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '../shoplist/shoplist?type=2&detaileModel=' + JSON.stringify(item),
      success: function (res) {
      }
    })
    console.log(item);
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

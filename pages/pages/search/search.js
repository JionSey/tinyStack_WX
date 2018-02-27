const app = getApp()
Page({
  data: {
    searchValue: "",
    showDelete: false,
    dataArray:[]
  },
  onLoad: function (options) {
    this.setImagePath();
  },
  /** 搜索茶叶 */
  bindSearchInput: function (event) {
    var value = event.detail.value;
    var readyData = { showDelete: false };
    if (value.length > 0) {
      readyData = { showDelete: true };
      this.handleSearchData(value);
    }
    this.setData(readyData);
  },
  /**清空输入框 */
  bindSearchDelete: function (event) {
    var readyData = { searchValue: "", showDelete: false, dataArray: [] };
    this.setData(readyData);
  },
  /**点击取消 */
  bindSearchCancel: function (event) {
    wx.navigateBack();
  },
  /** 提交搜索请求 */
  handleSearchData: function (search_value) {

    var THIS = this;
    wx.request({
      url: getApp().globalData.kNetworkPath + "/home/index/search",
      data: {
        search_word: search_value,
      },
      method: "GET",  
      success: function (res) {
        var data = res.data;
        var listArray = data.result;
        THIS.setData({
          dataArray: listArray
        });
      },
      fail: function (res) {
      }
    });
  },
  setImagePath:function(e){
    this.setData({
      imagePath:getApp().globalData.kNetworkPath
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

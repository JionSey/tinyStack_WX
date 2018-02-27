const app = getApp();
var timer;
Page({
  data: {
    imagePath: "",
    times:0,
    timeBtnText:"开始计时",
    detaileShopModel:{
    }
  },
  onLoad: function (options) {
    this.setImagePath();
    this.setData({
      detaileShopModel: JSON.parse(options.detaileShopModel),
    });
    var time = this.data.detaileShopModel.time;
    this.setData({
      times: time,
    });
    console.log(this.data.detaileShopModel);
    wx.setNavigationBarTitle({ title: this.data.detaileShopModel.title + '冲泡计时'});
  },
  setImagePath:function(e){
    this.setData({
      imagePath:getApp().globalData.kNetworkPath
    });
  },
  timeStarTap: function (e) {
    console.log(e);
    var value = e.target.dataset.state;
    console.log(value);
    if(value == "开始计时") {
      this.setData({
        timeBtnText: "计时中"
      });
      this.countdown();
    } else {
      var time = this.data.detaileShopModel.time;
      this.setData({
        timeBtnText: "开始计时",
        times: time
      });
      this.stopTimer();
    }
  },
  countdown :function(e){
    var THIS = this;
    timer = setTimeout(function () {
      var newTime = THIS.data.times - 1;
      THIS.setData({
        times: newTime
      });
      if (newTime) {
        THIS.countdown();
      } else {
        THIS.setData({
          timeBtnText: "时间到啦"
        });
        THIS.stopTimer();
      }
    }, 1000);
  },
  stopTimer :function(e){
    clearTimeout(timer);
  }
});
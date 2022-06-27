// app.js
App({
  onLaunch() {
    this.getwxcode();
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
    // 热更新
    if (wx.canIUse("getUpdateManager")) {
      const updateManager = wx.getUpdateManager();
      //检查是否有新版本
      updateManager.onCheckForUpdate(function (res) {
        // 如果有新版本
        if (res.hasUpdate) {
          // 手机支持热更新时
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: "更新提示",
              content: "新版本已经准备好，是否重启应用？",
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate();
                }
              },
            });
          });
          // 手机不支持热更新时
          updateManager.onUpdateFailed(function () {
            wx.showModal({
              title: "已经有新版本了哟~",
              content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~",
            });
          });
        }
      });
    } else {
    }
  },
  getwxcode() {
    // 小程序扫码场景值
    const qrcodeScenes = [1047, 1048, 1049];
    const { query, scene: pageScene } = wx.getLaunchOptionsSync();
    let optionsQuery = query;
    const enterOptionsQuery = wx.getEnterOptionsSync().query;
    // 只有二次扫码的情况才会使用 wx.getEnterOptionsSync() 获取参数
    if (qrcodeScenes.includes(pageScene) && !enterOptionsQuery) {
      optionsQuery = wx.getEnterOptionsSync().query;
    }
    console.log(optionsQuery);
    this.globalData.table_no=optionsQuery.table_no||10
  },
  globalData: {
    userInfo: null,
    table_no:10,
  },
});

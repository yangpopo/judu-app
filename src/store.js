import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      keepLiveRoute: ['index'], // 路由缓存
      logonPopupState: false, // 登录弹窗
      sharePopupState: false, // 分享弹窗
      shareData: {}, // 分享数据
      userInfo: null, // 用户登录信息
      morePopupState: false, // 更多操作弹窗
    }
  },
  mutations: {
    // 登录弹窗
    logonPopup(state, val) {
      state.logonPopupState = val;
    },
    // 分享弹窗
    sharePopup(state, val) {
      state.sharePopupState = val;
    },
    // 更新分享数据
    updateShareData(state, data) {
      state.shareData = data;
    },
    // 更新用户信息
    updateUserInfo(state, val) {
      if (val) {
        state.userInfo = val;
      } else {
        state.userInfo = null;
      }
    },
    // 更新用户信息
    morePopup(state, val) {
      state.morePopupState = val;
    }
  }
})

export default store
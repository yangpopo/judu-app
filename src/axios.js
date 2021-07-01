import axios from 'axios';
import { Toast, Dialog } from 'vant';
import store from '@/store';

axios.defaults.baseURL = process.env.VUE_APP_BASEURL //测试

//post请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
//设置超时
axios.defaults.timeout = 10000;

// 调用vuex--例子
// console.log(store.state.logonPopupState, "-------")
// store.commit('logonPopup', false)

// 请求拦截器
axios.interceptors.request.use(
  config => {
    Toast.loading({
      duration: 0,
      message: '加载中...',
      forbidClick: true,
    });
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    Toast.clear();
    return response.data;
  },
  error => {
    Toast.clear();
    Dialog.alert({
      title: "提示",
      message: "网络请求失败，反馈给客服"
    });
  }
);
export default axios
import { ref } from 'vue';
import store from '@/store'; // vuex
import axios from '@/axios';
import { Toast } from 'vant';

// 首页数据
function updateHomeData() {
  let homeData = ref([]);
  // 获取首页数据
  function getHomeData() {
    axios.get("/api/homeData.json").then(res => {
      if (res.returnCode == 200) {
        homeData.value = res.data;
      }
    })
  }  
  
  // 刷新单个数据
  function updateData(index) {
    axios.get("/api/updateIndexData.json").then(res => {
      if (res.returnCode == 200) {
        homeData.value[index].coverPhoto = res.data.coverPhoto;
        homeData.value[index].sentence = res.data.sentence;
        homeData.value[index].author = res.data.author;
        homeData.value[index].source = res.data.source;
        homeData.value[index].id = res.data.id;
        homeData.value[index].comment = res.data.comment;
        homeData.value[index].like = res.data.like;
      }
    })
  }
 
  
  // 评论
  function goComment(index) {
    if (store.state.userInfo == null) {
      // 没有登录去登录
      store.commit('logonPopup', true);
      return
    }
    axios.get("/api/returnTrue.json").then(ret => {
      if (ret.returnCode == 200 && ret.data == true) {
        homeData.value[index].comment = homeData.value[index].comment + 1;
        Toast.success('操作成功!');
      }
    })
  }

  // 点赞
  function goLike(index) {
    if (store.state.userInfo == null) {
      // 没有登录去登录
      store.commit('logonPopup', true);
      return
    }
    axios.get("/api/returnTrue.json").then(ret => {
      if (ret.returnCode == 200 && ret.data == true) {
        homeData.value[index].like = homeData.value[index].like + 1;
        Toast.success('操作成功!');
      }
    })
  }

  return {
    homeData,
    getHomeData,
    updateData,
    goComment,
    goLike,
  }
}



export { updateHomeData }
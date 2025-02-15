import { ref } from 'vue';
import store from '@/store'; // vuex
import axios from '@/axios';
import { Toast } from 'vant';

// 首页数据
function updateHomeData() {
  let homeData = ref([]);
  // 获取首页数据
  function getHomeData() {
    // axios.get("/api/homeData.json").then(res => {
    //   if (res.returnCode == 200) {
    //     homeData.value = res.data;
    //   }
    // })
    let res = {
      "data": [
        {
          "id": 0,
          "comment": 544,
          "like": 5482,
          "coverPhoto": "./img/cover-01.jpg",
          "oldCalendar": {
            "year": "辛丑牛年",
            "month": "甲午月甲午日",
            "day": "五月初六"
          },
          "gregorianCalendar": {
            "year": "2021",
            "month": "06",
            "day": "15",
            "week": "星期二"
          },
          "sentence": "你来人间一趟，你要看看太阳，和你的心上人，一起走在街上。",
          "author": "海子",
          "source": "夏天的太阳",
          "provider": {
            "name": "科科",
            "headPortrait": "./img/head-portrait.jpg"
          }
        }, {
          "id": 1,
          "comment": 224,
          "like": 1482,
          "coverPhoto": "./img/cover-02.jpg",
          "oldCalendar": {
            "year": "辛丑牛年",
            "month": "甲午月甲午日",
            "day": "五月初五"
          },
          "gregorianCalendar": {
            "year": "2021",
            "month": "06",
            "day": "14",
            "week": "星期一"
          },
          "sentence": "最深沉的爱，是绝口不提，不去谈论也不去抒情。",
          "author": "姚瑶",
          "source": null,
          "provider": {
            "name": "科科",
            "headPortrait": "./img/head-portrait.jpg"
          }
        }, {
          "id": 2,
          "comment": 315,
          "like": 2845,
          "coverPhoto": "./img/cover-03.jpg",
          "oldCalendar": {
            "year": "辛丑牛年",
            "month": "甲午月甲午日",
            "day": "五月初四"
          },
          "gregorianCalendar": {
            "year": "2021",
            "month": "06",
            "day": "13",
            "week": "星期日"
          },
          "sentence": "世界越来越美了，我独自一人，却很自在。我别无所求，只想被阳光晒透。",
          "author": "赫尔曼.黑塞",
          "source": null,
          "provider": {
            "name": "科科",
            "headPortrait": "./img/head-portrait.jpg"
          }
        }, {
          "id": 3,
          "comment": 658,
          "like": 8545,
          "coverPhoto": "./img/cover-04.jpg",
          "oldCalendar": {
            "year": "辛丑牛年",
            "month": "甲午月甲午日",
            "day": "五月初三"
          },
          "gregorianCalendar": {
            "year": "2021",
            "month": "06",
            "day": "12",
            "week": "星期六"
          },
          "sentence": "即使没有人为你鼓掌，也要优雅的谢幕，并感谢自己的认真付出。",
          "author": "权志龙",
          "source": null,
          "provider": {
            "name": "科科",
            "headPortrait": "./img/head-portrait.jpg"
          }
        }, {
          "id": 4,
          "comment": 321,
          "like": 2640,
          "coverPhoto": "./img/cover-05.jpg",
          "oldCalendar": {
            "year": "辛丑牛年",
            "month": "甲午月甲午日",
            "day": "五月初二"
          },
          "gregorianCalendar": {
            "year": "2021",
            "month": "06",
            "day": "11",
            "week": "星期五"
          },
          "sentence": "人类荒唐的把琐事看得太重，让自己和他人都过得不快乐，似乎挺可悲的。",
          "author": "毛姆",
          "source": null,
          "provider": {
            "name": "科科",
            "headPortrait": "./img/head-portrait.jpg"
          }
        }
      ],
      "msg": "操作成功",
      "returnCode": "200",
      "returnTime": 1623894653
    };
    if (res.returnCode == 200) {
      homeData.value = res.data;
    }
  }  
  
  // 刷新单个数据
  function updateData(index) {
    // axios.get("/api/updateIndexData.json").then(res => {
    //   if (res.returnCode == 200) {
    //     homeData.value[index].coverPhoto = res.data.coverPhoto;
    //     homeData.value[index].sentence = res.data.sentence;
    //     homeData.value[index].author = res.data.author;
    //     homeData.value[index].source = res.data.source;
    //     homeData.value[index].id = res.data.id;
    //     homeData.value[index].comment = res.data.comment;
    //     homeData.value[index].like = res.data.like;
    //   }
    // })
    let res = {
      "data": {
        "id": 5,
        "comment": 345,
        "like": 8485,
        "coverPhoto": "./img/cover-06.jpg",
        "sentence": "不含敌意的坚决，不带诱惑的深情。",
        "author": "科胡特",
        "source": null
      },
      "msg": "操作成功",
      "returnCode": "200",
      "returnTime": 1623894653
    };
    if (res.returnCode == 200) {
      homeData.value[index].coverPhoto = res.data.coverPhoto;
      homeData.value[index].sentence = res.data.sentence;
      homeData.value[index].author = res.data.author;
      homeData.value[index].source = res.data.source;
      homeData.value[index].id = res.data.id;
      homeData.value[index].comment = res.data.comment;
      homeData.value[index].like = res.data.like;
    }
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
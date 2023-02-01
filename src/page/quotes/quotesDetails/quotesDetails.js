import { ref, onMounted } from 'vue';
import axios from '@/axios';
import { Toast } from 'vant';
import { useRouter } from 'vue-router'

function quotesDetails() {
  const router = useRouter(); // 路由参数
  let queryId = router.currentRoute.value.query.id; // 金句id
  let quotesData = ref({}); // 金句数据

  // 获取金句详情
  function getQuotesDetails() {
    // axios.get("/api/homeData.json").then(res => {
    //   if (res.returnCode == 200) {
    //     let targetQuotes = res.data.filter((item, index) => {
    //       return item.id == queryId
    //     });
    //     quotesData.value = targetQuotes[0];
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
      let targetQuotes = res.data.filter((item, index) => {
        return item.id == queryId
      });
      quotesData.value = targetQuotes[0];
    }
  }
  onMounted(getQuotesDetails);

  let columnState = ref(0); // 菜单状态
  let listData = ref(10); // 列表数据量
  function switchColumn(val) {
    columnState.value = val;
    if (val == 0) {
      listData.value = 10;
    } else if (val == 1) {
      listData.value = 2;
    }
  }

  // 下拉刷新--上拉加载
  let loading = ref(false); // 是否处于加载状态
  let finished = ref(false); // 是否加载完成
  let refreshing = ref(false); // 是否处在刷新状态

  // 加载
  function onLoad() {
    setTimeout(() => {
      if (refreshing.value) {
        refreshing.value = false; // 停止刷新状态
        listData.value = 10;
      } else {
        loading.value = false; // 停止加载状态
        listData.value = listData.value + 5; // 数据加5
      }
    }, 1000);
  }

  // 刷新
  function onRefresh() {
    loading.value = false; // 停止加载状态
    finished.value = false; // 清除加载完成状态    
    onLoad()
  }

  


  return {
    quotesData,
    getQuotesDetails,
    columnState,
    loading,
    finished,
    refreshing,
    listData,
    switchColumn,
    onLoad,
    onRefresh,
  }

}


export { quotesDetails }
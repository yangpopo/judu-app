import { ref, onMounted } from 'vue';
import axios from '@/axios';
import { Toast } from 'vant';
import { GetQueryString } from '@/assets/js/public';

function quotesDetails() {
  let queryId = GetQueryString('id'); // 金句id
  let quotesData = ref({}); // 金句数据

  // 获取金句详情
  function getQuotesDetails() {
    axios.get("/api/homeData.json").then(res => {
      if (res.returnCode == 200) {
        let targetQuotes = res.data.filter((item, index) => {
          return item.id == queryId
        });
        quotesData.value = targetQuotes[0];
      }
    })
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
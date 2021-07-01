<template>
  <div class="diary">
    <van-pull-refresh class="main-refresh" v-model="refreshing" @refresh="onRefresh">
      <van-list class="main-list" v-model:loading="loading" :finished="finished"  finished-text="没有更多了" @load="onLoad" >
        <diarySquareItem v-for="(item, index) in counter" :key="index"></diarySquareItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from "@/axios";
import { PullRefresh, List } from 'vant';
import { mapState, mapMutations } from 'vuex';
import diarySquareItem from './diarySquareItem';

export default {
  name: 'diary',
  components: {
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    diarySquareItem
  },
  data() {
    return {
      refreshing: false, // 刷新状态
      loading: false, // 加载状态
      finished: false, // 加载完全
      counter: 0, // 计数器
      // 分类菜单
      classData: [
        { name: '最新', value: 0 },
        { name: '最近回复', value: 1 },
        { name: '无人问津', value: 2 },
      ],
      classSelectIndex: 0, // 分类菜单索引
    }
  },
  // emits: ['refreshData', 'switchNav'],
  mounted() {
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
    })
  },
  // 事件
  methods: {
    ...mapMutations(['logonPopup', 'updateUserInfo']),
    // 刷新
    onRefresh() {
      this.counter = 0;
      // this.onLoad();
    },
    // 加载
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.finished = false;
          this.refreshing = false;
          this.counter = 1;
        }
        this.loading = false;
        this.counter++
        if (this.counter == 10) {
          this.finished = true;
        }
      }, 1000)
    },
    // 去登录
    goLognClick() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.diary {
  width: 100vw;
  height: calc(100vh - 10vw - 15vw);
  background-color: #f4f4f4;
  .main-refresh {
    width: 100vw;
    height: calc(100vh - 10vw - 15vw);
    .main-list{
      width: 100vw;
      height: calc(100vh - 10vw - 15vw);
      overflow-y: scroll;
    }
  }
}
</style>

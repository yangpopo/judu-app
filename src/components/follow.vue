<template>
  <div class="follow">
    <van-pull-refresh class="main-refresh" v-model="refreshing" @refresh="onRefresh">
      <van-list class="main-list" v-model:loading="loading" :finished="finished"  finished-text="没有更多了" @load="onLoad" >
        <!-- 未登录 -->
        <div class="no-logon">
          <svg class="icon-none" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19664"><path d="M678.4 55.466667l-64 0L221.866667 55.466667c-46.933333 0-85.333333 38.4-85.333333 85.333333l0 750.933333c0 46.933333 38.4 85.333333 85.333333 85.333333l584.533333 0c46.933333 0 85.333333-38.4 85.333333-85.333333L891.733333 324.266667l0-42.666667L678.4 55.466667zM844.8 887.466667c0 21.333333-17.066667 42.666667-42.666667 42.666667L221.866667 930.133333c-21.333333 0-42.666667-17.066667-42.666667-42.666667L179.2 136.533333c0-21.333333 17.066667-42.666667 42.666667-42.666667L597.333333 93.866667l0 209.066667c0 21.333333 17.066667 42.666667 42.666667 42.666667l209.066667 0L849.066667 887.466667zM635.733333 302.933333 635.733333 93.866667l21.333333 0 187.733333 209.066667L635.733333 302.933333z" p-id="19665"></path></svg>
          <span class="explain">你还没有登录</span>
          <div class="logon-but" @click="goLognClick">点击登录</div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from "@/axios";
import { PullRefresh, List } from 'vant';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'follow',
  components: {
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
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
  // 计算属性
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
    })
  },
  // 事件
  methods: {
    ...mapMutations(['logonPopup', 'updateUserInfo']),
    // 切换分类
    switchClassClick(index) {
      this.classSelectIndex = index;
      this.counter = 0;
      this.refreshing = true;
      this.onRefresh();
    },
    // 刷新
    onRefresh() {
      this.counter = 0;
      this.onLoad();
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
.follow {
  width: 100vw;
  height: calc(100vh - 10vw - 15vw);
  .main-refresh {
    width: 100vw;
    height: calc(100vh - 10vw - 15vw);
    .main-list{
      width: 100vw;
      height: calc(100vh - 10vw - 15vw);
      overflow-y: scroll;
    }
    .no-logon {
      width: 100vw;
      height: calc(100vh - 10vw - 15vw);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon-none {
        width: 25vw;
        height: 25vw;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
        color: #f5f5f5;
        margin-bottom: 5vw;
      }
      .explain {
        font-size: 3vw;
        color: #d4d4d4;
        margin-bottom: 8vw;
      }
      .logon-but {
        width: 40vw;
        height: 9vw;
        line-height: 9vw;
        border: 1px solid #c5c5c5;
        border-radius: 10vw;
        text-align: center;
        font-size: 3.5vw;
        color: #afafaf;
      }
    }
  }
}
</style>

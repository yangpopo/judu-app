<template>
  <div class="square">
    <div class="type-menu">
      <span v-for="(item, index) in classData" :key="item.name" :class="index == classSelectIndex ? 'select' : ''" @click="switchClassClick(index)">{{ item.name }}</span>
    </div>
    <van-pull-refresh class="details-main" v-model="refreshing" @refresh="onRefresh">
      <van-list v-model:loading="loading" :finished="finished"  finished-text="没有更多了" @load="onLoad" >
        <newsSquareItem v-for="index in counter" :key="index"></newsSquareItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from "@/axios";
import { PullRefresh, List } from 'vant';
import newsSquareItem from '@/components/newsSquareItem';
// import { mapState, mapMutations } from 'vuex';

export default {
  name: 'square',
  components: {
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    newsSquareItem,
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
    // ...mapState({
    //   userInfo: state => state.userInfo,
    // })
  },
  // 事件
  methods: {
    // ...mapMutations(['logonPopup', 'updateUserInfo']),
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
    }
  }
}
</script>

<style lang="scss" scoped>
.square {
  width: 100vw;
  height: calc(100vh - 10vw - 15vw);
  .type-menu {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 2.5vw 3vw;
    background-color: #fff;
    span {
      box-sizing: border-box;
      padding: 1vw 3vw;
      background-color: #f4f4f4;
      color: #616161;
      border-radius: 4vw;
      font-size: 3.5vw;
      margin: 0 1vw;
      &.select {
        color: #5da9f4;
      }
      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }
  .details-main {
    width: 100%;
    height: calc(100vh - 10vw - 26.7vw);
    overflow-y: scroll;
    background-color: #f4f4f4;
  }
}
</style>

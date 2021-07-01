<template>
  <div class="my">
    <div class="personal-info">
      <div class="user-box">
        <div class="head-portrait" @click="goLogon">
          <img src="../../../../public/img/head-portrait.jpg" alt="" />
        </div>
        <dl class="info-box">
          <dt>点击头像登录</dt>
          <dd>登录收藏喜欢的句子</dd>
        </dl>
        <div class="member-box">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3235"><path d="M816.49 909H211.21c-1.1 0-2-0.9-2-2v-68.18c0-1.1 0.9-2 2-2h605.28c1.1 0 2 0.9 2 2V907c0 1.1-0.9 2-2 2z" fill="#FFAA22" p-id="3236"></path><path d="M910.24 316.23c-27.11 0-49.1 22.52-49.1 50.31 0 7.28 1.58 14.16 4.3 20.4l-176.13 80.21-147.2-258.57c14.56-8.73 24.46-24.74 24.46-43.28 0-27.79-21.98-50.31-49.1-50.31s-49.1 22.52-49.1 50.31c0 17.99 9.29 33.66 23.15 42.55l-158.16 259.3-176.13-80.21c2.71-6.25 4.3-13.12 4.3-20.4 0-27.78-21.98-50.31-49.1-50.31s-49.1 22.52-49.1 50.31c0 27.78 21.98 50.31 49.1 50.31 3.99 0 7.82-0.62 11.53-1.54l86.65 366.28h601.43l86.65-366.28c3.71 0.92 7.54 1.54 11.53 1.54 27.12 0 49.1-22.52 49.1-50.31 0.01-27.78-21.97-50.31-49.08-50.31z" fill="#FFD68D" p-id="3237"></path></svg>
          会员
        </div>
      </div>
      <div class="user-value">
        <dl @click="followClick">
          <dt>0</dt>
          <dd>关注</dd>
        </dl>
        <dl @click="publishClick">
          <dt>0</dt>
          <dd>发表</dd>
        </dl>
        <dl @click="likeClick">
          <dt>0</dt>
          <dd>喜欢</dd>
        </dl>
      </div>
    </div>
    <div class="separate-link"></div>
    <van-cell-group>
      <van-cell is-link @click="myNews">
        <template #title>
          <van-icon name="chat" size="1.2em" color="#929395" />
          <span class="custom-title">我的消息</span>
        </template>
      </van-cell>
      <van-cell is-link @click="myCollect">
        <template #title>
          <van-icon name="label" size="1.2em" color="#929395" />
          <span class="custom-title">我的收藏夹</span>
        </template>
      </van-cell>
      <van-cell is-link @click="myComment">
        <template #title>
          <van-icon name="comment" size="1.2em" color="#929395" />
          <span class="custom-title">我的评论</span>
        </template>
      </van-cell>
      <van-cell value="会员专享" is-link @click="myHistory">
        <template #title>
          <van-icon name="clock" size="1.2em" color="#929395" />
          <span class="custom-title">历史浏览</span>
        </template>
      </van-cell>
    </van-cell-group>
    <div class="separate-link"></div>
    <van-cell-group>
      <van-cell is-link @click="missionCenter">
        <template #title>
          <van-icon name="todo-list" size="1.2em" color="#929395" />
          <span class="custom-title">任务中心</span>
        </template>
      </van-cell>
      <van-cell is-link @click="helpFeedback">
        <template #title>
          <van-icon name="warning" size="1.2em" color="#929395" />
          <span class="custom-title">帮助反馈</span>
        </template>
      </van-cell>
      <van-cell value="获取积分" is-link @click="AdPoints">
        <template #title>
          <van-icon name="video" size="1.2em" color="#929395" />
          <span class="custom-title">看个广告</span>
        </template>
      </van-cell>
      <van-cell is-link @click="goAppStore">
        <template #title>
          <van-icon name="good-job" size="1.2em" color="#929395" />
          <span class="custom-title">去给好评</span>
        </template>
      </van-cell>
    </van-cell-group>
    <div class="separate-link"></div>
    <van-cell-group>
      <van-cell is-link @click="setUp">
        <template #title>
          <van-icon name="setting" size="1.2em" color="#929395" />
          <span class="custom-title">设置</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { numberFormat } from "@/assets/js/public.js";
import { mapState, mapMutations } from 'vuex';
import { Cell, CellGroup, Icon  } from 'vant';

export default {
  name: "my",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon
  },
  data() {
    return {

    }
  },
  setup(props){

  },
  // 生命周期
  mounted() {
  },
  watch:{
  },
  // 计算属性
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
    })
  },
  // 事件
  methods: {
    ...mapMutations(['logonPopup']),
    // 去登录
    goLogon() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 关注
    followClick() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 发表
    publishClick() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 喜欢
    likeClick() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 我的消息
    myNews() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 我的收藏
    myCollect() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 我的评论
    myComment() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 历史浏览
    myHistory() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 任务中心
    missionCenter() {
      this.$router.push("/11")
    },
    // 帮助反馈
    helpFeedback() {
      this.$router.push("/22")
    },
    // 看个广告
    AdPoints() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 去给好评
    goAppStore() {
      this.$router.push("/33")
    },
    // 设置
    setUp() {
      this.$router.push("/setUp")
    }
  },
};
</script>

<style lang="scss" scoped>
.my {
  width: 100vw;
  height: 100%;
  background-color: #f4f4f4;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  .separate-link {
    height: 3vw;
  }
  .personal-info {
    width: 100%;
    box-sizing: border-box;
    padding: 7vw 3vw 0 3vw;
    background-color: #fff;
    .user-box {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      margin-bottom: 3vw;
      .head-portrait {
        width: 14vw;
        height: 14vw;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        > img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          min-height: 100%;
        }
      }
      .info-box {
        margin-left: 2vw;
        dt {
          font-size: 4.2vw;
          color: #272727;
          margin-bottom: 1.5vw;
        }
        dd {
          font-size: 3vw;
          color: #cacaca;
        }
      }
      .member-box {
        position: absolute;
        top: 50%;
        right: -3vw;
        transform: translateY(-50%);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: 6vw;
        padding: 0 3vw;
        border-radius: 3vw 0 0 3vw;
        background-color: #fceac6;
        font-size: 3.5vw;
        color: #dd8d52;
        svg.icon {
          width: 4vw;
          height: 4vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          margin-right: 1vw;
        }
      }
    }
    .user-value {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3vw 0;
      dl {
        width: 33.333333%;
        text-align: center;
        border-right: 1px solid #ededed;
        &:last-child {
          border-right: none;
        }
        dt {
          font-size: 4vw;
          color: #404040;
          margin-bottom: 2vw;
        }
        dd {
          font-size: 3vw;
          color: #ababab;
        }
      }
    }
  }
  .custom-title {
    margin-left: 1.5vw;
    font-size: 4vw;
    color: #3d3d3d;
  }
}
</style>

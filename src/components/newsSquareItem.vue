<template>
  <div class="news-square-item">
    <div class="head-box">
      <div class="user-box">
        <div class="head-portrait">
          <img src="../../public/img/head-portrait.jpg" alt="" />
        </div>
        <dl class="user-info">
          <dt>范特西</dt>
          <dd>1分钟前发布</dd>
        </dl>
      </div>
      <van-icon @click="morePopup(true)" color="#9a9a9a" name="arrow-down" />
    </div>
    <div class="main-box">
      <div class="describe">阿斯顿发生沙发噶事的发沙沙士大夫阿萨德发阿斯顿发送到发送到发阿萨德发</div>
      <div class="map-box">
        <img class="map" src="../../public/img/cover-06.jpg" alt="" />
      </div>
    </div>
    <div class="foot-box">
      <span>
        <van-icon name="like-o" size="1.2em" @click="likeClick" color="#858585" />
        <span class="val">5</span>
      </span>
      <span>
        <van-icon name="comment-o" size="1.2em" @click="commentClick" color="#858585" />
        <span class="val">2</span>
      </span>
      <van-icon name="share-o" size="1.2em" color="#858585" />
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import { Icon } from 'vant';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'newsSquareItem',
  components: {
    [Icon.name]: Icon,
  },
  data() {
    return {

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
    ...mapMutations(['logonPopup', 'morePopup']),
    // 喜欢
    likeClick() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 留言评论
    commentClick() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.news-square-item {
  width: 100%;
  box-sizing: border-box;
  padding: 2vw 4vw 0 4vw;
  margin-bottom: 3vw;
  background-color: #fff;
  .head-box {
    box-sizing: border-box;
    padding: 3vw 0 2vw 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-box{
      display: flex;
      align-items: center;
      .head-portrait {
        width: 9vw;
        height: 9vw;
        overflow: hidden;
        position: relative;
        border-radius: 50%;
        > img {
          width: 100%;
          min-height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .user-info{
        margin-left: 2vw;
        dt {
          font-size: 3.5vw;
          color: #2c2c2c;
        }
        dd {
          font-size: 3vw;
          color: #acacac;
        }
      }
    }
  }
  .main-box {
    width: 100%;
    margin-bottom: 2vw;
    .describe {
      font-size: 3.5vw;
      color: #000000;
      line-height: 5.5vw;
      margin-bottom: 2vw;
    }
    .map-box{
      width: 100%;
      height: 42vw;
      position: relative;
      border-radius: 1.5vw;
      overflow: hidden;
      .map {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        min-height: 100%;
      }
    }
  }
  .foot-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3vw 0;
    border-top: 1px solid #f7f7f7;
    > span {
      display: flex;
      align-items: center;
      .val {
        font-size: 3.5vw;
        color: #858585;
        margin-left: 1vw;
      }
    }
  }
}
</style>

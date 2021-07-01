<template>
  <div class="share">
    <van-nav-bar title="标题" @click-left="closeSharePopup" @click-right="goShare">
      <template #left>
        <van-icon name="cross" size="1.2em" color="#484848" />
      </template>
      <template #right>
        <van-icon name="success" size="1.2em"  color="#484848" />
      </template>
    </van-nav-bar>
    <div class="slide-inner">
      <div class="cover-photo-box">
        <img class="cover-photo" :src="shareData.coverPhoto" alt="" />
        <ul class="old-calendar">
          <li>{{ shareData.oldCalendar.year }}</li>
          <li>{{ shareData.oldCalendar.month }}</li>
          <li>{{ shareData.oldCalendar.day }}</li>
        </ul>
        <span class="huge-day">{{ shareData.gregorianCalendar.day }}</span>
      </div>
      <div class="date-box">
        <span class="huge-day">{{ shareData.gregorianCalendar.day }}</span>
        <span class="date">{{ shareData.gregorianCalendar.year }}.{{ shareData.gregorianCalendar.month }}&nbsp;{{ shareData.gregorianCalendar.week }}</span>
      </div>
      <div class="content-box">
        <p class="sentence">{{ shareData.sentence }}</p>
        <p class="works-info">
          {{ shareData.author }}
          <template v-if="shareData.source != null">&nbsp;《{{ shareData.source }}》</template>
        </p>
      </div>
      <img class="watermark-icon" src="../../public/img/watermark-icon.png" alt="" />
    </div>
  </div>
</template>

<script>
import { NavBar, Icon } from 'vant';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'share',
  components: {
    [Icon.name]: Icon,
    [NavBar.name]: NavBar
  },
  data() {
    return {

    }
  },
  // emits: ['refreshData', 'switchNav'],
  mounted() {
  },
  computed: {
    ...mapState({
      shareData: state => state.shareData,
    })
  },
  // 事件
  methods: {
    ...mapMutations(['sharePopup', ]),
    // 关闭分享
    closeSharePopup() {
      this.sharePopup(false);
    },
    // 去分享
    goShare() {
      this.sharePopup(false);
    }
  }
}
</script>

<style lang="scss" scoped>
.share {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: #f3f3f5;
  .slide-inner {
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 92vw;
    height: auto;
    background-color: #fff;
    box-sizing: border-box;
    padding-bottom: 5vw;
    box-shadow: 0 0 4vw #00000030;
    .cover-photo-box {
      width: 100%;
      height: 55vw;
      overflow: hidden;
      position: relative;
      .cover-photo {
        position: absolute;
        width: 100%;
        min-height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
      }
      .old-calendar {
        position: absolute;
        z-index: 1;
        top: 5%;
        right: 5%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        writing-mode: tb-rl;
        li{
          font-size: 3.5vw;
          letter-spacing: 1vw;
          color: #fff;
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          text-align: left;
          margin: 0 1vw;
        }
      }
      .huge-day {
        position: absolute;
        left: 4%;
        bottom: -25%;
        letter-spacing: -1vw;
        z-index: 1;
        font-size: 28vw;
        font-weight: 500;
        color: #fff;
      }
    }
    .date-box {
      width: 100%;
      box-sizing: border-box;
      padding: 2vw 4vw;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: flex-end;
      .huge-day{
        font-size: 28vw;
        font-weight: 500;
        letter-spacing: -1vw;
        color: #010101;
        position: absolute;
        top: -280%;
        left: 4%;
      }
      .date {
        font-size: 3vw;
        color: #010101;
      }
    }
    .content-box {
      z-index: 2;
      width: 92%;
      min-height: 60vw;
      box-sizing: border-box;
      padding: 5vw 0;
      font-size: 4.2vw;
      color: #040404;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
       justify-content: center;
      .sentence {
        margin-bottom: 3vw;
      }
      .works-info {
        text-align: right;
      }
    }
    .watermark-icon {
      margin: 0 auto;
      width: 23vw;
    }
  }
}
</style>

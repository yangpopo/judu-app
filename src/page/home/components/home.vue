<template>
  <div class="home">
    <div class="state">
      <img src="../../../assets/img/logo.png" alt class="logo" />
      <ul class="state-menu" v-if="currentStateData">
        <li @click="goComment(swiperIndex)">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26436" >
            <path d="M511.525926 879.786667c-33.374815 0-66.654815-3.318519-98.986667-9.860741-15.36-3.128889-25.315556-18.10963-22.281481-33.564445 3.128889-15.36 18.10963-25.315556 33.564444-22.281481 28.539259 5.783704 58.121481 8.722963 87.703704 8.722963 217.505185 0 394.42963-157.771852 394.42963-351.573333 0-38.020741-6.731852-75.472593-20.100741-111.122963-5.499259-14.696296 1.991111-31.099259 16.687407-36.598519 14.696296-5.499259 31.099259 1.991111 36.598519 16.687408 15.739259 42.097778 23.703704 86.186667 23.703703 131.034074 0 55.561481-12.136296 109.416296-35.934814 160.047407-22.945185 48.734815-55.656296 92.34963-97.374815 129.801482-41.434074 37.262222-89.694815 66.465185-143.36 86.85037-55.277037 21.238519-114.062222 31.857778-174.648889 31.857778zM250.216296 798.625185c-5.688889 0-11.377778-1.706667-16.402963-5.214815C181.096296 756.148148 137.481481 707.887407 107.614815 653.842963c-31.478519-56.983704-47.407407-118.423704-47.407408-182.518519 0-55.561481 12.136296-109.416296 35.934815-160.047407 22.945185-48.734815 55.656296-92.34963 97.374815-129.801481 41.434074-37.262222 89.694815-66.465185 143.36-86.850371 55.371852-21.048889 114.157037-31.762963 174.743704-31.762963 73.007407 0 145.540741 16.118519 209.825185 46.648889 14.222222 6.731852 20.195556 23.703704 13.463704 37.925926-6.731852 14.222222-23.703704 20.195556-37.925926 13.463704-56.604444-26.927407-120.699259-41.14963-185.362963-41.14963-217.505185 0-394.42963 157.771852-394.42963 351.573333 0 107.899259 54.518519 208.402963 149.617778 275.626667 12.8 9.102222 15.834074 26.832593 6.826667 39.632593-5.688889 7.86963-14.506667 12.041481-23.41926 12.041481z" p-id="26437" />
            <path d="M313.931852 471.324444m-28.444445 0a28.444444 28.444444 0 1 0 56.888889 0 28.444444 28.444444 0 1 0-56.888889 0Z" p-id="26438" />
            <path d="M313.931852 528.213333c-31.383704 0-56.888889-25.505185-56.888889-56.888889s25.505185-56.888889 56.888889-56.888888 56.888889 25.505185 56.888889 56.888888-25.505185 56.888889-56.888889 56.888889z m0-56.888889z" p-id="26439" />
            <path d="M511.525926 471.324444m-28.444445 0a28.444444 28.444444 0 1 0 56.888889 0 28.444444 28.444444 0 1 0-56.888889 0Z" p-id="26440" />
            <path d="M511.525926 528.213333c-31.383704 0-56.888889-25.505185-56.888889-56.888889s25.505185-56.888889 56.888889-56.888888 56.888889 25.505185 56.888889 56.888888-25.505185 56.888889-56.888889 56.888889z m0-56.888889z" p-id="26441" />
            <path d="M709.12 471.324444m-28.444444 0a28.444444 28.444444 0 1 0 56.888888 0 28.444444 28.444444 0 1 0-56.888888 0Z" p-id="26442" />
            <path d="M709.12 528.213333c-31.383704 0-56.888889-25.505185-56.888889-56.888889s25.505185-56.888889 56.888889-56.888888 56.888889 25.505185 56.888889 56.888888-25.505185 56.888889-56.888889 56.888889z m0-56.888889zM248.699259 967.111111c-4.93037 0-9.860741-1.232593-14.222222-3.792592-8.817778-5.12-14.222222-14.506667-14.222222-24.651852V768.18963c0-15.739259 12.705185-28.444444 28.444444-28.444445s28.444444 12.705185 28.444445 28.444445V889.362963l123.448889-71.300741c13.558519-7.86963 31.004444-3.223704 38.874074 10.42963 7.86963 13.558519 3.223704 31.004444-10.42963 38.874074L262.921481 963.318519c-4.361481 2.56-9.291852 3.792593-14.222222 3.792592z" p-id="26443" />
          </svg>
          <span class="val">{{ numberFormat(currentStateData.comment) }}</span>
        </li>
        <li @click="goLike(swiperIndex)">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27023" >
            <path d="M769.28 128C672.64 128 588.16 183.04 544 263.68 500.48 183.04 415.36 128 318.08 128c-140.8 0-254.72 114.56-254.72 256 0 67.2 25.6 128 67.84 174.08l391.04 392.96C528.64 956.8 536.32 960 544 960c7.68 0 15.36-3.2 21.76-8.96l391.04-392.96C998.4 512.64 1024 451.2 1024 384 1024 242.56 910.08 128 769.28 128zM908.16 516.48 544 886.4 179.84 516.48C147.2 481.92 127.36 435.2 127.36 384c0-106.24 85.76-192 190.72-192C403.2 192 476.8 248.32 502.4 325.76 508.8 342.4 525.44 354.56 544 354.56c19.2 0 35.2-11.52 42.24-28.16l0 0C611.2 248.32 684.16 192 769.28 192c105.6 0 190.72 85.76 190.72 192C960.64 435.2 940.8 481.92 908.16 516.48z" p-id="27024" />
          </svg>
          <span class="val">{{ numberFormat(currentStateData.like) }}</span>
        </li>
        <li @click="shareClick">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27873" >
            <path d="M853.333333 533.333333a32 32 0 0 1 64 0v266.666667c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V256c0-64.8 52.533333-117.333333 117.333333-117.333333h277.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v544a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V533.333333z m-42.058666-277.333333l-89.792-95.402667a32 32 0 0 1 46.613333-43.861333l140.544 149.333333C927.861333 286.485333 913.376 320 885.333333 320H724.704C643.029333 320 576 391.210667 576 480v192a32 32 0 1 1-64 0V480c0-123.296 94.784-224 212.704-224h86.570667z" p-id="27874" />
          </svg>
        </li>
      </ul>
    </div>
    <div class="swiper-container">
      <div class="start-box">
        <template v-if="startState == 0">来日尚可期</template>
        <template v-else-if="startState == 1">松开立即刷新</template>
        <template v-else-if="startState == 2">正在努力加载</template>
      </div>
      <div class="end-box">往日不可追</div>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="data in homeData" :key="data.id">
          <div class="slide-inner">
            <div class="cover-photo-box">
              <img class="cover-photo" :src="data.coverPhoto" alt="" />
              <ul class="old-calendar">
                <li>{{ data.oldCalendar.year }}</li>
                <li>{{ data.oldCalendar.month }}</li>
                <li>{{ data.oldCalendar.day }}</li>
              </ul>
              <span class="huge-day">{{ data.gregorianCalendar.day }}</span>
            </div>
            <div class="date-box">
              <span class="huge-day">{{ data.gregorianCalendar.day }}</span>
              <span class="date">{{ data.gregorianCalendar.year }}.{{ data.gregorianCalendar.month }}&nbsp;{{ data.gregorianCalendar.week }}</span>
            </div>
            <div class="content-box">
              <p class="sentence">{{ data.sentence }}</p>
              <p class="works-info">
                {{ data.author }}
                <template v-if="data.source != null">&nbsp;《{{ data.source }}》</template>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper.min.css";
import { numberFormat } from '@/assets/js/public.js';
import { updateHomeData } from './home.js';
import { ref, onMounted } from 'vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: "home",
  components: {},
  data() {
    return {
      swiperObj: Object,
      startState: 0, // 拉动开始刷新状态
      currentStateData: {}, // 当前状态数据
      swiperIndex: 0, // swiper索引
    }
  },
  setup(props){
    let { homeData, getHomeData, updateData, goComment, goLike } = updateHomeData();
    onMounted(getHomeData);
    return { homeData, getHomeData, updateData, numberFormat, goComment, goLike }
  },
  // 生命周期
  mounted() {
    var interleaveOffset = 0.5; //视差比值
    let $this = this;
    var swiperOptions = {
      speed: 1000,
      grabCursor: true,
      watchSlidesProgress: true,
      mousewheelControl: true,
      keyboardControl: true,
      on: {
        progress: function(swiper) {
          for (var i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress;
            var innerOffset = swiper.width * interleaveOffset;
            var innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-inner").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function(swiper) {
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(swiper, speed) {
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        },
        // 触碰移动
        touchMove: function(swiper, speed) {
          if (swiper.progress > -0.05) {
            $this.startState = 0;
          } else if (swiper.progress <= -0.05 && swiper.progress > -0.1) {
            $this.startState = 1;
          }
        },
        // 触摸结束
        touchEnd: function(swiper, speed) {
          if (swiper.progress <= -0.05 && swiper.progress > -0.1) {
            $this.startState = 2;
            // 刷新
          }
        },
        // 过渡结束
        transitionEnd: function(swiper, speed) {
          $this.currentStateData = $this.homeData[swiper.activeIndex];
          $this.swiperIndex = swiper.activeIndex;
        },
        // 点击
        tap: function(swiper, speed) {
          $this.$router.push({ path: "/quotes-details", query: {id: $this.homeData[swiper.activeIndex].id}})
        }
      }
    };
    this.swiperObj = new Swiper(".swiper-container", swiperOptions);
  },
  watch:{
    homeData(newValue, oldValue) {
      this.$nextTick(() => {
        this.currentStateData = this.homeData[this.swiperObj.activeIndex];
        this.swiperObj.update();
      })
    }
  },
  // 事件
  methods: {
    ...mapMutations(['sharePopup', 'updateShareData']),
    // 分享按钮
    shareClick(index){
      this.sharePopup(true);
      this.updateShareData(this.homeData[this.swiperIndex]);
    },
    refreshData() {
      console.log("刷新++");
      this.updateData(this.swiperIndex);
    },
    switchNav() {
      console.log("切换");
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100%;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  .state {
    width: 100%;
    height: 12vw;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 2vw 2vw 2vw 5vw;
    .logo {
      width: 12vw;
    }
    .state-menu {
      display: flex;
      height: 100%;
      li {
        width: 8vw;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        margin-left: 3vw;
        &:nth-child(1),
        &:nth-child(2) {
          width: 9vw;
        }
        svg.icon {
          width: 5.5vw;
          height: 5.5vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          color: #505050;
        }
        span.val {
          position: absolute;
          font-size: 3vw;
          color: #6d6d6d;
          background-color: #fff;
          top: 0vw;
          left: 60%;
          transform: translateX(-50%) scale(0.75);
        }
      }
    }
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    position: relative;
    .start-box, .end-box {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      writing-mode: tb-rl;
      letter-spacing: 1.5vw;
      font-size: 3.5vw;
      color: #b6b6b6;
      z-index: 0;
    }
    .start-box {
      left: 1%;
    }
    .end-box {
      right: 1%;
    }
  }

  .swiper-slide {
    // text-align: center;
    font-size: 18px;
    overflow: hidden;
  }

  .slide-inner {
    width: 100vw;
    height: 100%;
    background-color: #fff;
    .cover-photo-box {
      width: 100vw;
      height: 38vh;
      overflow: hidden;
      position: relative;
      .cover-photo {
        position: absolute;
        width: auto;
        height: 100%;
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
        bottom: -20%;
        letter-spacing: -1vw;
        z-index: 1;
        font-size: 33vw;
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
        font-size: 33vw;
        font-weight: 500;
        letter-spacing: -1vw;
        color: #010101;
        position: absolute;
        top: -370%;
        left: 4%;
      }
      .date {
        font-size: 3vw;
        color: #010101;
      }
    }
    .content-box {
      position: absolute;
      top: 72%;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);
      width: 92%;
      max-height: 50vh;
      font-size: 4.2vw;
      color: #040404;
      .sentence {
        margin-bottom: 3vw;
      }
      .works-info {
        text-align: right;
      }
    }
  }
}
</style>

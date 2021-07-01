<template>
  <div class="quotes-details">
    <div class="nav-bar">
      <van-icon class="return-but" @click="returnLink" name="arrow-left" color="#2d2d2d" />
      <span class="title">金句</span>
      <ul class="operation-box">
        <li><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2541"><path d="M349.534791 63.36619 158.087505 63.36619c-52.782134 0-95.723132 42.940998-95.723132 95.723132L62.364373 350.536608c0 52.782134 42.940998 95.723132 95.723132 95.723132L349.534791 446.25974c52.782134 0 95.723132-42.940998 95.723132-95.723132L445.257923 159.090345C445.257923 106.307188 402.316925 63.36619 349.534791 63.36619zM381.442502 350.536608c0 17.593703-14.314007 31.907711-31.907711 31.907711L158.087505 382.444319c-17.593703 0-31.907711-14.314007-31.907711-31.907711L126.179794 159.090345c0-17.593703 14.314007-31.907711 31.907711-31.907711L349.534791 127.182634c17.593703 0 31.907711 14.314007 31.907711 31.907711L381.442502 350.536608zM349.534791 510.076184 158.087505 510.076184c-52.782134 0-95.723132 42.940998-95.723132 95.723132l0 191.446263c0 52.782134 42.940998 95.723132 95.723132 95.723132L349.534791 892.968711c52.782134 0 95.723132-42.940998 95.723132-95.723132L445.257923 605.799316C445.257923 553.017182 402.316925 510.076184 349.534791 510.076184zM381.442502 797.245579c0 17.593703-14.314007 31.908734-31.907711 31.908734L158.087505 829.154313c-17.593703 0-31.907711-14.314007-31.907711-31.908734L126.179794 605.799316c0-17.593703 14.314007-31.908734 31.907711-31.908734L349.534791 573.890582c17.593703 0 31.907711 14.314007 31.907711 31.908734L381.442502 797.245579zM604.796476 447.104991l191.447287 0c52.782134 0 95.723132-42.940998 95.723132-95.723132L891.966894 159.934572c0-52.782134-42.940998-95.723132-95.723132-95.723132L604.796476 64.211441c-52.782134 0-95.723132 42.940998-95.723132 95.723132l0 191.446263C509.073344 404.163993 552.014342 447.104991 604.796476 447.104991zM572.888765 159.934572c0-17.593703 14.314007-31.907711 31.908734-31.907711l191.447287 0c17.593703 0 31.908734 14.314007 31.908734 31.907711l0 191.446263c0 17.593703-14.314007 31.907711-31.908734 31.907711L604.796476 383.288546c-17.593703 0-31.908734-14.314007-31.908734-31.907711L572.887742 159.934572zM700.520631 605.799316c-52.782134 0-95.723132 42.940998-95.723132 95.723132 0 17.622356 14.285355 31.907711 31.907711 31.907711s31.907711-14.285355 31.907711-31.907711c0-17.593703 14.314007-31.908734 31.908734-31.908734 17.622356 0 31.907711-14.285355 31.907711-31.907711S718.142987 605.799316 700.520631 605.799316zM927.746796 883.623879l-71.232344-71.232344c22.314215-31.304983 35.453467-69.581752 35.453467-110.869087 0-105.564267-85.881996-191.446263-191.446263-191.446263s-191.447287 85.881996-191.447287 191.446263 85.883019 191.446263 191.447287 191.446263c41.287335 0 79.56308-13.138228 110.869087-35.452443l71.232344 71.232344c12.409634 12.409634 32.715099 12.409634 45.124733 0l0 0C940.155407 916.338978 940.155407 896.033513 927.746796 883.623879zM572.888765 701.522448c0-70.375837 57.256028-127.631866 127.632889-127.631866s127.631866 57.255005 127.631866 127.631866-57.255005 127.631866-127.631866 127.631866S572.888765 771.899308 572.888765 701.522448z" p-id="2542"></path></svg></li>
        <li><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2789"><path d="M158.72 512m-92.16 0a92.16 92.16 0 1 0 184.32 0 92.16 92.16 0 1 0-184.32 0ZM512 512m-92.16 0a92.16 92.16 0 1 0 184.32 0 92.16 92.16 0 1 0-184.32 0ZM865.28 512m-92.16 0a92.16 92.16 0 1 0 184.32 0 92.16 92.16 0 1 0-184.32 0Z" p-id="2790"></path></svg></li>
      </ul>
    </div>
    <van-pull-refresh class="details-main" v-model="refreshing" @refresh="onRefresh" v-if="quotesData.sentence">
      <van-list v-model:loading="loading" :finished="finished"  finished-text="没有更多了" @load="onLoad" >
        <div class="details-box">
          <div class="cover-photo-box">
            <img class="cover-photo" :src="quotesData.coverPhoto" alt="" />
          </div>
          <div class="sentence-box">
            <p class="sentence">{{ quotesData.sentence }}</p>
          </div>
          <div class="quotes-info">
            <router-link to="/">{{ quotesData.author }}<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9596"><path d="M512 128c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078C885.856 409.85 896 460.132 896 512s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078-35.286 35.287-76.359 62.983-122.078 82.321C614.15 885.856 563.868 896 512 896s-102.15-10.144-149.451-30.15c-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078C138.144 614.15 128 563.868 128 512s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321C409.85 138.144 460.132 128 512 128m0-64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64zM726.679 425.489L536.463 235.272a32.325 32.325 0 0 0-1.784-1.952c-6.225-6.225-14.434-9.331-22.639-9.32l-0.04-0.001-0.04 0.001c-8.205-0.011-16.414 3.095-22.639 9.32a32.026 32.026 0 0 0-1.784 1.952L297.321 425.489c-12.427 12.427-12.427 32.763 0 45.191 12.427 12.427 32.763 12.427 45.191 0L480 333.191V768c0 17.6 14.4 32 32 32s32-14.4 32-32V333.191L681.489 470.68c12.427 12.427 32.763 12.427 45.191 0 12.427-12.428 12.427-32.764-0.001-45.191z" p-id="9597"></path></svg></router-link>
            <router-link v-if="quotesData.source != null" to="/">《{{ quotesData.source }}》<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9596"><path d="M512 128c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078C885.856 409.85 896 460.132 896 512s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078-35.286 35.287-76.359 62.983-122.078 82.321C614.15 885.856 563.868 896 512 896s-102.15-10.144-149.451-30.15c-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078C138.144 614.15 128 563.868 128 512s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321C409.85 138.144 460.132 128 512 128m0-64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64zM726.679 425.489L536.463 235.272a32.325 32.325 0 0 0-1.784-1.952c-6.225-6.225-14.434-9.331-22.639-9.32l-0.04-0.001-0.04 0.001c-8.205-0.011-16.414 3.095-22.639 9.32a32.026 32.026 0 0 0-1.784 1.952L297.321 425.489c-12.427 12.427-12.427 32.763 0 45.191 12.427 12.427 32.763 12.427 45.191 0L480 333.191V768c0 17.6 14.4 32 32 32s32-14.4 32-32V333.191L681.489 470.68c12.427 12.427 32.763 12.427 45.191 0 12.427-12.428 12.427-32.764-0.001-45.191z" p-id="9597"></path></svg></router-link>
          </div>
        </div>
        <router-link to="/" tag="div" class="creator-info">
          <span class="head">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10343"><path d="M 511.96 804.129 A 402.057 402.057 0 0 0 796.267 117.765 A 402.057 402.057 0 1 0 227.669 686.364 a 399.396 399.396 0 0 0 284.292 117.765 Z m 0 -742.601 c 187.769 0 340.544 152.759 340.544 340.528 s -152.775 340.544 -340.544 340.544 S 171.432 589.826 171.432 402.057 S 324.191 61.5283 511.96 61.5283 Z" fill="#231815" p-id="10344"></path><path d="M 511.96 567.599 a 165.557 165.557 0 1 0 -165.557 -165.542 A 165.742 165.742 0 0 0 511.96 567.599 Z m 0 -284.968 a 119.411 119.411 0 1 1 -119.411 119.411 a 119.55 119.55 0 0 1 119.411 -119.396 Z M 816.387 732.079 a 23.0731 23.0731 0 0 0 -23.0731 23.0731 v 174.879 a 47.6844 47.6844 0 0 1 -65.6046 44.2696 L 680.579 955.319 a 22.9808 22.9808 0 0 0 1.27671 -7.52184 v -114.197 a 23.0731 23.0731 0 0 0 -46.1462 0 v 103.614 L 543.678 900.082 a 94.3844 94.3844 0 0 0 -72.9418 1.13827 l -84.5091 37.1939 v -104.813 a 23.0731 23.0731 0 0 0 -46.1462 0 v 114.197 a 22.9347 22.9347 0 0 0 2.27655 9.93682 l -28.1338 12.3057 a 47.6844 47.6844 0 0 1 -66.9582 -43.6236 V 755.152 a 23.0731 23.0731 0 0 0 -46.1462 0 v 171.264 a 93.8307 93.8307 0 0 0 131.717 85.9397 l 156.513 -68.8963 a 48.0536 48.0536 0 0 1 37.1016 -0.538373 l 184 74.2339 a 93.8307 93.8307 0 0 0 129.009 -87.0779 V 755.152 a 23.0731 23.0731 0 0 0 -23.0731 -23.0731 Z" fill="#231815" p-id="10345"></path></svg>
            贡献者
          </span>
          <span class="tail"><img class="head-portrait" :src="quotesData.provider.headPortrait" alt="" /><van-icon name="arrow" color="#222222" /></span>
        </router-link>
        <ul class="column-box" :class="'select-' + columnState">
          <li @click="switchColumn(0)">最热</li>
          <li @click="switchColumn(1)">最新</li>
        </ul>
        <div class="comment-list">
          <comment-list v-for="(item, index) in listData" :key="index" ></comment-list>
        </div>
      </van-list>
    </van-pull-refresh>
    <div class="operation-column">
      <div class="input-box" @click="goCommentClick">说点什么...</div>
      <div class="icon-but" @click="cllectionClick"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13500"><path d="M744.8 128H279.2c-21.3 0-38.7 17.4-38.7 38.7v690.5c0 13.7 7 26.1 18.8 33.2 11.7 7.1 26 7.5 38.1 1L512 777.7l214.6 113.7c5.7 3 11.9 4.6 18.1 4.6 6.9 0 13.8-1.9 19.9-5.6 11.7-7.1 18.7-19.5 18.7-33.2V166.7c0.2-21.3-17.2-38.7-38.5-38.7z m-12 709.5L530.1 730c-11.3-6-24.9-6-36.2 0L291.2 837.5V178.6h441.7v658.9z" p-id="13501"></path></svg>收藏</div>
      <div class="icon-but" @click="goCommentClick"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13723"><path d="M486.4 682.666667c4.266667 0 4.266667 0 0 0H725.333333c46.933333 0 85.333333-38.4 85.333334-85.333334V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333H298.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v256c0 46.933333 38.4 85.333333 85.333334 85.333334h21.333333c12.8 0 21.333333 8.533333 21.333333 21.333333s-8.533333 21.333333-21.333333 21.333333H298.666667c-72.533333 0-128-55.466667-128-128V341.333333c0-72.533333 55.466667-128 128-128h426.666666c72.533333 0 128 55.466667 128 128v256c0 72.533333-55.466667 128-128 128h-230.4l-166.4 81.066667c-8.533333 4.266667-21.333333 0-29.866666-8.533333-4.266667-8.533333 0-21.333333 8.533333-29.866667l170.666667-85.333333h8.533333zM341.333333 469.333333m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0ZM512 469.333333m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0ZM682.666667 469.333333m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z" p-id="13724"></path></svg>{{ numberFormat(quotesData.comment) }}</div>
      <div class="icon-but" @click="likeClick"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14739"><path d="M511.987 911.927c-11.778 0-23.397-3.967-32.717-11.169-6.322-4.887-63.714-49.503-131.443-110.731-90.284-81.62-155.042-152.78-192.476-211.504-16.984-26.669-33.263-53.062-45.803-82.796-14.956-35.462-22.225-70.536-22.225-107.227 0-67.594 24.281-131.373 68.372-179.587 45.312-49.55 105.938-76.838 170.712-76.838 72.511 0 140.648 35.542 185.59 94.887 44.955-59.343 113.097-94.887 185.596-94.887 64.765 0 125.388 27.288 170.701 76.837 44.098 48.219 68.383 111.998 68.383 179.588 0 83.24-39.333 144.955-68.054 190.018-37.422 58.726-102.177 129.888-192.467 211.51-67.731 61.229-125.131 105.847-131.453 110.732C535.378 907.962 523.761 911.927 511.987 911.927zM326.407 182.073c-50.567 0-98.09 21.515-133.814 60.581-35.642 38.975-55.27 90.771-55.27 145.845 0 29.887 5.984 58.605 18.295 87.797 11.03 26.153 26.114 50.57 41.901 75.358 84.647 132.791 303.07 302.387 312.327 309.542 0.781 0.604 1.595 0.73 2.141 0.73 0.545 0 1.36-0.127 2.146-0.734 9.253-7.15 227.699-176.748 312.323-309.545 28.228-44.291 60.22-94.487 60.22-163.148 0-55.07-19.632-106.866-55.279-145.845-35.727-39.065-83.246-60.58-133.805-60.58-67.126 0-129.784 39.45-163.522 102.955-4.338 8.167-12.831 13.271-22.078 13.271-0.001 0-0.002 0-0.003 0-9.248-0.001-17.74-5.107-22.078-13.276C456.194 221.522 393.542 182.073 326.407 182.073z" p-id="14740"></path></svg>{{ numberFormat(quotesData.like) }}</div>
      <div class="icon-but" @click="shareClick"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17896"><path d="M836.4032 569.1392c14.813867 0 26.8288 12.014933 26.8288 26.8288v139.912533a145.408 145.408 0 0 1-145.237333 145.2032H281.770667A145.408 145.408 0 0 1 136.533333 735.914667V299.656533a145.408 145.408 0 0 1 145.237334-145.237333h137.8304a26.8288 26.8288 0 0 1 0 53.623467H281.770667A91.682133 91.682133 0 0 0 190.122667 299.6224v436.224a91.682133 91.682133 0 0 0 91.613866 91.613867h436.224a91.682133 91.682133 0 0 0 91.579734-91.579734V595.968c0-14.813867 12.014933-26.8288 26.8288-26.8288zM629.8624 219.5456a26.8288 26.8288 0 0 1 0-53.623467h174.1824c14.813867 0 26.8288 12.014933 26.8288 26.8288v159.3344a26.8288 26.8288 0 0 1-53.623467 0v-105.472L443.392 620.987733a26.692267 26.692267 0 0 1-37.853867 2.184534 26.794667 26.794667 0 0 1-2.1504-37.888l326.144-365.738667h-99.669333z" p-id="17897"></path></svg>分享</div>
    </div>
  </div>
</template>

<script>
import { Icon, List, PullRefresh, Toast } from 'vant';
import { quotesDetails } from './quotesDetails.js';
import { numberFormat } from '@/assets/js/public.js';
import commentList from '@/components/commentList';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'quotesDetails',
  components: {
    [Icon.name]: Icon,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    commentList,
  },
  setup(props) {
    const { quotesData, getQuotesDetails, columnState, loading, finished,refreshing, listData, switchColumn, onLoad, onRefresh } = quotesDetails();
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
      onRefresh
    }
  },
  data() {
    return {
    }
  },
  // 计算属性
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
    })
  },
  // 事件
  methods: {
    ...mapMutations(['logonPopup', 'sharePopup', 'updateShareData']),
    numberFormat,
    returnLink() {
      this.$router.go(-1);
    },
    // 去评论
    goCommentClick(){
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 收藏
    cllectionClick() {
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
    // 分享
    shareClick() {
      this.sharePopup(true);
      this.updateShareData(this.quotesData);
    }
  }
}
</script>

<style lang="scss" scoped>
.quotes-details {
  width: 100vw;
  height: 100vh;
  .nav-bar {
    width: 100vw;
    height: 15vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .return-but {
      position: absolute;
      top: 50%;
      left: 4%;
      transform: translateY(-50%);
    }
    .title {
      text-align: center;
      font-size: 4vw;
      color: #010101;
    }
    .operation-box {
      position: absolute;
      top: 50%;
      right: 4%;
      transform: translateY(-50%);
      display: flex;
      li {
        width: 5vw;
        height: 5vw;
        margin-left: 5vw;
        color: #2d2d2d;
        svg.icon {
          width: 100%;
          height: 100%;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
        }
      }
    }
  }
  .details-main {
    height: calc(100vh - 15vw - 14vw);
    background-color: #f4f4f4;
    overflow: auto;
    .details-box{
      width: 100vw;
      box-sizing: border-box;
      padding: 3vw 4vw 4vw 4vw;
      background-color: #fff;
      margin-bottom: 3vw;
      .cover-photo-box {
        width: 100%;
        height: 55vw;
        overflow: hidden;
        position: relative;
        .cover-photo {
          position: absolute;
          width: 100%;
          height: auto;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }
      }
      .sentence-box {
        width: 100%;
        min-height: 50vw;
        box-sizing: border-box;
        padding: 5vw 0;
        display: flex;
        align-items: center;
        font-size: 4vw;
        color: #040404;
      }
      .quotes-info {
        box-sizing: border-box;
        padding: 3vw 0 0 0;
        position: relative;
        &::before {
          content:"";
          display: block;
          width: 7vw;
          height: 2px;
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: #0b0b0b;
        }
        a{
          font-size: 4vw;
          color: #040404;
          display: inline-block;
          margin-right: 3vw;
          text-decoration: none;
          display: flex;
          align-items: center;
          svg.icon {
            color: #b2b2b2;
            width: 3.5vw;
            height: 3.5vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-left: 1vw;
            transform: rotate(45deg);
          }
        }
      }
    }
    .creator-info {
      width: 100%;
      box-sizing: border-box;
      padding: 3vw 4vw;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      text-decoration: none;
      color: #222222;
      margin-bottom: 3vw;
      .head {
        display: flex;
        align-items: center;
        font-size: 4.5vw;
        svg.icon {
          width: 4.5vw;
          height: 4.5vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          margin-right: 1vw;
        }
      }
      .tail {
        display: flex;
        align-items: center;
        .head-portrait {
          width: 6.5vw;
          height: 6.5vw;
          border-radius: 50%;
          margin-right: 1vw;
        }
      }
    }
    .column-box {
      width: 100%;
      box-sizing: border-box;
      padding: 3vw 0;
      display: flex;
      position: relative;
      background-color: #fff;
      &.select-0:before {
          left: 4.7vw;
      }
      &.select-1:before {
        left: 20vw;
      }
      &:before{
        content: " ";
        display: block;
        position: absolute;
        bottom: 0;
        transition: all 0.5s;
        width: 5vw;
        height: 1.2vw;
        border-radius: 8vw;
        background-color: #0877b8;
      }
      
      li {
        box-sizing: border-box;
        padding: 0 4vw;
        font-size: 3.5vw;
        color: #222222;
      }
    }
  }
  .comment-list {
    width: 100vw;
    height: auto;
    background-color: #fff;
  }
  > .operation-column{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: 14vw;
    box-sizing: border-box;
    padding: 0 3vw;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0vw 2vw 3vw #000;
    .input-box{
      width: 35vw;
      height: 8vw;
      line-height: 8vw;
      background-color: #f8f8f8;
      box-sizing: border-box;
      padding: 0 4vw;
      font-size: 3.2vw;
      color: #ababab;
      border-radius: 4vw;
    }
    .icon-but {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 2.8vw;
      color: #ababab;
      svg.icon {
        width: 6vw;
        height: 6vw;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
        color: #4b4b4b;
      }
    }
  }
}
</style>

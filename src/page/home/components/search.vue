<template>
  <div class="search">
    <div class="search-box">
      <router-link class="search-input" to="/" tag="div">
        <svg class="icon-search" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2211"><path d="M946.176 887.808l-178.688-178.688c125.44-154.624 116.224-382.976-27.648-526.848-153.6-153.6-403.968-153.6-557.568 0s-153.6 403.968 0 557.568c76.8 76.8 177.664 115.2 278.528 115.2 88.064 0 176.128-29.184 248.32-88.064l178.688 178.688c8.192 8.192 18.432 11.776 29.184 11.776 10.24 0 20.992-4.096 29.184-11.776 15.872-15.872 15.872-41.472 0-57.856zM240.128 681.472c-121.856-121.856-121.856-320 0-441.856C301.056 179.2 380.928 148.48 460.8 148.48c79.872 0 159.744 30.208 220.672 91.136 121.856 121.856 121.856 320 0 441.856-121.344 121.856-319.488 121.856-441.344 0z" p-id="2212"></path></svg>
        搜索
      </router-link>
    </div>
    <van-pull-refresh class="refresh-box" v-model="loading" @refresh="onRefresh">
      <router-link to="/" class="main-ad"><img src="../../../../public/img/subscribe_ad.png" alt="" /></router-link>
      <div class="channel-box">
        <router-link to="/"><img src="../../../../public/img/subscribe_class_01.png" alt="" /></router-link>
        <router-link to="/"><img src="../../../../public/img/subscribe_class_02.png" alt="" /></router-link>
        <router-link to="/"><img src="../../../../public/img/subscribe_class_03.png" alt="" /></router-link>
        <router-link to="/"><img src="../../../../public/img/subscribe_class_04.png" alt="" /></router-link>
        <router-link to="/"><img src="../../../../public/img/subscribe_class_05.png" alt="" /></router-link>
        <router-link to="/" class="add-channel-but">
          <svg class="icon-add" viewBox="0 0 1027 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3077"><path d="M561.39826087 974.89008696V555.14156522h407.22052174c18.79408696 0 43.85426087-18.79513043 43.85426087-43.85426087 0-25.06017391-25.06017391-43.85426087-50.11930435-43.85426087H555.13426087V60.21252174c6.26504348-25.06017391-18.79513043-50.11930435-43.85426087-50.11930435s-43.85426087 25.05913043-43.85426087 43.85426087v407.21947826H60.20521739c-25.05913043 6.26504348-50.11826087 25.05913043-50.11826087 50.11826087s25.05913043 43.85530435 43.85321739 43.85530435h413.48452174v413.48452174c0 25.05913043 25.06017391 43.85426087 43.85426087 43.85426087s50.11930435-12.53008696 50.11930435-37.58921739z" p-id="3078"></path></svg>添加频道
        </router-link>
      </div>
    </van-pull-refresh>
    
  </div>
</template>

<script>
import { numberFormat } from "@/assets/js/public.js";
import { ref, onMounted } from 'vue';
import { mapState, mapMutations } from 'vuex';
import { PullRefresh } from 'vant';

export default {
  name: "search",
  components: {
    [PullRefresh.name]: PullRefresh,
  },
  data() {
    return {
      loading: false,
    }
  },
  setup(props){
    
  },
  // 生命周期
  mounted() {
    
  },
  watch:{
  },
  // 事件
  methods: {
    // 刷新
    onRefresh() {
      setTimeout(() => {
        this.loading = false;
      }, 1000)
    },
    // 更新数据
    updateData() {
      this.loading = true;
      this.onRefresh();
      console.log("刷新--------")
    }
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 100vw;
  height: 100%;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  .search-box {
    width: 100%;
    box-sizing: border-box;
    padding: 0 3vw;
    background-color: #fff;
    height: 14vw;
    display: flex;
    align-items: center;
    .search-input {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background-color: #f2f2f2;
      box-sizing: border-box;
      padding: 2vw;
      border-radius: 5vw;
      font-size: 4vw;
      color: #cfcfcf;
      text-decoration: none;
      svg.icon-search {
        width: 5vw;
        height: 5vw;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
        margin-right: 2vw;
      }
    }
  }
  .refresh-box {
    width: 100%;
    height: calc(100% - 14vw);
    box-sizing: border-box;
    padding: 0 3vw;
    .main-ad {
      width: 100%;
      display: block;
      margin-bottom: 3vw;
      img{
        width: 100%;
      }
    }
    .channel-box {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > a{
        width: 48.5%;
        height: 20vw;
        display: block;
        overflow: hidden;
        border-radius: 1.5vw;
        margin: 0 2vw 3vw 0;
        box-sizing: border-box;
        &:nth-child(even) {
          margin-right: 0;
        }
        &.add-channel-but {
          border: 2px dashed #cfcfcf;
          color: #9d9d9d;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          font-size: 3vw;
          .icon-add {
            color: #696969;
            width: 4.5vw;
            height: 4.5vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-bottom: 1vw;
          }
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>

<template>
  <div class="public-region">
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper wrapper-thumbs" :class="'select-' + swiperIndex">
        <div class="swiper-slide swiper-bottom">广场</div>
        <div class="swiper-slide swiper-bottom">关注</div>
        <div class="swiper-slide swiper-bottom">日记</div>
      </div>
    </div>
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><square ref="square"></square></div>
        <div class="swiper-slide"><follow ref="follow"></follow></div>
        <div class="swiper-slide"><diary ref="diary"></diary></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Thumbs } from "swiper";
import "swiper/swiper.min.css";
import { numberFormat } from "@/assets/js/public.js";
import { ref, onMounted } from 'vue';
import { mapState, mapMutations } from 'vuex';
import square from '@/components/square'; // 广场
import follow from '@/components/follow'; // 关注
import diary from '@/components/diary'; // 日记
Swiper.use([ Navigation, Thumbs]);

export default {
  name: "public-region",
  components: {
    square,
    follow,
    diary,
  },
  data() {
    return {
      loading: false,
      galleryTop: Object,
      galleryThumbs: Object,
      swiperIndex: 0, // 切换索引
    }
  },
  setup(props){
    
  },
  created() {
    this.$nextTick(function () {
      this.galleryThumbsLunbo();
      this.galleryTopLunbo();
    });
  },
  // 生命周期
  mounted() {},
  watch:{},
  // 事件
  methods: {
    // 刷新
    onRefresh() {
      setTimeout(() => {
        this.loading = false;
      }, 1000)
    },
    galleryTopLunbo() {
      let $this = this;
      this.galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        loop: false,
        loopedSlides: 5,
        autoHeight: true, //高度随内容变化
        thumbs: {        //thumbs组件专门用于制作带缩略图的swiper
          swiper: this.galleryThumbs,
        },
        on:{
          transitionEnd: function(swiper, event){
            $this.swiperIndex = swiper.activeIndex;
          },
        },
      });
    },
    galleryThumbsLunbo() {
      let $this = this;
		  this.galleryThumbs = new Swiper('.gallery-thumbs', {
        slidesPerView: 7,    //设置slider容器能够同时显示的slides数量
        loop: false,        //设置为true 则开启loop模式
        freeMode: true,    //默认为false，普通模式：slide滑动时只滑动一格
        loopedSlides: 7,    //一般设置大于可视slide个数2个即可
        watchSlidesVisibility: true,   //开启watchSlidesVisibility选项前需要先开启watchSlidesProgress
        watchSlidesProgress: true,   //开启这个参数来计算每个slide的progress(进度、进程)
        on: {
          tap: function(swiper, event){
            //你的事件
            $this.swiperIndex = swiper.clickedIndex;
          },
        },
      });
    },
    event() {
      const self = this;
      return {
        
      };
    },
    network() {
      const self = this;
      return {
        
      };
    },
    updateData() {
      // this.loading = true;
      // this.onRefresh();
      console.log("刷新--------", this.swiperIndex)
      if (this.swiperIndex == 0) {
        this.$refs.square.refreshing = true;
        this.$refs.square.onRefresh();
      } else if (this.swiperIndex == 1) {
        this.$refs.square.refreshing = true;
        this.$refs.follow.onRefresh();
      } else if (this.swiperIndex == 2) {
        this.$refs.square.refreshing = true;
        this.$refs.diary.onRefresh();
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
.public-region {
  width: 100vw;
  height: 100%;
  background-color: #fff;
  position: relative;
  .gallery-thumbs{
    width: 100vw;
    height: 10vw;
    border-bottom: 1px solid #f0f0f0;
    .wrapper-thumbs{
      align-items: center;
      position: relative;
      &.select-0:before {
        left: 4vw;
      }
      &.select-1:before {
        left: 18.5vw;
      }
      &.select-2:before {
        left: 33vw;
      }
      &:before {
        content:" ";
        position: absolute;
        transition: all 0.3s;
        bottom: 0;
        width: 6vw;
        height: 1vw;
        background-color: #59abf7;
        border-radius: 1vw;
      }
      .swiper-bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        font-size: 4vw;
        color: #a3a3a3;
      }
    }
  }
  
  .gallery-top{
    width: 100vw;
    // .swiper-slide {
    //   overflow-y: scroll;
    // }
  }
  .swiper-slide-thumb-active{
    color: #000 !important;
  }
}
</style>

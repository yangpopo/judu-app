<template>
  <div id="main-box">
    <router-view  v-slot="{ Component }">
      <transition name="slide-left">
        <!-- 缓存 -->
        <keep-alive :include="$store.state.keepLiveRoute">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <!-- 登录弹窗 -->
    <transition name="slide-up">
      <logon v-if="logonPopupState"></logon>
    </transition>
    <!-- 分享弹窗 -->
    <transition name="slide-up">
      <share v-if="sharePopupState"></share>
    </transition>
    <!-- 更多操作 -->
    <van-action-sheet v-model:show="morePopupState" :duration="0.2" @click-overlay="morePopupClose" @cancel="morePopupClose" :actions="actions" cancel-text="取消" close-on-click-action />
  </div>
</template>

<script>
import logon from './components/logon.vue';
import share from './components/share.vue';
import { mapState, mapMutations } from 'vuex';
import { ActionSheet } from 'vant';

export default {
  name: 'app',
  components: {
    logon,
    share,
    [ActionSheet.name]: ActionSheet,
  },
  data() {
    return {
      actions : [
        { name: '举报', color: '#ee0a24', callback() {
            console.log("你点了举报")
          }
        },
        { name: '复制', callback() {
            console.log("你点了复制")
          }
        },
        { name: '勘误', callback() {
            console.log("你点了勘误")
          }
        },
      ]
    }
  },
  // 计算属性
  computed: {
    ...mapState({
      logonPopupState: state => state.logonPopupState, // 登录弹窗
      sharePopupState: state => state.sharePopupState, // 分享弹窗
      morePopupState: state => state.morePopupState, // 更多--举报
    })
  },
  // 生命周期
  mounted() {
    // console.log()
  },
  // 事件
  methods:{
    ...mapMutations(['morePopup']),
    morePopupClose() {
      this.morePopup(false)
    }
  }
}
</script>
<style lang="scss" scoped>
  .slide-up-enter-active,
  .slide-up-leave-active {
    transform: translateY(0);
    transition: all 0.5s ease;
  }

  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateY(100vh);
  }

  .slide-left-enter-active,
  .slide-left-leave-active {
    transform: translateX(0);
    transition: all 0.5s ease;
  }

  .slide-left-enter-from,
  .slide-left-leave-to {
    transform: translateX(100vw);
  }
</style>
<style lang="scss">
html, address, 
blockquote, 
body, dd, div, 
dl, dt, fieldset, form, 
frame, frameset, 
h1, h2, h3, h4, 
h5, h6, noframes, 
ol, p, ul,center, 
dir, hr, menu, pre{ display: block} 

li { display: list-item} 

head { display: none} 
table { display: table } 

tr { display: table-row} 
thead { display: table-header-group} 
tbody { display: table-row-group} 
tfoot { display: table-footer-group} 
col { display: table-column} 
colgroup { display: table-column-group} 
td, th { display: table-cell; } 

caption{ display: table-caption} 
th { font-weight: bolder; text-align: center} 

caption{ text-align: center} 
body { margin: 0px;} 

h1{ font-size: 2em; margin: 0} 
h2{ font-size:1.5em; margin: 0} 
h3{ font-size: 1.17em; margin: 0} 
h4, p, 
blockquote, ul, 
fieldset, form, 
ol, dl, dir, 
menu { margin:0} 

h5{ font-size: .83em; margin: 0} 
h6{ font-size: .75em; margin: 0} 
h1, h2, h3, h4, 
h5, h6, b, 
strong { font-weight: bolder} 

blockquote { margin-left: 40px; margin-right: 40px} 
i, cite, em, 
var, address { font-style: italic} 

pre, tt, code, kbd, samp { font-family: monospace} 
pre{ white-space: pre} 
button, textarea, input, object, select { display:inline-block; } 


big { font-size: 1.17em} 
small, sub, sup { font-size: .83em} 
sub{ vertical-align:sub} 
sup { vertical-align: super} 
table { border-spacing: 2px; } 
thead, tbody, 
tfoot { vertical-align: middle} 
td, th { vertical-align: inherit } 
s, strike, del { text-decoration: line-through} 
hr {border: 1px inset} 

ol, ul, dir, menu, dd { margin-left: 40px} 
ol {list-style-type: decimal} 

ol ul, ul ol, ul ul, ol ol { margin-top: 0;margin-bottom: 0} 
u, ins { text-decoration: underline} 
br:before {content: "A"} 
:before, :after { white-space: pre-line } 
/* <br/>为何能实现换行？浏览器得到html的br标签，只会解析成一个dom节点而已，
而“换行”这一功能是通过这里实现的？？？？？ */

center{text-align: center} 
abbr, acronym { font-variant: small-caps; letter-spacing: 0.1em} 
:link, :visited { text-decoration: underline} 
:focus {outline: thindottedinvert} 

BDO[DIR="ltr"] { direction: ltr; unicode-bidi: bidi-override} 
BDO[DIR="rtl"] { direction: rtl; unicode-bidi: bidi-override} 

*[DIR="ltr"] { direction: ltr; unicode-bidi: embed} 
*[DIR="rtl"] { direction:rtl; unicode-bidi: embed} 

ul, li, ol, dl, dt, dd{
  list-style-type:none;
  margin: 0;
  padding: 0;
}

@media print{ 
  h1{ page-break-before:always} 
  h1, h2, h3, 
  h4, h5, h6{ page-break-after: avoid} 
  ul, ol, dl { page-break-before: avoid}
}
img {
  display: block;
}
#app, .main-box {
  font-family: "Microsoft YaHei", 微软雅黑, Avenir, Helvetica, Arial, sans-serif;
  position: relative;
}
.van-nav-bar .van-icon{
  color: #383838 !important;
}
.van-nav-bar__text {
  color: #383838 !important;
}
</style>

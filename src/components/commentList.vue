<template>
  <div class="comment-list">
    <div class="head-portrait">
      <img src="../../public/img/head-portrait.jpg" alt="" />
    </div>
    <div class="content-box">
      <div class="user-box">
        <dl class="user-info">
          <dt>荧光</dt>
          <dd>1小时前</dd>
        </dl>
        <span class="operation">
          <svg class="icon-praise" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1774"><path d="M889.6 396.8 608 396.8C633.6 262.4 684.8 96 576 44.8 460.8-6.4 454.4 64 441.6 179.2c-12.8 121.6-192 249.6-192 249.6l0 563.2 608 0c83.2-38.4 134.4-377.6 160-499.2C1043.2 371.2 889.6 396.8 889.6 396.8zM0 428.8l179.2 0 0 569.6-179.2 0 0-569.6Z" p-id="1775"></path></svg>
        </span>
      </div>
      <p class="content">内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!内容呀!!!!</p>
      <div class="eply-box">
        <ul>
          <li>
            <router-link to="/">南方的一世姑娘：</router-link>前后脚啊
          </li>
          <li>
            <router-link to="/">你好六月的风：</router-link>哈哈,加1,像我们这一类的,你是朋友应该很少把?
          </li>
        </ul>
        <router-link class="more-but" to="/">查看5条回复></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment-list',
  data() {
    return {
    }
  },
  emits: ['refreshData', 'switchNav'],
  // 事件
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.comment-list {
  display: flex;
  box-sizing: border-box;
  padding: 2vw 3vw;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  .head-portrait {
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    border: 1px solid #f3f3f3;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    > img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
      min-height: 100%;
    }
  }
  .content-box {
    margin-left: 2vw;
    width: calc(100% - 10vw - 2vw);
    flex-shrink: 0;
    border-bottom: 1px solid #e9e9e9;
    box-sizing: border-box;
    .user-box{
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3vw;
      .user-info{
        dt{
          font-size: 3.4vw;
          color: #1a1a1a;
          margin-bottom: 1vw;
        }
        dd{
          font-size: 3vw;
          color: #b0b0b0;
        }
      }
      .operation {
        width: 3.5vw;
        height: 3.5vw;
        position: relative;
        svg.icon-praise {
          color: #dddddd;
          width: 100%;
          height: 100%;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .content {
      width: 100%;
      font-size: 3.4vw;
      color: #292929;
      margin: 0 0 3vw 0;
      word-break:break-all;
    }
    .eply-box {
      width: 100%;
      box-sizing: border-box;
      background-color: #f9f9fb;
      padding: 2vw;
      margin-bottom: 3vw;
      > ul {
        margin-bottom: 2vw;
        li {
          font-size: 3vw;
          color: #292929;
          box-sizing: border-box;
          line-height: 5vw;
          a {
            color: #559bd9;
            text-decoration: none;
          }
        }
      }
      > .more-but{
        font-size: 3vw;
        color: #559bd9;
        display: block;
        text-decoration: none;
      }
    }
  }
}
</style>
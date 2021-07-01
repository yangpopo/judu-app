<template>
  <div class="set-up">
    <van-nav-bar title="设置" left-arrow @click-left="returnLink" />
    <div class="separate-link"></div>
    <van-cell-group>
      <van-cell title="账号安全" is-link @click="accountSecurity" />
      <van-cell title="修改资料" is-link @click="modifyData" />
      <van-cell title="日记提醒" value="21:00" is-link />
      <van-cell title="每日推送">
        <template #right-icon>
          <van-switch v-model="checked" size="1.5em" />
        </template>
      </van-cell>
      <van-cell title="缓存管理" is-link />
      <van-cell title="插件设置" is-link @click="pluggableUnit" />
    </van-cell-group>
    <div class="separate-link"></div>
    <van-cell-group>
      <van-cell title="关于我们" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { NavBar, Cell, CellGroup, Switch  } from 'vant';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'setUp',
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Switch.name]: Switch,
  },
  setup(props) {

  },
  data() {
    return {
      checked: false,
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
    ...mapMutations(['logonPopup']),
    returnLink() {
      this.$router.go(-1);
    },
    // 账号安全
    accountSecurity() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 修改资料
    modifyData() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    },
    // 插件管理
    pluggableUnit() {
      if (this.userInfo == null) {
        this.logonPopup(true);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.set-up {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f3f3f3;
  .separate-link {
    height: 3vw;
  }
}
</style>

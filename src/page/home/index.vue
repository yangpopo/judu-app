<template>
  <div class="index">
    <div class="main">
      <keep-alive>
        <component :is="currentTabComponent" ref="currentTabComponent"></component>
      </keep-alive>
    </div>
    <home-nav class="home-nav" @refreshData="refreshData" @switchNav="switchNav"></home-nav>
  </div>
</template>

<script>
import homeNav from "@/components/homeNav";
import home from "@/page/home/components/home.vue";
import search from "@/page/home/components/search.vue";
import publicRegion from "@/page/home/components/publicRegion.vue";
import my from "@/page/home/components/my.vue";

export default {
  name: 'index',
  components: {
    homeNav,
    home,
    search,
    publicRegion,
    my
  },
  data() {
    return {
      currentTabComponent: "home"
    }
  },
  methods: {
    // 刷新
    refreshData() {
      if (this.currentTabComponent == "home") {
        this.$refs.currentTabComponent.updateData(this.$refs.currentTabComponent.swiperIndex);
      } else if (this.currentTabComponent == "search") {
        this.$refs.currentTabComponent.updateData();
      } else if (this.currentTabComponent == "publicRegion") {
        this.$refs.currentTabComponent.updateData();
      }
    },
    // 切换
    switchNav(val) {
      if (val.name == "home") {
        this.currentTabComponent = "home";
      } else if (val.name == "search") {
        this.currentTabComponent = "search";
      } else if (val.name == "public") {
        this.currentTabComponent = "publicRegion";
      } else if (val.name == "my") {
        this.currentTabComponent = "my";
      }
      console.log("切换", val.name);
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .main {
    width: 100vw;
    height: calc(100vh - 15vw);
  }
  .home-nav{
    width: 100vw;
    height: 15vw;
  }
}

</style>
